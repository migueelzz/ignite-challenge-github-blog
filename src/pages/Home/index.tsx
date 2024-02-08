import { CardPost } from '../../components/CardPost'
import { CardProfile } from '../../components/CardProfile'
import { Search } from '../../components/Search'
import { CardContainer, HomeContainer } from './styles'

export function Home() {
  return (
    <HomeContainer>
      <CardProfile />
      <Search />

      <CardContainer>
        <CardPost />
        <CardPost />
        <CardPost />
      </CardContainer>
    </HomeContainer>
  )
}
