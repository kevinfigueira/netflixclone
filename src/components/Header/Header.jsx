import './Header.css';
import React from 'react';

export default ({black}) => {


    const handleInput = () => {
        
    }

    return (
        <header className={black ? 'black' : ''}>
            <div className='header--logo'>
                <a href="/">
                    <img src="https://logodownload.org/wp-content/uploads/2014/10/netflix-logo-5.png" alt='Netflix'/>
                </a>

                
                <ul className='header--menuList'>
                    <li>Início</li>
                    <li>Séries</li>
                    <li>Filmes</li>
                    <li>Bombando</li>
                    <li>Minha lista</li>
                </ul>

                <span className="header--nav">Navegar <i class="fa-solid fa-caret-down" onClick={handleInput}></i></span>
                
            </div>
            <div className='header--user'>

                <div className="header--input conf">
                    <i class="fa-solid fa-magnifying-glass"></i>
                    <input type="text" name="search" id="text" placeholder="Títulos, gente e gêneros"/>
                </div>

                <i class="fa-solid fa-bell "></i>

                <div className="header--users">
                    <a href='/'>
                        <img src="https://i.pinimg.com/originals/b6/77/cd/b677cd1cde292f261166533d6fe75872.png" alt="Usuário" />
                    </a>

                    <i class="fa-solid fa-caret-down"></i>
                </div>
            </div>
        </header>
    )

}