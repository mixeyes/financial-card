import { render, screen } from '@testing-library/react';
import { FinancialCard } from '../../../src/modules/finaincial-card/FinancialCard';
import { getRatingSummaryAPI, getQuantRankingAPI } from '../../../src/api/factorGrades';
import { afterEach, describe, expect, it, MockedFunction, vi } from 'vitest';
import { MemoryRouter } from 'react-router-dom';
import { RANKING_MOCK } from '../../../src/constants/ranking';
import { IRatings } from '../../../src/types/ratings';

vi.mock('@api/factorGrades');
vi.mock('@hooks/useGrades', () => ({
  useGrades: vi.fn().mockReturnValue(['A', 'B', 'C']),
}));

describe('FinancialCard', () => {
  afterEach(() => {
    vi.clearAllMocks();
  });

  it('should render RatingsSummary, FactorGrades, and QuantRanking components for premium users', async () => {
    const mockRatings: IRatings = {
      'Source A': { rating: '4.5', score: 90 },
      'Source B': { rating: '3.8', score: 75 },
    };
    const mockRanking = RANKING_MOCK;
    (getRatingSummaryAPI as MockedFunction<typeof getRatingSummaryAPI>).mockResolvedValueOnce(mockRatings);
    (getQuantRankingAPI as MockedFunction<typeof getQuantRankingAPI>).mockResolvedValueOnce(mockRanking);

    render(<FinancialCard isPremium />, { wrapper: MemoryRouter });

    const ratingSummaryElement = await screen.findByTestId('rating-summary');
    const factorGradesElement = screen.getByTestId('factor-grades');
    const quantRankingElement = screen.getByTestId('quant-ranking');

    expect(ratingSummaryElement).toBeInTheDocument();
    expect(factorGradesElement).toBeInTheDocument();
    expect(quantRankingElement).toBeInTheDocument();
  });

  it('should render only QuantRanking component for non-premium users', async () => {
    const mockRanking = RANKING_MOCK;
    (getQuantRankingAPI as MockedFunction<typeof getQuantRankingAPI>).mockResolvedValueOnce(mockRanking);

    render(<FinancialCard isPremium={false} />, { wrapper: MemoryRouter });

    const ratingSummaryElement = screen.queryByTestId('rating-summary');
    const factorGradesElement = screen.queryByTestId('factor-grades');
    const quantRankingElement = screen.getByTestId('quant-ranking');

    expect(ratingSummaryElement).not.toBeInTheDocument();
    expect(factorGradesElement).not.toBeInTheDocument();
    expect(quantRankingElement).toBeInTheDocument();
  });
});
