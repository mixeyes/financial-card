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
import { FactorGradesData } from '@app-types/grades';
import './styles/card.css';

const columnHelper = createColumnHelper<FactorGradesData>();

interface IFactorGrades {
  grades: FactorGradesData[];
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
  } as TableOptions<FactorGradesData>);

  return (
    <div className='table-container'>
      <h3>Factor Grades</h3>

      <table className='ratings-table'>
        <thead>
          {table.getHeaderGroups().map((headerGroup: HeaderGroup<FactorGradesData>) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th key={header.id}>{flexRender(header.column.columnDef.header, header.getContext())}</th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row: Row<FactorGradesData>) => {
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
