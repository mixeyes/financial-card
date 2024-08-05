import { FC, useEffect, useState } from 'react';
import { CardList } from './CardList';
import { RatingsSummary } from './RatingsSummary';
import { IRatings } from '@app-types/ratings';
import { getRatingSummaryAPI } from '@api/factorGrades';
import { FactorGrades } from './FactorGrades';
import { useGrades } from '@hooks/useGrades';
// import { mockGradesData } from '@utils/grades';

export const FinancialCard: FC = () => {
  const [ratings, setRatings] = useState<IRatings>({} as IRatings);
  const grades = useGrades();
  // const grades = mockGradesData;

  useEffect(() => {
    (async () => {
      const [rat] = await Promise.all([getRatingSummaryAPI()]);
      setRatings(() => rat);
    })();
  }, []);

  return (
    <CardList>
      <RatingsSummary ratings={ratings} />
      <FactorGrades grades={grades} />
      <div>
        <h1>Financial Card</h1>
      </div>
      <div>
        <h1>Financial Card</h1>
      </div>
      <div>
        <h1>Financial Card</h1>
      </div>
      <div>
        <h1>Financial Card</h1>
      </div>
    </CardList>
  );
};
