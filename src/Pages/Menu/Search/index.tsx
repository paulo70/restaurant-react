import React, { memo } from "react"
import './search.css'
import { CgSearch } from 'react-icons/cg'

interface ISearchProps {
  search: string,
  setSearch: React.Dispatch<React.SetStateAction<string>>
}
const Search = ({ search, setSearch }: ISearchProps) => {
  return (
    <div className="search">
      <input
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder='buscar'
      />
      <CgSearch
        size={20}
        color='#4c4d5e'
      />
    </div>
  )
}

export default memo(Search) 