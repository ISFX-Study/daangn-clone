import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Layout from './components/layout';

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
        {/* <div>
            <a href="https://vitejs.dev" target="_blank">
            <img src={viteLogo} className="logo" alt="Vite logo" />
            </a>
            <a href="https://react.dev" target="_blank">
            <img src={reactLogo} className="logo react" alt="React logo" />
            </a>
        </div>
        <h1>{message}</h1>
        <div className="card">
            <button onClick={() => setCount((count) => count + 1)}>
            count is {count}
            </button>
            <p>
            Edit <code>src/App.tsx</code> and save to test HMR
            </p>
        </div>
        <p className="read-the-docs">
            Click on the Vite and React logos to learn more
        </p> */
        <Layout />
        }
        {/* <nav>
            <ul>
                <li><a href="#">당근</a></li>
                <li><a href="#">중고거래</a></li>
                <li><a href="#">동네업체</a></li>
                <li><a href="#">알바</a></li>
                <li><a href="#">부동산 직거래</a></li>
                <li><a href="#">중고차 직거래</a></li>
            </ul>
        </nav> */}
        </>
    )
}

export default App