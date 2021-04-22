import App from 'next/app';
import PostState from '../context/postState'

const MyApp = props => {

  const { Component, pageProps } = props;

  return(
    <PostState>
        <Component {...pageProps} />
    </PostState>

  )
}

export default MyApp;