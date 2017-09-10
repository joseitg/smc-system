import React from 'react';
import { render } from 'react-dom';
const ReactRouter = require('react-router-dom')
const Router = ReactRouter.BrowserRouter;
const Route = ReactRouter.Route;

import HeaderFacturacion from './HeaderFacturacion.jsx';
import WrapperFacturacion from './WrapperFacturacion.jsx';

class App extends React.Component {
    render() {
        return (
            <Router>
                <div className='window'>
                    <HeaderFacturacion />
                    <WrapperFacturacion />
                </div>
            </Router>
        );
    }
}

render(<App />, document.getElementById('app'));