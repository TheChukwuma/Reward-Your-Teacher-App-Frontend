import styled from 'styled-components';

export const DescriptionStyles = styled.div`
    /* border: 2px solid red; */
    display: flex;
    justify-content: space-between;
    background: rgba(255, 242, 235, 0.6);
    padding: 6% 10%;
    width:100%;

    .left-side {
        width: 40%;
    }

    /* .left-details{
        border: 2px solid blue;
    } */

    .left-side h2  {
        font-family: 'Inter';
        font-style: normal;
        font-weight: 700;
        font-size: 2.5rem;
        line-height: 3rem;
        color: #012A4A;
        margin-bottom: 5%;
    }

    #left-text {
        font-family: 'Inter';
        font-style: normal;
        font-weight: 400;
        font-size: 1rem;
        line-height: 1.75rem;
        color: #012A4A;
        margin-bottom: 8%;
    }


    .right-side {
        width: 50%;
        /* border: 2px solid black; */
        position: relative;
    }

    .right-side img {
        width: 85%;
        position: absolute;
        top: 25%;
        right: 0;
        padding: 0;
        margin: 0;
    }

`