import { ColorScheme, Heading } from '../UI';

import DayItem from './DayItem';
import { Dimensions } from 'react-native';
import { PageContent } from '../Layout';
import React from 'react';
import { styled } from 'styled-components/native';
import useBookingCalendar from '../../hooks/useBookingCalendar';

//#region  styled-components
const Container = styled.View`
  padding-top: 16px;
  background-color: ${ColorScheme.backgroundInput};
`
const TextItem = styled.Text``
const WeekDayContainer = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
`;
const CalContainer = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  border: 0.5px solid ${ColorScheme.borderColor};
`;
//#endregion

const WEEK_DAYS = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];

const Calendar: React.FC = () => {
  const {calendarDays} = useBookingCalendar();
    return (
        <Container>
          <PageContent>
            <WeekDayContainer>
            {WEEK_DAYS.map((wd, index) => (
              <Heading
                variant="small"
                key={index}
                style={{
                  flexGrow: 1,
                  flexShrink: 0,
                  flexBasis: '13%',
                  textAlign: 'center',
                }}
              >
                {wd.substring(0, 3)}
              </Heading>
            ))}
          </WeekDayContainer>
          <CalContainer>
            {calendarDays.map((item, index) => (
              <DayItem
                key={index}
                {...item}
                dayIndex={index}
                screenWidth={Dimensions.get('screen').width}
              />
            ))}
          </CalContainer>
          </PageContent>
        </Container>
    )
}

export default Calendar;