import { T3MGrades, T6MGrades, TGrades } from '@app-types/grades';

export const GRADES_NOW_MOCK: TGrades = {
  Growth: {
    current: 'D-',
  },
  Momentum: {
    current: 'B+',
  },
  Profitability: {
    current: 'A+',
  },
  Revisions: {
    current: 'B-',
  },
  Valuation: {
    current: 'F',
  },
};

export const GRADES_6M_MOCK: { data: T6MGrades } = {
  data: [
    ['Growth', 'D'],
    ['Profitability', 'A+'],
    ['Valuation', 'F'],
    ['Momentum', 'C'],
    ['Revisions', 'C'],
  ],
};

export const GRADES_3M_MOCK: T3MGrades = {
  Growth: 'C-',
  Momentum: 'C-',
  Profitability: 'A+',
  Revisions: 'C',
  Valuation: 'F',
};
