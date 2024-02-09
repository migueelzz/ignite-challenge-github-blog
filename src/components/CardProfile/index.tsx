import { useEffect, useState } from 'react'

import { api } from '../../lib/axios'

import { NavLink } from 'react-router-dom'

import { FaExternalLinkAlt } from 'react-icons/fa'
import { FaUserGroup, FaGithub, FaBuilding } from 'react-icons/fa6'

import { CardContainer, CardContent, CardFooter, CardInfo } from './styles'

interface User {
  name: string
  avatar_url: string
  bio: string
  login: string
  html_url: string
  followers: number
  location: string
}

export function CardProfile() {
  const [user, setUser] = useState({} as User)
  async function fetchUser() {
    const response = await api.get('users/migueelzz')
    setUser(response.data)
  }

  useEffect(() => {
    fetchUser()
  }, [])

  return (
    <CardContainer>
      <img src={user.avatar_url} alt="" />

      <CardContent>
        <CardInfo>
          <div>
            <h1>{user.name}</h1>
            <NavLink to={user.html_url} target="_blank">
              <span>GitHub</span>
              <FaExternalLinkAlt size={12} />
            </NavLink>
          </div>
          <p>{user.bio}</p>
        </CardInfo>

        <CardFooter>
          <span>
            <FaGithub />
            {user.login}
          </span>
          <span>
            <FaBuilding />
            {user.location}
          </span>
          <span>
            <FaUserGroup />
            {user.followers} seguidores
          </span>
        </CardFooter>
      </CardContent>
    </CardContainer>
  )
}
