import { useState, useEffect, useCallback,useRef } from 'react';
import './App.css'


function Myapp() {
    let [length, setlength] = useState(8);
    let [numallowed, setnumallowed] = useState(false);
    let [charallowed, setcharallowed] = useState(false);
    let [password, setpassword] = useState("");

    let [color,setcolor]=useState("bg-blue-900");

     const passwordref=useRef(null);

    const password_generator = useCallback(() => {
        let str = "ASDFGHJKLQWERTYUIOPZXCVBNMqwertyuiopasdfghjklzxcvbnm";
        let pass = "";

        if (numallowed) {
            str += "0123456789";
        }
        if (charallowed) {
            str += `!"@#$%^&*()_-<>?:{},./;'[]`
        }



        for (let i = 0; i < length; i++) {
            let num = Math.floor(Math.random() * str.length);
            pass += str.charAt(num);
        }
        setpassword(pass);
    }, [length, numallowed, charallowed])

    useEffect(()=>{
        password_generator();
    },[length,charallowed,numallowed,password_generator]);


    const copyfunc=()=>{
        passwordref.current?.select()
        passwordref.current?.setSelectionRange(0,31)
        window.navigator.clipboard.writeText(password);

    }




    return (
        <>
            <h1 className='my-3 text-center text-amber-50'>Password Generator</h1>
            <div className='w-full max-w-md mx-auto shadow-md  rounded-lg px-4 my-8 text-orange-500 bg-gray-700'>
                <div className='flex shadow rounded-b-lg mb-4 overflow-hidden'>
                    <input
                        type="text"
                        value={password}
                        readOnly
                        className='outline-none w-full py-1 px-3'
                        ref={passwordref} />
                    <button onClick={copyfunc} onMouseEnter={()=>{setcolor("bg-blue-800")}} onMouseLeave={()=>{setcolor("bg-blue-900")}} className={`outline-none ${color} text-amber-50 px-3 py-0 shrink-0`}>Copy</button>
                </div>
           
            <div className='flex text-sm gap-x-2'>
                <div className='flex items-center gap-x-1 '>
                    <input type="range" min={7} max={30} value={length} className='cursor'
                        onChange={(e) => { setlength(e.target.value) }} /> <label htmlFor='cursor' className='text-amber-50'>{length}</label>
                </div>
                <div className='flex items-centergap-x-1'>
                    <input type="checkbox" defaultChecked={numallowed}
                        id="numberInput"
                        onChange={() => { setnumallowed((prev) => !prev) }} />
                    <label htmlFor="numberInput" className='text-amber-50'>Numbers</label>
                </div>
                <div className='flex items-centergap-x-1'>
                    <input type="checkbox" defaultChecked={charallowed}
                        id="characterInput"
                        onChange={() => { setcharallowed((prev) => !prev) }} />
                    <label htmlFor="numberInput" className='text-amber-50'>Characters</label>
                </div>
            </div>
             </div>

        </>
    )
};



export default Myapp;