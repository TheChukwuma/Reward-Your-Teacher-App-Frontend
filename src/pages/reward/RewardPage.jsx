import React from 'react';
import { Route, Routes, NavLink, useLocation } from 'react-router-dom';
import Paystack from '../../components/sendreward/SendRewardPaystack';
import Wallet from '../../components/sendreward/SendReward';
import './RewardPage.css'

const RewardPage = ({state}) => {

    const teacherName = useLocation().state.teacherName;
    const phone = useLocation().state.phone;
    const id = useLocation().state.id;

    console.log("my reward page id is ", id);
    return (
        <div className='rewardPage'>
            <div className="heading">
                <h2>Payment Mode</h2>
            </div>
            <div className="paymentPath">
            <NavLink to='/reward/wallet' state={{ teacherName: teacherName, phone: phone, id : id }} className="btn">

                {/* <NavLink to='/reward/wallet' className="btn"> */}
                    <span>Wallet</span>
                </NavLink>
                <NavLink to='/reward/paystack' className="btn">
                    <span>Paystack</span>
                </NavLink>
            </div>
           
            <Routes>
                <Route path='/reward/paystack' element={<Paystack />} />
                <Route path='/reward/wallet' element={<Wallet />} />
            </Routes>

        </div>
    )
}

export default RewardPage;