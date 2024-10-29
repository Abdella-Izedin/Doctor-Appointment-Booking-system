import React, { useEffect, useState } from 'react'
import { assets } from '../assets/assets'

const Contact = () => {

  const [toastState, setToastState] = useState(false)

  const submitForm = (e) => {
    e.preventDefault()
    setToastState(true)
    setTimeout(()=>{
      setToastState(false)
    }, 5000)
  }

  useEffect(()=>{}, [toastState])

  return (
    <div>

      <div className='text-center text-2xl pt-10 text-[#707070]'>
        <p>CONTACT <span className='text-gray-700 font-semibold'>US</span></p>
      </div>

      <div className='my-10 flex flex-col justify-center md:flex-row gap-10 mb-28 text-sm'>
        <img className='w-full md:max-w-[360px]' src={assets.contact_image} alt="" />
        <div className='flex flex-col justify-center items-start gap-6'>
          <p className=' font-semibold text-lg text-gray-600'>OUR OFFICE</p>
          <p className=' text-gray-500'>54709 Willms Station <br /> Suite 350, Washington, USA</p>
          <p className=' text-gray-500'>Tel: (415) 555-0132 <br /> Email: greatstackdev@gmail.com</p>
          <p className=' font-semibold text-lg text-gray-600'>CAREERS AT PRESCRIPTO</p>
          <p className=' text-gray-500'>Learn more about our teams and job openings.</p>
          <button className='border border-black px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-500'>Explore Jobs</button>
        </div>
      </div>

      <div>
        <form class="mt-8 space-y-4">
            <input type='text' placeholder='Name'
                className="w-full rounded-md py-3 px-4 text-gray-800 bg-gray-100 focus:bg-transparent text-sm outline-blue-500" />
            <input type='email' placeholder='Email'
                className="w-full rounded-md py-3 px-4 text-gray-800 bg-gray-100 focus:bg-transparent text-sm outline-blue-500" />
            <input type='text' placeholder='Subject'
                className="w-full rounded-md py-3 px-4 text-gray-800 bg-gray-100 focus:bg-transparent text-sm outline-blue-500" />
            <textarea placeholder='Message' rows="6"
                className="w-full rounded-md px-4 text-gray-800 bg-gray-100 focus:bg-transparent text-sm pt-3 outline-blue-500"></textarea>
            <button type='button'
            onClick={submitForm}
                className="text-white bg-blue-500 hover:bg-blue-600 tracking-wide rounded-md text-sm px-4 py-3 w-full">Send</button>
        </form>
        {
          toastState && <div class="my-2 max-w-xs bg-white border border-gray-200 rounded-xl shadow-lg dark:bg-neutral-800 dark:border-neutral-700" role="alert" tabindex="-1" aria-labelledby="hs-toast-normal-example-label">
          <div class="flex p-4">
            <div class="shrink-0">
              <svg class="shrink-0 size-4 text-blue-500 mt-0.5" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"></path>
              </svg>
            </div>
            <div class="ms-3">
              <p id="hs-toast-normal-example-label" class="text-sm text-gray-700 dark:text-neutral-400">
                Form Submitted Successfully.
              </p>
            </div>
          </div>
        </div>
        }
      </div>

    </div>
  )
}

export default Contact
