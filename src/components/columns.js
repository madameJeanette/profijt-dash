export const COLUMNS = [
  {
    Header: 'Id',
    Footer: 'Id',
    accessor: 'id',
  },
  {
    Header: 'Vak',
    Footer: 'Vak',
    accessor: 'subject',
  },
  {
    Header: 'Resultaat',
    Footer: 'Resultaat',
    accessor: 'grade',
  },
  {
    Header: 'Level',

    accessor: 'level',
  },

  // {
  //   Header: 'Level',
  //   accessor: 'imageUrl',
  //   maxWidth: 70,
  //   minWidth: 70,
  // }
]

export const GROUPED_COLUMNS = [
  {
    Header: 'Id',
    Footer: 'Id',
    accessor: 'id',
  },
  {
    Header: 'Vak',
    Footer: 'Vak',
    columns: [
      {
        Header: 'Vak',
        Footer: 'Vak',
        accessor: 'subject',
      },
      {
        Header: 'Resultaat',
        Footer: 'Resultaat',
        accessor: 'grade',
      },
    ],
  },
]
