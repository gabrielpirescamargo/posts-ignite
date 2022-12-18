import styles from './Sidebar.module.css'
import {Pen} from 'phosphor-react'
import { Avatar } from './Avatar'

export function Sidebar(){
    return(
        <aside className={styles.sidebar}>
            <img className={styles.cover} src='https://images.unsplash.com/photo-1604964432806-254d07c11f32?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60'></img>
            <div className={styles.profile}>
                <Avatar src={'https://www.github.com/gabrielpirescamargo.png'}/>
                <strong>Gabriel Pires</strong>    
                <span>Web developer</span>
            </div>
            <footer>
                
                <a href='#'>
                    <Pen size={20} />
                    Editar seu perfil
                </a>
            </footer>
        </aside>
    )
}