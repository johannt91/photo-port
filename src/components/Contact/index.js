import React, { useState } from 'react'
import { validateEmail } from '../../utils/helpers'

 function ContactForm() {
    const [formState, setFormState] = useState({ name: '', email: '', message: '' }); //hook clears input fields on component loading
    const { name, email, message } = formState;
    const [errorMessage, setErrorMessage] = useState('');


    function handleChange(e) { // synchronizes internal state of component's formState with user input from the DOM
        if(e.target.name === 'email') {
            const isValid = validateEmail(e.target.value);
            if(!isValid) {
                setErrorMessage('Your email is invalid.');
            } else {
                setErrorMessage('');
            }
        } else {
            if (!e.target.value.length) {
              setErrorMessage(`${e.target.name} is required.`);
            } else {
              setErrorMessage('');
            }
        }
        if (!errorMessage) {
        setFormState({...formState, [e.target.name]:e.target.value }) //name property of target refers to name attribute of html form element which matches property names of formState allowing the use of [ ] to create dynamic property names
        }
        console.log('errorMessage', errorMessage);
    }

    function handleSubmit(e) {
        e.preventDefault();
        console.log(formState);
    }

    return (
        <section>
            <h1 data-testid="h1tag">Contact me</h1>
            <form id="contact-form" onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Name:</label>
                    <input type="text" name="name" onBlur={handleChange} defaultValue={name} /> {/*onChange event listener listens for keystrokes  */}
                </div>
                <div>
                    <label htmlFor="email">Email address:</label>
                    <input type="email" name="email" onBlur={handleChange} defaultValue={email} />
                </div>
                <div>
                    <label htmlFor="message">Message:</label>
                    <textarea name="message" onBlur={handleChange} defaultValue={message} rows="5" />
                </div>
                {errorMessage && (
                    <div>
                        <p className="error-text">{errorMessage}</p>
                    </div>
                )}
                <button data-testid="button" type="submit">Submit</button>
            </form>
        </section>
    );
}

export default ContactForm;
