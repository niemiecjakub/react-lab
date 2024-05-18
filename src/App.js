import logo from './logo.svg';
import './App.css';

function App() {
    let email = 'asdafasdfas@agh.edu.pl';

    const handleChange = (e) => {
        console.log(e.target.value);
    }

    return (
        <div>
            <h1>System do zapisów na zajęcia</h1>
            <h2>Twój e-mail to {email}</h2>
            <input type="text" onChange={handleChange}/>
        </div>
    );
}

export default App;
