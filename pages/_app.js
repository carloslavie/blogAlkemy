import App from 'next/app';
import PostState from '../context/postState'
//Este es como si fuera el app.js de create-react-app

const MyApp = props => {

  const { Component, pageProps } = props;//Component seria el componente actual y props los props de la pagina

  return(
    <PostState>
        <Component {...pageProps} />
    </PostState>

  )
}

export default MyApp;