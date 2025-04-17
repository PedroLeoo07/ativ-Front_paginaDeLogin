"use client";

import styles from "../../styles/Sign.module.css";
import { useRouter } from 'next/navigation';

export default function Sign() {
    const router = useRouter();

    const handleSubmit = (event) => {
        event.preventDefault();
        router.push('/perfil'); 
    };

    return (
        <div className={styles.container}>
            <div className={styles.login}>
                <form className={styles.form} onSubmit={handleSubmit}>
                    <h1>welcome!!</h1>
                    <label className={styles.email}>Name</label>
                    <input className={styles.input1} type="text" />
                    <label className={styles.senha}>Surname</label>
                    <input className={styles.input2} type="text" />
                    <button className={styles.button} type="submit">to enter</button>
                </form>
            </div>
        </div>
    );
}