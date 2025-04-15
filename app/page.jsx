import styles from "../styles/Home.module.css";


export default function Home() {
    return(
      <div className={styles.container}>
        <div className={styles.login}>
      <form className={styles.form} onSubmit={handleSubmit}>
      <h1 className={styles.h1}>Login</h1>
      <label className={styles.email}>Email</label>
      <input className={styles.input1} type="text" />
      <label className={styles.password}>Password</label>
      <input className={styles.input2} type="text" />
      <button className={styles.button} type="submit">sign in</button>
      <button className={styles.button} type="submit">sign up</button>
      </form>
        </div>
      </div>
    )
}