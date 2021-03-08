import React from 'react';

const Works = () => {
    return (
        <section className="work" id="work">
            <article>
                <div className="title-flex">
                    <h2 className="main-titles">My Work</h2>
                </div>
                <div className="grid-wrapper">
                    <div className="grid-content">
                        <a href="https://dev-connect-ac.herokuapp.com/" target="_blank" className="works main-work">
                            <div>
                                <p className="Coding-Quiz">Dev Connect</p>
                            </div>
                        </a>
                        <a href="https://www.hernandoreptile.org/" target="_blank" className="works sub-work1">
                            <div>
                                <p>Hernando Reptile</p>
                            </div>
                        </a>
                        <a href="https://budget-application-1999.herokuapp.com/" target="_blank"
                            className="works sub-work2">
                            <div>
                                <p className="comingSoonP">Budget App</p>
                            </div>
                        </a>
                        <a href="https://ajcuddeback.github.io/Explore-Outdoors/" target="_blank"
                            className="works sub-work3">
                            <div>
                                <p className="weatherAppP">Explore Outdoors</p>
                            </div>
                        </a>
                        <a href="https://ajcuddeback.github.io/days/" target="_blank" className="works sub-work4">
                            <div>
                                <p className="comingSoonP">Days.</p>
                            </div>
                        </a>
                        <a href="https://ajcuddeback.github.io/beat-maker/" target="_blank" className="works sub-work5">
                            <div>
                                <p className="comingSoonP">Beat Maker</p>
                            </div>
                        </a>
                        <a href="https://vast-atoll-67249.herokuapp.com/" target="_blank" className="works sub-work6">
                            <div>
                                <p className="comingSoonP">Note Taker</p>
                            </div>
                        </a>
                    </div>
                </div>
            </article>
        </section>
    )
}

export default Works;