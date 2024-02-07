import { CardProfile } from '../../components/CardProfile'
import { Search } from '../../components/Search'
import { HomeContainer } from './styles'

export function Home() {
  return (
    <HomeContainer>
      <CardProfile />

      <Search />
    </HomeContainer>
  )
}
