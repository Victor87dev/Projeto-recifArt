import Navbar from '../../components/Navbar/Navbar';
import Footer from "../../components/Footer/Footer";
import './Materiais.css';
import { useEffect, useState, useRef } from "react";
import { MATERIAIS } from "../../static/materiais";

import { IoIosArrowForward, IoIosArrowBack } from 'react-icons/io';

const Materiais = () => {

    const [materiais, setMaterias] = useState([]);
    const carousel = useRef(null);


    useEffect(() => {
        setMaterias(MATERIAIS)
    }, [])



    const moverParaEsquerda = (e) => {
        e.preventDefault();
        carousel.current.scrollLeft -= carousel.current.offsetWidth;

    }

    const moverParaDireita = (e) => {
        e.preventDefault();
        console.log(carousel.current.offsetWidth)
        carousel.current.scrollLeft += carousel.current.offsetWidth;
    }

    return (
        <>
            <div className='materiais'>
                <header className='header-materiais'>
                    <Navbar />
                    <h1>Materiais</h1>
                </header>
                <main>
                    <p className="materiais-detalhes">Ao escolher esses materiais, você não apenas cria, mas se torna um agente de mudança. Sua arte não é apenas uma manifestação visual, mas um eco consciente, uma contribuição tangível para um mundo mais sustentável e esteticamente rico</p>
                    <div className="container">
                        <div className="carousel" ref={carousel}>

                            {materiais.map((material, index) => {
                                const { image, nome, quantidade, descricao } = material;
                                return (

                                    <div className="item" key={index}>
                                        <div className="image">
                                            <img src={image} alt={nome} />
                                        </div>
                                        <div className="info">
                                            <span className="nome">{nome}</span>
                                            <span className="quantidade">{quantidade}</span>
                                            <div className="descricao-info">
                                                <span className="descricao-material">{descricao}</span>
                                            </div>
                                        </div>

                                    </div>
                                )
                            })}
                        </div>
                        <div className="buttons-carousel">
                            <button className="buttons-carousel-botao" onClick={moverParaEsquerda}><IoIosArrowBack className="arrow-icon" /></button>
                            <button className="buttons-carousel-botao" onClick={moverParaDireita}><IoIosArrowForward className="arrow-icon" /></button>
                        </div>
                    </div>
                </main>
                <Footer />
            </div>
        </>
    )

}

export default Materiais;