import React, { ReactNode } from 'react'
import { Desktop, Mobile } from '@utils/MediaQuery';
import { StyledMobileView } from './CardView.mobile.styled';
import { StyledView } from './CardView.styled';

type CardViewComponentProps = {
  children: ReactNode;
}

const CardView = ({ children }: CardViewComponentProps) => {
  return (
    <>
      <Desktop>
        <StyledView>
          {children}
        </StyledView>
      </Desktop>
      <Mobile>
        <StyledMobileView>
          {children}
        </StyledMobileView>
      </Mobile>
    </>
  )
}

export default CardView;