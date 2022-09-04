import React from 'react'
import data from './data.json'
import './filters.css'

type IFilter = typeof data[0]

interface IFilterProps {
  filter: number | null,
  setFilter: React.Dispatch<React.SetStateAction<number | null>>
}

const Filters = ({ filter, setFilter }: IFilterProps) => {

  const selectFilter = (options: IFilter) => {
    return setFilter(options.id)
  }

  return (
    <div className='filters'>
      {data.map((options) => (
        <button
          className={`filters__button ${filter === options.id ? "active" : ""}`}
          key={options.id}
          onClick={() => selectFilter(options)}>
          {options.label}
        </button>
      ))}
    </div>
  )
}

export default Filters