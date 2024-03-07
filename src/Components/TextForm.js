import React, { useState } from 'react';

export default function TextForm(props) {
    const handleUpClick = () => {
        console.log("Uppercase Button is clicked")
        if (text.length === 0) {
            props.showAlert('warning', 'First enter Your Text in Text Box')
        }
        else {
            setText(text.toUpperCase())
            props.showAlert('success', 'Converted to Upper Case Successfully')
        }
    }
    const handleOnChange = (event) => {
        console.log("OnChange is clicked")
        setText(event.target.value)
    }
    const handleLowClick = () => {
        if (text.length === 0) {
            props.showAlert('warning', 'First enter Your Text in Text Box')
        }
        else {
            console.log("Lowercase Button is clicked")
            setText(text.toLowerCase())
            props.showAlert('success', 'Converted to Lower Case Successfully')
        }

    }

    const handleCamelClick = () => {
        console.log("Camelcase Button is clicked")
        if (text.length === 0) {
            props.showAlert('warning', 'First enter Your Text in Text Box')
        }
        else {
            let arr = text.split(" ");
            for (let i = 0; i < arr.length; i++) {
                arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1).toLowerCase();
            }
            setText(arr.join(' '))
            props.showAlert('success', 'Converted to Capitalized Case Successfully')
        }

    }

    const handleCopy = () => {
        console.log("Copy Text Button is Clicked")
        if (text.length === 0) {
            props.showAlert('warning', 'First enter Your Text in Text Box')
        }
        else {
            let text = document.getElementById('text')
            text.select();
            navigator.clipboard.writeText(text.value);
            props.showAlert('success', 'Text Copied to clipboard Successfully')
        }

    }
    const handleRemove = () => {
        console.log("Remove all Button is clicked")
        if (text.length === 0) {
            props.showAlert('warning', 'First enter Your Text in Text Box')
        }
        else {
            setText('')
            props.showAlert('success', 'Text Area cleared Successfully')
        }

    }
    const handleExtraSpaces = () => {
        console.log("Extra Spaces Button is clicked")
        if (text.length === 0) {
            props.showAlert('warning', 'First enter Your Text in Text Box')
        }
        else {
            let newText = text.split(/[ ]+/)
            // console.log(newText)
            setText(newText.join(' '))
            props.showAlert('success', 'Extra Spaces Removed Successfully')
        }

    }

    const handleAltClick = () => {
        console.log("Alternate case Button is clicked")
        if (text.length === 0) {
            props.showAlert('warning', 'First enter Your Text in Text Box')
        }
        else {
            let newText = text.split('')
            for (let i = 0; i < newText.length; i++) {
                newText[i] = newText[i].toLowerCase();
                if (i < newText.length - 1) {
                    newText[i + 1] = newText[i + 1].toUpperCase();
                }
                i = i + 1
            }
            // console.log(newText)
            setText(newText.join(''))
            props.showAlert('success', 'Converted to Alternate Case Successfully')
        }

    }

    const handleInverseClick = () => {
        console.log("Inverse Case Button is clicked")
        if (text.length === 0) {
            props.showAlert('warning', 'First enter Your Text in Text Box')
        }
        else {
            var A = document.getElementById('text').value;
            var output = '';
            for (var i = 0, len = A.length; i < len; i++) {
                var character = A[i];
                if (character === character.toLowerCase()) {
                    output = output + character.toUpperCase();
                } else {
                    output = output + character.toLowerCase();
                }
            }
            // console.log(output)
            setText(output)
            props.showAlert('success', 'Inverse of text is done Successfully')
        }

    }
    const [Btext, setBtext] = useState('normal')
    const handleBold = () => {
        console.log('Bold text button is clicked')
        if (text.length === 0) {
            props.showAlert('warning', 'First enter Your Text in Text Box')
        }
        else {
            if (Btext === 'normal') {
                setBtext('bold')
            }
            else {
                setBtext('normal')
            }
            props.showAlert('success', 'Text converted to bold Successfully')
        }
    }
    const [Itext, setItext] = useState('initial')
    const handleItalic = () => {
        console.log('Bold text button is clicked')
        if (text.length === 0) {
            props.showAlert('warning', 'First enter Your Text in Text Box')
        }
        else {
            if (Itext === 'initial') {
                setItext('italic')
            }
            else {
                setItext('initial')
            }
            props.showAlert('success', 'Text converted to Italic Successfully')
        }

    }
    const handleReverseClick = () => {
        //strings in react is emmutable that's we can not reverse it directly
        console.log("Reverse String Button is clicked")
        // --------First Method-----------

        // let newText=text.split('')
        // let revStr=newText.reverse();
        // let str=revStr.join('')
        // setText(str)

        // ----------Second Method---------
        if (text.length === 0) {
            props.showAlert('warning', 'First enter Your Text in Text Box')
        }
        else {
            setText(text.split('').reverse().join(''));
            props.showAlert('success', 'Reverse of entered text done Successfully')
        }

    }

    const ListenClick = () => {
        console.log("Listen your Text Buuton is clicked")
        if (text.length === 0) {
            props.showAlert('warning', 'First enter Your Text in Text Box')
        }
        else {
            let speech = new SpeechSynthesisUtterance();
            speech.text = document.querySelector('#text').value;
            window.speechSynthesis.speak(speech);
            props.showAlert('success', 'Listen your Entered Text carefully')
        }

    }


    const [text, setText] = useState("");

    return (
        <>
            <div className='container my-3'>
                <h1>{props.heading}</h1>
                <div className="form-floating my-2">
                    <textarea className='form' id='text' rows={8} value={text} placeholder='Enter Your Text Here'
                        onChange={handleOnChange} style={{
                            backgroundColor: props.mode === 'light' ? 'white' : '#c4b0b0',
                            color: props.mode === 'dark' ? 'white' : 'black',
                            fontWeight: Btext,
                            fontStyle: Itext,
                            width: '100%',
                            border: '2px solid black',
                            borderRadius: '5px',
                        }}></textarea>
                </div>
                <div className='btn-conatiner'>
                    <button className="btn btn-primary" onClick={handleUpClick}>covert to Uppercase</button>
                    <button className="btn btn-primary" onClick={handleLowClick}>covert to Lowercase</button>
                    <button className="btn btn-primary" onClick={handleCamelClick}>Capitalized Case</button>
                    <button className="btn btn-primary" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
                    <button className="btn btn-primary" onClick={handleAltClick}>aLtErNaTiNg tExT</button>
                    <button className="btn btn-primary" onClick={handleInverseClick}>Inverse case</button>
                    <button className="btn btn-success" onClick={ListenClick}>Listen your Text</button>
                    <button className="btn btn-primary" onClick={handleReverseClick}>Reverse case</button>
                    <button className="btn btn-primary" onClick={handleBold}>Make Bold</button>
                    <button className="btn btn-primary" onClick={handleItalic}>Make Italic</button>
                    <button className="btn btn-primary" onClick={handleCopy}>Copy text</button>
                    <button className="btn btn-danger" onClick={handleRemove}>Remove all text</button>
                </div>
            </div>
            <div className="container my-5">
                <h3>Your Text Summary</h3>
                <p>{text.split(/\s+/).filter((element) => { return element.length !== 0 }).length} words AND {text.length} characters</p>
                <h6>You can read above text in {0.008 * text.length}s</h6>
                <h2>Preview</h2>
                <p>{text.length > 0 ? text : "Enter Text in above Text box to preview it here"}</p>
            </div>
        </>
    )
}
