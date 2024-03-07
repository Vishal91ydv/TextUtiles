import React from 'react'

function Alert(props) {
    function capitalized(word) {
        let str = word.toLowerCase()
        return str.charAt(0).toUpperCase() + str.slice(1)
    }
    return (
        <div style={{height:'50px'}}>
            {props.Alert &&  <div>
                <div className={`alert alert-${props.Alert.type} alert-dismissible fade show`} role="alert">
                    <strong>{capitalized(props.Alert.type)} : </strong>{props.Alert.msg}
                    <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                </div>
            </div>}
        </div>
    )
}

export default Alert
