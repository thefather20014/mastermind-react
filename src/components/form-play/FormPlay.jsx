import React, { useState } from 'react';
import Style from './FormPlay.module.css';
import PropTypes from 'prop-types';

const FormPlay = ( { lv, setEasyModal, handleShow } ) => {

    const [state, setState] = useState(true);
    const [state2, setState2] = useState(false);
    const [state3, setState3] = useState(false);
    const [state4, setState4] = useState(false);
    const [state5, setState5] = useState(false);

    const [blue, setBlue] = useState('');
    const [pink, setPink] = useState('');
    const [red, setRed] = useState('');
    const [green, setGreen] = useState('');
    const [lightblue, setLightBlue] = useState('');
    const [orange, setOrange] = useState('');

    const [blue2, setBlue2] = useState('');
    const [pink2, setPink2] = useState('');
    const [red2, setRed2] = useState('');
    const [green2, setGreen2] = useState('');
    const [lightblue2, setLightBlue2] = useState('');
    const [orange2, setOrange2] = useState('');

    const [blue3, setBlue3] = useState('');
    const [pink3, setPink3] = useState('');
    const [red3, setRed3] = useState('');
    const [green3, setGreen3] = useState('');
    const [lightblue3, setLightBlue3] = useState('');
    const [orange3, setOrange3] = useState('');

    const [blue4, setBlue4] = useState('');
    const [pink4, setPink4] = useState('');
    const [red4, setRed4] = useState('');
    const [green4, setGreen4] = useState('');
    const [lightblue4, setLightBlue4] = useState('');
    const [orange4, setOrange4] = useState('');
    console.log(lv);

    const Reset = () => {
        setState(true);
        setState2(false);
        setState3(false);
        setState4(false);
    
        setBlue('');
        setPink('');
        setRed('');
        setGreen('');
        setLightBlue('');
        setOrange('');
    
        setBlue2('');
        setPink2('');
        setRed2('');
        setGreen2('');
        setLightBlue2('');
        setOrange2('');
    
        setBlue3('');
        setPink3('');
        setRed3('');
        setGreen3('');
        setLightBlue3('');
        setOrange3('');
    
        setBlue4('');
        setPink4('');
        setRed4('');
        setGreen4('');
        setLightBlue4('');
        setOrange4(''); 
    }

    const conditions = {
        display: state2 ? 'flex' : 'none',
        position: state2 ? 'absolute' : 'none',
    }

    const conditions2 = {
        display: state3 ? 'flex' : 'none',
        position: state3 ? 'absolute' : 'none',
    }

    const conditions3 = {
        display: state4 ? 'flex' : 'none',
        position: state4 ? 'absolute' : 'none',
    }

    const conditions4 = {
        display: state5 ? 'flex' : 'none',
        position: state5 ? 'absolute' : 'none',
    }

    return (
        <>

            <div className={Style.container}>
                <button className={ Style.undoBtn } onClick={Reset} ><i className="fas fa-angle-double-left"></i></button>
                <div>
                    <div className={blue === 'blue' ? Style.circleBlue : pink === 'pink' ? Style.circlePink : red === 'red' ? Style.circleRed : green === 'green' ? Style.circleGreen : lightblue === 'lightblue' ? Style.circleLightBlue : orange === 'orange' ? Style.circleOrange : Style.circle} onClick={() => {
                       if( state ) { setState2(!state2); setState3(false); setState4(false); setState5(false); } 
                       else { setState2(false); setState3(false); setState4(false); setState5(false); }
                    }}></div>
                    <div style={conditions} className={Style.card}>
                        <div className={Style.red} onClick={() => {
                            setRed('red'); setBlue(''); setPink(''); setGreen(''); setLightBlue(''); setOrange(''); setState2(!state2);
                        }}>
                        </div>
                        <div className={Style.pink} onClick={() => {
                            setRed(''); setBlue(''); setPink('pink'); setGreen(''); setLightBlue(''); setOrange(''); setState2(!state2);
                        }}>
                        </div>
                        <div className={Style.blue} onClick={() => {
                            setBlue('blue'); setRed(''); setPink(''); setGreen(''); setLightBlue(''); setOrange(''); setState2(!state2);
                        }}>
                        </div>
                        <div className={Style.green} onClick={() => {
                            setRed(''); setBlue(''); setPink(''); setGreen('green'); setLightBlue(''); setOrange(''); setState2(!state2);
                        }}>
                        </div>
                        <div className={Style.lightblue} onClick={() => {
                            setRed(''); setBlue(''); setPink(''); setGreen(''); setLightBlue('lightblue'); setOrange(''); setState2(!state2);
                        }}>
                        </div>
                        <div className={Style.orange} onClick={() => {
                            setOrange('orange'); setRed(''); setBlue(''); setPink(''); setGreen(''); setLightBlue(''); setState2(!state2);
                        }}>
                        </div>
                    </div>
                </div>

                <div>
                    <div className={blue2 === 'blue' ? Style.circleBlue : pink2 === 'pink' ? Style.circlePink : red2 === 'red' ? Style.circleRed : green2 === 'green' ? Style.circleGreen : lightblue2 === 'lightblue' ? Style.circleLightBlue : orange2 === 'orange' ? Style.circleOrange : Style.circle} onClick={() => {
                        if( state ) { setState2(false); setState3(!state3); setState4(false); setState5(false); } 
                        else { setState2(false); setState3(false); setState4(false); setState5(false); }
                    }}></div>
                    <div style={conditions2} className={Style.card}>
                        <div className={Style.red} onClick={() => {
                            setRed2('red'); setBlue2(''); setPink2(''); setGreen2(''); setLightBlue2(''); setOrange2(''); setState3(!state3);
                        }}>
                        </div>
                        <div className={Style.pink} onClick={() => {
                            setRed2(''); setBlue2(''); setPink2('pink'); setGreen2(''); setLightBlue2(''); setOrange2(''); setState3(!state3);
                        }}>
                        </div>
                        <div className={Style.blue} onClick={() => {
                            setBlue2('blue'); setRed2(''); setPink2(''); setGreen2(''); setLightBlue2(''); setOrange2(''); setState3(!state3);
                        }}>
                        </div>
                        <div className={Style.green} onClick={() => {
                            setRed2(''); setBlue2(''); setPink2(''); setGreen2('green'); setLightBlue2(''); setOrange2(''); setState3(!state3);
                        }}>
                        </div>
                        <div className={Style.lightblue} onClick={() => {
                            setRed2(''); setBlue2(''); setPink2(''); setGreen2(''); setLightBlue2('lightblue'); setOrange2(''); setState3(!state3);
                        }}>
                        </div>
                        <div className={Style.orange} onClick={() => {
                            setOrange2('orange'); setRed2(''); setBlue2(''); setPink2(''); setGreen2(''); setLightBlue2(''); setState3(!state3);
                        }}>
                        </div>
                    </div>
                </div>

                <div>
                    <div className={blue3 === 'blue' ? Style.circleBlue : pink3 === 'pink' ? Style.circlePink : red3 === 'red' ? Style.circleRed : green3 === 'green' ? Style.circleGreen : lightblue3 === 'lightblue' ? Style.circleLightBlue : orange3 === 'orange' ? Style.circleOrange : Style.circle} onClick={() => {
                       if( state ) { setState2(false); setState3(false); setState4(!state4); setState5(false); } 
                       else { setState2(false); setState3(false); setState4(false); setState5(false); }
                    }}></div>
                    <div style={conditions3} className={Style.card}>
                        <div className={Style.red} onClick={() => {
                            setRed3('red'); setBlue3(''); setPink3(''); setGreen3(''); setLightBlue3(''); setOrange3(''); setState4(!state4);
                        }}>
                        </div>
                        <div className={Style.pink} onClick={() => {
                            setRed3(''); setBlue3(''); setPink3('pink'); setGreen3(''); setLightBlue3(''); setOrange3(''); setState4(!state4);
                        }}>
                        </div>
                        <div className={Style.blue} onClick={() => {
                            setBlue3('blue'); setRed3(''); setPink3(''); setGreen3(''); setLightBlue3(''); setOrange3(''); setState4(!state4);
                        }}>
                        </div>
                        <div className={Style.green} onClick={() => {
                            setRed3(''); setBlue3(''); setPink3(''); setGreen3('green'); setLightBlue3(''); setOrange3(''); setState4(!state4);
                        }}>
                        </div>
                        <div className={Style.lightblue} onClick={() => {
                            setRed3(''); setBlue3(''); setPink3(''); setGreen3(''); setLightBlue3('lightblue'); setOrange3(''); setState4(!state4);
                        }}>
                        </div>
                        <div className={Style.orange} onClick={() => {
                            setOrange3('orange'); setRed3(''); setBlue3(''); setPink3(''); setGreen3(''); setLightBlue3(''); setState4(!state4);
                        }}>
                        </div>
                    </div>
                </div>

                <div>
                    <div className={blue4 === 'blue' ? Style.circleBlue : pink4 === 'pink' ? Style.circlePink : red4 === 'red' ? Style.circleRed : green4 === 'green' ? Style.circleGreen : lightblue4 === 'lightblue' ? Style.circleLightBlue : orange4 === 'orange' ? Style.circleOrange : Style.circle} onClick={() => {
                        if( state ) { setState2(false); setState3(false); setState4(false); setState5(!state5); } 
                        else { setState2(false); setState3(false); setState4(false); setState5(false); }
                    }}></div>
                    <div style={conditions4} className={Style.card}>
                        <div className={Style.red} onClick={() => {
                            setRed4('red'); setBlue4(''); setPink4(''); setGreen4(''); setLightBlue4(''); setOrange4(''); setState5(!state5);
                        }}>
                        </div>
                        <div className={Style.pink} onClick={() => {
                            setRed4(''); setBlue4(''); setPink4('pink'); setGreen4(''); setLightBlue4(''); setOrange4(''); setState5(!state5);
                        }}>
                        </div>
                        <div className={Style.blue} onClick={() => {
                            setBlue4('blue'); setRed4(''); setPink4(''); setGreen4(''); setLightBlue4(''); setOrange4(''); setState5(!state5);
                        }}>
                        </div>
                        <div className={Style.green} onClick={() => {
                            setRed4(''); setBlue4(''); setPink4(''); setGreen4('green'); setLightBlue4(''); setOrange4(''); setState5(!state5);
                        }}>
                        </div>
                        <div className={Style.lightblue} onClick={() => {
                            setRed4(''); setBlue4(''); setPink4(''); setGreen4(''); setLightBlue4('lightblue'); setOrange4(''); setState5(!state5);
                        }}>
                        </div>
                        <div className={Style.orange} onClick={() => {
                            setOrange4('orange'); setRed4(''); setBlue4(''); setPink4(''); setGreen4(''); setLightBlue4(''); setState5(!state5);
                        }}>
                        </div>
                    </div>
                </div>

                <div className={Style.separator}></div>

                {
                    state ? <button onClick={() => {setState(!state); setEasyModal([ lv === 'Easy'? red : lv === 'Intermediate' ? orange : lv === 'Hard' ? orange: null, 
                    lv === 'Easy'? red2 : lv === 'Intermediate' ? orange2 : lv === 'Hard' ? pink2: null, lv === 'Easy'? red3 : lv === 'Intermediate' ? green3 : lv === 'Hard' ? green3: null, lv === 'Easy'? red4 : lv === 'Intermediate' ? green4 : lv === 'Hard' ? lightblue4: null ])}} className={ 
                        (blue !== '' || pink !== '' || green !== '' || lightblue !== '' || red !== '' || orange !== '') &&
                        (blue2 !== '' || pink2 !== '' || green2 !== '' || lightblue2 !== '' || red2 !== '' || orange2 !== '') &&
                        (blue3 !== '' || pink3 !== '' || green3 !== '' || lightblue3 !== '' || red3 !== '' || orange3 !== '') &&
                        (blue4 !== '' || pink4 !== '' || green4 !== '' || lightblue4 !== '' || red4 !== '' || orange4 !== '') ? Style.checkBtn: Style.checkBtnDisabled } 
                        
                        disabled={
                        (blue !== '' || pink !== '' || green !== '' || lightblue !== '' || red !== '' || orange !== '') &&
                        (blue2 !== '' || pink2 !== '' || green2 !== '' || lightblue2 !== '' || red2 !== '' || orange2 !== '') &&
                        (blue3 !== '' || pink3 !== '' || green3 !== '' || lightblue3 !== '' || red3 !== '' || orange3 !== '') &&
                        (blue4 !== '' || pink4 !== '' || green4 !== '' || lightblue4 !== '' || red4 !== '' || orange4 !== '') ? false : true

                    }>Check</button> :
                        <div>

                            <div className={ lv === 'Easy' ? Style.container2 : Style.containerGone }>
                                <div className={red === 'red' ? Style.minus_circleBlack : Style.minus_circleRed}></div>
                                <div className={red2 === 'red' ? Style.minus_circleBlack : Style.minus_circleRed}></div>
                                <div className={red3 === 'red' ? Style.minus_circleBlack : Style.minus_circleRed}></div>
                                <div className={red4 === 'red' ? Style.minus_circleBlack : Style.minus_circleRed}></div>
                            </div>

                            <div className={lv === 'Intermediate' ? Style.container2 : Style.containerGone }>
                                <div className={orange === 'orange' ? Style.minus_circleBlack : pink === 'pink' || green === 'green' || lightblue === 'lightblue' ? Style.minus_circle : Style.minus_circleRed}></div>
                                <div className={orange2 === 'orange' ? Style.minus_circleBlack : pink2 === 'pink' || green2 === 'green' || lightblue2 === 'lightblue' ? Style.minus_circle : Style.minus_circleRed}></div>
                                <div className={green3 === 'green' ? Style.minus_circleBlack : pink3 === 'pink' || orange3 === 'orange' || lightblue3 === 'lightblue' ? Style.minus_circle : Style.minus_circleRed}></div>
                                <div className={green3 === 'green' ? Style.minus_circleBlack : orange4 === 'orange' || lightblue4 === 'lightblue' || pink4 === 'pink' ? Style.minus_circle : Style.minus_circleRed}></div>
                            </div>

                            <div className={ lv === 'Hard' ? Style.container2 : Style.containerGone }>
                                <div className={orange === 'orange' ? Style.minus_circleBlack : pink === 'pink' || green === 'green' || lightblue === 'lightblue' ? Style.minus_circle : Style.minus_circleRed}></div>
                                <div className={pink2 === 'pink' ? Style.minus_circleBlack : orange2 === 'orange' || green2 === 'green' || lightblue2 === 'lightblue' ? Style.minus_circle : Style.minus_circleRed}></div>
                                <div className={green3 === 'green' ? Style.minus_circleBlack : pink3 === 'pink' || orange3 === 'orange' || lightblue3 === 'lightblue' ? Style.minus_circle : Style.minus_circleRed}></div>
                                <div className={lightblue4 === 'lightblue' ? Style.minus_circleBlack : orange4 === 'orange' || green4 === 'green' || pink4 === 'pink' ? Style.minus_circle : Style.minus_circleRed}></div>
                            </div>

                        </div>

                }

            </div>

        </>
    )
}

FormPlay.propTypes = {
    setEasyModal: PropTypes.func.isRequired,
    easyModal: PropTypes.array.isRequired
}

export default FormPlay
