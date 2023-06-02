import React from 'react'
import styles from "./Header.module.css"
import mealsImage from "./meals.jpg"
import HeaderCartButton from "./HeaderCartButton"
const Header = props =>{


    return (
        <React.Fragment>
        <header className = {styles.header}>
            <h1>Denvers Bakery</h1>
            <HeaderCartButton/>
        </header>
        <div className = {styles["main-image"]}  >
        <img src = {mealsImage} alt = "A stand with baked goods" style = {styles.main }/>
        </div>
        </React.Fragment>
    )


}

export default Header