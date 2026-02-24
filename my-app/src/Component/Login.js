import React, { useState } from 'react'
const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const handleSubmit = () => {
        fetch('https://dummyjson.com/auth/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                username: email,
                password: password,
                expiresInMins: 30, // optional, defaults to 60
            }),
        })
            .then(res => res.json())
            .then((res) => {
                console.log("res", res)
                localStorage.setItem("token", res.accessToken)
            });
    }
    return (
        <div>
            <input type='text' username='email' placeholder='email' onChange={(e) => setEmail(e.target.value)}></input>
            <input type='text' password='password' placeholder='password' onChange={(e) => setPassword(e.target.value)}></input>
            <button type='button' onClick={handleSubmit}>Submit</button>
        </div>
    )
}

export default Login