import { useState, useEffect, useCallback, useRef } from 'react';
import InputBox from './components/InputBox.jsx'
import useCurrencyInfo from './hooks/CurrencyInfo.js';

import './App.css'

function Myapp2() {



    const [from, setfrom] = useState("usd");
    const [to, setto] = useState("pkr");
    const [Amount, setamount] = useState(0);
    const [changedamount, setchangeamount] = useState(0);

    const currency_data = useCurrencyInfo(from);
    const options = Object.keys(currency_data);



    const [clr,setclr]=useState("'bg-blue-800")


    const swap=()=>{
        const temp=from;

        setfrom(to);
        setto(temp);


    }

    const calculate=()=>{
        setchangeamount(Amount*currency_data[from]*currency_data[to])
    }


    return (
        <>
            <div className='flex justify-center items-center h-screen'
            >
                <div className='backdrop-blur-md bg-blue-500/30   border border-white/20 text-6xl text-amber-50 absolute top-15 rounded-lg p-4'>Currency Exchange</div>
                <div className='p-6 rounded-lg w-1/2  bg-blue-500/30 backdrop-blur-md border border-white/20 '>
                <div className='mb-2'> <InputBox label='from' currencyOptions={options} amount={Amount} onAmountChange={setamount} onCurrencyChange={setfrom} selectCurrency={from} /></div>
                <button className={`${clr} rounded-lg w-14 border text-amber-950`} onMouseEnter={()=>{
                    setclr("bg-blue-800")
                }} onMouseLeave={()=>{
                    setclr("bg-blue-300")
                }} onClick={swap}>Swap</button>
                
                <div className='mt-2'> <InputBox label='to' onCurrencyChange={setto} selectCurrency={to} amountdisable={true} currencyOptions={options} amount={changedamount} /></div>
                </div>

                <div className=' text-amber-50  absolute bottom-20 left-1/2 -translate-x-1/2 bg-green-500/30 backdrop-blur-md rounded-xl p-4 border border-white/20'><button onClick={calculate} >Change {from.toUpperCase()} to {to.toUpperCase()}</button></div>
            </div>

        </>
    )
};



export default Myapp2