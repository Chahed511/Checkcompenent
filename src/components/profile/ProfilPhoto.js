import React from 'react'
import { Row } from 'react-bootstrap'
import usersphoto from '../../assets/user.jpg'
import {Image } from 'react-bootstrap' 


function ProfilePhoto() {
    return (
        <div  >
      <Image className='img' src={usersphoto} altr='userprofile' roundedCircle />

      <br /><br /><br />
  </div>
    );
  }
  
  export default ProfilePhoto; 