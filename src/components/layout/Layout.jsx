import { useState } from "react";
import { CustomButton } from "../UI/customButton/CustomButton";
import { CustomInput } from "../UI/customInput/CustomInput";
import image from "../../assets/Image.png";
import styled from "styled-components";

export const Layout = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const validateForm = () => {
    if (!email.includes("@")) {
      alert("@")
      return false;
    } else if (password.length < 8) {
      alert("bolshe 8 ");
      return false;
    }
    return true;
  };

  const handlRegister = () => {
    if (validateForm()) {
      console.log("Email:", email);
      console.log("Password:", password);
    }
  };

  return (
    <ContainerDiv>
      <Div>
        <div>
          <h1>Welcome Ruix</h1>
          <p>Welcome to Ruix. dashboard Community</p>
        </div>
        <CustomInput
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <CustomInput
          placeholder="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <CheckDiv>
          <CustomInput className="f1" type="checkbox" />
          <p>Remember Me</p>
        </CheckDiv>
        <CustomButton onClick={handlRegister}>Register</CustomButton>
      </Div>
      <Img src={image} alt="" />
    </ContainerDiv>
  );
};

const ContainerDiv = styled.div`
  display: flex;
  justify-content: center;
`;

const Div=styled.div`
  /* border: 2px solid red; */
  background-color: grey;
  padding: 10px;

 
  
`

const CheckDiv = styled.div`
  display: flex;

  .f1 {
    width: 30px;
    height: 30px;
  }
`;

const Img = styled.img`
cursor: pointer;
  width: 450px;
  height: 450px;
  opacity: 0.9;

  &:hover{
    opacity: 1;
  }
`;
