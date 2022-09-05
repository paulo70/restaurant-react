import './item.css'
import data from '../data.json'
import classNames from 'classnames'

type IItemProps = typeof data[0]

const Item = (props: IItemProps) => {
  const { title, description, category, size, serving, price } = props
  return (
    <div className="item">
      <div className="item__image"></div>
      <div className="item__descricao">
        <div className="item__title">
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
      </div>
      <div className="item__tags">
        <div className={classNames({
          "item__types": true,
          [`item__${category.label.toLocaleLowerCase()}`]: true
        })}>
          {category.label}
        </div>
        <div className="item__portion">
          {size}g
        </div>
        <div className="item__qtdperson">
          Serve {serving} pessoas
        </div>
        <div className="item__value">
          R$ {price.toFixed(2)}
        </div>
      </div>
    </div >
  )
}

export default Item