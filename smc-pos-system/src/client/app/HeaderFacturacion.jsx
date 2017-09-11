import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import Popover, { PopoverAnimationVertical } from 'material-ui/Popover';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';

/*
===============
 H Facturación
===============
*/

class HFacturacion extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            open: false,
        };
    }

    handleTouchTap(event) {
        // This prevents ghost click.
        event.preventDefault();

        this.setState({
            open: true,
            anchorEl: event.currentTarget,
        });
    };

    handleRequestClose() {
        this.setState({
            open: false,
        });
    };

    render() {
        return (
            <div className="header">
                <div className="edge"></div>
                <div className="logo"><p>Logo</p></div>
                <div className="company-name"><p>CompanyName</p></div>
                <div className="user">

                    <RaisedButton
                        onClick={this.handleTouchTap.bind(this)}
                        label="User"
                    />
                    <Popover
                        open={this.state.open}
                        anchorEl={this.state.anchorEl}
                        anchorOrigin={{ horizontal: 'left', vertical: 'bottom' }}
                        targetOrigin={{ horizontal: 'left', vertical: 'top' }}
                        onRequestClose={this.handleRequestClose.bind(this)}
                        animation={PopoverAnimationVertical}
                    >
                        <Menu>                            
                            <MenuItem primaryText="Sign out" />
                        </Menu>
                    </Popover>

                </div>
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