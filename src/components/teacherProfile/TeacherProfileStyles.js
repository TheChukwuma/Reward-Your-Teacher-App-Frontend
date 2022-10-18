import styled from "styled-components";
export const TeacherProfileStyles = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    z-index: 1;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
    background-color: rgb(0, 0, 0);
    background-color: rgba(0, 0, 0, 0.4);
`;
export const ModalContent = styled.div`
    width: 480px;
    background: #fff;
`;
export const ModalHeader = styled.div`
    position: relative;
    height: 50px;
    border-bottom: 1px solid #d8d8d8;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 600;
    font-size: 15px;
    margin-top: 1%;
    color: #03435F;
`
export const ModalBody = styled.div`
   
`
export const CloseButton = styled.button`
    position: absolute;
    right: 57px;
    border: 0;
    opacity: 0.5;
    background: transparent;
    font-weight: bold;
    font-size: 30px;
    color: #21334F;
    cursor: pointer;
    :hover {
        opacity: 1;
    }
`

