import React from 'react'
import { MdApps } from "react-icons/md";

type PageHeader = {
  pageTitle: string;
};

const Header: React.FC<PageHeader> = ({ pageTitle }) => {
  return (
    <header>
      <div className='flex justify-between '>
        <div>
          <h1 className='font-bold text-xl'>{ pageTitle }</h1>
        </div>
        <div className='flex justify-between items-center gap-2'>
          <h2 className='font-medium text-xl'>Padding Technologies</h2>
          <div className='h-6 w-6'>
            <MdApps className='w-full h-full' />
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header;
