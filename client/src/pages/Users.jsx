import React, {useEffect, useState} from 'react'


function Users() {
    const [users, setUsers] = useState([])

    useEffect(() => {

        fetch('/users')
        .then(res => res.json())
        .then(list => setUsers(list) )
        .catch(err=>console.log("api call failed"))
    
    }, [])

    return (
        <div style={{background:"blue", height:"100vh"}}>
            <h1>Users page</h1>
            { users.map( user => <p>{ user }</p>)}
        </div>
    )
}

export default Users
