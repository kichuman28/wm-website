import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';

const DrawerContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh; /* Change to full viewport height */
  background-color: rgba(16, 36, 71, 0.8);
  color: #fff;
  z-index: 1000;
  display: flex;
  flex-direction: column;
  justify-content: flex-start; /* Align items to the start for scrolling */
  align-items: center;
  padding: 20px;
  transition: transform 0.3s ease;
  transform: translateY(${props => (props.isOpen ? '0' : '-100%')});
  overflow-y: auto; /* Enable vertical scrolling */

  @media (max-width: 768px) {
    padding: 10px;
  }
`;

const Content = styled.div`
  text-align: center;
  margin: 40px;
  font-size: 1.2em;
  flex: 1; /* Allow content to grow and take available space */

  @media (max-width: 768px) {
    margin-top: 40px;
    font-size: 1em;
  }

  @media (max-width: 576px) {
    margin-top: 40px;
    font-size: 0.9em;
  }
`;

const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 20px 0;
`;

const Button = styled.button`
  font-size: 1.2em;
  background-color: #fff;
  color: #102447;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #47bfbf;
    color: #fff;
  }

  @media (max-width: 768px) {
    font-size: 1em;
  }

  @media (max-width: 576px) {
    font-size: 0.9em;
  }
`;

const Drawer = ({ isOpen, onClose, content }) => {
  const drawerRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (drawerRef.current && !drawerRef.current.contains(event.target)) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, onClose]);

  return (
    <DrawerContainer isOpen={isOpen} ref={drawerRef}>
      <Content>
        <p>{content}</p>
      </Content>
      <ButtonContainer>
        <Button onClick={onClose}>Know More</Button>
      </ButtonContainer>
    </DrawerContainer>
  );
};

export default Drawer;
