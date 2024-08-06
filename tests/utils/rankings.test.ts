import { describe, it, expect } from 'vitest';
import { formatRankingData } from '../../src/utils/ranking';
import { IQuantRankings } from '../../src/types/ranking';

describe('formatRankingData', () => {
  it('should format ranking data correctly', () => {
    const mockData: IQuantRankings = {
      industry: 'Software',
      rankings: {
        industry_specific: { rank: 3, total: 50 },
        overall: { rank: 10, total: 1000 },
        sector: { rank: 5, total: 100 },
      },
      sector: 'Technology',
    };

    const expectedOutput = [
      { category: 'Sector', detail: 'Technology' },
      { category: 'Industry', detail: 'Software' },
      { category: 'Ranked Overall', detail: '10 out of 1000' },
      { category: 'Ranked in Sector', detail: '5 out of 100' },
      { category: 'Ranked in Industry', detail: '3 out of 50' },
    ];

    const result = formatRankingData(mockData);
    expect(result).toEqual(expectedOutput);
  });
});
