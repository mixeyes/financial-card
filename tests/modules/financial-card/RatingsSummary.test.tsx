import { render, screen } from '@testing-library/react';
import { RatingsSummary } from '../../../src/modules/finaincial-card/RatingsSummary';
import { describe, expect, it } from 'vitest';

describe('RatingsSummary', () => {
  it('should render a table with ratings data', () => {
    const mockRatings = {
      'Source A': { rating: 4.5, score: 90 },
      'Source B': { rating: 3.8, score: 75 },
    };

    render(<RatingsSummary ratings={mockRatings} />);

    const tableRows = screen.getAllByRole('row');
    expect(tableRows).toHaveLength(2); // 1 header row + 2 data rows

    const sourceARow = tableRows[0];
    const sourceBRow = tableRows[1];

    expect(sourceARow).toHaveTextContent('Source A4.590');
    expect(sourceBRow).toHaveTextContent('Source B3.875');
  });

  it('should render a skeleton loader when ratings are null', () => {
    render(<RatingsSummary ratings={null} />);

    const skeletonLoader = screen.getByTestId('skeleton');
    expect(skeletonLoader).toBeInTheDocument();
  });
});
