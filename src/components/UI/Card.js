import styles from "./Card.module.css"

//this component is a simple reusable wrapper for organizing different components with their own wrapper
const Card = props =>{

    return (
        <div className= {styles.card} >{props.children}</div>

    )


}

export default Card