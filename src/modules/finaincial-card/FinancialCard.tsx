import { FC } from 'react';
import { CardList } from './CardList';
import { RatingsSummary } from './RatingsSummary';
import { FactorGrades } from './FactorGrades';
import { useGrades } from '@hooks/useGrades';
import { QuantRanking } from './QuantRanking';
import { useRanking } from '@hooks/useRanking';
import { useRating } from '@hooks/useRating';

interface IFinancialCardProps {
  isPremium?: boolean;
}
export const FinancialCard: FC<IFinancialCardProps> = ({ isPremium }) => {
  const ratings = useRating() || null;
  const ranking = useRanking() || null;
  const grades = useGrades() || null;

  return (
    <CardList>
      {isPremium ? <RatingsSummary ratings={ratings} /> : null}
      {isPremium ? <FactorGrades grades={grades} /> : null}
      <QuantRanking ranking={ranking} />
    </CardList>
  );
};
