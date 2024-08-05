import { FactorGradesData, IGradeItem, T3MGrades, T6MGrades, TFactor, TGrades } from '@app-types/grades';

export const formatGradesData = (now: TGrades, grade3M: T3MGrades, grade6M: T6MGrades): FactorGradesData[] => {
  const newArr: FactorGradesData[] = [];
  Object.entries(now).forEach(([k, v]) => {
    const key = k as TFactor;
    const value = v as IGradeItem;
    newArr.push({
      factor: key,
      now: value.current,
      sixMonthsAgo: grade6M.find((item) => item[0] === key)![1],
      threeMonthsAgo: grade3M[key],
    });
  });
  return newArr as FactorGradesData[];
};

export const mockGradesData: FactorGradesData[] = [
  { factor: 'Valuation', now: 'F', sixMonthsAgo: 'F', threeMonthsAgo: 'F' },
  { factor: 'Growth', now: 'D-', sixMonthsAgo: 'D', threeMonthsAgo: 'C-' },
  { factor: 'Profitability', now: 'A+', sixMonthsAgo: 'A+', threeMonthsAgo: 'A+' },
  { factor: 'Momentum', now: 'B+', sixMonthsAgo: 'C', threeMonthsAgo: 'C-' },
  { factor: 'Revisions', now: 'B-', sixMonthsAgo: 'C', threeMonthsAgo: 'C' },
];
