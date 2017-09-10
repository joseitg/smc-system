import React from 'react';

/*
===============
 H Facturación
===============
*/
class HFacturacion extends React.Component {
    render() {
        return (
            <div className="header">
                <div className="edge"></div>
                <div className="logo"><p>Logo</p></div>
                <div className="company-name"><p>CompanyName</p></div>
                <div className="user"><p>Usuario</p></div>
                <div className="window-manager">
                    <i className="fa fa-window-minimize" id="btn-minimize" aria-hidden="true"></i>
                    <i className="fa fa-window-maximize" id="btn-maximize" aria-hidden="true"></i>
                    <i className="fa fa-window-close" id="btn-close" aria-hidden="true"></i>
                </div>
            </div>
        );
    }
}

export default HFacturacion;