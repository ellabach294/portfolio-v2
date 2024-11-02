import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Logo = () => {
  return (
    <div>
      <Link href="/" alt="Ella Bach personal logo">
        <Image src="/images/personal-logo.png" alt='Ella Bach Personal Logo' width={100} height={50} priority={true}/>
      </Link>
    </div>
  )
}

export default Logo