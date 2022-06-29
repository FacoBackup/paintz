import styles from "../css/SignIn.module.css"
import {useState} from "react";

export default function SignIn() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")


    return (
        <div className={styles.container}>
            <div className={styles.left}>
                <ul>
                    <li>
                        <h1>
                            Paintzee
                        </h1>
                    </li>
                </ul>
                <div className={styles.inputs}>
                    <div>
                        <h1 style={{marginBottom: "0"}}>
                            Bem vindo
                        </h1>
                        <h5 style={{margin: "0"}}>
                            Sei la
                        </h5>
                    </div>
                    <div className={styles.inputContainer}>
                        <label>
                            E-mail
                        </label>
                        <input
                            className={styles.input}
                            placeholder={"Seu e-mail"}
                            value={email}
                            onChange={event => setEmail(event.target.value)}
                        />
                    </div>
                    <div className={styles.inputContainer}>
                        <label>
                            Senha
                        </label>
                        <input className={styles.input} placeholder={"Senha"} type={"password"}
                               value={password}
                               onChange={event => setPassword(event.target.value)}
                        />
                    </div>
                    <button className={styles.button}>
                        Entrar
                    </button>
                </div>
                <footer>
                    @Sei la
                </footer>
            </div>
            <div className={styles.right}>
                <div className={styles.sphere}/>
                <div className={styles.sphereBlur}/>
            </div>
        </div>
    )
}
