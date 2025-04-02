import { useSelector } from 'react-redux'

import * as S from './styles'

import cesta from '../../assets/cesta.png'
import { paraReal } from '../Produto'
import { RootReducer } from '../../store'

const Header = () => {
  const itemF = useSelector((state: RootReducer) => state.favoritar.itens)
  const itemC = useSelector((state: RootReducer) => state.carrinho.itens)

  const valorTotal = itemC.reduce((acc, item) => {
    acc += item.preco
    return acc
  }, 0)

  return (
    <S.Header>
      <h1>EBAC Sports</h1>
      <div>
        <span>{itemF.length} favoritos</span>
        <img src={cesta} />
        <span>
          {itemC.length} itens, valor total: {paraReal(valorTotal)}
        </span>
      </div>
    </S.Header>
  )
}

export default Header
