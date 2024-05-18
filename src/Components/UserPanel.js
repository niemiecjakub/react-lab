import NewMeetingForm from "./NewMeetingForm";
import MeetingsList from "./MeetingsList";
import MeetingsPage from "./MeetingsPage";

export default function UserPanel({username, handleLogout}) {

    return <div>
        <h1>Witaj {username}</h1>
        <button onClick={handleLogout}>Wyloguj</button>
        <MeetingsPage />
    </div>;

}