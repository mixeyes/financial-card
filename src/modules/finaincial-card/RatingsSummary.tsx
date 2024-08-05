import { FC, useMemo } from 'react';
import { createColumnHelper, flexRender, getCoreRowModel, useReactTable } from '@tanstack/react-table';
import './styles/card.css';
import { IRatingData, IRatings } from '@app-types/ratings';
import { Skeleton } from '@components/skeleton/Skeleton';

const columnHelper = createColumnHelper<IRatingData>();

interface IRatingsSummaryProps {
  ratings: IRatings | null;
}

export const RatingsSummary: FC<IRatingsSummaryProps> = ({ ratings }) => {
  const data: IRatingData[] = useMemo(
    () =>
      ratings
        ? Object.entries(ratings).map(([source, { rating, score }]) => ({
            rating,
            score,
            source,
          }))
        : [],
    [ratings],
  );

  const columns = [
    columnHelper.accessor('source', {
      cell: ({ getValue }) => getValue(),
    }),
    columnHelper.accessor('rating', {
      cell: ({ getValue }) => getValue(),
    }),
    columnHelper.accessor('score', {
      cell: ({ getValue }) => getValue(),
    }),
  ];

  const tableInstance = useReactTable({
    columns,
    data,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div className='table-container' data-testid='rating-summary'>
      <h3>Ratings Summary</h3>
      {ratings ? (
        <table className='card-table'>
          <tbody>
            {tableInstance.getRowModel().rows.map((row) => {
              return (
                <tr key={row.id} className='first'>
                  {row.getVisibleCells().map((cell) => (
                    <td key={cell.id}>{flexRender(cell.column.columnDef.cell, cell.getContext())}</td>
                  ))}
                </tr>
              );
            })}
          </tbody>
        </table>
      ) : (
        <Skeleton />
      )}
    </div>
  );
};
