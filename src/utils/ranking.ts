import { IQuantRanking, IQuantRankings } from '@app-types/ranking';

export const formatRankingData = (data: IQuantRankings) => {
  const formattedData: IQuantRanking[] = [
    { category: 'Sector', detail: data.sector },
    { category: 'Industry', detail: data.industry },
    { category: 'Ranked Overall', detail: `${data.rankings.overall.rank} out of ${data.rankings.overall.total}` },
    { category: 'Ranked in Sector', detail: `${data.rankings.sector.rank} out of ${data.rankings.sector.total}` },
    {
      category: 'Ranked in Industry',
      detail: `${data.rankings.industry_specific.rank} out of ${data.rankings.industry_specific.total}`,
    },
  ];
  return formattedData;
};
