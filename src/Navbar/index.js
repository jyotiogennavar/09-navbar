import React from "react";

import styled from "styled-components";
import { Tabs } from "./Tabs";

export const ShiftingDropDown = () => {
  return (
    <Container>
      <Tabs />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  height: 100vh;
  width: 100%;
  justify-content: flex-start;
  background-color: #0f141a;
  padding: 2rem;
  color: #1f2937;

  font-family: sans-serif;

  @media (min-width: 786px) {
    justify-content: center;
  }
`;


