/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'


export default function Post({post}) {
    return (
 
    <div className=" min-h-full flex items-center justify-center">
        <div className="bg-white w-96 p-4 rounded-md flex flex-col items-center justify-center shadow-md hover:scale-105 transition transform duration-500 cursor-pointer">
            <div className="w-full h-60 bg-gray-200 flex items-center justify-center">
                <img className=" w-full  h-60 rounded-md" src={post.frontmatter.cover_image} alt=''/>
            </div>
            <div className="header m-2 space-y-3">
                <h1 className="title text-xl font-bold text-gray-700">{post.frontmatter.title}</h1>
                <hr />
            </div>
            <div className="m-1 h-32 w-full space-y-3 overflow-scroll p-1 rounded-md">
                
                <p className="text-sm text-gray-600">{post.frontmatter.description}</p>
                <hr />
            </div>
            <div className="button m-1">
                <Link href={post.frontmatter.button} passHref>
                    <button className="
                    bg-white border-2 hover:border-purple-500 hover:text-purple-500
                    hover:bg-white
                    bg-purple-500 text-white font-bold py-2 px-4 rounded-full mr-4"
                    >Github</button>
                </Link>
                <Link href={post.frontmatter.demo} passHref>
                    <button className="bg-white border-2 hover:border-purple-500 hover:text-purple-500
                    hover:bg-white
                    bg-purple-500 text-white font-bold py-2 px-4 rounded-full"> Demo </button>
                </Link>
            </div>
        </div>
    </div>
       
    )
}


// _rfc short cut