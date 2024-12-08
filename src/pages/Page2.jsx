import React from 'react'
import Sidebar from '../components/sidebar/sidebar'
import SearchBar from '../components/searchbar/Searchbar'
import Cards from '../components/cards/Cards'
import LineGraph from '../components/graphs/LineGraph'
import BarGraph from '../components/graphs/BarGraph'

const page2 = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-grow bg-gray-100">
        <SearchBar />
        <Cards />
        <div className='grid grid-cols-3 p-6 gap-6'>
          <div className='col-span-2'> {/* LineGraph takes up 2/3 of the space */}
            <LineGraph />
          </div>
          <div className='col-span-1'> {/* BarGraph takes up 1/3 of the space */}
            <BarGraph />
          </div>
        </div>
      </div>
    </div>
  )
}

export default page2
