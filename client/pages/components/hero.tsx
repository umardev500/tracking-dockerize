import { useRouter } from 'next/dist/client/router';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { AppState } from '../../redux/reducers';
// import Script from 'next/script';

export type HeroProps = {
  title: string;
  description?: string;
};

interface Window {
  adsbygoogle: {[key: string]: unknown}[]
}


const Hero = (props: HeroProps): JSX.Element => {
  const router = useRouter();
  const courier = useSelector((state: AppState) => state.courier);
  const { title, description } = props;

  useEffect(() => {
    (window.adsbygoogle = window.adsbygoogle || []).push({});
  }, []);

  return (
    <div className="py-5">
      <div className="pb-4 pt-1">
        <h1 className="text-3xl font-bold text-gray-800 font-roboto">
          {title} {router.query && router.query.courier ? courier.name : null}
        </h1>
        <p className="mt-1 text-lg text-gray-600 font-roboto">{description}</p>
      </div>

      <div style={{ minHeight: 300, minWidth: '100%' }} className="block">
        <ins className="adsbygoogle"
          style={{display: 'block', minHeight: 300, minWidth: 500}}
          data-ad-client="ca-pub-3737625529587380"
          data-ad-slot="7208868817"
          data-adtest="on"
          data-ad-format="auto"
          data-full-width-responsive="true" />
      </div>
      
    </div>
  );
};

export default Hero;