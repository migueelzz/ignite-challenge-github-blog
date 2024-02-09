import {
  FaCalendarDay,
  FaChevronLeft,
  FaComment,
  FaGithub,
} from 'react-icons/fa6'
import { NavLink } from 'react-router-dom'
import { PostContent, PostInfo } from './styles'
import { FaExternalLinkAlt } from 'react-icons/fa'

const code = `let foo = 42;   // foo is now a number
foo = 'bar';    // foo is now a string
foo = true;     // foo is now a boolean
`

export function Post() {
  return (
    <div>
      <PostInfo>
        <header>
          <NavLink to="#">
            <span>
              <FaChevronLeft size={12} />
              voltar
            </span>
          </NavLink>
          <NavLink to="#">
            <span>
              ver no github
              <FaExternalLinkAlt size={12} />
            </span>
          </NavLink>
        </header>

        <h1>Lorem ipsum dolor sit amet consectetur</h1>
        <footer>
          <div>
            <FaGithub />
            <span>migueelzz</span>
          </div>
          <div>
            <FaCalendarDay />
            <span>Há 1 dia</span>
          </div>
          <div>
            <FaComment />
            <span>5 comentários</span>
          </div>
        </footer>
      </PostInfo>

      <PostContent>
        <div>
          <p>
            <strong>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.{' '}
            </strong>
            Eum aliquid suscipit perferendis, deleniti unde doloremque dolor
            dolorem consequatur esse consequuntur expedita reiciendis nulla
            inventore, nostrum ipsam dicta earum dignissimos tempore!
          </p>

          <p>
            <strong>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.{' '}
            </strong>
            Eum aliquid suscipit perferendis, deleniti unde doloremque dolor
            dolorem consequatur esse consequuntur expedita reiciendis nulla
            inventore, nostrum ipsam dicta earum dignissimos tempore!
          </p>
        </div>

        <pre>
          <code>{code}</code>
        </pre>
      </PostContent>
    </div>
  )
}
