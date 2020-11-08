import React from 'react';

import { HeaderDiv, LogoH1, ProfileDiv } from './HeaderStyles';

const Header = () => {
  return (
    <HeaderDiv>
      <LogoH1>
        <a className="typing-animation" href="/">//coding notes</a>
      </LogoH1>
      <ProfileDiv>
        <img src="/kadu-magalhaes.png" alt="Kadu Magalhães" />
        <p>
          Graduated in Advertising, Software Development student currently working
          as Product Technical Analyst @ VTEX.
        </p>
      </ProfileDiv>
    </HeaderDiv>
  );
};

export default Header;
