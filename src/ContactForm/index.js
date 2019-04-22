import {FaSpinner} from "react-icons/fa";
import React, {useState} from "react";
import {IconContext} from "react-icons/lib";

export const ContactForm = (props) => {

    const {nameError, emailError, messageError, validator, clearError} = useContactFormError()
    const {nameValue, emailValue, messageValue, setNameValue, setEmailValue, setMessageValue} = useContactFormValues()
    const [isLoading, setLoading] = useState(false)
    return (
        <form className='contact-form' onSubmit={async (e) => {

            e.preventDefault()
            validator(nameValue, 'name')
            validator(nameValue, 'email')
            validator(nameValue, 'message')
            if(nameValue && emailValue && messageValue) {
                setLoading(true)
                try {
                    await fetch(process.env.REACT_APP_EMAIL_ENDPOINT, {
                        method: 'post',
                        body: JSON.stringify({name: nameValue, email: emailValue, content: messageValue})
                    })
                    setLoading(false)
                } catch(e) {
                    setLoading(false)
                }

            }

        }}>
            <div className='form-element'>
                <label>Name:</label>
                <input type='text' className={nameError.length ? 'input-error' : ''} placeholder='name'
                       value={nameValue} onChange={(e) => {
                    setNameValue(e.target.value)
                    nameError && clearError('name')
                }} onBlur={() => {
                    validator(nameValue, 'name')
                }}/>
                {nameError &&
                <label className='error-label'>{nameError}</label>}
            </div>
            <div className='form-element'>
                <label>Email:</label>
                <input type='text' className={emailError.length ? 'input-error' : ''} placeholder='email'
                       value={emailValue} onChange={(e) => {
                    setEmailValue(e.target.value)
                    emailError && clearError('email')
                }} onBlur={() => {
                    validator(emailValue, 'email')
                }}/>
                {emailError && <label className='error-label'>{emailError}</label>}
            </div>
            <div className='form-element'>
                <label>Message:</label>
                <textarea className={messageError.length ? 'input-error' : ''} value={messageValue} onChange={(e) => {
                    setMessageValue(e.target.value)
                    messageError && clearError('message')
                }} onBlur={() => {
                    validator(messageValue, 'message')
                }}/>
                {messageError && <label className='error-label'>{messageError}</label>}
            </div>
            <div className='submit-container'>
                {isLoading && <IconContext.Provider value={{color: '#ffeb7f', className: 'spinner', size: '1.25rem'}}>
                    <FaSpinner/>
                </IconContext.Provider>
                }
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
            name: {set: setNameError, msg: 'How should I address you?'},
            email: {set: setEmailError, msg: 'I\'ll need a return address!'},
            message: {set: setMessageError, msg: 'Don\'t forget your message!'}
        }

        const {set, msg} = typeMap[type]
        value.length ? set('') : set(msg)
    }

    const clearError = (type) => {
        const typeMap = {
            name: setNameError,
            email: setEmailError,
            message: setMessageError
        }

        typeMap[type]('')

    }

    return {nameError, emailError, messageError, validator, clearError}
}

export const useContactFormValues = () => {
    const [nameValue, setNameValue] = useState('')
    const [emailValue, setEmailValue] = useState('')
    const [messageValue, setMessageValue] = useState('')
    return {nameValue, emailValue, messageValue, setNameValue, setEmailValue, setMessageValue}
}