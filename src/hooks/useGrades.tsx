import { getCurrentGradesAPI, get3mGradesAPI, get6mGradesAPI } from '@api/factorGrades';
import { formatGradesData } from '@utils/grades';
import { T3MGrades, T6MGrades, TGrades } from '@app-types/grades';
import { useState, useEffect } from 'react';

export const useGrades = () => {
  const [now, setNow] = useState<TGrades>({} as TGrades);
  const [grade3M, setGrade3M] = useState<T3MGrades>({} as T3MGrades);
  const [grade6M, setGrade6M] = useState<T6MGrades>({} as T6MGrades);

  useEffect(() => {
    (async () => {
      const [curr, gr3m, gr6m] = await Promise.all([getCurrentGradesAPI(), get3mGradesAPI(), get6mGradesAPI()]);
      setNow(() => curr);
      setGrade3M(() => gr3m);
      setGrade6M(() => gr6m);
    })();
  }, []);

  const grades = formatGradesData(now, grade3M, grade6M);
  return grades;
};
