import React, {Component} from 'react';
import Aux from '../../hoc/Aux/Aux';
import Toolbar from '../../components/UI/Navigation/Toolbar/Toolbar';
import Sidedraw from '../../components/UI/Navigation/Sidedraw/Sidedraw';
import classes from './Layout.css';
class Layout extends Component {

    state = {
        showSideDraw: false

    }
 sideDrawerHandler = () => {
     this.setState((prevState) => {
         return{showSideDraw: !prevState.showSideDraw}
     })
 }
 

    render(){

        return (
            <Aux>
            <Toolbar toggleSideDraw={this.sideDrawerHandler}/>
            <Sidedraw open={this.state.showSideDraw} close={this.sideDrawerHandler}/>
            <main className={classes.Content}>{this.props.children}</main>
        </Aux>
        );
    }
}

export default Layout;