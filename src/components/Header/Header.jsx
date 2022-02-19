import './Header.css';
import React from 'react';

export default ({black}) => {
    return (
        <header className={black ? 'black' : ''}>
            <div className='header--logo'>
                <a href="/">
                    <img src="assets/netflix-logo.png" alt='Netflix'/>
                </a>

                
                <ul className='header--menuList'>
                    <li>Início</li>
                    <li>Séries</li>
                    <li>Filmes</li>
                    <li>Bombando</li>
                    <li>Minha lista</li>
                </ul>
                
            </div>
            <div className='header--user'>

                <div className="header--input">
                    <i class="fa-solid fa-magnifying-glass"></i>
                    <input type="search" name="search" id="search" />
                </div>

                <i class="fa-solid fa-bell "></i>

                <div className="header--users">
                    <a href='/'>
                        <img src="assets/user.png" alt="Usuário" />
                    </a>

                    <i class="fa-solid fa-caret-down"></i>
                </div>
            </div>
        </header>
    )

}