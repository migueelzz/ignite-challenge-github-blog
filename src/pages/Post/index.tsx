import { useCallback, useEffect, useState } from 'react'

import { NavLink, useParams } from 'react-router-dom'
import { api } from '../../lib/axios'

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

type PostType = {
  title: string
  body: string
  number: number
  comments: number
  created_at: Date

  user: {
    name: string
    login: string
  }
}

export function Post() {
  const { issuesNumber } = useParams()
  const [post, setPost] = useState({} as PostType)

  const loadPost = useCallback(async () => {
    const response = await api.get(
      `/repos/migueelzz/ignite-challenge-github-blog/issues/${issuesNumber}`,
    )

    // console.log(response.data)
    setPost(response.data)
  }, [issuesNumber])

  useEffect(() => {
    loadPost()
  }, [loadPost])

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
          <NavLink to="#" target="_blank">
            <span>
              ver no github
              <FaExternalLinkAlt size={12} />
            </span>
          </NavLink>
        </header>

        <h1>{post.title}</h1>
        <footer>
          <div>
            <FaGithub />
            {/* Erro ao tentar mostrar em tela o user.login */}
            {/* <span>{post.user.login}</span> */}
          </div>
          <div>
            <FaCalendarDay />
            <span>
              {/* Erro ao tentar passar  created_at para date-fns */}
              {/* {formatDistanceToNow(post.created_at, {
                addSuffix: true,
                locale: ptBR,
              })} */}
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
