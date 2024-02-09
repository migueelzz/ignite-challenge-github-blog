import { useCallback, useContext, useEffect } from 'react'
import { GitHubContext } from '../../contexts/GitHubContext'

import { NavLink, useParams } from 'react-router-dom'

import ReactMarkdown from 'react-markdown'

import { formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale/pt-BR'

import {
  FaCalendarDay,
  FaChevronLeft,
  FaComment,
  FaGithub,
} from 'react-icons/fa6'
import { FaExternalLinkAlt } from 'react-icons/fa'

import { PostContent, PostInfo } from './styles'

export function Post() {
  const { postId } = useParams()
  const { post, getIssuesRepoByNumber } = useContext(GitHubContext)

  const getIssues = useCallback(() => {
    if (postId) {
      getIssuesRepoByNumber(postId)
    }
  }, [postId, getIssuesRepoByNumber])

  useEffect(() => {
    getIssues()
  }, [getIssues])

  return (
    <div>
      <PostInfo>
        <header>
          <NavLink to="/">
            <span>
              <FaChevronLeft size={12} />
              voltar
            </span>
          </NavLink>
          <NavLink to={post.user.html_url} target="_blank">
            <span>
              ver no github
              <FaExternalLinkAlt size={12} />
            </span>
          </NavLink>
        </header>

        <h1>{post?.title}</h1>
        <footer>
          <div>
            <FaGithub />
            <span>{post.user.login}</span>
          </div>
          <div>
            <FaCalendarDay />
            <span>
              {formatDistanceToNow(post.created_at, {
                addSuffix: true,
                locale: ptBR,
              })}
            </span>
          </div>
          <div>
            <FaComment />
            <span>{post.comments} comentários</span>
          </div>
        </footer>
      </PostInfo>

      <PostContent>
        <ReactMarkdown>{post.body}</ReactMarkdown>
      </PostContent>
    </div>
  )
}
