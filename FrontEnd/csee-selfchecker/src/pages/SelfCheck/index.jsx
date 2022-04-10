import React, { Component } from 'react';
import { ContainerDiv, RoundBackgroundDiv, InnerLayout, TextLayout, ButtonStyle } from './main.styled';
import 'bootstrap/dist/css/bootstrap.min.css';
import UserTable from './Table/SelfCheckUserTable';
import SelfCheckTable from './Table/SelfCheckTable';
import Header from '../Common/Header/header';
import Footer from '../Common/Footer/footer';

export default function SelfCheck(props) {
  return (
    <>
      <Header />
      <ContainerDiv>
        <RoundBackgroundDiv>
          <InnerLayout>
            <TextLayout>
              <h1>Self Check</h1>
            </TextLayout>
            <UserTable />
            <SelfCheckTable />
          </InnerLayout>
        </RoundBackgroundDiv>
      </ContainerDiv>
      <Footer />
    </>
  );
}
