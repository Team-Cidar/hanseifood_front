import React from 'react';
import {Container, Logo} from './styles';
import {IconButton} from '@components/Button';
import {Navigate, useNavigate} from 'react-router-dom';

const MyPageView = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <Logo>내 정보</Logo>
      <IconButton label="Go to login" onClick={() => navigate('/login')} />
      {/* temp button to go to login page */}
    </Container>
  );
};

export default MyPageView;
