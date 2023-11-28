// MyPageView.tsx

import React from 'react';
import { Container, Logo, Button } from './styles';
import { Link } from 'react-router-dom';

const MyPageView = () => {
  return (
    <Container>
      <Logo>
        내 정보
      </Logo>
      <Button as={Link} to="/back-office">
        BackOffice로 이동
      </Button>
    </Container>
  );
};

export default MyPageView;
