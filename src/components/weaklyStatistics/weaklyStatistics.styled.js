import styled from "styled-components";

export const DataTrackerRow = styled.div`
  width: 100%;
  padding: 0 20px;
  height: auto;
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
  flex-wrap: wrap;

  ${({ theme }) => theme.mq.tablet} {
    padding: 0 0;
    flex-wrap: nowrap;
  }
`;

export const DataTrackerItem = styled.div`
  width: 49%;
  height: auto;
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  flex-flow: column;

  ${({ theme }) => theme.mq.tablet} {
    width: 25%;
    margin-right: 1%;
    margin-bottom: 0;

    :last-child {
      margin-right: 0;
    }
  }
`;

export const TrackerTitle = styled.h3`
  width: 150px;
  color: ${({ theme }) => theme.colors.grey};
  font-size: ${({ theme }) => theme.fontSize.xs};
  font-family: ${({ theme }) => theme.fontFamily.montserrat};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  text-align: center;
  text-transform: uppercase;
  margin-bottom: 10px;
`;

export const TrackerValue = styled.p`
  width: 150px;
  color: ${({ theme }) => theme.colors.grey};
  font-size: ${({ theme }) => theme.fontSize.xs};
  font-family: ${({ theme }) => theme.fontFamily.montserrat};
  font-weight: ${({ theme }) => theme.fontWeight.regular};
  text-align: center;
`;
