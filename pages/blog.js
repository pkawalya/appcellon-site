import fetch from 'node-fetch'

function Blog({posts}) {
    return (
        <div class="row">
            {posts.map(post => (
                <div class="example-2 card">
                    <div class="wrapper">
                    <div class="header">
                        <div class="date">
                        <span class="day">12</span>
                        <span class="month">Aug</span>
                        <span class="year">2016</span>
                        </div>
                        <ul class="menu-content">
                        <li>
                            <a href="#" class="fa fa-bookmark-o"></a>
                        </li>
                        <li><a href="#" class="fa fa-heart-o"><span>18</span></a></li>
                        <li><a href="#" class="fa fa-comment-o"><span>3</span></a></li>
                        </ul>
                    </div>
                    <div class="data">
                        <div class="content">
                        <span class="author">Jane Doe</span>
                        <h1 class="title"><a href="#">{post.title}</a></h1>
                        <p class="text">{post.discription}</p>
                        <a href="#" class="button">Read more</a>
                        </div>
                    </div>
                    </div>
                </div>
            ))}
        </div>

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