import React, {useState, useEffect} from "react";
import { useAPI } from "../../fetcher";

export default function Games() {

    const [tokenz, setTokenz] = useState([]);


    const { tokens } = useAPI();
    console.log(tokens);

    useEffect(() => { 
        setTokenz(tokens)
    }, [])


    return (
        <ul>
        {tokenz.map(item => (
            <li>{item.address}</li>
        ))}
        </ul>
    );


}




