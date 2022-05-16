import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router';
import { ContainerDiv, RoundBackgroundDiv, InnerLayout, MarginLayout } from './main.styled';
import UserTable from './Table/UserTable';
import MyPageTable from './Table/ResultTable';
import Header from '../Common/Header/header';
import Footer from '../Common/Footer/footer';

export default function Main() {
  const [userData, setUserData] = useState({});
  const { state } = useLocation();

  useEffect(() => {
    fetch(`${process.env.REACT_APP_SERVER_URL}/api/user/info?userId=${state.userId}`, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        setUserData(result);
      })
      .catch((error) => console.log('error', error));
  }, []);

  const requestOptions = {
    method: 'GET',
    redirect: 'follow',
  };
  return (
    <>
      <Header />
      <ContainerDiv>
        <RoundBackgroundDiv>
          <InnerLayout>
            <MarginLayout>
              <h1>Mypage</h1>
            </MarginLayout>
            <UserTable userData={userData} />
            <MyPageTable userData={userData} />
            {/* <EditButton /> */}
          </InnerLayout>
        </RoundBackgroundDiv>
      </ContainerDiv>
      <Footer />
    </>
  );
}
