import React from 'react'
import { FloatingNavDemo } from './nav'

export function NavBar() {
    return (
        <div className='flex  flex-row items-center justify-between p-1 bg-navy text-white'>
        <div className='flex items-center space-x-2'>
        <img src="/img/logo.svg" alt="Logo" className='h-8 w-auto' />
        </div>
        <FloatingNavDemo />
      
      </div>
      )
  }
  
  

