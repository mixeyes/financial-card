import { FC, useMemo } from 'react';
import { createColumnHelper, flexRender, getCoreRowModel, useReactTable } from '@tanstack/react-table';
import './styles/ratingsSummary.css';
import { IRatingData, IRatings } from '@app-types/ratings';

const columnHelper = createColumnHelper<IRatingData>();

interface IRatingsSummaryProps {
  ratings: IRatings;
}

export const RatingsSummary: FC<IRatingsSummaryProps> = ({ ratings }) => {
  const data: IRatingData[] = useMemo(
    () =>
      Object.entries(ratings).map(([source, { rating, score }]) => ({
        rating,
        score,
        source,
      })),
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
    <div className='table-container'>
      <h3>Ratings Summary</h3>
      <table className='ratings-table'>
        <tbody>
          {tableInstance.getRowModel().rows.map((row) => {
            return (
              <tr key={row.id}>
                {row.getVisibleCells().map((cell) => (
                  <td key={cell.id}>{flexRender(cell.column.columnDef.cell, cell.getContext())}</td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
