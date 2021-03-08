import React from 'react';

const About = () => {
    return (
        <section className="about" id="about">
            <article>
                <div className="title-flex">
                    <h2 className="main-titles">About Me</h2>
                </div>
                <div className="about-content-wrapper row">
                    <div>
                        <img src="./assets/Images/Head-shot.jpg" alt="Photo of Austin Cuddeback sitting on a bench"
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
                        <form method="get" action="./assets/PDF's/Austin's-Resume.pdf" target="_blank"
                            className="download-button-container mt-3">
                            <button className="btn"><i className="fa fa-download"></i> Download</button>
                        </form>
                    </div>
                </div>
            </article>
        </section>
    )
}

export default About;