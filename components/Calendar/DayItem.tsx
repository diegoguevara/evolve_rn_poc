import { ColorScheme, Text } from '../UI';

import React from 'react';
import dayjs from 'dayjs';
import { styled } from 'styled-components/native';

const CALENDAR_DAYS = 35;

//#region  styled-components
const Container = styled.View<{
  index: number | undefined;
}>`
  flex-grow: 1;
  flex-shrink: 0;
  flex-basis: 13%;
  ${({ index }) => index !== undefined && `z-index: ${CALENDAR_DAYS - index}`};
`;

const TextContainer = styled.View`
  justify-content: space-between;
  flex: 1;
`;

const Box = styled.TouchableOpacity<{
  isBlank?: boolean;
  isToday: boolean;
  isWeekend: boolean;
}>`
  height: 60px;
  padding: 3px;
  ${(props) => {
    if (props.isBlank) {
      return `
        border: 0px solid ${ColorScheme.borderColor};
      `;
    } else {
      return `
        border: 0.5px solid ${ColorScheme.borderColor};
      `;
    }
  }}
  ${(props) => {
    if (props.isToday) {
      return `
        background-color: ${ColorScheme.backgroundLight};
      `;
    } else {
      if (props.isWeekend) {
        return `
          background-color: ${ColorScheme.backgroundInput};
        `;
      } else {
        return `
          background-color: ${ColorScheme.background};
        `;
      }
    }
  }}
`;
//#endregion

interface IProps {
  dayIndex: number;
  screenWidth: number;
  date: Date;
}
const DayItem: React.FC<IProps> = ({date, dayIndex}) => {
  const dDate = dayjs(date);
  const isWeekend = () => !(dDate.day() !== 0 && dDate.day() !== 6);
  const isToday = () => dDate.isSame(dayjs(new Date()), 'day');

    return (
      <Container index={dayIndex}>
        <Box
          isToday={isToday()}
          isWeekend={isWeekend()}
        >
        <TextContainer>
          <Text variant="small">{dDate.get('D')}</Text>
        </TextContainer>
      </Box>
    </Container>
    )
}

export default DayItem;
