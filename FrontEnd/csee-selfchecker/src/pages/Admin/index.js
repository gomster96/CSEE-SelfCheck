import React from 'react';
import styled from 'styled-components';
import AdminTable from './AdminTable';
import Footer from './Footer';
import SearchBar from './SearchBar';

const AdminLayout = styled.div`
  margin-left: 20vw;
  margin-right: 20vw;
`;

export default function Admin() {
  return (
    <>
      <AdminLayout>
        <SearchBar />
        <AdminTable />
        <Footer />
      </AdminLayout>
    </>
  );
}
