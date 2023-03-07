import Popular from "../Components/Popular";
import Veggie from "../Components/Veggie";
import React from 'react'
import Memory from "../Components/Memory";

function Home() {
  return (
    <div>
      <Memory/>
        <Veggie/>
        <Popular/>
    </div>
  )
}

export default Home