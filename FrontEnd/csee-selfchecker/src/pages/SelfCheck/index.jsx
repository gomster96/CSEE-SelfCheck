import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router';
import { ContainerDiv, RoundBackgroundDiv, InnerLayout, TextLayout } from './main.styled';
import 'bootstrap/dist/css/bootstrap.min.css';
import UserTable from './Table/SelfCheckUserTable';
import SelfCheckTable from './Table/SelfCheckTable';
import Header from '../Common/Header/header';
import Footer from '../Common/Footer/footer';

export default function SelfCheck() {
  const { state } = useLocation({});
  const [userData, setUserData] = useState({});

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
            <TextLayout>
              <h1>Self Check</h1>
            </TextLayout>
            <UserTable userData={userData} />
            <SelfCheckTable userData={userData} />
          </InnerLayout>
        </RoundBackgroundDiv>
      </ContainerDiv>
      <Footer />
    </>
  );
}
