import { IFactorGradesData, IGradeItem, T3MGrades, T6MGrades, TFactor, TGrades } from '@app-types/grades';

export const formatGradesData = (now?: TGrades, grade3M?: T3MGrades, grade6M?: T6MGrades): IFactorGradesData[] => {
  if (!now || !grade3M || !grade6M) {
    return [];
  }
  const newArr: IFactorGradesData[] = [];
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
  return newArr as IFactorGradesData[];
};
