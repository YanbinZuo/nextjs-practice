import React from 'react'

function UserPage(props) {
  return (
    <h1>{props.userId}</h1>
  )
}

export default UserPage;

export async function getServerSideProps(context) {
  const userId = context.params.uid;
  return {
    props: {
      userId: 'user ID: ' + userId
    }
  }

}
