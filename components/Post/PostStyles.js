import styled from 'styled-components';

export const ArticleTag = styled.article`
  border-bottom: 1px solid ${({ theme }) => theme.colors.color9};
  padding-bottom: 30px;
  margin-bottom: 40px;
  h2 {
    font-size: 1.75rem;
    font-family: 'Montserrat', sans-serif;
    line-height: 32px;

    a {
      color: ${({ theme }) => theme.colors.color1};
      text-decoration: none;
      transition: color 0.3s;

      &:hover {
        color: ${({ theme }) => theme.colors.color8};
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
