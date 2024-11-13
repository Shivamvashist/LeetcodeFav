import { useState } from 'react'
import menuLogo from './assets/menu1.svg'
import pvtLogo from './assets/pvt.svg'
import play from './assets/play.svg'
import fork from './assets/fork.svg'
import progress from "./assets/progress.png"
import './App.css'



function App() {

  const [nav,setNav] = useState(false);
  const [trans,setTrans] = useState(false);

 return <div className='bg-[#1a1a1a]'>
    
    <div className="transition-all duration-1000 ease-in">{nav ? <List setTrans={setTrans} trans={trans} setNav={setNav} /> : <EmptyList setNav={setNav} setTrans={setTrans} trans={trans} /> }</div>
    <div className="flex justify-center gap-20 mt-6" >
      <div><Progress /></div>
      <div>hi</div>
    </div>
  </div>
}

function EmptyList(props){
  return <div className="bg-[#333333] absolute top-10 left-10 p-2 rounded-full flex">
  <button onClick={()=>{props.setNav(c=>!c)
    props.setTrans(c=>!c)
  }} ><img className='w-4 invert mx-2' src={menuLogo}/></button>
</div>
}

function List(props) {

  return <div className={`bg-[#333333] absolute top-0  bottom-0  p-8 flex justify-start transition-all duration-1000 ${props.trans ? "left-0" : "left-[-100%]" } w-72 flex-col gap-4`}>
    <div className="flex" >
      <p className='text-white font-bold flex-1 text-lg'>My Lists</p>
      <button onClick={()=>{
        props.setTrans(c=>!c)

        setTimeout(()=>{
          props.setNav(c=>!c)
        },500)
        
        

        }} ><img className='w-4 invert mx-2' src={menuLogo}/></button>
      
    </div>
    <p className=' text-white font-semibold'>Created by me</p>

    <button className='flex w-56 bg-[#434343] p-2 rounded-lg items-center '>
      <img className='w-8 mx-2' src='https://assets.leetcode.com/favorite/default_favorite_cover.png'/>
      <p className='text-white text-sm text-left font-bold flex-1 ' >Favourite</p>
      <img className='w-4 invert mx-2' src={pvtLogo}/>
    </button>
  </div>
}

function Progress() {

  return <div className="flex flex-col text-white bg-[#262626] rounded-xl w-favW h-favW p-6 divide-y divide-[#3c3c3c]" >
    <div className="flex flex-col gap-4 " >
      <img className='w-20' src="https://assets.leetcode.com/favorite/default_favorite_cover.png" />
      <p className='text-3xl font-medium' >Favorite</p>
      <p className='flex'><a href='https://leetcode.com/u/ninjavashist/'>Shiva</a>m · 2 questions · <button className='flex flex-row '><img className='w-4 invert mx-2' src={pvtLogo}/>Private</button></p>
      <div className="flex gap-3 mt-1 mb-6">
        <button className="flex items-center gap-3 bg-[#f5f5f5] text-black px-4 py-2 rounded-full" ><img className='w-3' src={play}/>Practice</button>
        <button className=" flex items-center bg-[#383838] text-black p-4 rounded-full"  ><img className='invert w-3 ' src={fork}/></button>
      </div>
    </div>
    <div >
      <img src={progress} />

    </div>
  </div>
}

export default App
