import { Truncate } from '../../utils/truncate'
import { CardPostContainer } from './styles'

export function CardPost() {
  return (
    <CardPostContainer to="#">
      <div>
        <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>
        <span>Há 1 dia</span>
      </div>
      <p>
        {Truncate(`Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
        totam unde distinctio, officiis reiciendis molestiae id mollitia
        quisquam nesciunt consequuntur voluptate! Dolorum modi hic nostrum, at
        magni pariatur explicabo repellendus? Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Voluptatum totam unde distinctio, officiis
        reiciendis molestiae id mollitia quisquam nesciunt consequuntur
        voluptate! Dolorum modi hic nostrum, at magni pariatur explicabo
        repellendus? Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Voluptatum totam unde distinctio, officiis reiciendis molestiae id
        mollitia quisquam nesciunt consequuntur voluptate! Dolorum modi hic
        nostrum, at magni pariatur explicabo repellendus?`)}
      </p>
    </CardPostContainer>
  )
}
