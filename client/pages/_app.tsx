import '../styles/globals.css';
import 'tailwindcss/tailwind.css';
import '../public/vendor/fa/css/all.min.css';
import { Provider } from 'react-redux';
import type { AppProps } from 'next/app';
import { store } from '../redux/store';
// tes
function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    // test comment
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;