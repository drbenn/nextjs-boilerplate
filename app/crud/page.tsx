'use client';

import { Button } from "@chakra-ui/react";
import { useState } from "react";

export default function Page() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleGet = async () => {
    try {
      console.log('in handle get');
      const res = await fetch('./api/users', {
        next: { revalidate: 10 }
      });
      const data = await res.json();
      console.log(data.users);
    } catch (error: any) {
      console.log(error);
    }
  }

  const handlePost = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();  // Prevent the form from refreshing the page
    setMessage('');  // Clear previous messages

    try {
      console.log('in function try');
      
        // API call to the backend to create a user
        const response = await fetch('./api/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username, email }),


        });

        const data = await response.json();
        console.log('data');
        
        console.log(data);
        
        // if (response.ok) {
        //     setMessage(`User created successfully: ${data.data.insertId}`);
        // } else {
        //     throw new Error(data.error || 'Failed to create user');
        // }
    } catch (error: any) {
      console.log('in catch errror');
      
        setMessage(`Error: ${error.message}`);
    }
};
  return (
    <div className="flex flex-col w-fit bg-sky-500 hover:bg-sky-700">
      CRUD BUTTONS
      <Button className="bg-white hover:bg-violet-600" size='sm'>Get</Button>
      <Button colorScheme='blackAlpha' size='sm'>Get</Button>
      <Button colorScheme='blackAlpha' size='sm'>Get</Button>
      <Button colorScheme='blackAlpha' size='sm'>Get</Button>

      <div>
            <h1>Create User</h1>
            <form onSubmit={handlePost}>
                <label htmlFor="username">Username:</label>
                <input
                    id="username"
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                />
                <br />
                <label htmlFor="email">Email:</label>
                <input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <br />
                <button type="submit">Create User</button>
            </form>
            {message && <p>{message}</p>}
        </div>

        <Button colorScheme='blackAlpha' size='sm' onClick={handleGet}>Get Users from DB</Button>

    </div>

    
  )
}
