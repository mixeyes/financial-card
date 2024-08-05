import { render, screen } from '@testing-library/react';
import { FinancialCard } from '../../../src/modules/finaincial-card/FinancialCard';
import { getRatingSummaryAPI, getQuantRankingAPI } from '../../../src/api/factorGrades';
import { afterEach, describe, expect, it, MockedFunction, vi } from 'vitest';
import { MemoryRouter } from 'react-router-dom';

vi.mock('@api/factorGrades');
vi.mock('@hooks/useGrades', () => ({
  useGrades: vi.fn().mockReturnValue(['A', 'B', 'C']),
}));

describe('FinancialCard', () => {
  afterEach(() => {
    vi.clearAllMocks();
  });

  it('should render RatingsSummary, FactorGrades, and QuantRanking components for premium users', async () => {
    const mockRatings = { rating: 4.5 };
    const mockRanking = [{ rank: 1 }, { rank: 2 }];
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
    const mockRanking = [{ rank: 1 }, { rank: 2 }];
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
