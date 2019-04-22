import {FaSpinner} from "react-icons/fa";
import React, {useState} from "react";
import {IconContext} from "react-icons/lib";

export const ContactForm = (props) => {

    const {nameError, emailError, messageError, validator} = useContactFormError()
    const {nameValue, emailValue, messageValue, setNameValue, setEmailValue, setMessageValue} = useContactFormValues()

    return(
        <form className='contact-form' onSubmit={(e) => e.preventDefault()}>
            <label>Name:</label>
            <input type='text' placeholder='name' value={nameValue} onChange={(e) => setNameValue(e.target.value)} onBlur={() => {validator(nameValue, 'name')}}/>
            {nameError && nameError}
            <label>Email:</label>
            <input type='text' placeholder='email' value={emailValue} onChange={(e) => setEmailValue(e.target.value)} onBlur={() => {validator(emailValue, 'email')}}/>
            {emailError && emailError}
            <label>Message:</label>
            <textarea value={messageValue} onChange={(e) => setMessageValue(e.target.value)} onBlur={() => {validator(messageValue, 'message')}}/>
            {messageError && messageError}
            <div className='submit-container'>
                <IconContext.Provider value={{color: '#ffeb7f', className: 'spinner', size: '1.25rem'}}>
                    <FaSpinner/>
                </IconContext.Provider>
                <button>Send</button>
            </div>
        </form>
    )
}

export const useContactFormError = () => {

    const [nameError, setNameError] = useState('')
    const [emailError, setEmailError] = useState('')
    const [messageError, setMessageError] = useState('')

    const validator = (value, type) => {
        const typeMap = {
            name: {set: setNameError, msg: 'Name cannot be blank'},
            email: {set: setEmailError, msg: 'Email cannot be blank'},
            message: {set: setMessageError, msg: 'Message cannot be blank'}
        }

        const {set, msg} = typeMap[type]
        value.length < 1 && set(msg)
    }

    return {nameError, emailError, messageError, validator}
}

export const useContactFormValues = () => {
    const [nameValue, setNameValue] = useState('')
    const [emailValue, setEmailValue] = useState('')
    const [messageValue, setMessageValue] = useState('')
    return {nameValue, emailValue, messageValue, setNameValue, setEmailValue, setMessageValue}
}