import { formatGradesData } from '../../src/utils/grades';
import { GRADES_3M_MOCK, GRADES_6M_MOCK, GRADES_NOW_MOCK } from '../../src/constants/grades';
import { describe, expect, it } from 'vitest';

describe('formatGradesData', () => {
  it('should format grades data correctly', () => {
    const expected = [
      { factor: 'Growth', now: 'D-', sixMonthsAgo: 'D', threeMonthsAgo: 'C-' },
      { factor: 'Momentum', now: 'B+', sixMonthsAgo: 'C', threeMonthsAgo: 'C-' },
      { factor: 'Profitability', now: 'A+', sixMonthsAgo: 'A+', threeMonthsAgo: 'A+' },
      { factor: 'Revisions', now: 'B-', sixMonthsAgo: 'C', threeMonthsAgo: 'C' },
      { factor: 'Valuation', now: 'F', sixMonthsAgo: 'F', threeMonthsAgo: 'F' },
    ];

    const result = formatGradesData(GRADES_NOW_MOCK, GRADES_3M_MOCK, GRADES_6M_MOCK.data);
    expect(result).toEqual(expected);
  });

  it('should handle empty input data', () => {
    const result = formatGradesData(null, null, null);
    expect(result).toEqual([]);
  });
});
