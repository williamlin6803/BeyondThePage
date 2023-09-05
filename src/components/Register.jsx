import { Close, Room } from '@material-ui/icons';
import { useRef, useState } from 'react';
import './register.css';
import axios from 'axios';

export default function Register({setShowRegister}) {

    const [success, setSuccess] = useState(false);
    const [message, setMessage] = useState('');

    const nameRef = useRef();
    const emailRef = useRef();
    const passwordRef = useRef();
    const confirmPassRef = useRef();

    const handleSubmit = async (e) => {
        e.preventDefault();
        let password = passwordRef.current.value;
        let confirmPassword = confirmPassRef.current.value;
        if(password !== confirmPassword) {
            setMessage('Passwords do not match!');
            setSuccess(false);
        } else {
            const newUser = {
                username: nameRef.current.value,
                email: emailRef.current.value,
                password: password,
            };
            try {
                await axios.post('./users/register', newUser);
                setMessage('Success! you can login now.')
                setSuccess(true);
            } catch (err) {
                setSuccess(false);
                setMessage('Some error occured! Please try again.')
            }
        }
    }

    return (
        <div className='registerContainer'>
            <div className='registerLogo'>
                <Room />
                Geo Reviews
            </div>
            <form onSubmit={ handleSubmit }>
                <input type="text" placeholder="Choose a username" ref={nameRef} required/>
                <input type="email" placeholder="Enter your email" ref={emailRef} required/>
                <input type="password" placeholder="Choose a password" ref={passwordRef} minlength="5" required/>
                <input type="text" placeholder="Confirm your password" ref={confirmPassRef} required/>
                <button className='registerBtn' type='submit'>Register</button>
                {message.length > 0 && 
                    <span className={success ? 'success' : 'failure register-failure'}>{message}</span>
                }
                <Close className='registerCancel' style={{
                    fontSize:'1.1rem',
                }} onClick={() => setShowRegister(false)} />
            </form>
        </div>
    )
}