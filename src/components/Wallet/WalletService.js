import axios from "axios";

//FUNCTION TO GET WALLET BALANCE

const token = localStorage.getItem("token");

export const getWalletBalance = async () => {

    try {
    const response = await axios.get(
        `http://localhost:8081/api/v1/wallets`,
        {
        headers: {
            Authorization: `${token}`,
        },
        }
    )
    console.log(response.data);
    return response.data.data;
    } catch (error) {
    console.log(error);
    };  
};



export const fundWallet = async (amount) => {
    try {
        const url = ` http://localhost:8081/api/v1/transactions/deposit`;
        const response = await axios.post(url, {
            headers: {
                Authorization: `${token}`,
            },
        });
        const checkoutUrl = response.data.data.authorization_url;
        window.location.href = checkoutUrl;
        console.log(response.data);
        return response.data;
    } catch (error) {
        console.log(error);
    }
};
    