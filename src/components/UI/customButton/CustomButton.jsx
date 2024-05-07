import styled from "styled-components";
import PropTypes from "prop-types";

export const CustomButton = ({ children, onClick }) => {
  return (
    <>
      <Button onClick={onClick}>{children}</Button>
    </>
  );
};

CustomButton.propTypes = {
  children: PropTypes.string,
  onClick: PropTypes.func,
};

const Button = styled.button`
  cursor: pointer;
  width: 400px;
  height: 40px;
  border-radius: 5px;
  border: none;
  border-radius: 5px;
  background-color: blue;
  color: white;
  font-size: 20px;

  &:hover {
    background-color: green;
  }
`;
