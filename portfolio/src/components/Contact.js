import React from 'react';

const Contact = () => {
    return (
        <section className="contact" id="contact">
            <div className="title-flex">
                <h2 className="main-titles">Contact Me</h2>
            </div>
            <div className="contact-wrapper">
                <form action="https://formspree.io/f/mvovqazn" target="_blank" method="POST">
                    <label>
                    Your email:
                        <input type="text" name="_replyto"></input>
                    </label>
                    <label>
                    Your message:
                        <textarea name="message"></textarea>
                    </label>
                    <button type="submit">Send</button>
                </form>
            </div>
        </section>
    )
}

export default Contact;