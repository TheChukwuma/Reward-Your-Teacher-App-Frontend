import axios from 'axios';
import React from 'react';
import { FormStyle } from './PaymentData.style';

const FundForm = () => {

  const token = localStorage.getItem('token');

  console.log("my token is", token);
    const [amount, setAmount] = React.useState(0);

    const handleAmountChange = async (e) => {
        e.preventDefault();
        setAmount(e.target.value);
        console.log(amount);
    };
    const handlePayment = async (e) => {
      try{
        e.preventDefault();
        const data = {
          amount,
        };
        console.log(data);
        const response = await axios.post(
          `http://localhost:8081/api/v1/transactions/deposit`,
          data,
          {
            headers: {
              Authorization: `${token}`,
            },
          }
        );
        const checkoutUrl = response.data.data.authorization_url; 
        
        window.location.href = checkoutUrl;
        return response.data;
      
      }
      catch (error) {
        console.log("my token is also", token);

        console.log(error);

      }
    };


  return (
    <>
      <FormStyle>
    <form>
        <div className="payment-data-form">
            <p className='modal-title'>Amount To Fund</p><br/>
            <input type="text" className="payment-data-form input" id="amount" placeholder="Enter amount"
            onChange={(e)=> handleAmountChange(e)}/>
        </div>
        <button type="submit" className="btn btn-primary" onClick={handlePayment}>Fund Wallet</button>
    </form>
    </FormStyle>
    </>

  )
}

export default FundForm;
