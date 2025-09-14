import React from 'react'

export const Button = ({children}) => {
  return (
    <button className='border border-Neutral-300 px-5 py-2 rounded-full hover:bg-Neutral-600 cursor-pointer hover:text-Neutral-0 dark:text-Neutral-0 bg-Neutral-600 dark:hover:bg-Red-500 text-[1.25rem]'>{children}</button>
  )
}
