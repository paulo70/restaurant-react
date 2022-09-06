import { memo, useState } from "react"
import Filters from "./Filters"
import Itens from "./Itens"
import "./menu.css"
import Order from "./Order"
import Search from "./Search"
const Menu = () => {
  const [search, setSearch] = useState('')
  const [filter, setFilter] = useState<number | null>(null)
  const [order, setOrder] = useState('')
  return (
    <main>
      <nav className="menu">Alulori</nav>
      <header className="header">
        <div className="header__text">
          The house of Pasta
        </div>
      </header>
      <section className="menu-content">
        <h3 className="menu-content__title">Cardápio</h3>
        <Search search={search} setSearch={setSearch} />

        <div className="filters">
          <Filters filter={filter} setFilter={setFilter} />
          <Order order={order} setOrder={setOrder} />
        </div>

        <Itens search={search} filter={filter} order={order} />
      </section>
    </main>
  )
}

export default memo(Menu)