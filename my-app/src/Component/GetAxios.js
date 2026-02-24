import axios from "axios";
import { useEffect, useState } from "react";

const GetUsers = () => {
    const [users, setUsers] = useState([]);
    // Async function for GET request
    const fetchUsers = async () => {
        try {
            const response = await axios.get("https://dummyjson.com/users");
            console.log(response.data); // full response
            setUsers(response.data.users);
        } catch (error) {
            console.error("Error fetching users:", error);
        }
    };
    useEffect(() => {
        fetchUsers();
    }, []);
    return (
        <div>
            <h2>User List (Async/Await)</h2>
            <ul>
                {users.map((user) => (
                    <p key={user.id}>
                        {user.id} {user.firstName} {user.lastName}
                    </p>
                ))}
            </ul>
        </div>
    );
};
export default GetUsers;
