import React from 'react';
import { Link, useHistory } from 'react-router-dom';

const Friend = (props) => {
    const {name, email, id} = props.friend;

    const history = useHistory();
    const handleClick = (friendID) =>{
        const url = `friend/${friendID}`;
        history.push(url);
    }

    const friendStyle = {
        border: '1px solid tomato',
        margin: '20px',
        padding: '20px',
        borderRadius: '10px'
    }
    return (
        <div style={friendStyle}>
            <h2>Name: {name}</h2>
            <h4>Email: {email}</h4>
            <Link to= {`/friend/${id}`}>
                <button>Show Detail</button>
            </Link>
            <button onClick={() => handleClick(id)}>Click Me</button>
        </div>
    );
};

export default Friend;