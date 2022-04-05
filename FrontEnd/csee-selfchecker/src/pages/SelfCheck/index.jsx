import React from 'react';
import { ContainerDiv, RoundBackgroundDiv, InnerLayout, TextLayout, ButtonStyle } from './main.styled';
import UserTable from '../Main/Table/UserTable';
import SelfCheckTable from './Table/SelfCheckTable';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate, useLocation } from 'react-router';
import ResetButton from './Button/ResetButton';
import SaveButton from './Button/SaveButton';
import UserTable_ from './Table/SelfCheckUserTable';

export default function Main() {
  return (
    <>
      <ContainerDiv>
        <RoundBackgroundDiv>
          <InnerLayout>
            <h1>Self Check</h1>
            <UserTable_ />
            <ButtonStyle>
              <ResetButton />
              <SaveButton />
            </ButtonStyle>
          </InnerLayout>
        </RoundBackgroundDiv>
      </ContainerDiv>
    </>
  );
}
