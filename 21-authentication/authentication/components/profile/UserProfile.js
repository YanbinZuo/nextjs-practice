// import React, { useEffect, useState } from 'react'
import ProfileForm from './ProfileForm'
import classes from './styles/UserProfile.module.css'
// import { getSession, useSession } from 'next-auth/client';
// import { useRouter } from 'next/router';

function UserProfile() {
  // const [isLoading, setIsLoading] = useState(true);
  // // const [session, loading] = useSession();
  // const router = useRouter()
  
  // useEffect(() => {
  //   getSession().then((session) => {
  //     if(!session) {
  //       // window.location.href = '/auth';
  //       router.push('/auth')
  //     } else {
  //       setIsLoading(false)
  //     }
  //   })
  // }, [])

  // if(isLoading) {
  //   return <p className={classes.profile}>Loading...</p>
  // }

  async function changePasswordHandler(passwordData) {
    console.log("test")
    const response = await fetch("/api/user/change-password", {
      method: "PATCH",
      body: JSON.stringify(passwordData),
      headers: {
        "Content-Type": "application/json"
      }
    })
    const data = await response.json();
    console.log(data);
  }

  return (
    <section className={classes.profile}>
      <h1>Your User Profile</h1>
      <ProfileForm onChangePassword={changePasswordHandler}/>
    </section>
  )
}

export default UserProfile