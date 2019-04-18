import React, {useState} from 'react';
import './App.css';
import Typist from 'react-typist'
import {GoArrowDown} from 'react-icons/go';
import {FaGithub} from "react-icons/fa";
import {IconContext} from "react-icons/lib";

export const App = () => {

    const [isTyping, setTypingStatus] = useState(true)

    return (
        <React.Fragment>
            <div className="App">
                <div className='title-div'>
                    <h1 className='main-title'>Seth R. Watkins</h1>
                    <h3 className='main-sub-title'>Frontend Developer</h3>
                </div>
                <div className='intro-paragraph-container'>
                    <Typist onTypingDone={() => {
                        setTimeout(() => {
                            setTypingStatus(false)
                        }, 200)
                    }}>
                        <p className='intro-paragraph'>
                            Being a developer is about more than being a coder. <Typist.Delay ms={500}/> It’s about
                            being a
                            unique problem solver, <Typist.Delay ms={500}/> an excellent communicator, <Typist.Delay
                            ms={500}/>and a translator between the complexities of software engineering and the user
                            experience.
                            <br/>
                            <br/>
                            <Typist.Delay ms={500}/>
                            Blending these traits into highly stable, <Typist.Delay
                            ms={500}/>deployable, <Typist.Delay ms={500}/>and reproducible software is what it
                            takes,<Typist.Delay ms={500}/> and what I enjoy.
                        </p>
                    </Typist>
                </div>
                <div className='arrow-down-container'>
                    <div className='icon-box'>
                        <IconContext.Provider value={{
                            color: "white", size: "3em", className: isTyping ? 'gone' : 'arrow-down', onClick: () => {
                                console.log('wee')
                            }
                        }}>
                            <GoArrowDown onClick={() => {
                                const work = document.querySelector('.work')
                                work.scrollIntoView({behavior: 'smooth'})
                            }}/>
                        </IconContext.Provider>
                    </div>
                </div>
            </div>
            <div className='work'>
                <div className='footer'>
                    <h1>Lets start a conversation</h1>
                </div>
                <div className='form-container'>
                    <form className='contact-form' onSubmit={(e) => e.preventDefault()}>
                        <label>Name:</label>
                        <input type='text' placeholder='name'/>
                        <label>Email:</label>
                        <input type='text' placeholder='email'/>
                        <label>Message:</label>
                        <textarea/>
                        <button>Send</button>
                    </form>
                </div>
                <div className='social'>
                    <div className='icon-box'>
                        <IconContext.Provider value={{
                            color: "#ECEFF1", size: "2.5em", className: 'github-icon'
                        }}>
                            <FaGithub onClick={() => {
                                window.open('https://www.github.com/seth-wat', '_blank');
                            }}/>
                        </IconContext.Provider>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default App;
