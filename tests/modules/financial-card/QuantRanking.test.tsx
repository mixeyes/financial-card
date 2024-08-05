import { render, screen } from '@testing-library/react';
import { QuantRanking } from '../../../src/modules/finaincial-card/QuantRanking';
import { MemoryRouter } from 'react-router-dom';
import { describe, expect, it } from 'vitest';

describe('QuantRanking', () => {
  it('should render a table with quant ranking data', () => {
    const mockRanking = [
      { category: 'Category A', detail: 'Detail A' },
      { category: 'Category B', detail: 'Detail B' },
    ];

    render(<QuantRanking ranking={mockRanking} />, { wrapper: MemoryRouter });

    const tableRows = screen.getAllByRole('row');
    expect(tableRows).toHaveLength(3); // 1 header row + 2 data rows

    const categoryARow = tableRows[1];
    const categoryBRow = tableRows[2];

    expect(categoryARow).toHaveTextContent('Category ADetail A');
    expect(categoryBRow).toHaveTextContent('Category BDetail B');
  });

  it('should render a skeleton loader when ranking is null', () => {
    render(<QuantRanking ranking={null} />, { wrapper: MemoryRouter });

    const skeletonLoader = screen.getByTestId('skeleton');
    expect(skeletonLoader).toBeInTheDocument();
  });

  it('should render a link to "Quant Ratings Beat The Market"', () => {
    const mockRanking = [
      { category: 'Category A', detail: 'Detail A' },
      { category: 'Category B', detail: 'Detail B' },
    ];

    render(<QuantRanking ranking={mockRanking} />, { wrapper: MemoryRouter });

    const link = screen.getByText('Quant Ratings Beat The Market');
    expect(link).toBeInTheDocument();
  });
});
