import moment from 'moment';
import { range } from 'lodash';

export const getCurrentYear = (): number => {
  return moment(new Date()).year() + 1;
};

export const getYears = (): number[] => {
  return range(1990, getCurrentYear(), 1);
};
export const getMonths = (): string[] => {
  return [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
};

export const getMonth = (date: Date): string => {
  return getMonths()[date.getMonth()];
};

export const getYear = (date: Date): number => {
  return moment(date).year();
};
