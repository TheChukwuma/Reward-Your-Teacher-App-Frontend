import React from "react";
import { WalletBalanceContainer} from "./WalletBalance.style";
import Logo from "../../assets/Add.png";
import { getWalletBalance} from "./WalletService";
import  FundForm  from "./PaymentData";
import Modal from "./Modal/Modal";

const WalletBalance = () => {
    const [balance, setBalance] = React.useState(0);
    const [showForm, setShowForm] = React.useState(false);
    
    var formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'NGN',
      });
    React.useEffect(() => {
        getWalletBalance().then((res) => {
           setBalance(res);
        });
    }, [balance]);
 
    
    const handlePaymentData = () => {
      setShowForm(!showForm)
    }
    console.log("token to see state :", localStorage.getItem("token"));
    return (
        <WalletBalanceContainer>
            <div className="container">
                <div className="sub-container">
                    <div className="subcontainerMoney">
                        <p>My Wallet Ballance</p>
                        <h1 className="amount">{formatter.format(balance)}</h1>
                        <div className="btn" onClick={handlePaymentData}> 
                            <img src={Logo} alt="logo" />
                            <h3>Add money</h3> 
                        </div>
                    </div>
                    <div className="ptag">
                        <p className="sideParagraph">Account is active</p> 
                    </div>
                 </div>  
            </div>

           {
            showForm && <Modal
            title="Payment Details"
            closeModal={handlePaymentData}
            >
                <FundForm />
            </Modal>
           } 
                
        </WalletBalanceContainer>
    );   
}
export default WalletBalance;