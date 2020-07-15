import styled from "styled-components";

export const SectionWrapper = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-flow: column;

  ${({ theme }) => theme.mq.bigPhone} {
    width: auto;
  }
`;

export const SectionTitle = styled.h1`
  width: 100%;
  padding: 0 20px;
  color: ${({ theme }) => theme.colors.grey};
  font-size: ${({ theme }) => theme.fontSize.l};
  font-family: ${({ theme }) => theme.fontFamily.montserrat};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  text-align: center;
  text-transform: uppercase;
  margin-bottom: 20px;
  margin-top: ${({ isStatistics }) => (isStatistics ? "150px" : "250px")};

  ${({ theme }) => theme.mq.tablet} {
    margin-top: 0;
  }
`;

export const SectionText = styled.p`
  width: 100%;
  padding: 0 20px;
  color: ${({ theme }) => theme.colors.grey};
  font-size: ${({ theme }) => theme.fontSize.xs};
  font-family: ${({ theme }) => theme.fontFamily.montserrat};
  font-weight: ${({ theme }) => theme.fontWeight.regular};
  margin-bottom: 20px;
  text-align: center;

  ${({ theme }) => theme.mq.bigPhone} {
    width: 400px;
  }
`;

export const SectionButton = styled.button`
  width: 330px;
  height: 53px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: ${({ theme }) => theme.fontSize.s};
  font-family: ${({ theme }) => theme.fontFamily.montserrat};
  font-weight: ${({ theme }) => theme.fontWeight.regular};
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.lightPurple};
  text-decoration: none;
  border-radius: 10px;
  position: relative;
  z-index: 0;
  overflow: hidden;
  transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
  box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.5);
  border: none;
  margin: auto;
  cursor: pointer;

  :hover {
    transform: scale(0.95);
    box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.9);
  }

  &::after {
    content: "";
    width: 400px;
    height: 300%;
    border-radius: 50%;
    display: block;
    position: absolute;
    top: -210%;
    left: -20%;
    background-color: ${({ theme }) => theme.colors.purple};
    z-index: -1;
  }
`;
