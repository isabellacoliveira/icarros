import React from "react";
import styled from "styled-components";

export const NavbarConfig = styled.div`
  display: flex;
  flex-direction: row;
  padding: 10px 10px 10px 10px; 
  background-color: #dbdbdb;
`;

export const NavbarSearch = styled.div`
  display: flex;
  flex-direction: row;
`;

export const NavbarForm = styled.form`
  display: flex;
  flex-direction: row;
`;

export const NavContainer = styled.div`
  width: 100%;
  padding: 10px;
  color: #f25100;
  font-weight: bolder;
  font-size: 20px;
  display: flex;
  flex-direction: row;
`;

export const NavbarBrand = styled.p`
  margin: 0;

    @keyframes pulse {
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.1); 
    }
    100% {
      transform: scale(1);
    }
  }

  animation: pulse 2s infinite; 
  pointer-events: none;
  position: relative; 
`;

export const FormControl = styled.input`
  width: 200px !important;
  margin-right: 20px;
`;

export const SearchButton = styled.button`
  margin: 5px 0;
  border: 1px solid #28a745;
  color: #28a745;
`;


