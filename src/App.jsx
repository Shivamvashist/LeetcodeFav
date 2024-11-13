import { useState } from 'react'
import menuLogo from './assets/menu1.svg'
import pvtLogo from './assets/pvt.svg'
import play from './assets/play.svg'
import fork from './assets/fork.svg'
import progress from "./assets/progress.png"
import './App.css'



function App() {

  const [nav,setNav] = useState(false);

 return <div class='bg-[#1a1a1a]'>
    
    <div class="transition-all duration-1000 ease-in">{nav ? <List setNav={setNav} /> : <EmptyList setNav={setNav} /> }</div>
    <div class="flex justify-center gap-20 mt-6" >
      <div><Progress /></div>
      <div>hi</div>
    </div>
  </div>
}

function EmptyList(props){
  return <div class="bg-[#333333] absolute top-10 left-10 p-2 rounded-full flex">
  <button onClick={()=>{props.setNav(c=>!c)}} ><img class='w-4 invert mx-2' src={menuLogo}/></button>
</div>
}

function List(props) {

  return <div class="bg-[#333333] absolute top-0 left-0 bottom-0 w-72 p-8 flex justify-start  flex-col gap-4">
    <div class="flex" >
      <p class='text-white font-bold flex-1 text-lg'>My Lists</p>
      <button onClick={()=>{props.setNav(c=>!c)}} ><img class='w-4 invert mx-2' src={menuLogo}/></button>
      
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

  return <div class="flex flex-col text-white bg-[#262626] rounded-xl w-favW h-favW p-6 divide-y divide-[#3c3c3c]" >
    <div class="flex flex-col gap-4 " >
      <img class='w-20' src="https://assets.leetcode.com/favorite/default_favorite_cover.png" />
      <p class='text-3xl font-medium' >Favorite</p>
      <p class='flex'><a href='https://leetcode.com/u/ninjavashist/'>Shiva</a>m · 2 questions · <button class='flex flex-row '><img class='w-4 invert mx-2' src={pvtLogo}/>Private</button></p>
      <div class="flex gap-3 mt-1 mb-6">
        <button class="flex items-center gap-3 bg-[#f5f5f5] text-black px-4 py-2 rounded-full" ><img class='w-3' src={play}/>Practice</button>
        <button class=" flex items-center bg-[#383838] text-black p-4 rounded-full"  ><img class='invert w-3 ' src={fork}/></button>
      </div>
    </div>
    <div >
      <img src={progress} />

    </div>
  </div>
}

export default App
