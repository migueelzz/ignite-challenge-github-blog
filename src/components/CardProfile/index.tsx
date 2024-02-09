import { FaUserGroup, FaGithub, FaBuilding } from 'react-icons/fa6'
import { CardContainer, CardContent } from './styles'
import { FaExternalLinkAlt } from 'react-icons/fa'
import { GitHubUser } from '../../pages/Home'

interface CardProfileProps {
  user: GitHubUser
}

export function CardProfile({ user }: CardProfileProps) {
  return (
    <CardContainer>
      <img src={user.avatar_url} alt="" />

      <CardContent>
        <div>
          <h1>{user.name}</h1>
          <a href={user.html_url}>
            <span>GitHub</span>
            <FaExternalLinkAlt size={12} />
          </a>
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea vel illo
          repellendus quasi ducimus, nemo harum nesciunt impedit, cupiditate
        </p>

        <footer>
          <span>
            <FaGithub />
            migueelzz
          </span>
          <span>
            <FaBuilding />
            {user.location}
          </span>
          <span>
            <FaUserGroup />
            {user.followers} seguidores
          </span>
        </footer>
      </CardContent>
    </CardContainer>
  )
}
