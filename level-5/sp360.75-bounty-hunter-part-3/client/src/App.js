import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Bounties from './Components/Bounties'; 
import BountyForm from './Components/BountyForm';      

import './App.css';

function App() {
  const [bounties, setBounties] = useState([]);

  function getBounties() {
    axios.get('/bounties')
      .then(res => setBounties(res.data))
      .catch(err => console.log(err))
  }

  function addBounty(newBounty) {
    axios.post('/bounties', newBounty)
      .then(res => setBounties(prevBounties => [...prevBounties, res.data]))
      .catch(err => console.log(err))
  }

  function deleteBounty(bountyId) {
    axios.delete(`/bounties/${bountyId}`)
      .then(res => setBounties(prevBounties => prevBounties.filter(bounty => bounty.id !== bountyId)))
      .catch(err => console.log(err))
  }

  function editBounty(updates, bountyId) {
    console.log(updates)
    axios.put(`/bounties/${bountyId}`, updates)
      .then(res => {
        setBounties(prevBounties => prevBounties.map(bounty => bounty.id !== bountyId ? bounty : res.data))
        console.log(res.data)
      })
      .catch(err => console.log(err))
  }

  useEffect(() => {
    getBounties()
    }, [])
      
  return (
    <div>
      <BountyForm 
        submit={addBounty}
        btnText='Add Bounty'
      />
      {bounties.map(bounty => <Bounties {...bounty} key={bounty.title} deleteBounty={deleteBounty} editBounty={editBounty}/>)}
    </div>
  );
}

export default App;
