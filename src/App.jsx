import { useState } from 'react'
import menuLogo from './assets/menu1.svg'
import pvtLogo from './assets/pvt.svg'
import './App.css'



function App() {
 return <div class='bg-[#1a1a1a]'>
    
    <div><List/></div>
    <div>
      <div></div>
      <div></div>
    </div>
  </div>
}

function List() {

  return <div class="bg-[#333333] absolute top-0 left-0 bottom-0 w-72 p-8 flex justify-start  flex-col gap-4">
    <div class="flex" >
      <p class='text-white font-bold flex-1 text-lg'>My Lists</p>
      <button><img class='w-4 invert mx-2' src={menuLogo}/></button>
      
    </div>
    <p class=' text-white font-semibold'>Created by me</p>

    <button class='flex w-56 bg-[#434343] p-2 rounded-lg items-center '>
      <img class='w-8 mx-2' src='https://assets.leetcode.com/favorite/default_favorite_cover.png'/>
      <p class='text-white text-sm text-left font-bold flex-1 ' >Favourite</p>
      <img class='w-4 invert mx-2' src={pvtLogo}/>
    </button>
  </div>
}

function Progress() {
  return <div>
    
  </div>
}

export default App
