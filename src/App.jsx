import { Header } from './components/Header'
import { Post } from './Post'

import './global.css'

export function App() {
  return (
    <div>
      <Header />

      <Post 
        author="Lucas Ferreira"
        content="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquid maiores numquam consequatur velit deleniti inventore, recusandae nisi laudantium quaerat enim quasi quisquam dolorum, sequi natus obcaecati possimus quas, minus molestiae!" 
      />
      <Post 
        author="Wagner Junio"
        content="New post!" 
      />
    </div>
  )
}