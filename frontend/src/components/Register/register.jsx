import React, { useState } from 'react';
import './register.scss';
import { useNavigate } from 'react-router';
import { useAuth } from '../../context/authContext';

const Register = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
        acceptTerms: false,
    });
    const navigate = useNavigate();
    const { register } = useAuth();
    const [formErrors, setFormErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const validate = () => {
        let errors = {};

        if (!formData.name) {
            errors.name = "Name is required";
        } else if (formData.name.length < 3) {
            errors.name = "Name must be at least 3 characters";
        }

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

        if (formData.password !== formData.confirmPassword) {
            errors.confirmPassword = "Passwords do not match";
        }

        // if (!formData.acceptTerms) {
        //     errors.acceptTerms = "You must accept the terms and conditions";
        // }

        return errors;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const errors = validate();
            setFormErrors(errors);

            if (Object.keys(errors).length === 0) {
                setIsSubmitting(true);
                
                // Prepare registration data (excluding confirmPassword and acceptTerms)
                const { confirmPassword, acceptTerms, ...registrationData } = formData;
                
                console.log("Registration submission:", registrationData);
                await register(registrationData);
                navigate('/');
            }
        } catch (err) {
            console.log(err.response?.data?.msg || "Registration Failed");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="register-container">
            <div className="register-card">
                <div className="register-header">
                    <h1>Create an Account</h1>
                    <p>Join our community today</p>
                </div>

                <form className="register-form">
                    <div className="form-group">
                        <label htmlFor="name">Full Name</label>
                        <div className="input-wrapper">
                            <i className="icon-user"></i>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                placeholder="Your full name"
                                value={formData.name}
                                onChange={handleChange}
                                className={formErrors.name ? 'invalid' : ''}
                            />
                        </div>
                        {formErrors.name && <span className="error-message">{formErrors.name}</span>}
                    </div>

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
                                placeholder="Create a password"
                                value={formData.password}
                                onChange={handleChange}
                                className={formErrors.password ? 'invalid' : ''}
                            />
                        </div>
                        {formErrors.password && <span className="error-message">{formErrors.password}</span>}
                    </div>

                    <div className="form-group">
                        <label htmlFor="confirmPassword">Confirm Password</label>
                        <div className="input-wrapper">
                            <i className="icon-lock"></i>
                            <input
                                type="password"
                                id="confirmPassword"
                                name="confirmPassword"
                                placeholder="Confirm your password"
                                value={formData.confirmPassword}
                                onChange={handleChange}
                                className={formErrors.confirmPassword ? 'invalid' : ''}
                            />
                        </div>
                        {formErrors.confirmPassword && <span className="error-message">{formErrors.confirmPassword}</span>}
                    </div>

                    {/* <div className="form-options">
                        <label className="checkbox-container">
                            <input
                                type="checkbox"
                                name="acceptTerms"
                                checked={formData.acceptTerms}
                                onChange={handleChange}
                            />
                            <span className="checkmark"></span>
                            I agree to the <NavLink href="/terms">Terms and Conditions</NavLink>
                        </label>
                        {formErrors.acceptTerms && <span className="error-message">{formErrors.acceptTerms}</span>}
                    </div> */}

                    <button
                        type="submit"
                        className={`register-button ${isSubmitting ? 'submitting' : ''}`}
                        disabled={isSubmitting}
                        onClick={handleSubmit}
                    >
                        {isSubmitting ? 'Creating account...' : 'Sign Up'}
                    </button>
                </form>

                <div className="social-register">
                    <p>Or sign up with</p>
                    <div className="social-buttons">
                        <button className="social-button google"><i className="icon-google"></i>Google</button>
                        <button className="social-button microsoft"><i className="icon-microsoft"></i>Microsoft</button>
                    </div>
                </div>

                <div className="login-prompt">
                    <p>Already have an account? <a href="/student-login">Sign in</a></p>
                </div>
            </div>
        </div>
    );
};

export default Register;