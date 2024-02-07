import { HeaderContainer } from './styles'
import Hero from '../../assets/hero.svg'

export function Header() {
  return (
    <HeaderContainer>
      <img src={Hero} alt="" />
    </HeaderContainer>
  )
}
