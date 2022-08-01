import React from 'react'

import Userlist from '../components/Userlist'

function Users() {

  const USERS = [{id : 'u1' , name : "vaibhav sachdeva", image :"https://images.pexels.com/photos/974266/pexels-photo-974266.jpeg?auto=compress&cs=tinysrgb&w=600" , places : 3 }];


  return (
     <Userlist items  = {USERS}/>
  )
}

export default Users