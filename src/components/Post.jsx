import styles from './Post.module.css'

export function Post(props) {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img className={styles.avatar} src="https://github.com/lucasdevf.png" />
          <div className={styles.authorInfo}>
            <strong>Lucas Ferreira</strong>
            <span>Tech Lead</span>
          </div>
        </div>

        <time 
          title="19 de Junho às 22:00" 
          dateTime="2022-06-19 22:00"
        >
          Publico há 1h
        </time>
      </header>

      <div className={styles.content}>
        <p>Fala galeraa 👋</p>

        <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>

        <p>👉 <a href="">jane.design/doctorcare</a></p>

        <p>
          <a href="">#novoprojeto</a> {' '}
          <a href="">#nlw</a> {' '}
          <a href="">#rocketseat</a>
        </p> 
      </div>
    </article>
  )
}