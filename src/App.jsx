import React, {useEffect, useRef, useState} from 'react';
import "./App.scss"

function App() {
    const [count, SetCount] = useState(283)
    const [procent, setPro] = useState(0)
    const out = useRef(null)
    useEffect(() => {
        const interval = setInterval(() => {
            if (out.current) {
                const max = Math.floor((out.current.scrollTop * 100) / 420);
                setPro(max);
                const field = 283 - ((max * 283) / 100)
                SetCount(field);
            }
        }, 100);

        return () => {
            clearInterval(interval);
        };
    }, []);
    return (
        <div className="App">
            <h1>HomeWork(useState, useEffect, useRef)</h1>
            <div className="App-all">
                <div className="App-out" ref={out}>
                    <div className="App-modul">
                        <p>$</p>
                        <p>#</p>
                        <p>!</p>
                    </div>
                    <div className="App-pro">
                        <svg width="100" height="100" xmlns="https://www.w3.org/2000/svg">
                            <circle cx="50" cy="50" r="45" fill="none" stroke="#ddd" strokeWidth="6"
                                    strokeDasharray="283" strokeDashoffset="0"
                            />

                            <circle
                                id="progress-circle"
                                cx="50"
                                cy="50"
                                r="45"
                                fill="none"
                                stroke="green"
                                strokeWidth="6"
                                strokeDasharray="283"
                                strokeDashoffset={count}
                                transform="rotate(-90 50 50)"
                            />

                            <text x="50" y="55" fontSize="16" textAnchor="middle" fill="green">
                                <tspan id="progress-text">{procent}%</tspan>
                            </text>
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;