import PropTypes from "prop-types";
import styled from "styled-components";

export const CustomInput = ({
  type,
  placeholder,
  className,
  onChange,
  value,
}) => {
  return (
    <div>
      <InputStyled
        className={className}
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
      />
    </div>
  );
};

CustomInput.propTypes = {
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  type: PropTypes.string,
  placeholder: PropTypes.string,
  className: PropTypes.string,
  onChange: PropTypes.func,
};

const InputStyled = styled.input`
  width: 400px;
  height: 40px;
  border-radius: 5px;
  outline: none;
  background-color: silver;
  padding-left: 10px;
  font-size: 20px;
  margin: 10px 0;
`;
