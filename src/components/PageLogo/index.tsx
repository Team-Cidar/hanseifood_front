import React, { ReactNode } from 'react'
import { Logo, LogoView, Subtitle } from './PageLogo.styled';

interface PageLogoComponentProps {
    title: string;
    subtitle?: string;
}

const PageLogo = ({ title, subtitle }: PageLogoComponentProps) => {
  return (
    <LogoView>
        <Logo>{title}</Logo>
        <Subtitle>{subtitle}</Subtitle>
    </LogoView>
  );
}

export default PageLogo
