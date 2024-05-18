import {useState} from "react";

export default function LoginForm({handleLogin, buttonLabel}) {

    const [email, setEmail] = useState('');

    return <div>
        <label>Zaloguj się e-mailem</label>
        <input type="text" value={email} onChange={(e) => setEmail(e.target.value)}/>
        <button type="button" onClick={() => handleLogin(email)}>
            {buttonLabel || "Wchodze"}
        </button>
    </div>;

}