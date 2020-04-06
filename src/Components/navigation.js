import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Navigation() {
  return (
    <div className='nav-menu'>
      <div className='ui menu'>
        <Link className='item' to='/'>
          Home
        </Link>
        <Link className='item' to='/fv'>
          Future Value
        </Link>
        <Link className='item' to='/wacc'>
          WACC
        </Link>
        <Link className='item' to='/stockreturn'>
          Return
        </Link>
        <Link className='item' to='/correlation'>
          Correlation
        </Link>
      </div>
    </div>
  );
}
