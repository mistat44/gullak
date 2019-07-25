import React, { Fragment, useState } from 'react'
import { Link } from 'react-router-dom';


const Register = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        password2: ''
    });

    const { name, email, password, password2 } = formData;

    const onChange = e => {
        return setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    const onSubmit = async e => {
        e.preventDefault();
        if (password !== password2) {
            alert('Passwords do not match', 'danger');
        } else {
            console.log(formData);
            // register({ name, email, password });
        }
    };

    return (
        <div className="row">
            <div className="col-lg-6 mx-auto">
                <div className="mt-3">
                    <h1 className='large text-center'>Sign Up</h1>
                    <p className='lead text-center'>
                        <i className='fas fa-user' /> Create Your Account And Join Us
                   </p>
                    <form className='form text-center' onSubmit={e => onSubmit(e)}>
                        <div className='form-group'>
                            <input
                                className="form-control"
                                type='text'
                                placeholder='Name'
                                name='name'
                                value={name}
                                onChange={e => onChange(e)}
                            />
                        </div>
                        <div className='form-group'>
                            <input
                                className="form-control"
                                type='email'
                                placeholder='Email Address'
                                name='email'
                                value={email}
                                onChange={e => onChange(e)}
                            />
                        </div>
                        <div className='form-group'>
                            <input
                                className="form-control"
                                type='password'
                                placeholder='Password'
                                name='password'
                                value={password}
                                onChange={e => onChange(e)}
                            />
                        </div>
                        <div className='form-group'>
                            <input
                                className="form-control"
                                type='password'
                                placeholder='Confirm Password'
                                name='password2'
                                value={password2}
                                onChange={e => onChange(e)}
                            />
                        </div>
                        <input type='submit' className='mybuttons btn btn-primary' value='Register'
                            style={{ backgroundColor: '#362b01', border: 'none', borderRadius: '0', width: '8rem' }}
                        />
                    </form>
                    <p className="mt-1">
                        Already have an account? <Link to='/login'>Sign In</Link>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Register;