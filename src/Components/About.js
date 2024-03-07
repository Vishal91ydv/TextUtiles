import React, { useState } from 'react'

function About() {
    const [myStyle, setMyStyle] = useState({
        color: 'black',
        backgroundColor: 'white',
    });

    const [btnText, setBtnText] = useState('Enable Dark Mode')

    const toggleStyle = () => {
        if (myStyle.color === 'black') {
            setMyStyle({
                color: 'white',
                backgroundColor: 'black'
            })
            setBtnText('Enable Light mode');
        }
        else {
            setMyStyle({
                color: 'black',
                backgroundColor: 'white',
            })
            setBtnText('Enable Dark mode');

        }
    }

    return (
        <>
            <div className='container my-3' style={myStyle}>
                <h1>About Us</h1>
                <div class="accordion" id="accordionPanelsStayOpenExample">
                    <div class="accordion-item" style={myStyle}>
                        <h2 class="accordion-header">
                            <button class="accordion-button" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                                <strong>Welcome to the Convert Case Text Generator Tool</strong>
                            </button>
                        </h2>
                        <div id="panelsStayOpen-collapseOne" class="accordion-collapse collapse show">
                            <div class="accordion-body">
                                A very handy online text tool where you can change between lower case and upper case letters, where you can
                                capitalize, uncapitalize, convert to mix case and transform your text.
                            </div>
                        </div>
                    </div>
                    <div class="accordion-item" style={myStyle}>
                        <h2 class="accordion-header">
                            <button class="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
                                <strong>Language Processing Tools</strong>
                            </button>
                        </h2>
                        <div id="panelsStayOpen-collapseTwo" class="accordion-collapse collapse">
                            <div class="accordion-body">
                                Introduce tools for basic language processing tasks like tokenization, stemming, and counting word frequencies.
                                Showcase how these tools can assist in natural language processing.
                            </div>
                        </div>
                    </div>
                    <div class="accordion-item" style={myStyle}>
                        <h2 class="accordion-header">
                            <button class="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
                                <strong>Free Online Tool</strong>
                            </button>
                        </h2>
                        <div id="panelsStayOpen-collapseThree" class="accordion-collapse collapse">
                            <div class="accordion-body">
                                If "TextUtils" refers to an online tool or website that provides text-related utilities, 
                                it might be offered for free without any payment required. This could be a resource where users 
                                can access and use various text tools without charge.
                            </div>
                        </div>
                    </div>
                    <div class="accordion-item" style={myStyle}>
                        <h2 class="accordion-header">
                            <button class="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseFour" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
                                <strong>Case Conversion Tool</strong>
                            </button>
                        </h2>
                        <div id="panelsStayOpen-collapseFour" class="accordion-collapse collapse">
                            <div class="accordion-body">
                                Provide an interactive tool that allows users to convert text between different case styles, such as uppercase, lowercase, title case, camel case, snake case, etc.
                                Include examples and usage instructions for each case style.
                            </div>
                        </div>
                    </div>
                    <div class="accordion-item" style={myStyle}>
                        <h2 class="accordion-header">
                            <button class="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseFive" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
                                <strong>Open Source Library</strong>
                            </button>
                        </h2>
                        <div id="panelsStayOpen-collapseFive" class="accordion-collapse collapse">
                            <div class="accordion-body">
                            If "TextUtils" is an open-source library, it means that the source code of the utilities is made available to the public for free. 
                            Developers can use, modify, and distribute the library in accordance with its open-source license.
                            </div>
                        </div>
                    </div>
                </div>
                <button className="btn btn-primary my-3" onClick={toggleStyle}>{btnText}</button>
            </div>
        </>
    )
}

export default About
