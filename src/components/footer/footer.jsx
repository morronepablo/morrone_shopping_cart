import React from 'react'
import './footer.css'

export const Footer = () => {
    return (
        <>

            <footer>
                <div className="main-content">
                    <div className="left box">
                        <h2>Sobre Nosotros</h2>
                        <div className="content">
                            <p>Estamos aqui para sacar a relucir tu GENIALIDAD como profecional y marca. Porque TODOS somos especiales.</p>
                            <p>Sin embargo, no sabemos de qué forma convencer a los demás de que somos unos genios en nuestro campo.</p>
                            <p>Este es mi trabajo y por eso estas aqui.</p>
                            <div className="social">
                                <a href="https://facebook.com/pablomartin.morrone"><span class="fa fa-facebook-f"></span></a>
                                <a href="http://twitter.com/"><span class="fa fa-twitter"></span></a>
                                <a href="https://instagram.com/"><span class="fa fa-instagram"></span></a>
                                <a href="https://youtube.com/"><span class="fa fa-youtube"></span></a>
                            </div>
                        </div>
                    </div>
                    <div className="center box">
                        <h2>Direccion</h2>
                        <div className="content">
                            <div className="place">
                                <span class="fa fa-map-marker"></span>
                                <span class="text">El Arreo 220, La Reja</span>
                            </div>
                            <div className="phone">
                                <span class="fa fa-phone"></span>
                                <span class="text">+54-911-38669097</span>
                            </div>
                            <div className="email">
                                <span class="fa fa-envelope"></span>
                                <span class="text">morronepablo@gmail.com</span>
                            </div>
                        </div>
                    </div>
                    <div className="right box">
                        <h2>Contacta con nosotros</h2>
                        <div className="content">
                            <form action="#">
                                <div className="email">
                                    <div className="text">Email *</div>
                                    <input type="email" required />
                                </div>
                                <div className="msg">
                                    <div className="text">Mensaje *</div>
                                    <textarea rows="2" cols="25" required></textarea>
                                </div>
                                <div className="btn2">
                                    <button type="submit" id="envioCorreo">Enviar</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="container-map">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3282.843800421494!2d-58.83752258502619!3d-34.63338736657504!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bc93fbdd82d7b1%3A0x6a5d8a92f152c39!2sEl%20Arreo%20250%2C%20La%20Reja%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses-419!2sar!4v1613067829897!5m2!1ses-419!2sar" width="100%" height="450" allowfullscreen="" aria-hidden="false" tabindex="0" frameborder="0"></iframe>
                </div>
                <div className="bottom">
                    <center>
                        <span className="credit">Creado por <a href="#">Morrone Pablo</a> | </span>
                        <span className="fa fa-copyright"></span><span> 2021 Todos los derechos reservados.</span>
                    </center>
                </div>
            </footer>
            

        </>
    )
}
