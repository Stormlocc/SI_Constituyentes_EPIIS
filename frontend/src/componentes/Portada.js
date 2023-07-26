import React from 'react'
import {Link} from 'react-router-dom'

export default function Portada() {
  return (
    <>
        <div>
            <h1>PORTADA cpmt CONSTITU</h1>
            <Link className='navbar-brand' to='/dashboard'>
            dashboaard
            </Link>
        </div>

    </>
  )
}
