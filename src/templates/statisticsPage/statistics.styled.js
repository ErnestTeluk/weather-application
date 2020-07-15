import styled from "styled-components";

export const SectionSubTitle = styled.h2`
  color: ${({ theme }) => theme.colors.grey};
  font-size: ${({ theme }) => theme.fontSize.m};
  font-family: ${({ theme }) => theme.fontFamily.montserrat};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  text-align: center;
  margin-bottom: 15px;
`;
