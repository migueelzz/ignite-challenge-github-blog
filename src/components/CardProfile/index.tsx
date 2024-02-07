import { FaUserGroup, FaGithub, FaBuilding } from 'react-icons/fa6'
import { CardContainer, CardContent } from './styles'
import { FaExternalLinkAlt } from 'react-icons/fa'
export function CardProfile() {
  return (
    <CardContainer>
      <img src="https://github.com/migueelzz.png" alt="" />

      <CardContent>
        <div>
          <h1>Miguel Lemes</h1>
          <a href="#">
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
            Rocketseat
          </span>
          <span>
            <FaUserGroup />
            32 seguidores
          </span>
        </footer>
      </CardContent>
    </CardContainer>
  )
}
