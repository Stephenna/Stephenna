import Navbar from './../components/Navbar'
import Spots from './../components/layout'
import currentRes from '../public/currentRes.png'
import Image from 'next/image'
const Resume = () => {

    return( 
        <div>
            <Navbar />
            <div className="resume-body  flex items-center justify-center bg-none">
            <Spots/>
                <div className=" w-1/2 h-full p-4 rounded-md flex flex-col items-center justify-center  hover:scale-105 transition transform duration-500 cursor-pointer">
                       
                <Image src={currentRes}  alt="img"/>
                </div>
                
               
            </div>
        </div>
    )
}


export default Resume