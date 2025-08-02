import { useState } from 'react';
import './App.css'


function Colors() {
    let [clr, setclr] = useState("black")
    const changecolor = (color) => {
        setclr(color);
    }
    return (
        <div className='m-0 p-45 rounded-2xl border-6' style={{ backgroundColor: clr }}>

            <footer className='m-0 p-45 rounded-2xl border-8'>
                <div className='bg-red-400 mb-1 rounded-2xl' onMouseEnter={() => { changecolor("red") }}>Red</div>
                <div className='bg-green-400 mb-1 rounded-2xl ' onMouseEnter={() => { changecolor("green") }}>Green</div>
                <div className='bg-purple-400 mb-1 rounded-2xl ' onMouseEnter={() => { changecolor("purple") }}>Purple</div>
                <div className='bg-blue-400 mb-1 rounded-2xl ' onMouseEnter={() => { changecolor("blue") }}>Blue</div>
                <div className='bg-pink-400 mb-1 rounded-2xl ' onMouseEnter={() => { changecolor("pink") }}>Pink</div>
            </footer>
        </div>
    )

};

export default Colors;