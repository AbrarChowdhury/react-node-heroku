import React, {useEffect, useState} from 'react'
import { useNavigate  } from "react-router-dom";

function Users() {
    const [users, setUsers] = useState([])
    let navigate = useNavigate ();
    useEffect(() => {
        fetch('/users')
        .then(res => res.json())
        .then(list => setUsers(list) )
        .catch(err=>console.log("api call failed"))
    }, [])

    return (
        <div style={{background:"blue", height:"100vh", color:"white" }}>
            <h1>Users page</h1>
            { users.map( user => <p>{ user }</p>)}
            <button onClick={()=>navigate("/")}>Go to home</button>
        </div>
    )
}

export default Users
