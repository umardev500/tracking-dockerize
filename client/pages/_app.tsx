import '../styles/globals.css';
import 'tailwindcss/tailwind.css';
import '../public/vendor/fa/css/all.min.css';
import { Provider } from 'react-redux';
import type { AppProps } from 'next/app';
import { store } from '../redux/store';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import * as gtag from '../lib/gtag'
import Script from 'next/script';
// tes
function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  const router = useRouter();
  useEffect(() => {
    console.log('mounted');
    
    const handleRouteChange = (url: any) => {
      gtag.pageview(url);
    }
    router.events.on('routeChangeComplete', handleRouteChange)
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events]);

  return (
    // test comment
    <Provider store={store}>
      <Script
        strategy="afterInteractive"
        async
        src={`https://www.googletagmanager.com/gtag/js?id=${gtag.GA_TRACKING_ID}`}
      />
      <Script
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${gtag.GA_TRACKING_ID}', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;