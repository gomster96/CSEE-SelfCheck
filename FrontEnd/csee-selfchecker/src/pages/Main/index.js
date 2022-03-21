import React from 'react';
import styled from 'styled-components';
import MypageTable from './MypageTable';
import MypageResultTable from './MypageResultTable';
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

export default function Main() {
  return (
    <MypageLayout>
      <InnerLayout>
        <TableLayout>
          <h1>Mypage</h1>
        </TableLayout>
        <TableLayout>
          <MypageTable />
        </TableLayout>
        <TableLayout>
          <MypageResultTable />
        </TableLayout>
        <h5>
          공학프로젝트 입문 수강요건을 <span class="text-danger">충족</span>하였습니다
        </h5>
        <h6>*미충족이어도 제출 가능</h6>
        <ButtonStyle>
          <Button className="rounded-pill m-2">수정하기</Button>
          <Button className="rounded-pill m-2">제출하기</Button>
        </ButtonStyle>
      </InnerLayout>
    </MypageLayout>
  );
}
