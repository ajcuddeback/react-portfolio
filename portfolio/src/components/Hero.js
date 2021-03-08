import React from 'react';
import styled from 'styled-components';
import heroImg from '../images/hero-img-blue.jpg';

const Hero = () => {
    return (
        <StyledHero>
            <div className="quote">
                <h2>"The one who falls and gets up is stronger than the one who never tried. Do not fear failure but
                    rather fear not trying.<span>- Paulo Coelho</span></h2>
            </div>
        </StyledHero>
    )
};

const StyledHero = styled.section `
    background-attachment: fixed;
    background-position: center;
    background-image: url(${heroImg});
    background-size: cover;

    div {
        text-align: center;
        height: 600px;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: flex-end;
    }
    h2 {
        width: 35%;
        background-color: var(--background);
        padding: 8px;
        border-radius: 5px;
        border: 1px solid blue;
        margin-bottom: 50px;
    }

    span {
        display: block;
        margin-top: 10px;
    }
`

export default Hero;