import React from 'react'
import LeftPane from '../../components/LeftPane/LeftPane'
import NavBar from '../../components/Navigation/NavBar'

export default function Home() {
  return (
    <div>
    <NavBar/>
    <div className="bottomContainer">
        <LeftPane/>
      </div>
    </div>
  )
}
