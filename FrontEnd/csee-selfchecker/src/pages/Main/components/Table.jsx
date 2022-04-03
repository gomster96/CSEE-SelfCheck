// Table.js
import { StyledTable } from './Table_styled';
import TableCell from './TableCell';
import TableRow from './TableRow';
import { Tab } from 'bootstrap';
import Table_user_state from '../Getdata/Table_user_state';

const Table = ({ children }) => {
  return (
    <>
      <Table_user_state />
      <StyledTable>
        {children}
        <TableRow>
          <TableCell title="이름" value="김주은"></TableCell>
          <TableCell title="학번" value="21700162"></TableCell>
          <TableCell title="이메일" value="moomin@handong.ac.kr"></TableCell>
          <TableCell title="학기수" value="8학기"></TableCell>
          <TableCell title="전공" value="컴퓨터공학"></TableCell>
          <TableCell title="연락처" value="2648"></TableCell>
        </TableRow>
      </StyledTable>
    </>
  );
};

export default Table;
