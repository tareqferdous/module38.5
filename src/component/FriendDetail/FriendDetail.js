import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const FriendDetail = () => {
    const {friendID} = useParams();
    const [friend, setFriends] = useState({});

    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/users/${friendID}`;
        fetch(url)
        .then(response => response.json())
        .then(data => setFriends(data))
    }, [])

    return (
        <div>
            <p>Showing details of friend: {friendID}</p>
            <h3>{friend.name}</h3>
            <p>Email: {friend.email}</p>
            <p>Phone: {friend.phone}</p>
        </div>
    );
};

export default FriendDetail;