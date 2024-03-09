import React from 'react'
import Container from '@/components/ui/container'
import Link from 'next/link'
import MainNav from '@/components/main-nav'
import getCategories from '@/actions/get-categories'
import NavbarActions from '@/components/navbar-actions'
import MobileToogle from './mobile-toggle'

export const revalidate=0


const Navbar = async() => {

    const categories=await getCategories();

  return (
    <div className='border-b'>
        <Container>
            <div className=' relative px-5 sm:px-6 lg:px-8 flex h-16 items-center'>
              <MobileToogle data={categories} />
            <Link href={"/"} className='ml-4 flex lg:ml-0 gap-x-2'>
            <p className='font-bold text-lg md:text-xl'>KV-STORE</p>
            </Link>
            <MainNav data={categories}/>
            <NavbarActions/>
            </div>
        </Container>
    </div>
  )
}

export default Navbar