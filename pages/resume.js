import Navbar from './components/Navbar'
import Spots from './components/layout'
const Resume = () => {

    return( 
        <div>
            <Navbar />
            <div className="resume-body min-h-full flex items-center justify-center ">
            <Spots/>
                <div className="bg-white w-1/3 h-4/5 p-4 rounded-md flex flex-col items-center justify-center shadow-md hover:scale-105 transition transform duration-500 cursor-pointer">
                       <img src="/ResforPort.png" alt="resume" className=" w-full h-full md:w-auto md:h-auto" />  
                    </div>
            </div>
        </div>
    )
}


export default Resume