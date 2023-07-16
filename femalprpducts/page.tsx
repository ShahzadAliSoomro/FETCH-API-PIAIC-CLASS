import React from 'react'

export default function page() {
    const getAllUsers = async () => {
        const res = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await res.json();
        return data;
    }
  return (
    <div>
        <h1>{getAllUsers()}</h1>
    </div>
  )
}
