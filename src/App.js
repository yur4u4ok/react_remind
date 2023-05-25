import './App.css';
import {Users, Posts} from "./components";
import {useState} from "react";

function App() {
    const [userId, setUserId] = useState(null)

    return (
        <div className="App">
            <Users setUserId={setUserId}/>
            {userId && <Posts userId={userId}/>}
        </div>
    );
}

export default App;
