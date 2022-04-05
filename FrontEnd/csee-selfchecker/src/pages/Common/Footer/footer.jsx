import React from 'react';
import { FooterDiv, FooterStyle, FooterTextLayout } from '../common';
import { Navbar, Container } from 'react-bootstrap';
function Footer(props) {
  return (
    <>
      <FooterDiv className="bg-gray">
        <Navbar>
          <Container>
            <FooterStyle>
              <FooterTextLayout>©WALAB 2022 </FooterTextLayout>
            </FooterStyle>
          </Container>
        </Navbar>
      </FooterDiv>
    </>
  );
}

export default Footer;
