import React from 'react'
import Panelbox from '../boxes/Panelbox'
import SecondPanelBoxes from '../boxes/SecondPanelBoxes'

const Home = () => {
  return (
    <div className='homepage'>
      <h3 className='homeHeading'>Dashboard</h3>
      <Panelbox />
      <SecondPanelBoxes/>
    </div>
  )
}

export default Home
