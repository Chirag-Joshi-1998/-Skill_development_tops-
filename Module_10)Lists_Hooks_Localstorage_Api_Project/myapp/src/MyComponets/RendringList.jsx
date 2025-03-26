import React from 'react'

export default function RendringList() {
    const items = ['Apple', 'Banana', 'Cherry'];
    const users = [
        { id: 1, name: 'chirag', age: 30 },
        { id: 2, name: 'test', age: 25 },
        { id: 3, name: 'test2', age: 20 },
    ];
  return (
    <div>
      <div>
            <h1>My Fruit List</h1>
            <ul>
                {items.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
        <h1>List with Objects</h1>
        <ul>
            {users.map((user) => (
                <li key={user.id}>
                    {user.name} is {user.age} years old.
                </li>
            ))}
        </ul>

    </div>
  )
}
