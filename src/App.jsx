import { Header } from './components/Header'
import { Sidebar } from './components/Sidebar'
import { Post } from './components/Post'
import './global.css'
import styles from './App.module.css'

export function App() {

  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar/>
        <main>
          <Post
            content={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus impedit rem soluta. Nemo deserunt maiores rerum dolor quod tempora nobis ea porro nam. Aperiam aliquid hic aut dolore culpa debitis!"}
            author={"Gabriel Pires"}
          />
          <Post
            content={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus impedit rem soluta. Nemo deserunt maiores rerum dolor quod tempora nobis ea porro nam. Aperiam aliquid hic aut dolore culpa debitis!"}
            author={"Author 2"}
          />
        </main>
      </div>
    </div>
  )
}

