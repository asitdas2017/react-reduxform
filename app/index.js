import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import LoginRoot from './components/login/LoginRoot';
import store from './reducers/reducer';



import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


class HelloWorld extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <MuiThemeProvider muiTheme={getMuiTheme()}>
                    <LoginRoot/>
                </MuiThemeProvider>
            </Provider>
        )
    }
};

ReactDOM.render( < HelloWorld / > , document.getElementById('root'));