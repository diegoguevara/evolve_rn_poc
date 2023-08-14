import { useContext, useEffect, useState } from 'react';

import dayjs from 'dayjs';
import isSameOrAfter from 'dayjs/plugin/isSameOrAfter';
import isSameOrBefore from 'dayjs/plugin/isSameOrBefore';

dayjs.extend(isSameOrAfter);
dayjs.extend(isSameOrBefore);

export interface IDayItem {
  date: Date;
  price?: number;
  dayIndex?: number;
  screenWidth?: number;
}


const useBookingCalendar = () => {
  const [calendarDays, setCalendarDays] = useState<IDayItem[]>([]);

  const calendarDateRange =  {
    month: dayjs().format('YYYY-MM'),
    start: '',
    end: '',
  };

  const renderCalendar = () => {
    const { month } = calendarDateRange;
    const calendarDate = dayjs(month);
    const firstDayOfMonth = calendarDate.date(1);
    const daysInMonth = calendarDate.daysInMonth();
    const lastDayOfMonth = calendarDate.date(daysInMonth);
    const paddingDays = firstDayOfMonth.get('d');
    const items: IDayItem[] = [];
    const today = dayjs();

    const addDayItem = (dayItem: dayjs.Dayjs) => {
      items.push({
        date: dayItem.toDate(),
        price: 123,
      });
    };

    for (let i = 1; i <= paddingDays + daysInMonth; i++) {
      const dayItem = calendarDate.date(i - paddingDays);
      addDayItem(dayItem);
    }
    // Next month days
    for (let i = 1; i < 7 - lastDayOfMonth.get('d'); i++) {
      const dayItem = lastDayOfMonth.add(i, 'day');
      addDayItem(dayItem);
    }

    setCalendarDays(items);
  };

  useEffect(
    () => renderCalendar(),
    []
  );

  return { calendarDays };
};

export default useBookingCalendar;
