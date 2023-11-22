import React from 'react'
import PersonalInfo from './PersonalInfo'
import Experience from './Experience'
import Contacts from './Contacts'
import Image from './image/image.jpg'
import './UserCV.css'
function UserCV() {
  return (
    <div class="big">
      <div class="small">
        <h1>Gülana Hacızadə</h1>
        <img src={Image} alt="woman"/>
      </div>
        <PersonalInfo/>
        <br/>
        <Experience/>
        <br/>
        <Contacts/>
    </div>
  )
}

export default UserCV