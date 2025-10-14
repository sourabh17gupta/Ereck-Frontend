import React from 'react'
import Sponser from '../component/HomeComponent/Sponser'
import FrontPage from "../component/HomeComponent/FrontPage";
import HeadMember from '../component/HomeComponent/HeadMember';

function Home() {
  return (
    <div>
       <FrontPage />
       <HeadMember/>
      <Sponser/>
    </div>
  )
}

export default Home
