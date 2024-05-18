import logo from './logo.svg';
import './App.css';
import "milligram";
import {useState} from "react";
import LoginForm from "./Components/LoginForm";
import UserPanel from "./Components/UserPanel";

function App() {
    const [loggedIn, setLoggedIn] = useState()
    const [meetings, setMeetings] = useState([])

    const handleLogin = (email) => {
        if (email.includes("@")){
            setLoggedIn(email)
        } else {
            alert("Bledny email")
        }
    }

    const handleLogout = () => {
        setLoggedIn(null)
    }

    return <div>
        <h1>System do zapisów na zajęcia</h1>
        {
            loggedIn
                ? <UserPanel username={loggedIn} handleLogout={handleLogout}/>
                : <LoginForm handleLogin={handleLogin} buttonLabel="Zapisz sie"/>
        }
    </div>

}

export default App;
