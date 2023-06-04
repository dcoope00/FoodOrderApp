import styles from "./Input.module.css"

//this custom input component is used in place of regular <input> tags.
const Input = props =>{

    return (
        <div className={styles.input} >
        <label htmlFor={props.input.id}>{props.label}</label>
        <input  {...props.input} ></input>  {/* here instead of passing each of the several props individually we pass them using the spread operator */}
        </div>
    )


}

export default Input