import styled from 'styled-components';

export const HeaderDiv = styled.div`
  width: 100%;
  max-width: 700px;
  margin: 30px auto 40px auto;
  padding: ${({ theme }) => theme.safeAreaPadding};
`;

export const LogoH1 = styled.h1`
  margin-bottom: 30px;
  font-weight: 400;

  a {
    color: ${({ theme }) => theme.colors.color8};
    text-decoration: none;
    border-right: 2px solid ${({ theme }) => theme.colors.color8};
    padding-right: 5px;
    white-space: nowrap;
    font-size: 1.2rem;
  }

  .typing-animation {
    animation: blinkCursor 800ms infinite normal;
  }

  @keyframes blinkCursor {
    from {
      border-right-color: ${({ theme }) => theme.colors.color8};
    }
    to {
      border-right-color: transparent;
    }
  }
`;

export const ProfileDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-top: 1px solid ${({ theme }) => theme.colors.color4};
  border-bottom: 1px solid ${({ theme }) => theme.colors.color4};
  padding: 30px 0;

  img {
    width: 100%;
    max-width: 100px;
    height: 100px;
    border-radius: 100px;
    margin-right: 30px;
  }

  p {
    font-size: 1rem;
    width: 100%;
    max-width: 510px;
  }
`;
