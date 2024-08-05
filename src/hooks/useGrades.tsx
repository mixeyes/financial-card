import { getCurrentGradesAPI, get3mGradesAPI, get6mGradesAPI } from '@api/factorGrades';
import { formatGradesData } from '@utils/grades';
import { IFactorGradesData } from '@app-types/grades';
import { useState, useEffect } from 'react';

export const useGrades = () => {
  const [grades, setGrades] = useState<IFactorGradesData[] | null>(null);

  useEffect(() => {
    (async () => {
      const [curr, gr3m, gr6m] = await Promise.all([getCurrentGradesAPI(), get3mGradesAPI(), get6mGradesAPI()]);
      await setGrades(() => formatGradesData(curr, gr3m, gr6m));
    })();
  }, []);

  return grades;
};
