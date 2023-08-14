import { ColorScheme, Heading } from '../UI';

import React from 'react';
import { View } from 'react-native';
import styled from 'styled-components/native';

//#region  styled-components
const Container = styled.View`
  background-color: ${ColorScheme.background};
  width: 100%;
  padding: 40px 0;
  align-items: center;
`;
const Item = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 8px 0;
`;
const CircularIcon = styled.View<{ color: 'red' | 'blue' }>`
  ${(props) =>
    props.color === 'red'
      ? `background-color: ${ColorScheme.primaryActionColor};`
      : `background-color: ${ColorScheme.backgroundAccent};`}

  border-radius: 50px;
  height: 24px;
  margin-right: 12px;
  width: 24px;
`;
//#endregion

const CalendarFooter: React.FC = () => {
  return (
    <Container>
      <View>
        <Item>
          <CircularIcon color="blue" />
          <Heading variant="small">Evolve booking</Heading>
        </Item>
        <Item>
          <CircularIcon color="red" />
          <Heading variant="small">
            Owner block
          </Heading>
        </Item>
      </View>
    </Container>
  );
};

export default CalendarFooter;
