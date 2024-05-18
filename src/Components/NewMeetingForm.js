import {useState} from "react";

export default function NewMeetingForm({onSubmit}) {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [error, setError] = useState('')
    function submit(e) {
        e.preventDefault();
        if (title == ''){
            setError("Tytul nie moze byc pusty")
            return;
        }
        if (description == ''){
            setError("Opis nie moze byc pusty")
            return;
        }
        onSubmit({title, description});
    }

    return (
        <form onSubmit={submit}>
            <h3>Dodaj nowe spotkanie</h3>
            <label>Nazwa</label>
            <input type="text" value={title}
                   onChange={(e) => setTitle(e.target.value)}/>
            <label>Opis</label>
            <textarea value={description}
                      onChange={(e) => setDescription(e.target.value)}></textarea>
            <button>Dodaj</button>
            {error}
        </form>
    );
}