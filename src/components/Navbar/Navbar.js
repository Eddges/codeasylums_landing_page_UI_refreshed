import React from 'react'
import classes from './Navbar.module.css'
import LogoWhite from '../../assets/LogoWhite.png'

const Navbar = (props) => {
    return(
        <div className={classes.Container}>
            <div className={classes.Logo}>
                <img src={LogoWhite} alt="Logo" />
            </div>
            <div className={classes.Menu}>
                <span className={classes.Courses}>Courses<ion-icon name="caret-down"></ion-icon></span>
                <a href="#" className={classes.AboutLink}>About</a>
                <button className={classes.ButtonMentor}>Apply as Mentor</button>
                <button className={classes.ButtonCallback}>Request Callback</button>
            </div>
        </div>
    )
}

export default Navbar