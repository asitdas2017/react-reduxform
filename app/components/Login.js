import React from 'react';
import { Field, reduxForm } from 'redux-form';

let Login = props => {
    const { handleSubmit, pristine, submitting } = props;
    return (
      <form onSubmit={ handleSubmit }>
        <div className="form-group">
          <Field name="firstName" component={renderField} label="First Name" />
        </div>
        <div className="form-group">
          <Field name="lastName" component={renderField} label="Last Name" />
        </div>
        <div className="form-group">
          <Field name="email" component={renderField} label="Email" />
        </div>
        <div className="form-group">
          <button type="submit" className="btn btn-primary">Submit</button>
        </div>
      </form>
    )
  }

Login = reduxForm({
    form: 'contact'
})(Login);
  
export default Login;