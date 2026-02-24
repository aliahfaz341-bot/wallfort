import React, { useState } from 'react'

const DeleteApi = () => {
    const [name, setName] = useState("");
    const [fname, setFname] = useState("");

    const handleDelete = () => {
        fetch(`https://jsonplaceholder.typicode.com/users/2`, {
            method: 'DELETE',
        }).then((res) => {
            res.json().then((json) => {
                console.log(json)
            })
        })
    }
    return (
        <div>
            <form>
                <input type='text' value={name} placeholder='Name' onChange={(e) => { setName(e.target.value) }}></input>
                <input type='text' value={fname} placeholder='Fname' onChange={(e) => { setFname(e.target.value) }}></input>
                <button type='button' onClick={handleDelete}>Delete</button>
            </form>
        </div>
    )
}

export default DeleteApi
