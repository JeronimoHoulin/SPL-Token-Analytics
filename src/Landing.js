/*import React, { useEffect, useState } from 'react'
import App from './App'

function Landing(props) {

    const [show, setShow] = useState(false)

    console.log("your are in landing")

    const msg = "you are in App"



    return (
        <div className="Landing">
        {
            !show 
            &&<h1>Welcome to SolanaPrime's SPL Token Analytics Dashboard!</h1>
            &&<button onClick={() => setShow(!show)} >Launch App</button>

        }
        

        {
            show && <App msg = {msg}/>
            &&<button onClick={() => setShow(!show)} >Home</button>
        }



        </div>
    );
}

export default Landing;
*/