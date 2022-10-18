import styled from 'styled-components';

export const SuccessModalStyles = styled.div`
display: absolute;
top: 0;
left: 0;
bottom: 0;
right: 0;
background-color: rgba(0,0,0,0.75);
width: 100%;
height: 100vh;
display: grid;
place-content: center;
.modal-content{
    width: 500px;
    height: max-content;
    background-color: #fff;
    border-radius: 1rem;
}

`