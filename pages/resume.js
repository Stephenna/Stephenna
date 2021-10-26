import Navbar from './../components/Navbar'
import Spots from './../components/layout'

import ResPeachF from '../public/ResPeachF.png'
import Image from 'next/image'
const Resume = () => {

    return( 
        <div>
            <Navbar />
            <div className="resume-body  flex items-center justify-center bg-none">
            <Spots/>
                <div className=" w-1/3 h-full p-4 rounded-md flex flex-col items-center justify-center  hover:scale-105 transition transform duration-500 cursor-pointer">
                       
                <Image src={ResPeachF}  alt="img"/>
                </div>
                
               
            </div>
        </div>
    )
}


export default Resume