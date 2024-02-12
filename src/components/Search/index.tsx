import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

import { SearchContainer } from './styles'
import { useContext } from 'react'
import { PostContext } from '../../contexts/PostContext'

const searchFormSchema = z.object({
  query: z.string(),
})

type SearchFormInputs = z.infer<typeof searchFormSchema>

export function Search() {
  const { register } = useForm<SearchFormInputs>({
    resolver: zodResolver(searchFormSchema),
  })

  const { posts, fetchPosts } = useContext(PostContext)

  // const query = watch('query')

  const handleSearch = async (query: string) => {
    console.log(query)
    await fetchPosts(query)
  }

  return (
    <SearchContainer>
      <div>
        <h2>Publicações</h2>
        <span>{posts.length} publicações</span>
      </div>

      <form>
        <input
          type="text"
          placeholder="Buscar conteúdo"
          {...register('query')}
          onChange={(e) => handleSearch(e.target.value)}
        />
      </form>
    </SearchContainer>
  )
}
