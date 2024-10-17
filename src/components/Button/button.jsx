import styled from "styled-components";
import { color } from "../../styles/theme";

const StyledButton = styled.button`
  width: ${(props) => props.width || "476px"};
  height: ${(props) => props.height || "60px"};
  border-radius: ${(props) => props.borderRadius || "8px"};
  margin: ${(props) => props.margin || "0"};
  background-color: ${(props) => props.backgroundColor || `${color.Blue[2]}`};
  color: white;
`;

const Button = (props) => {
  return <StyledButton {...props} />;
};

export default Button;