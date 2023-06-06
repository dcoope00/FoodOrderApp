import React from "react"
import styles from "./Modal.module.css"
import ReactDom from "react-dom"

const Backdrop = props => {
    return <div className={styles.backdrop} onClick = {props.hideCart}>


    </div>


}

const ModalOverlay = props => {

    return <div className={styles.modal}>

        <div className={styles.content}>{props.children}</div>
    </div>

}

const portalElement = document.getElementById("overlays")
const Modal = props => {

    return (
        <>
            {ReactDom.createPortal(<Backdrop hideCart = {props.hideCart} />, portalElement)}
            {ReactDom.createPortal(<ModalOverlay>{props.children}</ModalOverlay>, portalElement)}

        </>


    )

}

export default Modal