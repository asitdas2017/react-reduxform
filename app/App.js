import React from 'react';
import FormCode from './FormCode';

export default class App extends React.Component {  
  render() {
    return (
      <div className="container">        
        <FormCode onSubmit={this.submit} />
      </div>      
    )
  }
}