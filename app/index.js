import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import LoginRoot from './components/login/LoginRoot';

import store from './reducers/reducer';


class HelloWorld extends React.Component {
    render() {
        return ( 
            <Provider store={store}>
                <LoginRoot/>
            </Provider>
        )
    }
};

ReactDOM.render( < HelloWorld / > , document.getElementById('root'));