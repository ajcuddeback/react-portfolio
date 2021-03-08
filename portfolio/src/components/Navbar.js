import React from 'react';
import '../fonts/Neoneon.otf';

const Navbar = () => {
    return (
        <header>
            <h1><a href="/index.html">AustinWebDev</a></h1>
            <nav>
                <ul>
                    <li><a href="#about" className="red-border">About Me</a></li>
                    <li><a href="#work" className="red-border">My Work</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </nav>
        </header>
    )
}

const styledHeader = styled.header`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin: 30px 30px;
`

export default Navbar;