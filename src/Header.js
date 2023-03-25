import React from 'react'
import { Link } from 'react-router-dom';
import NavMenu from './NavMenu';

const Header = () => {
    return (
        <header className='Header'>

            <div className="inner">
                <h1>
                    <Link to='/'>
                        <a href="/">✽ Kim Hye lim</a>
                    </Link>
                </h1>
                <nav>
                    <NavMenu />
                </nav>
                <div className='icon'>
                    <a href="https://github.com/greenwhale00" target="_blank">github</a>
                </div>
            </div>


        </header>
    )
}

export default Header