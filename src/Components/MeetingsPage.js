import {useState} from "react";
import NewMeetingForm from "./NewMeetingForm";
import MeetingsList from "./MeetingsList";

export default function MeetingsPage({user}) {
    const [meetings, setMeetings] = useState([]);
    const [addMeetingVisible, setAddMeetingVisible] = useState(false);
    function handleNewMeeting(meeting) {
        meeting = {...meeting, "owner": user, "participants" : []}
        const nextMeetings = [...meetings, meeting];
        setMeetings(nextMeetings);
    }

    const handleAddMeetingVisible = () => {
        setAddMeetingVisible(a => !a);
    }

    const handleMeetingDelete = (meeting) => {
        setMeetings(meetings.filter(m => m != meeting))
    }

    const handleMeetingSignUp = (meeting) => {
        const newMeetings = meetings.filter(m => m != meeting)
        meeting.participants.push(user)
        setMeetings([...newMeetings, meeting])
    }

    const handleMeetingSignout = (meeting) => {
        const newMeetings = meetings.filter(m => m != meeting)
        // meeting.participants.dele
        setMeetings([...newMeetings, meeting])
    }

    return (
        <div>
            <button onClick={handleAddMeetingVisible}>Dodaj nowe spotkanie</button>
            {addMeetingVisible && <NewMeetingForm onSubmit={(meeting) => handleNewMeeting(meeting)}/>}
            {meetings.length > 0 ? <MeetingsList user={user} meetings={meetings} handleMeetingDelete={handleMeetingDelete} handleMeetingSignUp={handleMeetingSignUp} handleMeetingSignout={handleMeetingSignout}/> : <p>Brak zaplanowanych spotkan</p>}
        </div>
    )
}