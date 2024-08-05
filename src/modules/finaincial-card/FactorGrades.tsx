import { FC, useMemo } from 'react';
import {
  TableOptions,
  HeaderGroup,
  Row,
  useReactTable,
  getCoreRowModel,
  createColumnHelper,
  flexRender,
} from '@tanstack/react-table';
import { IFactorGradesData } from '@app-types/grades';
import './styles/card.css';
import { Skeleton } from '@components/skeleton/Skeleton';

const columnHelper = createColumnHelper<IFactorGradesData>();

interface IFactorGrades {
  grades: IFactorGradesData[] | null;
}

export const FactorGrades: FC<IFactorGrades> = ({ grades }) => {
  const columns = [
    columnHelper.accessor('factor', {
      cell: ({ getValue }) => getValue() as string,
      header: 'Factor',
    }),
    columnHelper.accessor('now', {
      cell: ({ getValue }) => getValue() as string,
      header: 'Now',
    }),
    columnHelper.accessor('threeMonthsAgo', {
      cell: ({ getValue }) => getValue() as string,
      header: '3M ago',
    }),
    columnHelper.accessor('sixMonthsAgo', {
      cell: ({ getValue }) => getValue() as string,
      header: '6M ago',
    }),
  ];

  const data = useMemo(() => grades, [grades]);

  const table = useReactTable({
    columns,
    data,
    getCoreRowModel: getCoreRowModel(),
  } as TableOptions<IFactorGradesData>);

  return (
    <div className='table-container' data-testid='factor-grades'>
      <h3>Factor Grades</h3>

      {grades ? (
        <table className='card-table'>
          <thead>
            {table.getHeaderGroups().map((headerGroup: HeaderGroup<IFactorGradesData>) => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <th key={header.id}>{flexRender(header.column.columnDef.header, header.getContext())}</th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody>
            {table.getRowModel().rows.map((row: Row<IFactorGradesData>) => {
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
