import React from 'react';
import styled from 'styled-components';
import headShot from '../images/received_2267712333434763.jpeg';
import resume from "../PDF's/Austin-Cuddeback-Resume.pdf";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faDownload} from '@fortawesome/free-solid-svg-icons';
import {device} from '../devices';

const About = () => {
    return (
        <StyledAbout id="about">
            <div className="title-flex">
                <h2 className="main-titles">About Me</h2>
            </div>
            <article>
                <div className="about-content-wrapper row">
                    <div className="img">
                        <img src={headShot} alt="Austin Cuddeback sitting on a bench"
                            className="float-right img-responsive"></img>
                            </div>
                    
                    <div className="download-button-wrapper text-center">
                        <h3>
                            I am a results-oriented Software Engineer with a proven track record of success and innovation. My expertise lies in leveraging cutting-edge technologies to develop robust and scalable software solutions. Proficient in Angular, Java, Node.js, PSQL, and Typescript/Javascript, I bring a versatile skill set to the table.
                        </h3>
                        <br />
                        <h3>My skills:</h3>
                        <br/>
                        <ul>
                            <li className="front-end"> <p> <u> Front End Technologies </u></p> <br/> HTML5 | CSS (SASS/SCSS) | Javascript | jQuery | React.js | Styled Components | Angular |
                            Cookies | Bootstrap | Animations 
                            </li>
                            <li className="back-end" ><p> <u> Back End Technologies </u></p> <br/> Node.js | Typescript | Java | Python | Express.js | Stripe.js | API's | PostgreSQL | bcrypt |
                            MongoDB | Auth0 | Keycloak | </li>
                            <br />
                            <li className="dev-ops"><p><u> Dev Sec Ops </u></p> <br /> Azure (VM's, Blob, CDN) | AWS (S3, Lambda, CloudFront, Cognito) | Linux (Ubuntu) | Cloudflare (DNS, Cache, Streams)</li>
                        </ul>
                        <br/>
                        <div className="">
                            <h3>Click to download my resume!</h3>
                        </div>
                        <form method="get" action={resume} target="_blank"
                            className="download-button-container">
                            <button className="btn"><FontAwesomeIcon icon={faDownload} />   Download</button>
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
        width:50%;
        margin: 0 auto;
    }

    .download-button-wrapper {
        width: 100%;
        align-self: center;
        margin-left: 4rem;
    }
    .front-end {
        margin-bottom: 1rem;
    }

    .front-end,
    .back-end {
        font-size: 1rem;
    }

    h3 {
        text-align: center;
        margin-top: 1rem;
    }

    form {
        display: flex;
        justify-content: center;
        margin-top: 1rem;
    }

    img {
        border-radius: 5px;
        transition: all 0.5s ease-in-out;
        height: 500px;
        &:hover {
            box-shadow: 2px 2px 15px 2px blue;
            transition: 1s;
        }
    }

    @media ${device.laptopL} {
        .about-content-wrapper {
            width: 70%;
        }
        img{
            height: 400px;
        }
    }
    @media ${device.laptop} {
        .about-content-wrapper {
            width: 80%;
        }
        img{
            height: 300px;
        }
    }
    @media ${device.tablet} {
        .about-content-wrapper {
            flex-direction: column;
            justify-content: center;
            align-items: center;
        }
        img {
            height: 350px;
        }
        .download-button-wrapper {
            margin-left: 0;
        }
    }
    @media ${device.mobileM} {
       h3 {
           font-size: 1rem;
       }
    }
`

export default About;