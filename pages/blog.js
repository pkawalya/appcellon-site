import fetch from 'node-fetch'

function Blog({posts}) {
    return (
        <ul>
            {posts.map(post => (
                <li>{post.title}</li>
            ))}
        </ul>
    )
}

// This function gets called at build time
export async function getStaticProps() {
    // Call an external API endpoint to get posts
    const res = await fetch('https://kawalya.herokuapp.com/posts')
    const posts = await res.json()
  
    // By returning { props: posts }, the Blog component
    // will receive `posts` as a prop at build time
    return {
      props: {
        posts,
      },
    }
  }
  

export default Blog