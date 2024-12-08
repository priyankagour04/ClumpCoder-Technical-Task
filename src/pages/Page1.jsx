import React from 'react'
import ContactForm from '../components/forms/ContactForm'
import SurveyForm from '../components/forms/ServeyForm'
import Sidebar from '../components/sidebar/sidebar'
import SearchBar from '../components/searchbar/Searchbar'

const Page1 = () => {
  return (
   <>
    <div className="flex">
      <Sidebar />
      <div className="flex-grow  bg-gray-100">
      <SearchBar/>
       <div className='px-6 mt-2'>
       <h1 className="text-2xl font-bold mb-3">Pro Form Layout</h1>
        <div className="grid grid-cols-2 gap-6">
          <ContactForm />
          <SurveyForm />
        </div>
       </div>
      </div>
    </div>
   </>
  )
}

export default Page1