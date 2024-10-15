import React from "react";

function UserProfilePage(props) {
  const { user } = props;
  return (
    <div>
      <p>Name: {user.name}</p>
      <p>Age: {user.age}</p>
    </div>
  );
}
export default UserProfilePage;

export async function getServerSideProps() {
  return {
    props: {
      user: {
        name: "Max",
        age: 24,
      },
    },
  };
}
