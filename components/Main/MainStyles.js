import styled from 'styled-components';

export const WrapperMain = styled.main`
  width: 100%;
  max-width: 700px;
  margin: 0 auto;
  padding: ${({ theme }) => theme.safeAreaPadding};
`;
