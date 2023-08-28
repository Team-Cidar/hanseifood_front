import React, { ReactNode } from 'react'
import { Default, Mobile } from '@utils/MediaQuery';
import { StyledMobileView } from './CardView.mobile.styled';
import { StyledView } from './CardView.styled';

interface CardViewComponentProps {
  children: ReactNode;
}

const CardView = ({ children }: CardViewComponentProps) => {
  return (
    <>
      <Default>
        <StyledView>
          {children}
        </StyledView>
      </Default>
      <Mobile>
        <StyledMobileView>
          {children}
        </StyledMobileView>
      </Mobile>
    </>
  )
}

export default CardView;