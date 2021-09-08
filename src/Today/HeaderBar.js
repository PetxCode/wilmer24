import { Header } from "antd/lib/layout/layout";
import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const HeaderBar = () => {
  return (
    <div>
      <MyHeader>
        <MyLink to="/">
          <Nav>Home</Nav>
        </MyLink>
        <MyLink to="/input">
          <Nav>Upload</Nav>
        </MyLink>
      </MyHeader>
    </div>
  );
};

export default HeaderBar;

const MyHeader = styled(Header)`
  color: white;
  display: flex;
  align-items: center;
`;
const MyLink = styled(Link)`
  text-decoration: none;
  color: white;
  font-size: 10px;
  font-weight: bold;
  text-transform: uppercase;
  font-family: Poppins;
  margin: 0 20px;

  :hover {
    color: red;
  }
`;
const Nav = styled.div``;
