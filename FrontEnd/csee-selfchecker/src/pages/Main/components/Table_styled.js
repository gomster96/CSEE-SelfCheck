// Table.styled.js
import styled from 'styled-components';
const calcWidthPercent = (span) => {
  if (!span) return;

  const width = (span / 12) * 100;
  return width;
};

const BREAK_POINT_MOBILE = 768;
const BREAK_POINT_TABLET = 992;
const BREAK_POINT_PC = 1400;

export const StyledTable = styled.div`
  //padding: 1rem;
  background: #fff;
  //border: 1px solid ${({ theme }) => theme.lightGray};
  //border-radius: 1rem;
  display: flex;
  flex-direction: column;
  @media only screen and (min-width: ${BREAK_POINT_MOBILE}px) {
    width: 20vw;
  }
  @media only screen and (min-width: ${BREAK_POINT_TABLET}px) {
    width: 60vw;
  }
  @media only screen and (min-width: ${BREAK_POINT_PC}px) {
    width: 60vw;
  }
`;

export const StyledTableRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  color: gray;
  border-left: 1px solid;

  @media only screen and (max-width: ${BREAK_POINT_MOBILE}px) {
    width: 20rem;
    font-size: 3.5vw;
  }
  @media only screen and (min-width: ${BREAK_POINT_TABLET}px) {
    width: 50rem;
  }
  @media only screen and (min-width: ${BREAK_POINT_PC}px) {
    width: 50rem;
  }
`;

export const StyledTh = styled.div`
  display: flex;
  align-items: center;
  color: white;
  background: #2e75b6;
  font-weight: 600;
  padding: 1rem;
  word-break: keep-all;

  &:first-child {
    border-top: 1px solid ${({ theme }) => theme.lightGray};
  }
  border-right: 1px solid ${({ theme }) => theme.lightGray};
  border-bottom: 1px solid ${({ theme }) => theme.lightGray};

  @media only screen and (max-width: ${BREAK_POINT_MOBILE}px) {
    flex: 0 0 5rem;
    width: 5rem;
    &:first-child {
      border-top: 1px solid ${({ theme }) => theme.lightGray};
      border-bottom: 0;
    }
  }
  @media only screen and (max-width: ${BREAK_POINT_TABLET}px) {
    flex: 0 0 5rem;
    width: 5rem;
    &:first-child {
      border-top: 1px solid ${({ theme }) => theme.lightGray};
      border-bottom: 0;
    }
  }
  @media only screen and (max-width: ${BREAK_POINT_PC}px) {
    flex: 0 0 5rem;
    width: 5rem;

    &:nth-child(3) {
      border-top: 1px solid ${({ theme }) => theme.lightGray};
    }
  }
`;

export const StyledTd = styled.div`
  display: flex;
  align-items: center;
  padding: 0.5rem;
  word-break: keep-all;
  font-weight: 500;

  color: black;
  border-color: gray;
  &:first-child {
    //border-top: 1px solid ${({ theme }) => theme.lightGray};
  }

  //border-right: 1px solid ${({ theme }) => theme.lightGray};
  //border-bottom: 1px solid ${({ theme }) => theme.lightGray};
  @media only screen and (max-width: ${BREAK_POINT_MOBILE}px) {
    flex: 0 0 7rem;
    min-width: 7rem;
    &:first-child {
      //border-bottom: 0;
    }
    word-break: break-all;
  }
  @media only screen and (max-width: ${BREAK_POINT_TABLET}px) {
    flex: 0 0 10rem;
    min-width: 10rem;

    &:first-child {
      //border-bottom: 0;
    }
  }
  @media only screen and (max-width: ${BREAK_POINT_PC}px) {
    flex: 0 0 10rem;
    min-width: 10rem;
    //background: #fff;
    &:nth-child(2) {
      //border-top: 1px solid ${({ theme }) => theme.lightGray};
    }
    &:nth-child(4) {
      //border-top: 1px solid ${({ theme }) => theme.lightGray};
    }
  }
`;
