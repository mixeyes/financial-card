import { IQuantRanking, IQuantRankings } from '@app-types/ranking';

export const RANKING_MOCK_test: IQuantRanking[] = [
  { category: 'Sector', detail: 'Information Technology' },
  { category: 'Industry', detail: 'Technology Hardware, Storage and Peripherals' },
  { category: 'Ranked Overall', detail: '825 out of 4455' },
  { category: 'Ranked in Sector', detail: '105 out of 552' },
  { category: 'Ranked in Industry', detail: '8 out of 28' },
];

export const RANKING_MOCK: IQuantRankings = {
  industry: 'Technology Hardware, Storage and Peripherals',
  rankings: {
    industry_specific: {
      rank: 8,
      total: 28,
    },
    overall: {
      rank: 825,
      total: 4455,
    },
    sector: {
      rank: 105,
      total: 552,
    },
  },
  sector: 'Information Technology',
};
