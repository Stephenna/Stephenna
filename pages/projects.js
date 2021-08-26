import fs from "fs"
import path from 'path'
import matter from "gray-matter"
import Post from "./../components/Post"
import Navbar from './../components/Navbar'
import Head from 'next/head'
import Spots from "./../components/layout"

export default function Home({posts}) {
    console.log(posts)
    return(
        <div>
            <Head>
                <title>Projects</title>
            </Head>
            <Navbar/>
            <Spots/>
            <div className=" z-40 feed grid grid-flow-col grid-cols-3 grid-rows-3 gap-4 bg-gray-100">
            
                {posts.map((post, index) => (
                    <Post key={index} post={post} />
                ))}
            </div>

        </div>
    )
}

export async function getStaticProps() {
  // Get files from the posts dir
  const files = fs.readdirSync(path.join('posts'))

  // Get slug and frontmatter from posts
  const posts = files.map((filename) => {
    // Create slug
    const slug = filename.replace('.md', '')

    // Get frontmatter
    const markdownWithMeta = fs.readFileSync(
      path.join('posts', filename),
      'utf-8'
    )

    const { data: frontmatter } = matter(markdownWithMeta)

    return {
      slug,
      frontmatter,
    }
  })


  return {
    props: {
      posts
    },
  }
}
