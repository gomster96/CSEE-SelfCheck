import React, { Component } from 'react';
import { ContainerDiv, RoundBackgroundDiv, InnerLayout, MarginLayout, TextLayout } from './main.styled';
import UserTable from './Table/UserTable';
import MyPageTable from './Table/ResultTable';
import EditButton from './Button/EditButton';
import Header from '../Common/Header/header';
import Footer from '../Common/Footer/footer';

class Index extends Component {
  render() {
    return (
      <>
        <Header />
        <ContainerDiv>
          <RoundBackgroundDiv>
            <InnerLayout>
              <MarginLayout>
                <h1>Mypage</h1>
              </MarginLayout>
              <UserTable />
              <MyPageTable />
              <EditButton />
            </InnerLayout>
          </RoundBackgroundDiv>
        </ContainerDiv>
        <Footer />
      </>
    );
  }
}

export default Index;
