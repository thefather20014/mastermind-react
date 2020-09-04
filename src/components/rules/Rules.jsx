import React from 'react';
import Style from './Rules.module.css';
import { Link } from 'react-router-dom';

const Rules = () => {
    return (
        <div>
            <section className={Style.section}>

                <h1>Intrucciones completas</h1>
                <p>El juego consiste en <strong>encontrar la combinación de fichas de colores oculta</strong>. Comenzando por la parte superior, cada fila de huecos determina un turno de la partida. En cada turno debemos seleccionar fichas de colores en todos los huecos y tocar o hacer clic en el botón "check" de la parte derecha para descubrir los aciertos.</p>

                <p>Si hemos colocado una ficha del color correcto en la posición adecuada, nos aparecerá un punto negro. Si hemos acertado el color de la ficha pero la posición no es correcta, aparecerá un punto blanco. Y si por el contrario no existe ninguna ficha de ese color en el juego, el punto será de color rojo. Los colores de los puntos nos indican la cantidad de piezas bien o mal colocadas pero no nos indican a que ficha se refieren. Es simplemente un contador global de las fichas bien colocadas, las fichas mal situadas y las fichas que no aparecen en la combinación.</p>

                <p>Sigue las pistas de cada jugada para planear la combinación de colores del siguiente turno. Si acertamos la combinación, los cuatro puntos aparecerán de color negro y se mostrará la combinación oculta en la parte inferior.</p>

                <div className={Style.bolitas}>
                    <div className={Style.innerBolitas}>
                        <div className={Style.minus_circleBlack}></div><span>: Adivinaste la posición y el color</span>
                    </div>
                    <div className={Style.innerBolitas}>
                        <div className={Style.minus_circleRed}></div><span>: No adivinaste la posición ni el color</span>
                    </div>
                    <div className={Style.innerBolitas}>
                        <div className={Style.minus_circle}></div><span>: Adivinaste solamente el color</span>
                    </div>
                </div>


                <div>
                    <Link to="/">
                        <button> <i className="fas fa-arrow-left"></i> Go Back</button>
                    </Link>
                    <Link to="/play" style={ { marginLeft: '10px' } }>
                        <button> <i className="fas fa-gamepad"></i> Play a Game</button>
                    </Link>
                </div>

            </section>
        </div>
    )
}

export default Rules
