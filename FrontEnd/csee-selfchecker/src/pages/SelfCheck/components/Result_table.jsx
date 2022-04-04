// R_Table.js
import { StyledTable } from './Table_styled';
import TableCell from './TableCell';
import TableRow from './TableRow';
import Table_user_state from '../Getdata/lectureData';

const Table = ({ children }) => {
  const arr = ['이수', '미이수', '병수'];

  return (
    <>
      <Table_user_state />
      <StyledTable>
        {children}
        <TableRow>
          <TableCell title="과목명" value="김주은"></TableCell>

          <input id="taken" type="radio" name="taken" value="이수" />
        </TableRow>
      </StyledTable>
    </>
  );
};

export default Table;
