import React from "react";
import styled from "styled-components";
<<<<<<< Updated upstream
=======

>>>>>>> Stashed changes
const StyledInput = styled.input`
  width: ${(props) => props.width || "476px"};
  height: ${(props) => props.height || "60px"};
  border-radius: ${(props) => props.borderRadius || "8px"};
  border: 1px solid;
<<<<<<< Updated upstream
  border-color: ${(props) => props.borderColor || "rgba(0, 0, 0, 0.52)"};
=======
  border-color: ${(props) => props.borderColor || "rgba(255, 0, 0, .52)"};
>>>>>>> Stashed changes
  background-image: ${(props) => props.backgroundImage || "none"};
  background-repeat: no-repeat;
  background-size: 30px 25px, 24px 24px;
  background-position: 20px center, calc(100% - 20px) center;
  margin: ${(props) => props.margin || "0"};
  padding: 8px 60px;
  font-size: 16px;
  outline: none;
`;
<<<<<<< Updated upstream
const Input = (props) => {
  return <StyledInput {...props} />;
};
=======

const Input = (props) => {
  return <StyledInput {...props} />;
};

>>>>>>> Stashed changes
export default Input;
