import './item.css'
const Item = () => {
  return (
    <div className="item">
      <div className="item__image"></div>
      <div className="item__descricao">
        <div className="item__title">
          <h2>Macarrao</h2>
          <p>descricao do macarrao</p>
        </div>
      </div>
      <div className="item__tags">
        <div className="item__types">
          massa
        </div>
        <div className="item__portion">
          400g
        </div>
        <div className="item__qtdperson">
          Serve 2 pessoas
        </div>
        <div className="item__value">
          R$ 50
        </div>
      </div>
    </div>
  )
}

export default Item