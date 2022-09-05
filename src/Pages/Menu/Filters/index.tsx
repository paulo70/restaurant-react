import React from 'react'
import data from './data.json'
import './filters.css'
import classNames from 'classnames'

type IFilter = typeof data[0]

interface IFilterProps {
  filter: number | null,
  setFilter: React.Dispatch<React.SetStateAction<number | null>>
}

const Filters = ({ filter, setFilter }: IFilterProps) => {

  const selectFilter = (options: IFilter) => {
    if (filter === options.id) return setFilter(null)
    return setFilter(options.id)
  }

  return (
    <div className='filters'>
      {data.map((options) => (
        <button
          className={classNames({
            "filters__button": true,
            "active": filter === options.id
          })}
          key={options.id}
          onClick={() => selectFilter(options)}>
          {options.label}
        </button>
      ))}
    </div>
  )
}

export default Filters