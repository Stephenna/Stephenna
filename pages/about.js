import Navbar from './components/Navbar'
import Head from 'next/head'
import Link from 'next/link'
import Spots from './components/layout'


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
                        I&apos;m Stephenna, a self-taught front-end junior developer from Atlanta. My preferred language is Javascript. I&apos;ve recently started exploring my interest in React and backend tools such as Sanity.io. I&apos;ve my eye on blockchain development. I have a passion for growth and development. I cant wait to see what future tech has to offer!   
                        </p>
                    </div>
               
            </div>
        </div>
    )
}

export default about