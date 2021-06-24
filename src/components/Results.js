import React, { useMemo } from 'react'
import { useTable, useSortBy, usePagination } from 'react-table'
import MOCK_DATA from '../data/MOCK_DATA.json'
import { COLUMNS } from './columns'
import tinyRoom from '../img/tinyRoom.png'
import mediumRoom from '../img/mediumRoom.png'
import bigRoom from '../img/bigRoom.png'

export const Results = () => {
  const columns = useMemo(() => COLUMNS, [])
  const data = useMemo(() => MOCK_DATA, [])

  const {
    getTableProps, //get props for table header
    getTableBodyProps, //get props table body
    headerGroups, //group of headers
    page,
    nextPage,
    previousPage,
    canNextPage,
    canPreviousPage,
    prepareRow,
    pageOptions,
    setPageSize,
    state,
  } = useTable(
    {
      columns,
      data,
    },
    useSortBy,
    usePagination
  )

  const { pageIndex, pageSize } = state

  function dataFix() {
    const d = []
    for (let i = 0; i < data.length; i++) {
      d.push(data[i].grade)
    }
  }

  const imageFix = (d) => {
    return d.grade < 3 ? tinyRoom : d.grade > 3 ? bigRoom : mediumRoom
  }

  const textFix = (d) => {
    return d.grade < 3
      ? d.subject + ' ' + d.grade + '⭐'
      : d.grade > 3
      ? d.subject + ' ' + d.grade + '⭐'
      : d.subject + ' ' + d.grade + '⭐'
  }

  dataFix()

  return (
    <div className='my-2 mx-2 px-2'>
      <div className='grid md:grid-flow-col gap-1'>
        {data.map((d) => (
          <div className='w-auto py-4 bg-emerald-200 '>
            <div className='text-xl lg:text-2xl mb-2 text-center'>
              {' '}
              {textFix(d)}
            </div>
            <img
              src={imageFix(d)}
              className='object-fill w-auto h-64 rounded-r rounded'
            />
          </div>
        ))}
      </div>

      <table {...getTableProps()} className='table-auto'>
        <thead>
          {headerGroups.map(
            (
              headerGroup //map trough headergroups
            ) => (
              <tr
                {...headerGroup.getHeaderGroupProps()}
                className='bg-emerald-200'
              >
                {/* acces header under eacht group */}
                {headerGroup.headers.map((column) => (
                  // for each header acces each column
                  <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                    {column.render('Header')}
                    <span>
                      {column.isSorted
                        ? column.isSortedDesc
                          ? ' 🔽'
                          : ' 🔼'
                        : ''}
                    </span>
                  </th> //header is the values that gets rendered at the head of the table
                  //for each column render the header property
                ))}
              </tr>
            )
          )}
        </thead>
        <tbody {...getTableBodyProps()}>
          {page.map((row) => {
            //on each row acces the cells
            prepareRow(row)
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return <td {...cell.getCellProps()}>{cell.render('Cell')}</td> //for each cell cal the render function to pass in the string cell
                })}
              </tr> //    fix the value for the data  for each row and then render it in the browser.
            )
          })}
        </tbody>
      </table>
      <div className='px-2 py-2'>
        <span>
          Page{' '}
          <strong>
            {pageIndex + 1} of {pageOptions.length}
          </strong>{' '}
        </span>
        <select
          value={pageSize}
          onChange={(e) => setPageSize(Number(e.target.value))}
        >
          {[3, 5, 10].map((pageSize) => (
            <option key={pageSize} value={pageSize}>
              Show {pageSize}
            </option>
          ))}
        </select>
        <button
          className='button mx-1 my-1'
          onClick={() => previousPage()}
          disabled={!canPreviousPage}
        >
          Previous
        </button>
        <button
          className='button'
          onClick={() => nextPage()}
          disabled={!canNextPage}
        >
          Next
        </button>
      </div>
    </div>
  )
}

export default Results
