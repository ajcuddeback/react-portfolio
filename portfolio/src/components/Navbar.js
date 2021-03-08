import React from 'react';
import styled from 'styled-components';

const Navbar = () => {
    return (
        <StyledHeader>
            <h1><a href="/index.html">AustinWebDev</a></h1>
            <nav>
                <ul>
                    <li><a href="#about" className="red-border">About Me</a></li>
                    <li><a href="#work" className="red-border">My Work</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </nav>
        </StyledHeader>
    )
}

const StyledHeader = styled.header `
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin: 30px 30px;
`

export default Navbar;