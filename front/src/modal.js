import React from 'react'
import styled from "styled-components";
import { useState } from 'react';
import MC from './modulecontrol';
export const Modal = () => {
    const [isOpen, setIsOpen] = useState(true);
  
    const handleModal = () => {
      setIsOpen(!isOpen)
    };
    
    return (
        <Container>
           <MC/>
      
      <Container>
     
      {isOpen ===false ?
        null
      : <ModalBackdrop onClick={handleModal}>
      <ModalView>
        <div className="close-btn" onClick={handleModal}>&times;</div>
        {/* <div className="desc">HELLO WORLD!</div> */} 
      </ModalView>
    </ModalBackdrop>
      }
  
      </Container>
      
      
      </Container>
    );
  };

  
const Container = styled.div`
 position: absolute;
  transform: translate(-50%, -50%);
  left: 50%;
  top: 30%;
  width: 400px;
  height: 200px;
  color: black;
  /* background-color: 
  rgba(20, 20, 20, 0.1); */
    /* linear-gradient(
      rgba(20, 20, 20, 0.1),
      rgba(20, 20, 20, 0)
    ),white; */
  margin-top: 40px;
  font-size: 40px;
  text-align: center;
`;
const ModalBtn = styled.button`
 background-color: #4000c7;
  text-decoration: none;
  border: none;
  padding: 20px;
  color: white;
  border-radius: 30px;
  cursor: grab;
`;
const ModalBackdrop = styled.button`
 /* background-color: #4000c7; */
  text-decoration: none;
  border: none;
  padding: 20px;
  color: white;
  border-radius: 30px;
  cursor: grab;
`;
const ModalView = styled.button`
 transform: translate(-50%, -50%);
  left: 50%;
  top: 30%;
  width: 400px;
  height: 200px;
  color: black;
  /* background-color: 
  rgba(20, 20, 20, 0.1); */
    /* linear-gradient(
      rgba(20, 20, 20, 0.1),
      rgba(20, 20, 20, 0)
    ),white; */
  margin-top: 40px;
  font-size: 40px;
  text-align: center;
`;

export default Modal;