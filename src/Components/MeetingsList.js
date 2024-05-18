export default function MeetingsList({user, meetings, handleMeetingDelete, handleMeetingSignUp, handleMeetingSignout}) {
    return (
        <table>
            <thead>
            <tr>
                <th>Nazwa spotkania</th>
                <th>Opis</th>
                <th>Prowadzacy</th>
                <th>Uczestnicy</th>
            </tr>
            </thead>
            <tbody>
            {
                meetings.map((meeting, index) => <tr key={index}>
                    <td>{meeting.title}</td>
                    <td>{meeting.description}</td>
                    <td>{meeting.owner}</td>
                    <td>{meeting.participants.map((participant, index) => <p>{participant}</p>)}</td>
                    <button onClick={() => handleMeetingDelete(meeting)}>Usun spotkanie</button>
                    {meeting.participants.includes(user) ? <button onClick={() => handleMeetingSignout(meeting)}>Usun sie</button> : <button onClick={() => handleMeetingSignUp(meeting)}>Zapisz sie</button> }

                </tr>)
            }
            </tbody>
        </table>
    );
}