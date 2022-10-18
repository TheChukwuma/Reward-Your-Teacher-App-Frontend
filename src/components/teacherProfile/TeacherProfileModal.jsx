import React from "react";
import {
 TeacherProfileStyles,
  ModalContent,
  ModalHeader,
  CloseButton,
  ModalBody,
} from "./TeacherProfileStyles";

const TeacherProfileModal = ({ title, children, closeModal}) => {
  return (
    <TeacherProfileStyles>
      <ModalContent>
        <ModalHeader>
          <p>{title}</p>
          <CloseButton
            onClick={(e) => {
              closeModal(e);
            }}
          >
            &times;
          </CloseButton>
        </ModalHeader>
        <ModalBody>{children}</ModalBody>
      </ModalContent>
    </TeacherProfileStyles>
  );
};
export default TeacherProfileModal;
