import React, { useState } from 'react';
import Style from './Play.module.css';
import { Link } from 'react-router-dom';
import FormPlay from '../form-play/FormPlay';
import { Modal, Button } from 'react-bootstrap';

const Play = () => {

    const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
    const [showAnwer, setShowAnwers] = useState(false);
    const [easyModal, setEasyModal] = useState([]);
    const [lv, setLv] = useState('Easy');
    console.log(easyModal);

    const [show, setShow] = useState(true);

    const handleClose = () => setShow(false);
    const ChangeLv = e => setLv(e.target.value);

    return (
        <>
            <section className={Style.section}>
                <div >
                    <Link to="/" style={{ textDecoration: 'none' }}>
                        <h1>mastermind</h1>
                    </Link>
                </div>
                <div >
                    <p className={Style.paragraph}>El juego consiste en encontrar la combinación de fichas de colores escogida por el ordenador. Selecciona los colores presionando los circulos y haz clic en el botón "Check" de la parte derecha para descubrir tus aciertos.
                   <Link to="/rules"><button href="" className={Style.enlace}>Intrucciones Completas <i className="fas fa-info"></i></button></Link>
                    </p>
                </div>
            </section>

            <Modal show={lv === 'Easy' && easyModal[0] === 'red' && easyModal[1] === 'red' && easyModal[2] === 'red' && easyModal[3] === 'red' ? show: 
            lv === 'Intermediate' && easyModal[0] === 'orange' && easyModal[1] === 'orange' && easyModal[2] === 'green' && easyModal[3] === 'green' ? show: 
            lv === 'Hard' && easyModal[0] === 'orange' && easyModal[1] === 'pink' && easyModal[2] === 'green' && easyModal[3] === 'lightblue' ? show: null} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Your Won!!😎</Modal.Title>
                </Modal.Header>
                <Modal.Body>{ lv === 'Easy' ? "You won on easy level, very good 😂. To play again, please refresh the page.": lv === 'Intermediate' ? "You won at the intermediate level, amazing👌. To play again, please refresh the page.": lv === 'Hard' ? "You won on hard level, you're a badass🔥🔥. To play again, please refresh the page.": null }</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>

                </Modal.Footer>
            </Modal>

            <section className={Style.section_b}>
                <div>
                    <Link to="/rules">
                        <button className={Style.section_b_btn}> <i className="fas fa-info"></i> </button>
                    </Link>
                    <Link to="/">
                        <button className={Style.section_b_btn}> <i className="fas fa-arrow-left"></i>  </button>
                    </Link>
                    <button className={Style.section_b_btn}><i className="fas fa-eye" onClick={() => setShowAnwers(!showAnwer)}></i></button>

                    <select onChange={ChangeLv} className={Style.levels}>
                        <option value="Easy">Easy</option>
                        <option value="Intermediate">Intermediate</option>
                        <option value="Hard">Hard</option>
                    </select>
                </div>

                <div className={Style.section_c}>
                    {numbers.map(n => <FormPlay key={n} lv={lv}
                        setEasyModal={setEasyModal} easyModal={easyModal} />)}

                    <div >
                        <h2 style={{ marginBottom: '5px', fontFamily: 'Sigmar One, cursive' }}>Answer: </h2>
                        <div className={lv === "Easy" ? Style.innerSection : Style.innerSectionDisabled}>
                            <div className={Style.answerCircleRed} style={{ display: showAnwer || !show ? 'block' : 'none' }}></div>
                            <div className={Style.answerCircleRed} style={{ display: showAnwer || !show ? 'block' : 'none' }}></div>
                            <div className={Style.answerCircleRed} style={{ display: showAnwer || !show ? 'block' : 'none' }}></div>
                            <div className={Style.answerCircleRed} style={{ display: showAnwer || !show ? 'block' : 'none' }}></div>
                        </div>

                        <div className={lv === "Intermediate" ? Style.innerSection : Style.innerSectionDisabled}>
                            <div className={Style.answerCircleOrange} style={{ display: showAnwer || !show ? 'block' : 'none' }}></div>
                            <div className={Style.answerCircleOrange} style={{ display: showAnwer || !show ? 'block' : 'none' }}></div>
                            <div className={Style.answerCircleGreen} style={{ display: showAnwer || !show ? 'block' : 'none' }}></div>
                            <div className={Style.answerCircleGreen} style={{ display: showAnwer || !show ? 'block' : 'none' }}></div>
                        </div>

                        <div className={lv === "Hard" ? Style.innerSection : Style.innerSectionDisabled}>
                            <div className={Style.answerCircleOrange} style={{ display: showAnwer || !show  ? 'block' : 'none' }}></div>
                            <div className={Style.answerCirclePink} style={{ display: showAnwer || !show ? 'block' : 'none' }}></div>
                            <div className={Style.answerCircleGreen} style={{ display: showAnwer || !show ? 'block' : 'none' }}></div>
                            <div className={Style.answerCircleLightBlue} style={{ display: showAnwer || !show ? 'block' : 'none' }}></div>
                        </div>

                    </div>

                    <div className={Style.footer}>
                        <span className={Style.copyright}>©2020, Carlos Aracena</span>
                        <a href="https://github.com/thefather20014/mastermind-react" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                            <span className={Style.code}><i className="fab fa-github"></i> Source Code</span>
                        </a>
                    </div>
                </div>

            </section>
        </>
    )
}

export default Play
