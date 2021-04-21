import React, { useContext, useEffect }  from 'react'
import Layout from '../components/layout/Layout';
import DetallesPost from '../components/layout/DetallePost';
import postContext from '../context/postContext';
import DetallePost from '../components/Layout/DetallePost';




const Home = () => {

  const postsContext = useContext(postContext);
  const { posts, obtenerPosts } = postsContext;

  console.log(posts);

  
  useEffect(() => {
    //obtener posts
    obtenerPosts()
    
  }, [])
  
  return (
    <div>
      <Layout>
        <div className="listado-productos">
            <div className="contenedor">
              <h1>Post`s List</h1>
              <ul className="bg-white">
                   {posts.map(post => (
                      <DetallesPost
                          key={post.id}
                          post={post}
                      />
                  ))} 
              </ul>
            </div>
        </div>
      </Layout>
    </div>
  )
}

export default Home;