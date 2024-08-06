import { getQuantRankingAPI } from '@api/factorGrades';
import { useState, useEffect } from 'react';
import { IQuantRanking } from '@app-types/ranking';
import { formatRankingData } from '@utils/ranking';

export const useRanking = () => {
  const [ranking, setRanking] = useState<IQuantRanking[] | null>(null);

  useEffect(() => {
    (async () => {
      const data = await getQuantRankingAPI();
      await setRanking(() => formatRankingData(data));
    })();
  }, []);

  return ranking;
};
