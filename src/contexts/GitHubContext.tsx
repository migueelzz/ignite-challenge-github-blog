import { ReactNode, createContext, useEffect, useState } from 'react'
import { api } from '../lib/axios'

interface User {
  id: number
  login: string
  html_url: string
}

export interface Post {
  id: number
  title: string
  body: string
  number: number
  created_at: string
  html_url: string
  user: User
  comments: number
}

interface GitHubContextType {
  post: Post
  posts: Post[]
  fetchPosts: () => void
  getIssuesRepoByNumber: (postId: string) => void
}

export const GitHubContext = createContext({} as GitHubContextType)

interface GitHubProviderProps {
  children: ReactNode
}

export function GitHubProvider({ children }: GitHubProviderProps) {
  const [posts, setPosts] = useState<Post[]>([])
  const [post, setPost] = useState({} as Post)

  async function fetchPosts() {
    const response = await api.get('search/issues', {
      params: {
        q: `repo:migueelzz/ignite-challenge-github-blog`,
      },
    })

    setPosts(response.data.items)
  }

  async function getIssuesRepoByNumber(postId?: string) {
    if (postId) {
      const response = await api.get(
        `repos/migueelzz/ignite-challenge-github-blog/issues/${postId}`,
      )

      setPost(response.data)
    } else {
      console.log('Error')
    }
  }

  useEffect(() => {
    fetchPosts()
    getIssuesRepoByNumber()
  }, [])

  return (
    <GitHubContext.Provider
      value={{ post, posts, fetchPosts, getIssuesRepoByNumber }}
    >
      {children}
    </GitHubContext.Provider>
  )
}
