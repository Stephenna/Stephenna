import Navbar from './../components/Navbar'
import Head from 'next/head'
import Link from 'next/link'
import Spots from './../components/layout'


const about = () => {
    return(
        <div className="overscroll-contain">
            <Navbar />
            <div className="about-container bg-pink">
                <Head>
                    <title>SJC • About</title>
                </Head>
                <Spots />
                    <div className="about-text text-left text-gray-700 ">
                        <h1>Hi There! </h1>
                        <p> 
                        My name is Stephenna. I'm a boot camp graduate but do consider myself to be a self-taught programmer. I am primarily focused on JavaScript front-end technologies, such as React. I've also been developing my backend skills. I am passionate about delivering quality content. 
                        </p>
                    </div>
               
            </div>
        </div>
    )
}

export default about