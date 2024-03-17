import { useState, useEffect } from 'react'
import './App.css'

import Layout from './components/layout'

function App() {
    const [count, setCount] = useState(0)
    const [message, setMessage] = useState("");

    const url = '/api/test/hello'; 

    // useEffect(() => {
    //     // fetch에 대해서 알아볼것
    //     fetch(url)
    //         .then(response => response.text())
    //         .then(message => {
    //             setMessage(message);
    //     });    
    // },[])

    return (
        <>
        {
            <Layout />
        }
        </>
    )
}

export default App