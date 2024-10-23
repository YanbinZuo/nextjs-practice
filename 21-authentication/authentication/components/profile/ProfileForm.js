import React from 'react'
import classes from './styles/ProfileForm.module.css'

function ProfileForm() {
  return (
    <form className={classes.form}>
      <div className={classes.control}>
        <label htmlFor='odl-password'>Old Password</label>
        <input id='old-password' type='password' required />
      </div>
      <div className={classes.control}>
        <label htmlFor='new-password'>New Password</label>
        <input id='new-password' type='password' required />
      </div>
      <div className={classes.action}>
        <button>Change Password</button>
      </div>
    </form>
  )
}

export default ProfileForm