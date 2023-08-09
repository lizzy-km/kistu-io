import React, { useState } from 'react'
import {UserButton} from '@clerk/clerk-react'
import Browse from '../SomeStuff/DropDown';
import { Link } from 'react-router-dom';

const NavBar = () => {
    const[light,setLight] = useState(true)

    const themeToggle = document.getElementById('lightSwitcher');
    const box = document.getElementById('box')
    const trend = document.getElementById('trend')

    const body = document.body;
    const dark =()=>{
        setLight(!light)
        themeToggle.classList.toggle('Property1Variant2')
        themeToggle.classList.toggle('Property1Default')

        body.classList.toggle('dark');
        body.classList.toggle('light');
        box.classList.toggle('dark_Card');
        box.classList.toggle('light_Card');
        trend.classList.toggle('dark_Trend');
        trend.classList.toggle('light_Trend');
    }

    

   
  return (
    <section className=' px-[1.8rem]  shadow-sm text-slate-200 flex justify-between py-[16px] items-center h-[50px] w-full bg-[#331D2C] '  >
        <div className=' flex justify-center items-center gap-4 ' >
            <Link to={'/'} >
            <img className=' w-[35px] h-[35px] ' src="https://raw.githubusercontent.com/lizzy-km/kistu-io/f3d4be040dc338b6ee2ff6e2d0b0ae68dbc86e04/src/assets/react.svg" alt=""/>

            </Link>
            <div>
                <Browse/>
            </div>
        </div>
        <div  className=' flex gap-4 justify-end items-center ' >
            <div className=' w-auto h-auto rounded-full ' >
                <UserButton/>
            </div>
            <div onClick={dark} className='Property1Variant2 mt-[.5rem] ' id="lightSwitcher">
                <div className="Rectangle1" ></div>
                <div className="Rectangle2"></div>
                <div className="Ellipse1"></div>
                <div className="Ellipse2" ></div>
            </div>  
        </div>
    </section>
  )
}

export default NavBar