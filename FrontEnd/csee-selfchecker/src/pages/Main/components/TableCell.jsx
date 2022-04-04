//TableCell.js
import { StyledTh, StyledTd } from "./Table_styled";

const TableCell = ({ title, value }) => {
  return (
    <>
      <StyledTh>{title}</StyledTh>
      <StyledTd>{value}</StyledTd>
    </>
  );
};

export default TableCell;
