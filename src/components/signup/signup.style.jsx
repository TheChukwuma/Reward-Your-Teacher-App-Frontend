import styled from "styled-components";
import { Link } from 'react-router-dom'



export const SignUpHeader = styled.h1`
    font-family: 'Inter';
    font-weight: 700;
    font-size: 30px;
    line-height: 42px;
    color: #21334F;
    margin-bottom:30px;

    @media Screen and (max-width:768px){
        font-size: 24px;
        
    }
`;
export const SignUpHeader1 =styled.div`
    margin:auto;
    display:flex;
    justify-content:center;
    gap:21rem;
    font-family: 'Inter';
    font-weight: 500;      
    font-size: 24px;
    line-height: 22px;
    color: #21334F;
      
    @media only screen and (max-width: 600px) {
        flex-direction: column;

    span{
        color: #C6C3D4;
        font-weight: 300; 
    }

    // @media Screen and (max-width:768px){
    //     width:86%;
`;



export const RewardYourTeacher = styled.div`
    margin:auto;
    display:flex;
    justify-content:center;
    gap:1rem;
    h1{
        font-family: 'Inter';
        font-weight: 600;
        font-size: 24px;
        line-height: 29px;
        color: #55A630;
    }
`;

export const ImageWrapper = styled.div`
    display: flex;
    justify-content: center;
    gap: 5%;
    margin-bottom: 1%;
   
   

    img{
        height:100%;
        weight:10%
        top:14px;
        
    }
`;

export const SignUpWrapper = styled.div`
    display:grid;
    gap:2rem;
    padding:5%;
    background: #E5E5E5;

    @media Screen and (max-width:768px){
        font-size: 24px;

       
`;

export const SignUpWrapper1  = styled.div`
display:grid;
    gap:2rem;
    padding:5%;
    background: #fff;
    `;


export const SignUpWrapper2  = styled.div`
    margin:auto;
    background:#fff; 
   
    

`;

export const FormWrapper = styled.form`
    width:61.6%;
    margin:auto;
    padding:7%;
    background:#fff; 
    
    @media Screen and (max-width:768px){
            font-size: 24px;
`;

export const InputBox = styled.div`
    display:flex;
    flex-direction:column;
    margin:20px 0;
    gap:1rem;
   button{
           height: 61px;
           background: #55A630;
           border:none;
           color:#fff;
           font-size:16px; 

    }
    label{
        font-size:18px;
        line-height: 15px;
        color: #21334F;
    }

     select {
        height: 67px;
        border: 1px solid #BDBDBD;
        left: 29.17%;
        right: 29.17%;
        top: 41.67%;
        bottom: 37.5%;
    }
    

`;

export const Input = styled.input`
    padding:20px;
    background: #FFFFFF;
    border: 1px solid #D9D9D9;
    font-size:18px;


   

`;
export const LineSection = styled.div`
    display:flex;
    justify-content:space-between;
    div{
        font-family:'Inter';
        font-weight:400;
        font-size:18px;
        line-height:15px;
    }
    span{
        border-top:1px solid #D9D9D9;
        width:45%;
        height:1px;
        margin-top:10px;
        color:#21334F
    }
   
`;


export const GoogleSignUpLink = styled(Link)`
    text-decoration:none;

    font-family: 'Inter';
    font-weight: 500;
    font-size: 12px;
    line-height: 15px;
    color: #21334F;

`;

export const RedirectLink = styled(Link)`
    display:flex;
    justify-content:center;
    align-items:center;
    margin:20px 0;
    padding:20px;
    color:#ffff;
    height:61%;
    padding: 15px 30px;
    text-decoration:none;
    background:#55A630;



`;

export const GoogleSignUpBox = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    margin:20px 0;
    gap:.5rem;
    border:  1px solid #D9D9D9;
    padding:20px;
    color:#21334F;
    height:50%;
    padding: 12px 24px;
 
`;

export const ImageWrapper1 = styled.div`
    width:5%;


`;

export const AccountCheck = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;

    p{
        font:Inter;
        weight:700;
        font-size:12px;
        line height:14.52px;
        color:#21334F;
        text-decoration:none;
    }
    ${Link}{
        color:#80B918;
        text-decoration:none;
    }
    
`;



// export const SignupLink = styled(Link)`
//     color:#80B918;
//     text-decoration: none;

// `;

    // export const Dropdown = styled(Dropdown)`
    // display:flex;
    // flex-direction:column;
    // margin:20px 0;
    // gap:1rem;

    // `;

