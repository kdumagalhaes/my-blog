import styled from 'styled-components';

export const ArticleTag = styled.article`
  border-bottom: 1px solid ${({ theme }) => theme.colors.color4};
  padding-bottom: 30px;
  margin-bottom: 40px;
  h2 {
    font-size: 2rem;
    font-family: 'Montserrat', sans-serif;
    line-height: 32px;

    a {
      color: ${({ theme }) => theme.colors.color8};
      text-decoration: none;

      &:hover {
        color: ${({ theme }) => theme.colors.color5};
      }
    }
  }

  small {
    display: inline-block;
    margin: 15px 0 20px 0;
    color: ${({ theme }) => theme.colors.color0};
    border-radius: 3px;
  }
`;
