import React from 'react'
import Useritem from './Useritem'
import './Userlist.css'


function Userlist(props) {

    if (props.items.length === 0) {
        return (
            <div className='center'>
                <h2>No Users Found!!</h2>
            </div>)
    }

    return <ul>
        {props.items.map((user) =>
            <Useritem
                image={user.image}
                placecount = {user.places}
                name = {user.name}
                key={user.id}
                id={user.id} />)}
    </ul>

}

export default Userlist