import UserProfile from '@/components/profile/UserProfile';
import { getSession } from 'next-auth/client';
import React from 'react'

function ProfilePage() {
  return (
    <UserProfile />
  )
}

export async function getServerSideProps(context) {
  const session = await getSession({req: context.req});
  if(!session) {
    return {
      redirect: {
        destination: "/auth",
        permanent: false
      }
    }
  }

  return {
    props: {session}
  }
}

export default ProfilePage;