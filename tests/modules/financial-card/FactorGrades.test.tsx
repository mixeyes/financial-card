import { render, screen } from '@testing-library/react';
import { FactorGrades } from '../../../src/modules/finaincial-card/FactorGrades';
import { describe, expect, it } from 'vitest';

describe('FactorGrades', () => {
  it('should render a table with factor grades data', () => {
    const mockGrades = [
      { factor: 'Factor A', now: 'A', sixMonthsAgo: 'C', threeMonthsAgo: 'B' },
      { factor: 'Factor B', now: 'B', sixMonthsAgo: 'D', threeMonthsAgo: 'C' },
    ];

    render(<FactorGrades grades={mockGrades} />);

    const tableRows = screen.getAllByRole('row');
    expect(tableRows).toHaveLength(3); // 1 header row + 2 data rows

    const factorARow = tableRows[1];
    const factorBRow = tableRows[2];

    expect(factorARow).toHaveTextContent('Factor AAB');
    expect(factorBRow).toHaveTextContent('Factor BBC');
  });

  it('should render a skeleton loader when grades are null', () => {
    render(<FactorGrades grades={null} />);

    const skeletonLoader = screen.getByTestId('skeleton');
    expect(skeletonLoader).toBeInTheDocument();
  });

  it('should render an empty table when grades is an empty array', () => {
    render(<FactorGrades grades={[]} />);

    const tableRows = screen.getAllByRole('row');
    expect(tableRows).toHaveLength(1); // Only the header row
  });
});
