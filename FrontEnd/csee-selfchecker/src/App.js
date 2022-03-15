import React from 'react';
import styled from 'styled-components';

const Test = styled.div`
  color: red;
`;

const ButtonTest = styled.button`
  width: 500px;
  height: 300px;
  border: 1px solid blue;
  background-color: 'red';
`;

function App() {
  const hello = () => {
    console.log('hihihi');
  };
  return (
    <>
      <Test>안녕하세요~~</Test>
      <ButtonTest onClick={hello}>이렇게 버튼을 만듭니다</ButtonTest>
    </>
  );
}

export default App;
