import './itens.css'
import data from './data.json'

import Item from './Item'

const Itens = () => {
  return (
    <div className="itens">
      {data.map((option) => (
        <Item key={option.id} />
      ))}
    </div>
  )
}

export default Itens

