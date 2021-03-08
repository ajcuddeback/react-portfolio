import React from 'react';
import styled from 'styled-components';
import headShot from '../images/Head-shot.jpg';
import resume from "../PDF's/Austin's-Resume.pdf";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faDownload} from '@fortawesome/free-solid-svg-icons';

const About = () => {
    return (
        <StyledAbout id="about">
            <div className="title-flex">
                <h2 className="main-titles">About Me</h2>
            </div>
            <article>
                <div className="about-content-wrapper row">
                    <div>
                        <img src={headShot} alt="Photo of Austin Cuddeback sitting on a bench"
                            className="float-right img-responsive"></img>
                    </div>
                    <div className="download-button-wrapper text-center">
                        <h3>Hello, my name is Austin Cuddeback and I am a full-stack web developer with many years
                                of
                                problem solving experience. I have a
                                background in management which has taught me how to be an excellent problem solver and
                                natural leader. I am looking
                                to bring
                                my knowledge, communication, and technical skills to add value to an organization while
                                focusing
                                on continuous learning and engaging in my community to give back in the field of web
                                development.</h3>
                        <br />
                        <h3>My skills:</h3>
                        <ul>
                            <li>Front end: HTML5, CSS, Javascript, jQuery, Bootstrap, GSAP, Animations, Handlebars
                            </li>
                            <li>Back end: Node.js, Express.js, Stripe.js, API's, MySQL, SQLite, Sequelize, bcrypt,
                                cookies,
                                express-session, dotenv</li>
                        </ul>
                        <div className="">
                            <h3>Click to download my resume!</h3>
                        </div>
                        <form method="get" action={resume} target="_blank"
                            className="download-button-container">
                            <button className="btn"><FontAwesomeIcon icon={faDownload} />Download</button>
                        </form>
                    </div>
                </div>
            </article>
        </StyledAbout>
    )
};

const StyledAbout = styled.section `

    .about-content-wrapper {
        display: flex;
        justify-content: space-around;
        width:50%;
        margin: 0 auto;
    }

    .download-button-wrapper {
        width: 40%;
        align-self: center;
    }

    img {
        width: 60%;
        border-radius: 5px;
        transition: all 0.5s ease-in-out;
        &:hover {
            box-shadow: 2px 2px 15px 2px blue;
            transition: 1s;
        }
    }
`

export default About;