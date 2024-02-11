import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

import { SearchContainer } from './styles'
import { useCallback, useEffect } from 'react'
import { api } from '../../lib/axios'

interface PostType {
  title: string
  body: string
  number: number
  created_at: Date
}

const searchFormSchema = z.object({
  query: z.string(),
})

type SearchFormInputs = z.infer<typeof searchFormSchema>

interface SearchProps {
  onSearch: (filteredPosts: PostType[]) => void
}

export function Search({ onSearch }: SearchProps) {
  const { register, watch } = useForm<SearchFormInputs>({
    resolver: zodResolver(searchFormSchema),
  })

  const query = watch('query')

  // const fetchPosts = useCallback(
  //   async (query: string) => {
  //     try {
  //       let url
  //       if (query) {
  //         url = `repo:migueelzz/ignite-challenge-github-blog ${query}`
  //       } else {
  //         url = 'repo:migueelzz/ignite-challenge-github-blog'
  //       }
  //       const response = await api.get('/search/issues', {
  //         params: {
  //           q: url,
  //         },
  //       })
  //       onSearch(response.data.items)
  //     } catch (error) {
  //       console.error('Error fetching posts:', error)
  //     }
  //   },
  //   [onSearch],
  // )

  const fetchPosts = useCallback(async () => {
    try {
      const url = 'repo:migueelzz/ignite-challenge-github-blog'
      const response = await api.get('/search/issues', {
        params: {
          q: url,
        },
      })
      onSearch(response.data.items)
    } catch (error) {
      console.error('Error fetching posts:', error)
    }
  }, [onSearch])

  useEffect(() => {
    fetchPosts()
  }, [fetchPosts])

  return (
    <SearchContainer>
      <div>
        <h2>Publicações</h2>
        <span>6 publicações</span>
      </div>

      <form>
        <input
          type="text"
          placeholder="Buscar conteúdo"
          {...register('query')}
        />
      </form>
    </SearchContainer>
  )
}
