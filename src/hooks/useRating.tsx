import { getRatingSummaryAPI } from '@api/factorGrades';
import { useState, useEffect } from 'react';
import { IRatings } from '@app-types/ratings';

export const useRating = () => {
  const [rating, setRating] = useState<IRatings | null>(null);

  useEffect(() => {
    (async () => {
      const data = await getRatingSummaryAPI();
      await setRating(() => data);
    })();
  }, []);

  return rating;
};
