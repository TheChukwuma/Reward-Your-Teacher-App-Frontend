import React, {useState, useEffect} from "react";
import axios from "axios";
import './TotalMoneySent.css'
import logo from '../../assets/VectorMoneySent.png';


const TotalMoneySent = () => {
    const [amount, setAmount] = useState();
    const token = localStorage.getItem("token");


    const FetchTotalMoneySent = async () => {
        try {
            const response = await axios
            .get (
                `http://localhost:8081/api/v1/transactions/student/moneysent`,
                {
                    headers: {
                        Authorization : `${token}`,
                    }
                }
            )
            .then((response) => {
                console.log(response.data.data);
                setAmount(response.data.data);
            })

        }catch(error){
            console.log(error)
        }
    }

    useEffect(()=>{
        FetchTotalMoneySent();
    }, []);

    var formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'NGN',
      });


    return (
        <div className="totalMoneySent">
        <div className="bgimage"></div>
        <div className="container">
            <div className="text">
            <h3>Total Money Sent</h3>
            <h1>{formatter.format(amount)}</h1>
            <p>Sent</p>
            </div>
            <div className="logo">
                <img src={logo} alt="money receivd logo"/>
            </div>
        </div>
        </div>
       
    )
}

export default TotalMoneySent