import React from 'react';
import Style from './Home.module.css';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className={Style.container}>

            <div className={Style.logo}>
                <h1>mastermind</h1>
            </div>

            <div className={Style.buttons}>

                <Link to="/play">
                    <button>play a game</button>
                </Link>

                <Link to="/rules">
                    <button>game rules</button>
                </Link>

            </div>

            <div >
                <span className={Style.copyright}>©2020, Carlos Aracena</span>
                <a href="https://github.com/thefather20014" target="_blank" rel="noopener noreferrer" style={ { textDecoration: 'none' } }>
                <span className={Style.code}><i className="fab fa-github"></i> Source Code</span>
                </a>
            </div>

        </div>
    )
}

export default Home
