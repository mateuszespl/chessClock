import React from "react";
import { StyledModal } from "./Modal.styled";

export const Modal = ({ message, setIsModalVisible }) => {
  return (
    <StyledModal>
      <div>
        <p>{message}</p>
        <button onClick={() => setIsModalVisible(false)}>Dismiss</button>
      </div>
    </StyledModal>
  );
};
