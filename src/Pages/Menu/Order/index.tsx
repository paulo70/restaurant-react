import './order.css'
import data from './data.json'
import className from 'classnames'
import { useState } from 'react'
import { MdKeyboardArrowUp, MdKeyboardArrowDown, } from 'react-icons/md'

interface IOrderProps {
  order: string,
  setOrder: React.Dispatch<React.SetStateAction<string>>
}

const Order = ({ order, setOrder }: IOrderProps) => {
  const [open, setOpen] = useState(false)
  const name = order && data.find(option => option.value === order)?.nome

  return (
    <button
      className={className({
        "order": true,
        "active": order !== ''
      })}
      onClick={() => setOpen(!open)}
      onBlur={() => setOpen(false)}
    >
      <span>{name || "ordernar por"}</span>
      {open
        ?
        <MdKeyboardArrowUp size={20} />
        :
        <MdKeyboardArrowDown size={20} />
      }
      <div className={className({
        "order__options": true,
        "active": open
      })}>
        {data.map((option) => (
          <div
            className='order__option'
            key={option.value}
            onClick={() => setOrder(option.value)}
          >
            {option.nome}
          </div>
        ))}
      </div>
    </button>
  )
}

export default Order