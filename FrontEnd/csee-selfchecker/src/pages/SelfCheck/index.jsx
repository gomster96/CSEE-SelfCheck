import React from 'react';
import { ContainerDiv, RoundBackgroundDiv, InnerLayout, TextLayout, ButtonStyle } from './main.styled';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate, useLocation } from 'react-router';
import ResetButton from './Button/ResetButton';
import SaveButton from './Button/SaveButton';
import UserTable from './Table/SelfCheckUserTable';
import SelfCheckTable from './Table/SelfCheckTable';

export default function Main() {
  return (
    <>
      <ContainerDiv>
        <RoundBackgroundDiv>
          <InnerLayout>
            <h1>Self Check</h1>
            <UserTable />
            <SelfCheckTable />
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
