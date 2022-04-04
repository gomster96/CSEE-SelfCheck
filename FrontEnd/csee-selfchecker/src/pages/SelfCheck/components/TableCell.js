//TableCell.js
import { StyledTh, StyledTd } from './Table_styled';

const TableCell = ({ title, value, semester }) => {
  return (
    <>
      <StyledTh>{title}</StyledTh>
      <StyledTd>{value}</StyledTd>
      <StyledTd>{semester}</StyledTd>
    </>
  );
};

export default TableCell;
