import {
  ReactNode,
  createContext,
  useCallback,
  useEffect,
  useState,
} from 'react'
import { api } from '../lib/axios'

export interface PostType {
  title: string
  body: string
  number: number
  comments: number
  created_at: number

  user: {
    name: string
    login: string
  }
}

interface PostContextType {
  posts: PostType[]
  fetchPosts: (query: string) => Promise<void>
}

export const PostContext = createContext({} as PostContextType)

interface PostProviderProps {
  children: ReactNode
}

export function PostProvider({ children }: PostProviderProps) {
  const [posts, setPosts] = useState<PostType[]>([])

  const fetchPosts = useCallback(async (query?: string) => {
    try {
      let url = 'repo:migueelzz/ignite-challenge-github-blog'
      if (query) {
        url += ` ${query}`
      }
      const response = await api.get('/search/issues', {
        params: {
          q: url,
        },
      })
      console.log(response.data.items)
      setPosts(response.data.items)
    } catch (error) {
      console.error('Error fetching posts:', error)
    }
  }, [])

  useEffect(() => {
    fetchPosts()
  }, [fetchPosts])

  return (
    <PostContext.Provider value={{ posts, fetchPosts }}>
      {children}
    </PostContext.Provider>
  )
}
