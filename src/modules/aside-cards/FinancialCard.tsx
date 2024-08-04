import { FC, useEffect, useState } from 'react';
import { CardList } from './CardList';
import { RatingsSummary } from './RatingsSummary';
import { IRatings } from '@app-types/ratings';
import { getRatingSummaryAPI } from '@api/factorGrades';

export const FinancialCard: FC = () => {
  const [ratings, setRatings] = useState<IRatings>({} as IRatings);

  useEffect(() => {
    (async () => {
      const [rat] = await Promise.all([getRatingSummaryAPI()]);
      setRatings(() => rat);
    })();
  }, []);

  return (
    <CardList>
      <RatingsSummary ratings={ratings} />
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
      <div>
        <h1>Financial Card</h1>
      </div>
    </CardList>
  );
};
