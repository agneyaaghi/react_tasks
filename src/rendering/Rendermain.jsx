import React from 'react'
import './Logged';
import './Notlogged';
import { Logged } from './Logged';
import Notlogged from './Notlogged';

const Rendermain = () => {
                    let islogged=true
  return (
    <div>
{islogged ? <Logged></Logged>:<Notlogged></Notlogged>}
    </div>
  )
}

export default Rendermain