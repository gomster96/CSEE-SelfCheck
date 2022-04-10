import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import Modal from 'react-modal';
import MajorButton from './MajorButton';
import LectureButton from './LectureButton';
import UserButton from './UserButton';
import service from '../../../util/service';

export default function ImportButton() {
  const [modalOn, setModalOn] = useState(false);
  const fileInputRef = useRef(null);
  const fetchTypeRef = useRef('');
  const openModal = () => setModalOn(true);
  const closeModal = () => setModalOn(false);
  const clickUploadButton = (fetchType) => {
    fetchTypeRef.current = fetchType;
    if (fileInputRef.current) fileInputRef.current.click();
  };
  const uploadFile = async (event) => {
    try {
      const excelFile = event.target.files[0];
      if (excelFile === undefined) return;
      const formData = new FormData();
      formData.append('file', excelFile);
      event.target.value = '';
      if (fetchTypeRef.current === 'user') service.uploadUsers(formData);
      else if (fetchTypeRef.current === 'lecture') service.uploadLectures(formData);
      if (fetchTypeRef.current === 'major') service.uploadMajors(formData);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <>
      <input accept=".xlsx,.xls" type="file" onChange={uploadFile} style={{ display: 'none' }} ref={fileInputRef} />
      <Modal isOpen={modalOn} onRequestClose={closeModal} style={modalStyle}>
        <ModalTitle> Excel Data Import</ModalTitle>
        <ImportButtonsLayout>
          <MajorButton clickUploadButton={clickUploadButton} />
          <LectureButton clickUploadButton={clickUploadButton} />
          <UserButton clickUploadButton={clickUploadButton} />
        </ImportButtonsLayout>
        <ExplainDiv>엑셀 데이터 Import는 반드시 Major, Lecture, Student 순서대로 진행해주세요.</ExplainDiv>
      </Modal>
      <Button className="rounded-pill m-2" onClick={openModal}>
        Excel Import
      </Button>
    </>
  );
}
const ExplainDiv = styled.div`
  text-align: center;
  color: #797979;
  margin-top: 1vh;
  font-size: 0.8vw;
`;
const ModalTitle = styled.div`
  font-size: 4vh;
  text-align: center;
  font-weight: bolder;
`;

const ImportButtonsLayout = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 3vh;
  margin-left: 5vw;
  margin-right: 5vw;
  margin-top: 5vh;
`;

const modalStyle = {
  content: {
    zIndex: '100',
    width: '40vw',
    height: '25vh',
    position: 'absolute',
    top: '30vh',
    left: '30vw',
    borderRadius: '20px',
  },
};
