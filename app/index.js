import React from 'react';
import ReactDOM from 'react-dom';
import Login from './components/Login';

class HelloWorld extends React.Component {
    render() {
        return ( 
            <h1>
            Hello, React!Asit < Login / >
            </h1>
        )
    }
};

ReactDOM.render( < HelloWorld / > , document.getElementById('root'));