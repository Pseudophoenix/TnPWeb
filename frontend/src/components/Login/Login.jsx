import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
import './Login.scss';
import { NavLink } from 'react-router';
import { useNavigate } from 'react-router';
import { useAuth } from '../../context/authContext';
const Login = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        // rememberMe: false,
    });
    const navigate = useNavigate();
    const { login } = useAuth();
    const [formErrors, setFormErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const validate = () => {
        let errors = {};

        if (!formData.email) {
            errors.email = "Email is required";
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            errors.email = "Email is invalid";
        }

        if (!formData.password) {
            errors.password = "Password is required";
        } else if (formData.password.length < 6) {
            errors.password = "Password must be at least 6 characters";
        }

        return errors;
    };

    const handleSubmit = async (e) => {
        console.log('Called Login');
        e.preventDefault();
        try {

            const errors = validate();
            setFormErrors(errors);

            if (Object.keys(errors).length === 0) {
                setIsSubmitting(true);

                // Simulate API call

                // setTimeout(async () => {
                console.log("Login submission:", formData);
                // setIsSubmitting(false);
                // Handle successful login here (redirect, etc)
                await login(formData);
                navigate('/');
                // }, 1500);
            }
        }
        catch (err) {
            console.log(err.response?.data?.msg || "Login Failed");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="login-container">
            <div className="login-card">
                <div className="login-header">
                    <h1>Welcome Back</h1>
                    <p>Sign in to your account</p>
                </div>

                <form className="login-form"
                // onSubmit={handleSubmit}
                >
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <div className="input-wrapper">
                            <i className="icon-email"></i>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                placeholder="Your email address"
                                value={formData.email}
                                onChange={handleChange}
                                className={formErrors.email ? 'invalid' : ''}
                            />
                        </div>
                        {formErrors.email && <span className="error-message">{formErrors.email}</span>}
                    </div>

                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <div className="input-wrapper">
                            <i className="icon-lock"></i>
                            <input
                                type="password"
                                id="password"
                                name="password"
                                placeholder="Your password"
                                value={formData.password}
                                onChange={handleChange}
                                className={formErrors.password ? 'invalid' : ''}
                            />
                        </div>
                        {formErrors.password && <span className="error-message">{formErrors.password}</span>}
                    </div>

                    <div className="form-options">
                        {/* <label className="checkbox-container">
                            <input
                                type="checkbox"
                                name="rememberMe"
                                checked={formData.rememberMe}
                                onChange={handleChange}
                            />
                            <span className="checkmark"></span>
                            Remember me
                        </label> */}
                        <a href="/forgot-password" className="forgot-password">Forgot Password?</a>
                    </div>

                    <button
                        type="submit"
                        className={`login-button ${isSubmitting ? 'submitting' : ''}`}
                        disabled={isSubmitting}
                        onClick={handleSubmit}
                    >
                        {isSubmitting ? 'Signing in...' : 'Sign In'}
                    </button>
                </form>

                <div className="social-login">
                    <p>Or sign in with</p>
                    <div className="social-buttons">
                        <button className="social-button google"><i className="icon-google"></i>Google</button>
                        <button className="social-button microsoft"><i className="icon-microsoft"></i>Microsoft</button>
                    </div>
                </div>

                <div className="signup-prompt">
                    <p>Don't have an account? <NavLink to={`/student-signup`}>Sign up</NavLink>
                        {/* <NavLink
                            key={item}
                            to={`/${itemPath}`}
                            className={({ isActive }) =>
                                `block px-4 py-2 hover:bg-blue-50 ${isActive ? 'bg-blue-50 text-blue-600' : 'text-gray-800'
                                } hover:text-blue-600 transition-colors`
                            }
                        >
                            {item}
                        </NavLink> */}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Login;
