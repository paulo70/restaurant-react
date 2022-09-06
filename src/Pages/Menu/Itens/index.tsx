import './itens.css'
import data from './data.json'

import Item from './Item'
import { useEffect } from 'react';
import { useState } from 'react';

interface IFilterProps {
  search: string;
  filter: number | null;
  order: string;
}

const Itens = (props: IFilterProps) => {
  const { search, filter, order } = props
  const [list, setList] = useState(data)

  const handleSearch = (title: string) => {
    const regex = new RegExp(search, 'i')
    return regex.test(title)
  }

  const handleFilter = (id: number) => {
    if (filter !== null) return filter === id
    return true
  }

  const sortAscendingProperty = (
    list: typeof data,
    property: keyof Pick<typeof data[0], 'size' | 'serving' | 'price'>
  ) => {
    return list.sort((a, b) => a[property] > b[property] ? 1 : -1)
  }

  const handleOrder = (newList: typeof data) => {
    switch (order) {
      case 'porcao':
        return sortAscendingProperty(newList, 'size')
      case 'qtd_pessoas':
        return sortAscendingProperty(newList, 'serving')
      case 'preco':
        return sortAscendingProperty(newList, 'price')
      default:
        return newList
    }
  }

  useEffect(() => {
    const newList = data.filter(
      item => handleSearch(item.title) && handleFilter(item.category.id)
    )

    setList(handleOrder(newList))
  }, [search, filter, order])

  return (
    <div className="itens">
      {list.map((option) => (
        <Item key={option.id} {...option} />
      ))}
    </div>
  )
}

export default Itens

