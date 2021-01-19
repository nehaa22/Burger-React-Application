import React from 'react';
import Aux from '../../../Hoc/Aux';
import Logo from '../../Logo/Logo';
import Backdrop from '../../UI/Backdrop/Backdrop';
import NavigationItems from '../NavigationItems/NavigationItems';
import classes from "./SideDrawer.module.css";

const SideDrawer = (props) => {
    let attachedClass = [classes.SideDrawer,classes.Close];
    if(props.open){
        attachedClass = [classes.SideDrawer,classes.Open];
    }
    return (
        <Aux>
            <Backdrop show= {props.open}  clicked={props.closed}/>
            <div className={classes.attachedClass.join(' ')}>
                <div className={classes.Logo}>
                    <Logo />
                </div>
                <nav>
                    <NavigationItems />
                </nav>
            </div>
        </Aux>
    )
}

export default SideDrawer;