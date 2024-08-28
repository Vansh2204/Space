'use client'

import { useRouter } from 'next/navigation';

export default function Navbar() {

  const router = useRouter()
  return (
    <nav>
      <ul className="flex grid-cols-4 gap-4 m-10 justify-center">
        <li>
          <a className='cursor-pointer' onClick={() => router.push('/')}>Home</a>
        </li>
        <li>
          <a className='cursor-pointer' onClick={() => router.push('/planets')}>Planets</a>
        </li>
       

      </ul>
    </nav>
  )
}