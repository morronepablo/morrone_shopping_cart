import React, { useRef, useEffect } from 'react'
import img1 from '../../assets/img/1.jpg'
import img2 from '../../assets/img/2.jpg'
import img3 from '../../assets/img/3.jpg'
import img4 from '../../assets/img/4.jpg'
import {ReactComponent as FlechaIzquierda} from '../../assets/img/iconmonstr-angel-left-thin.svg'
import {ReactComponent as FlechaDerecha} from '../../assets/img/iconmonstr-angel-right-thin.svg'
import styled from 'styled-components'

export const SlideShow =() => {
    const slideshow = useRef(null)
    const intervaloSlideshow = useRef(null)

    const siguiente = () => {
        // Comprobamos que el slideshow tenga elementos
        if(slideshow.current.children.length > 0) {
            // Obtenemos el primer elemento del slideshow
            const primerElemento = slideshow.current.children[0]

            // Establecemos la transicion para el slideshow
            slideshow.current.style.transition = `300ms ease-out all`

            const tamañoSlide = slideshow.current.children[0].offsetWidth

            // Movemos el slideshow
            slideshow.current.style.transform = `translateX(-${tamañoSlide}px)`

            const transicion = () => {
                slideshow.current.style.transition = 'none'
                slideshow.current.style.transform = `translateX(0)`

                //Tomamos el primer elemento y lo mandamos al final.
                slideshow.current.appendChild(primerElemento)

                slideshow.current.removeEventListener('transitionend', transicion)
            }

            // Eventlistener para cuando termina la animacion.
            slideshow.current.addEventListener('transitionend', transicion)

        }
    }
    const anterior = () => {
        if(slideshow.current.children.length > 0){
			// Obtenemos el ultimo elemento del slideshow.
			const index = slideshow.current.children.length - 1;
			const ultimoElemento = slideshow.current.children[index];
			slideshow.current.insertBefore(ultimoElemento, slideshow.current.firstChild);
			
			slideshow.current.style.transition = 'none';
			const tamañoSlide = slideshow.current.children[0].offsetWidth;
			slideshow.current.style.transform = `translateX(-${tamañoSlide}px)`;
		
			setTimeout(() => {
                slideshow.current.style.transition = '300ms ease-out all';
				slideshow.current.style.transform = `translateX(0)`;
			}, 30);
		}
    }

    useEffect(() => {
        intervaloSlideshow.current = setInterval(() => {
            siguiente()
        }, 5000)

        // Eliminamos los intervalos
        slideshow.current.addEventListener('mouseenter', () => {
            clearInterval(intervaloSlideshow.current)
        })

        // Eliminamos los intervalos
        slideshow.current.addEventListener('mouseleave', () => {
            intervaloSlideshow.current = setInterval(() => {
                siguiente()
            }, 5000)
        })

    }, [])

    return (
        <ContenedorPrincipal>
            <ContenedorSlideshow ref={slideshow}>
                <Slide>
                    <a href="https://www.falconmasters.com">
                        <img src={img1} alt="" />
                    </a>
                    <TextoSlide>
                        <p>15% descuentos en productos Apple</p>
                    </TextoSlide>
                </Slide>
                <Slide>
                    <a href="https://www.falconmasters.com">
                        <img src={img2} alt="" />
                    </a>
                    <TextoSlide>
                        <p>Ofertas Todas las semanas</p>
                    </TextoSlide>
                </Slide>
                <Slide>
                    <a href="https://www.falconmasters.com">
                        <img src={img3} alt="" />
                    </a>
                    <TextoSlide>
                        <p>No dude en consultarnos por otros descuentos</p>
                    </TextoSlide>
                </Slide>
                <Slide>
                    <a href="https://www.falconmasters.com">
                        <img src={img4} alt="" />
                    </a>
                    <TextoSlide>
                        <p>El mejor precio y calidad en productos</p>
                    </TextoSlide>
                </Slide>
            </ContenedorSlideshow>
            <Controles>
                <Boton onClick={anterior}>
                    <FlechaIzquierda />
                </Boton>
                <Boton derecho onClick={siguiente}>
                    <FlechaDerecha />
                </Boton>
            </Controles>
        </ContenedorPrincipal>
    )
}

const ContenedorPrincipal = styled.div`
    position: relative;
`

const ContenedorSlideshow = styled.div`
    display: flex;
    flex-wrap: nowrap;
`

const Slide = styled.div`
    min-width: 100%;
    height: 20%;
    overflow: hidden;
    transition: .3s ease all;
    z-index: 10;
    /* max-width: 500px; */
    position: relative;

    img {
        width: 100%;
        height: 150px;
        vertical-align: top;
    }
`

const TextoSlide = styled.div`
    background: ${props => props.colorFondo ? props.colorFondo : 'rgba(0,0,0,.3)'};
    color: ${props => props.colorTexto ? props.colorTexto : '#fff'};
    font-size: 13px;
    width: 100%;
    padding: 1px 60px;
    text-align: center;
    position: absolute;
    bottom: 0;
`
const Controles = styled.div`
    position: absolute;
    top: 0;
    z-index: 20;
    width: 100%;
    height: 100%;
`
const Boton = styled.button`
    pointer-events: all;
    cursor: pointer;
    background: none;
    border: none;
    outline: none;
    width: 50px;
    height: 100%;
    text-align: center;
    position: absolute;
    transition: .3s ease all;
    /* &:hover {
        background: rgba(0,0,0,.2);
        path {
            fill: #fff;
        }
    } */

    path {
        filter: ${props => props.derecho ? 'drop-shadow(-1px 0px 0px #fff)' : 'drop-shadow(1px 0px 0px #fff)'};
    }

    ${props => props.derecho ? 'right: 0' : 'left: 0'}
`