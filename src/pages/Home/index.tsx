import { useEffect, useState } from 'react'
import { CardPost } from '../../components/CardPost'
import { CardProfile } from '../../components/CardProfile'
import { Search } from '../../components/Search'
import { api } from '../../lib/axios'
import { CardContainer, HomeContainer } from './styles'

export interface GitHubUser {
  name: string
  avatar_url: string
  bio: string
  login: string
  html_url: string
  followers: number
  location: string
}

export interface ReposGitHub {
  id: number
  name: string
  description: string
  created_at: string
  html_url: string
}

export function Home() {
  const [userData, setUserData] = useState({} as GitHubUser)
  const [repos, setRepos] = useState<ReposGitHub[]>([])

  async function fetchGitHubUser() {
    const response = await api.get('https://api.github.com/users/migueelzz')
    setUserData(response.data)
  }

  async function fetchRespos() {
    const response = await api.get(
      'https://api.github.com/users/migueelzz/repos',
    )
    setRepos(response.data)
  }

  useEffect(() => {
    fetchGitHubUser()
    fetchRespos()
  }, [])

  return (
    <HomeContainer>
      <CardProfile user={userData} />
      <Search />

      <CardContainer>
        {repos.map((repo) => {
          return <CardPost key={repo.id} repo={repo} />
        })}
      </CardContainer>
    </HomeContainer>
  )
}
