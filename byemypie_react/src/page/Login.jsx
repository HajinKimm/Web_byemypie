import React from 'react';
import { Link } from 'react-router-dom';
import { LoginWrap } from '../styled/SideStyle';

const Login = () => {
    const onSubmit=(e)=>{
        e.preventDefault()
    }
    return (
        <LoginWrap>
            <div className="inner">
                <h2>Log-in</h2>
                <form onSubmit={onSubmit} className='loginForm'>
                    <input type="text" placeholder='ID' className='userinput'/>
                    <input type="password" placeholder='PASSWORD' className='userinput'/>
                    <p className='check'>
                        <div>
                            <input type="checkbox" name='chk1'/>
                            <label>아이디 저장</label>
                        </div>
                        <span>보안접속</span>
                    </p>
                    <p className='forgot'>
                        <Link to={'/'}>FORGOT ID</Link>
                        <Link to={'/'}>FORGOT PASSWORD</Link>
                    </p>
                    <button type='submit' className='submitBtn'>Log-in</button>
                    <button className='registerBtn'><Link to={'/join'}>Register</Link></button>
                </form>

            </div>

        </LoginWrap>
    );
};

export default Login;