import { IQuantRanking } from '@app-types/ranking';
import {
  TableOptions,
  HeaderGroup,
  Row,
  createColumnHelper,
  useReactTable,
  getCoreRowModel,
  flexRender,
} from '@tanstack/react-table';
import { FC, useMemo } from 'react';
import { Link } from 'react-router-dom';

const columnHelper = createColumnHelper<IQuantRanking>();

interface IQuantRankingProps {
  ranking: IQuantRanking[];
}

export const QuantRanking: FC<IQuantRankingProps> = ({ ranking }) => {
  const columns = [
    columnHelper.accessor('category', {
      cell: ({ getValue }) => getValue() as string,
      header: 'Category',
    }),
    columnHelper.accessor('detail', {
      cell: ({ getValue }) => getValue() as string,
      header: 'Detail',
    }),
  ];

  const data = useMemo(() => ranking, [ranking]);

  const table = useReactTable({
    columns,
    data,
    getCoreRowModel: getCoreRowModel(),
  } as TableOptions<IQuantRanking>);

  return (
    <div className='table-container'>
      <h3>Quant Ranking</h3>
      <table className='card-table'>
        <thead>
          {table.getHeaderGroups().map((headerGroup: HeaderGroup<IQuantRanking[]>) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th key={header.id}>{flexRender(header.column.columnDef.header, header.getContext())}</th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row: Row<IQuantRanking>) => {
            return (
              <tr key={row.id} className='last'>
                {row.getVisibleCells().map((cell) => (
                  <td key={cell.id}>{flexRender(cell.column.columnDef.cell, cell.getContext())}</td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
      <Link to='#'>Quant Ratings Beat The Market</Link>
    </div>
  );
};
