import React from 'react';
import { Link } from '../Link'

import './_header.scss';


export const SrkHeader = () => (
  <>
  <header className="header">
    <div className="">
        <div className="container">
            <div className="header__inner">
                <div>
                    <button>Våra sajter</button>
                    <button>På din ort</button>
                </div>

                <nav aria-label="Toppnavigation">
                    <ul className="header__nav">
                    <Link className="navitem" href="/">
                      Home
                    </Link>
                    <Link className="navitem" href="/about">
                      About
                    </Link>
                    </ul>
                </nav>
            </div>
        </div>
    </div>

    <div className="u-bg-white">
        <div className="container">
            <div className="header__inner">
                <span className="color:red">Logga</span>

                <nav aria-label="Huvudnavigation">
                    <ul className="header__nav">
                        <li><a href="#" aria-current="page">Stöd oss</a></li>
                        <li><a href="#">Engagera dig</a></li>
                        <li><a href="#">Få hjälp</a></li>
                        <li><a href="#">Vad vi gör</a></li>
                        <li><a href="#">Om oss</a></li>
                        <li>
                            <button className="btn btn--bare">
                                <svg aria-hidden="true" className="icon" viewBox="0 0 24 24">
                                    <use xlinkHref="/icons/svg-icons.svg#icon-menu"></use>
                                </svg>
                                <span className="visually-hidden">Meny</span>
                            </button>
                        </li>
                        <li>
                            <button className="btn btn--bare">
                                <svg aria-hidden="true" className="icon" viewBox="0 0 24 24">
                                    <use xlinkHref="/icons/svg-icons.svg#icon-search"></use>
                                </svg>
                                <span className="visually-hidden">Sök</span>
                            </button>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    </div>
</header>
</>
);
