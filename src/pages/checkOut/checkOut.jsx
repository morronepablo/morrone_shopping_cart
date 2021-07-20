import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { Loading } from '../../components/loading/loading'
import { firebase } from '../../firebase/firebase'
import { CartContext } from '../../context/cartContext'

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
        <div className="container">
          <div className="py-5 text-center mt-5">
            <h2 className="mt-5">¡Gracias por elegirnos!</h2>
            <h4 className="my-5">La compra se ha realizado exitosamente.</h4>
            <strong>El ID de tu compra es {orderId}</strong>
            <p className="danger">Sport Store</p>
            <Link className="btn btn-outline-primary m-3" to={`/`}>
              <strong>Ir a comprar</strong>
            </Link>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      { loading && 
      <div className="container">
        <div className="text-center py-5 mt-5">
          <h4 className="mt-5">
            Completa el formulario con tus datos para confirmar la compra.
          </h4>
        </div>
        <div className="row">
          <div className="col-md-12">
            <form>
              <div className="row g-3">
                <Field
                  inputLabel="inputName"
                  name="name"
                  nameField="Nombre y Apellido"
                  valueInput={name}
                  style={{ paddingTop: "5px" }}
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
                  style={{ paddingTop: "10px" }}
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
                  style={{ paddingTop: "10px" }}
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
                  style={{ paddingTop: "10px" }}
                  type="email"
                  id="inputConfirmEmail"
                  placeholder="mail@ejemplo.com"
                  onChange={onEmailConfirmChange}
                />
              </div>
              <button
                className="btn btn-outline-success btn-lg btn-block mt-5"
                type="submit"
                disabled={
                  !name || !phone || !email || emailConfirm !== email || sent
                }
                onClick={createOrder}
                style={{ marginBottom: "30px" }}
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
