import React from 'react'
import Painting from './Painting'
import Clock from './Clock'
import Chocolate from './Chocolate'
import Shuttle from './Shuttle'

export default function Home() {
  return (
    <>
      <div className='painting'>
        <Painting />
      </div>

      <div className='clock'>
        <Clock />
      </div>

      <div className='chocolate'>
        <Chocolate />
      </div>

      <div className='shuttle'>
        <Shuttle />
      </div>

    </>
  )
}
