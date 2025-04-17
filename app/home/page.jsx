"use client";

import { useRouter } from "next/navigation";
import styles from "../../styles/Home.module.css";

export default function Index() {
    const router = useRouter();

    const handleSubmit = (event) => {
        event.preventDefault();
        router.push('/perfil');
    };

    return (
        <div className={styles.container}>
            <div className={styles.login}>
                <form className={styles.form} onSubmit={handleSubmit}>
                    <h1>Login</h1>
                    <label className={styles.email}>Email</label>
                    <input className={styles.input1} type="text" />
                    <label className={styles.senha}>Password</label>
                    <input className={styles.input2} type="password" />
                    <button className={styles.button} type="submit">sign in</button>
                    <button className={styles.button} type="button" onClick={() => router.push('/sign')}>sign up</button>
                </form>
            </div>
        </div>
    );
}