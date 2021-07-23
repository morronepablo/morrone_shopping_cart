import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { Loading } from '../../components/loading/loading'
import { firebase } from '../../firebase/firebase'
import { CartContext } from '../../context/cartContext'
import './checkOut.css'

function Field({
    name,
    inputLabel,
    nameField,
    style,
    type,
    id,
    placeholder,
    valueInput,
    onChange,
  }) {
    return (
      <>
        <div className="col-sm-6">
          <label
            htmlFor={inputLabel}
            name={name}
            className="form-label"
            style={style}
          >
            {nameField}
          </label>
          <input
            type={type}
            value={valueInput}
            className="form-control"
            id={id}
            placeholder={placeholder}
            required
            onChange={onChange}
          ></input>
        </div>
      </>
    );
  }

export const CheckOut = () => {
  const {products, clear, totalCart} = useContext(CartContext)
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [emailConfirm, setEmailConfirm] = useState("");
  const [orderId, setOrderId] = useState(null);
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(true)

  const onNameChange = (event) => {
      setName(event.target.value);
  };
  const onPhoneChange = (event) => {
      setPhone(event.target.value);
  };
  const onEmailChange = (event) => {
      setEmail(event.target.value);
  };
  const onEmailConfirmChange = (event) => {
      setEmailConfirm(event.target.value);
  };

  async function createOrder() {
    setSent(true);
    setLoading(false)
    // Info de usuario
    const userInfo = { name, phone, email };
    // Items
    const items = products.map((p) => ({
      id: p.item.id,
      producto: p.item.title,
      precioUnitario: (p.item.price - Math.floor(p.item.price * p.item.discount) / 100),
      cantidadCompra: p.quantity,
      subtotal: (p.item.price - Math.floor(p.item.price * p.item.discount) / 100) * p.quantity,
    }));  
    const db = firebase.firestore()
    const orders = db.collection("orders");
    const newOrder = {
      userInfo,
      items,
      date: firebase.firestore.Timestamp.fromDate(new Date()),
      total: totalCart,
    };

    try {
      const { id } = await orders.add(newOrder);
      setOrderId(id);
      const db = firebase.firestore()
      setLoading(false)
      try {
        const data = await db.collection('items').get()
        const arrayData = data.docs.map(doc => ({id: doc.id, ...doc.data()}))
        const stockUpdate = await db.collection('items')
        let acumuladorStock = 0
        for (let i=0 ; i< products.length; i++) {
          acumuladorStock = acumuladorStock + products[i].item.stock - products[i].quantity
          stockUpdate.doc(products[i].item.id)
          .update({
            stock: acumuladorStock
          })
          acumuladorStock = 0
        }
        setLoading(false)
      } catch (error) {
        console.log(error);
      }
      clear()
      setLoading(false)
    } catch (err) {
      console.log("Ha ocurrido un error creando la orden de compra");
      console.log(err);
    }
  }
  
  if (orderId) {
    return (
      <>
        {loading && <Loading />}
        <div className="checkOut">
          <div className="title">Su Compra</div>
          <div className="data">
            <div className="data__header">
              <h2 className="data__header-title">¡Gracias por elegirnos!</h2>
              <h4 className="data__header-title2">La compra se ha realizado exitosamente.</h4>
              <br />
              <h3><strong>El ID de tu compra es {orderId}</strong></h3>
              <br />
              
          <p className="data__header-logo">Morrone Shop</p>
          <br />
          <Link className="data__header-button" to={`/`}>
            <strong>Ir a comprar</strong>
          </Link>
            </div>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      { loading && 
      <div className="formulario">
        <div className="title">Formulario Compra</div>
        <div className="dato">
          <div className="dato__header">
            <h4 className="dato__header-title">
              Completa el formulario con tus datos para confirmar la compra.
            </h4>
          </div>
          <div className="dato__row">
            <form>
              <div className="dato__row-datos">
                <Field
                  inputLabel="inputName"
                  name="name"
                  nameField="Nombre y Apellido"
                  valueInput={name}
                  style={{ paddingTop: "5px", paddingRight: "10px", fontWeight: '600' }}
                  type="text"
                  id="inputName"
                  placeholder="Nombre y Apellido"
                  onChange={onNameChange}
                />
                <Field
                  inputLabel="inputPhone"
                  name="phone"
                  nameField="Teléfono"
                  valueInput={phone}
                  style={{ paddingTop: "10px", paddingRight: "10px", fontWeight: '600' }}
                  type="text"
                  id="inputPhone"
                  placeholder="1133445566"
                  onChange={onPhoneChange}
                />
                <Field
                  inputLabel="inputEmail"
                  name="email"
                  nameField="Email"
                  valueInput={email}
                  style={{ paddingTop: "10px", paddingRight: "10px", fontWeight: '600' }}
                  type="email"
                  id="inputEmail"
                  placeholder="mail@ejemplo.com"
                  onChange={onEmailChange}
                />
                <Field
                  inputLabel="inputConfirmEmail"
                  name="email"
                  nameField="Confirmar Email"
                  valueInput={emailConfirm}
                  style={{ paddingTop: "10px", paddingRight: "10px", fontWeight: '600' }}
                  type="email"
                  id="inputConfirmEmail"
                  placeholder="mail@ejemplo.com"
                  onChange={onEmailConfirmChange}
                />
              </div>
                <br />
                <button
                  className="btn btn-outline-success btn-lg btn-block mt-5"
                  type="submit"
                  disabled={
                    !name || !phone || !email || emailConfirm !== email || sent
                  }
                  onClick={createOrder}
                  style={{ backgroundColor: '#ff5400', color: 'white', height: '30px', borderRadius: '5px', cursor: 'pointer'}}
                  >
                  <strong>Confirmar</strong>
                </button>
            </form>
          </div>
        </div>
      </div>
      }
    </>
  );
}
