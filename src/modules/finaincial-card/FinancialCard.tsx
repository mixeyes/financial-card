import { FC, useEffect, useState } from 'react';
import { CardList } from './CardList';
import { RatingsSummary } from './RatingsSummary';
import { IRatings } from '@app-types/ratings';
import { getQuantRankingAPI, getRatingSummaryAPI } from '@api/factorGrades';
import { FactorGrades } from './FactorGrades';
import { useGrades } from '@hooks/useGrades';
import { IQuantRanking } from '@app-types/ranking';
import { QuantRanking } from './QuantRanking';
// import { mockGradesData } from '@utils/grades';

export const FinancialCard: FC = () => {
  const [ratings, setRatings] = useState<IRatings>({} as IRatings);
  const [ranking, setRanking] = useState<IQuantRanking[]>([] as IQuantRanking[]);
  const grades = useGrades();
  // const grades = mockGradesData;

  useEffect(() => {
    (async () => {
      const [rat, rank] = await Promise.all([getRatingSummaryAPI(), getQuantRankingAPI()]);
      setRatings(() => rat);
      setRanking(() => rank);
    })();
  }, []);

  return (
    <CardList>
      <RatingsSummary ratings={ratings} />
      <FactorGrades grades={grades} />
      <QuantRanking ranking={ranking} />
    </CardList>
  );
};
