import React from 'react';
import { useLoaderData } from 'react-router-dom';
import'./FendDeatail.css'
const FrendDeatail = () => {
   const friend = useLoaderData();
   console.log(friend)
  return (
    <div className='loader'>
        <h3>Everythit about this person is here</h3>
        <h4>Name :{friend.name}</h4>
        <p>Phone :{friend.phone}</p>
    </div>
  );
};

export default FrendDeatail;