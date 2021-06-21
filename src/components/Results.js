import React, { useMemo } from 'react'
import { useTable, useSortBy, usePagination } from 'react-table'
import MOCK_DATA from './MOCK_DATA.json'
import { COLUMNS } from './columns'
import placeholder1 from '../img/sadFace.png'
import placeholder2 from '../img/mehFace.png'
import placeholder3 from '../img/happyFace.png'

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
      console.log(d)
    }
  }

  const imageFix = (d) => {
    console.log(d)
    return d.grade < 3
      ? d.grade + 'laag' + d.subject
      : d.grade > 3
      ? d.grade + 'hoog' + d.subject
      : d.grade + 'neutraal' + d.subject
  }

  dataFix()

  return (
    <>
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
      <div>
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
        <button onClick={() => previousPage()} disabled={!canPreviousPage}>
          Previous
        </button>
        <button onClick={() => nextPage()} disabled={!canNextPage}>
          Next
        </button>
      </div>
      {data.map((d) => (
        <div>{imageFix(d)}</div>
      ))}
    </>
  )
}

export default Results
