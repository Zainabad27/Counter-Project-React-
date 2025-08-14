import React, { useId } from "react";

function InputBox({
    label = "from",
    amount=0,
    onAmountChange=()=>{},
    onCurrencyChange=()=>{},
    currencyOptions = [],
    selectCurrency = "usd",
    amountdisable = false,
    currencydisable = false,
    className = ""
}
) {

    const inputid = useId();

    return (
        <>
            <div className={`bg-white p-3 rounded-lg flex text-sm ${className}`}>
                <div className="w-1/2">
                    <label htmlFor={inputid} className="text-black/40 mb-2 inline-block">{label}</label>
                    <input id={inputid} className="outline-none w-full bg-transparent py-1.5" type="number" placeholder="Amount"
                        disabled={amountdisable} value={amount} onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))} />
                </div>
                <div className="w-1/2  flex-wrap justify-end text-right">
                    <p className="text-black/40 mb-2 w-full"> Currency Type</p>
                    <select className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none" value={selectCurrency}
                        onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
                        disabled={currencydisable}>

                        {currencyOptions.map((value) => (
                            <option key={value} value={value}>{value}</option>
                        ))}


                    </select>


                </div>
            </div>

        </>
    )
}

export default InputBox;