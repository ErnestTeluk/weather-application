import styled from "styled-components";

export const DailyTrackerRow = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-flow: column;
`;

export const DailyTrackerItem = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  border-bottom: 1px solid ${({ theme }) => theme.colors.grey};
  flex-flow: column;
  padding: 0 20px;

  :last-child {
    border-bottom: none;
  }

  ${({ theme }) => theme.mq.tablet} {
    flex-flow: row;
    flex-wrap: wrap;
  }
`;

export const DateSection = styled.div`
  width: 100%;
  margin: 5px 0 15px 0;
  height: 61px;
  display: flex;
  justify-content: center;
  align-items: center;

  ${({ theme }) => theme.mq.tablet} {
    width: 25%;
  }
`;

export const ValuesSection = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-flow: column;
  align-items: center;

  ${({ theme }) => theme.mq.bigPhone} {
    flex-flow: row;
  }

  ${({ theme }) => theme.mq.tablet} {
    width: 75%;
  }
`;

export const ValueTitle = styled.h3`
  width: 100%;
  height: auto;
  color: ${({ theme }) => theme.colors.grey};
  font-size: ${({ theme }) => theme.fontSize.s};
  font-family: ${({ theme }) => theme.fontFamily.montserrat};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  margin-bottom: 10px;
  text-align: center;
`;

export const ValueData = styled.p`
  width: 100%;
  height: auto;
  color: ${({ theme }) => theme.colors.grey};
  font-size: ${({ theme }) => theme.fontSize.s};
  font-family: ${({ theme }) => theme.fontFamily.montserrat};
  font-weight: ${({ theme }) => theme.fontWeight.regular};
  text-align: center;
`;

export const ValueItem = styled.div`
  width: 100%;
  height: 61px;
  margin: 5px 0 15px 0;
  display: flex;
  justify-content: center;
  flex-flow: column;

  ${({ theme }) => theme.mq.tablet} {
    width: 25%;
    margin: 5px 1% 15px 0;

    :last-child {
      margin-right: 0;
    }
  }
`;

export const DateText = styled.p`
  width: 100%;
  height: auto;
  color: ${({ theme }) => theme.colors.grey};
  font-size: ${({ theme }) => theme.fontSize.s};
  font-family: ${({ theme }) => theme.fontFamily.montserrat};
  font-weight: ${({ theme }) => theme.fontWeight.regular};
  text-align: center;

  ${({ theme }) => theme.mq.tablet} {
    text-align: left;
  }
`;
