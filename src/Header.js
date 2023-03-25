import React from 'react'

const Header = () => {
    return (
        <header className='Header'>

            <div className="inner">
                <h1>
                    <Link to='/'>
                        <a href="/">portfolio</a>
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