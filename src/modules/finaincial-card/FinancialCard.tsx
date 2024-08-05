import { FC, useEffect, useState } from 'react';
import { CardList } from './CardList';
import { RatingsSummary } from './RatingsSummary';
import { IRatings } from '@app-types/ratings';
import { getQuantRankingAPI, getRatingSummaryAPI } from '@api/factorGrades';
import { FactorGrades } from './FactorGrades';
import { useGrades } from '@hooks/useGrades';
import { IQuantRanking } from '@app-types/ranking';
import { QuantRanking } from './QuantRanking';

interface IFinancialCardProps {
  isPremium?: boolean;
}
export const FinancialCard: FC<IFinancialCardProps> = ({ isPremium }) => {
  const [ratings, setRatings] = useState<IRatings | null>(null);
  const [ranking, setRanking] = useState<IQuantRanking[] | null>(null);
  const grades = useGrades() || null;

  useEffect(() => {
    (async () => {
      const [rat, rank] = await Promise.all([getRatingSummaryAPI(), getQuantRankingAPI()]);
      setRatings(() => rat);
      setRanking(() => rank);
    })();
  }, []);

  return (
    <CardList>
      {isPremium ? <RatingsSummary ratings={ratings} /> : null}
      {isPremium ? <FactorGrades grades={grades} /> : null}
      <QuantRanking ranking={ranking} />
    </CardList>
  );
};
