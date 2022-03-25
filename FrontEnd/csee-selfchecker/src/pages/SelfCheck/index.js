import React from 'react';
import styled from 'styled-components';
import SelfCheckTable from './SelfCheckTable';
import SelfCheckResultTable from './SelfCheckResultTable';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';

const MypageLayout = styled.div`
  margin-top: 10vh;
  text-align: center;
  margin-bottom: 10vh;
`;

const InnerLayout = styled.div`
  display: inline-block;
`;

const TableLayout = styled.div`
  margin-bottom: 10vh;
`;

const ButtonStyle = styled.div`
  border-radius: 35px;
`;

function App() {
  return (
    <MypageLayout>
      <InnerLayout>
        <TableLayout>
          <h1>Self Check</h1>
        </TableLayout>
        <TableLayout>
          <SelfCheckTable />
        </TableLayout>
        <TableLayout>
          <SelfCheckResultTable />
        </TableLayout>
        <ButtonStyle>
          <Button className="rounded-pill m-2">다시하기</Button>
          <Button className="rounded-pill m-2">제출하기</Button>
        </ButtonStyle>
        <h6>*미충족이어도 제출 가능</h6>
      </InnerLayout>
    </MypageLayout>
  );
}

export default App;
