import React, { Component } from 'react';
import { ContainerDiv, RoundBackgroundDiv, InnerLayout, TextLayout, ButtonStyle } from './main.styled';
import 'bootstrap/dist/css/bootstrap.min.css';
import ResetButton from './Button/ResetButton';
import SaveButton from './Button/SaveButton';
import UserTable from './Table/SelfCheckUserTable';
import SelfCheckTable from './Table/SelfCheckTable';
import Header from '../Common/Header/header';
import Footer from '../Common/Footer/footer';

export default function Index(props) {
  return (
    <>
      <Header />
      <ContainerDiv>
        <RoundBackgroundDiv>
          <InnerLayout>
            <h1>Self Check</h1>
            <UserTable />
            <SelfCheckTable />
            {/* <ButtonStyle>
              <SaveButton />
            </ButtonStyle> */}
          </InnerLayout>
        </RoundBackgroundDiv>
      </ContainerDiv>
      <Footer />
    </>
  );
}
