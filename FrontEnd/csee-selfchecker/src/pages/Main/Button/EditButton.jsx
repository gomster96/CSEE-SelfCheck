import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ButtonStyle } from '../main.styled';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router';
import { useLocation } from 'react-router';
function EditButton(props) {
  const navigate = useNavigate();
  const [userData, setUserData] = useState({});
  const { state } = useLocation();
  var data = '';
  const handleSubmit = () => {
    navigate('/selfcheck', {
      state: {
        userId: data.userId,
      },
    });
  };
  return (
    <>
      <ButtonStyle>
        <Link to="../selfcheck">
          <Button className="rounded-pill m-2">수정하기</Button>
        </Link>
      </ButtonStyle>
    </>
  );
}

export default EditButton;
