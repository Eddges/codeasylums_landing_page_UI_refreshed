import React from 'react'
import classes from './Landing.module.css'
import Triangle from '../../assets/triangle.png'
import MacBookSprite from '../../assets/macbook_sprite_400px.png'

const Landing = (props) => {
    return(
        <div className={classes.Container}>
            <img className={classes.Triangle} src={Triangle} />

            <div className={classes.Left}>
                <span className={classes.Top}>CODEASYLUMS <span className={classes.Highlite}>| ACE</span></span>
                <span className={classes.Benefits}><span className={classes.Highlite}>Live Mentoring | Career Focused | Online</span></span>
                <span className={classes.Courses1}>Data Structures | Algorithms | Data Science</span>
                <span className={classes.Courses2}>Full Stack Development | Competitive Programming</span>
            </div>

            <div className={classes.Right}>
                {/* <img src={MacBookSprite} alt="Computer" /> */}
                <div className={classes.Animation}></div>
            </div>
        </div>
    )
}

export default Landing