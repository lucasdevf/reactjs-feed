import { Header } from './components/Header'
import { Sidebar } from './components/Sidebar'
import { Post } from './components/Post'

import styles from './App.module.css'

import './global.css'


export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>

        <Sidebar />

        <main>
        <Post 
          author="Lucas Ferreira"
          content="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquid maiores numquam consequatur velit deleniti inventore, recusandae nisi laudantium quaerat enim quasi quisquam dolorum, sequi natus obcaecati possimus quas, minus molestiae!" 
        />
        <Post 
          author="Wagner Junio"
          content="New post!" 
        />
        </main>

      </div>
    </div>
  )
}