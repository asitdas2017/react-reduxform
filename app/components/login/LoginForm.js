import React from 'react';
import {Field, reduxForm} from 'redux-form';
import TextField from 'material-ui/TextField';

const validate = values => {
    const errors = {};
    if (!values.firstName) {
        errors.firstName = 'Required';
    } else if (values.firstName.length < 2) {
        errors.firstName = 'Minimum be 2 characters or more'
    }
    if (!values.email) {
        errors.email = 'Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email address';
    }
    if (!values.lastName) {
        errors.lastName = 'Required';
    } else if (values.lastName.length < 2) {
        errors.lastName = 'Minimum be 2 characters or more';
    }
    return errors;
};

const renderTextField = ({
        input,
        label,
        meta: { touched, error }
    }) => (
        <TextField
        hintText={label}
        floatingLabelText={label}
        errorText={touched && error}
        {...input}
        />
  )


const renderField = ({
        input,
        label,
        type,
        meta: {
            touched,
            error,
            warning
        }
    }) => (
        <div>
            <label className="control-label">{label}</label>
            <div>
                <input {...input} placeholder={label} type={type} className="form-control"/> 
                {touched && ((error && <span className="text-danger">{error}</span>) || (warning && <span>{warning}</span>))}
            </div>
        </div>
    )

let LoginForm = ({handleSubmit, pristine, submitting}) => {
    return (
        <form onSubmit={handleSubmit}>        
            <div className="form-group">
                <Field name="firstName" component={renderTextField} label="First Name"/>
            </div>
            <div className="form-group">
                <Field name="lastName" component={renderField} label="Last Name"/>
            </div>
            <div className="form-group">
                <Field name="email" component={renderField} label="Email"/>
            </div>
            <div className="form-group">
                <button type="submit" className="btn btn-primary">Submit</button>
            </div>
        </form>
    )
}
export default LoginForm = reduxForm({
    form: 'contact', 
    validate, 
    destroyOnUnmount: false,
    onSubmit: () => {
        console.log('Successfully submitted...'); 
        // browserHistory.push('/reg');
        // this.props.router.push('/dashboard/customer');
        // dispatch(push('/home'));
    }
})(LoginForm);