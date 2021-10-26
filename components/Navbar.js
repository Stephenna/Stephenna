import Link from 'next/link'

const Navbar = () => {

    return(
        <div className="nav z-40">
            <div className="nav-name">
            <Link href="/" exact alt="Let's go home!">
                <a className=" hover:text-grey-800">
                    <span>S</span>
                    <span>T</span>
                    <span>E</span>
                    <span>P</span>
                    <span>H</span>
                    <span>E</span>
                    <span>N</span>
                    <span>N</span>
                    <span>A</span>
                    <span> · </span>
                    <span>J</span>
                    <span>E</span>
                    <span>M</span>
                    <span>A</span>
                    <span>E</span>
                </a>
            </Link>
            
            </div>
            <span className="nav-links">
              {/* <Link href="/about">
              <a className='transition duration-500 ease-in-out  hover:text-yellow-400 transform hover:-translate-y-1 hover:scale-110 '>ABOUT</a>
              </Link> */}
              <Link href="/projects">
              <a className='transition duration-500 ease-in-out  hover:text-yellow-400 transform hover:-translate-y-1 hover:scale-110 '>PROJECTS</a>
              </Link>
              <Link href="/resume">
                  <a className='transition duration-500 ease-in-out  hover:text-purple-400 transform hover:-translate-y-1 hover:scale-110'  >RESUME</a>
              </Link>
              <Link href="/contact">
                  <a className='transition duration-500 ease-in-out  hover:text-blue-400 transform hover:-translate-y-1 hover:scale-110'>CONNECT</a>
              </Link>
            </span>
        </div>
    )
}

export default Navbar