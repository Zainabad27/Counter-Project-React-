import { useState } from 'react';
import './App.css'

function Card({channel="Read more"}) {
    
    let [btn, setbtn] = useState("Read more");
    let [photolink, setphotolink] = useState("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyGTVrvlWsvIV7_pQ46ssVL_6-XwrRk9-I6A&s");

    const changebtn = () => {
        if (btn === "Changed.") {
            setbtn(`${channel}`);
            return;
        }
        else {
            setbtn("Changed.")
        }

    }



    return (
        <>
            <h1 className='bg-green-400 text-black p-4 rounded-xl'>Test Tailwind </h1>
            <div className="max-w-xs p-4 rounded-md shadow-md dark:bg-gray-50 dark:text-gray-800">
                <img src={photolink} alt="" className="object-cover object-center p-4 w-full rounded-xl dark:bg-gray-500" />
                <div className="flex flex-col justify-between p-6 space-y-8">
                    <div className="space-y-2">
                        <h2 className="text-3xl font-semibold tracking-wide">Welcome</h2>
                        <p className="dark:text-gray-800">Welcome to the First Card made by me using Tailwind.</p>
                    </div>
                    <button type="button" onClick={changebtn} className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md dark:bg-violet-600 dark:text-gray-50">{btn}</button>
                </div>
            </div>
        </>

    )
}


export default Card;