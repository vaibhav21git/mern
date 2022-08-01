import React from 'react'
import Useritem from './Useritem'
import './Userlist.css'
import Card from '../../shared/components/UIelements/Card'


function Userlist(props) {

    if (props.items.length === 0) {
        return (
            <div className='center'>
                <Card>
                <h2>No Users Found!!</h2>
                </Card>
            </div>)
    }

    return <ul className='users-list'>
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