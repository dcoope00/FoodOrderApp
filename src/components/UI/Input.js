import styles from "./Input.module.css"
import React from "react"

//this custom input component is used in place of regular <input> tags.
//forwardRef is used because ref is not supported on custom components.

const Input = React.forwardRef((props, ref) => {

    return (
        <div className={styles.input} >
            <label htmlFor={props.input.id}>{props.label}</label>
            <input ref = {ref} {...props.input} ></input>  {/* here instead of passing each of the several props individually we pass them using the spread operator */}
        </div>
    )


}
)
export default Input