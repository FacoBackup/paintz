import styles from "../css/SignIn.module.css"
import {useState} from "react";

export default function SignIn() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")


    return (
        <div className={styles.container}>
            <div className={styles.left}>
                <h1 className={styles.logo}>
                    - Paintz
                </h1>
                <div className={styles.inputs}>
                    <div>
                        <h1 style={{marginBottom: "0"}}>
                            Bem vindo
                        </h1>
                        <h5 style={{margin: "0", fontWeight: "normal"}}>
                            Plataforma para desenhos online
                        </h5>
                    </div>
                    <div style={{display: "grid"}}>
                        <label className={styles.inputLabel}>
                            E-mail
                        </label>
                        <input
                            className={styles.input}
                            placeholder={"Seu e-mail"}
                            value={email}
                            onChange={event => setEmail(event.target.value)}
                        />

                        <label className={styles.inputLabel} style={{marginTop: '16px'}}>
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
                <footer className={styles.footer}>
                    <a href={"https://github.com/FacoBackup"} target={"_blank"} rel={"noreferrer"}>
                        @facobackup
                    </a>
                    <a href={"https://github.com/luabrantess"} target={"_blank"} rel={"noreferrer"}>
                        @luabrantess
                    </a>
                    <a href={"https://github.com/mathscarvalho"} target={"_blank"} rel={"noreferrer"}>
                        @mathscarvalho
                    </a>
                </footer>
            </div>
            <div className={styles.right}>
                <div className={styles.sphere}/>
                <div className={styles.sphereBlur}/>
            </div>
        </div>
    )
}
