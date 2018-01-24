import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
import store from './reducers/reducer';


class HelloWorld extends React.Component {
    render() {
        return ( 
            <Provider store={store}>
                <App/>
            </Provider>
        )
    }
};

ReactDOM.render( < HelloWorld / > , document.getElementById('root'));