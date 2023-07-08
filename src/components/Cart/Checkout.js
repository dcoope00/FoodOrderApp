import classes from './Checkout.module.css';
import { useRef, useState } from "react"


const isEmpty = (value) => {
    return value.trim().length === 0
}
const isFiveChars = value =>{
    return value.trim().length === 5
}

const Checkout = (props) => {

    const [formInputsValid, setFormInputsValid] = useState({
        name: true,
        street: true,
        city: true,
        zip: true
    })


    const nameRef = useRef()
    const streetRef = useRef()
    const zipRef = useRef()
    const cityRef = useRef()

    const confirmHandler = (event) => {
        event.preventDefault();

        const name = nameRef.current.value
        const street = streetRef.current.value
        const zip = zipRef.current.value
        const city = cityRef.current.value

        const isNameValid = !isEmpty(name)
        const isStreetValid = !isEmpty(street)
        const isZipValid = isFiveChars(zip)
        const isCityValid = !isEmpty(city)

        setFormInputsValid({
            name: isNameValid,
            street: isStreetValid,
            city: isCityValid,
            zip: isZipValid
        })

        const formValid = isNameValid && isStreetValid && isZipValid && isCityValid

        if(!formValid){

            return
        }
        props.submitOrderHandler({name: name, street: street, zip: zip, city: city})


    };


    return (
        <form className={classes.form} onSubmit={confirmHandler}>
            <div className= {`${classes.control} ${formInputsValid.name ? "" : classes.invalid}`}>
                <label htmlFor='name'>Your Name</label>
                <input type='text' id='name' ref={nameRef} />
                {!formInputsValid.name && <p>Name cant be empty</p>}
            </div>
            <div className={`${classes.control} ${formInputsValid.street ? "" : classes.invalid}`}>
                <label htmlFor='street'>Street</label>
                <input type='text' id='street' ref={streetRef} />
                {!formInputsValid.street && <p>Street cant be empty</p>}

            </div>
            <div className={`${classes.control} ${formInputsValid.zip ? "" : classes.invalid}`}>
                <label htmlFor='postal'>Postal Code</label>
                <input type='text' id='postal' ref={zipRef} />
                {!formInputsValid.zip && <p>Postal code must be 5 digits</p>}

            </div>
            <div className={`${classes.control} ${formInputsValid.city ? "" : classes.invalid}`}>
                <label htmlFor='city'>City</label>
                <input type='text' id='city' ref={cityRef} />
                {!formInputsValid.city && <p>City cant be empty</p>}

            </div>
            <div className={classes.actions}>
                <button type='button' onClick={props.hideCartHandler}>
                    Cancel
                </button>
                <button className={classes.submit}>Confirm</button>
            </div>
        </form>
    );
};

export default Checkout;