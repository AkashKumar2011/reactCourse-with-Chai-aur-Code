import {useEffect, useState} from "react"


function useCurrencyInfo(currency){
    const [data, setData] = useState({})
    useEffect(() => {
        // fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
        fetch(`https://api.currencyfreaks.com/v2.0/rates/latest?apikey=1ea7f99f3cdf4b0c9ff722f22ab1e5cc`)
        .then((res) => res.json())
        .then((res) => setData(res.rates))
        // console.log(data);
    }, [currency])
    // console.log(data);
    return data
}

export default useCurrencyInfo;