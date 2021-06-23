import { useRouter } from 'next/dist/client/router';
import { useSelector } from 'react-redux';
import { AppState } from '../../redux/reducers';

export type HeroProps = {
  title: string;
  description?: string;
};

const Hero = (props: HeroProps): JSX.Element => {
  const router = useRouter();
  const courier = useSelector((state: AppState) => state.courier);
  const { title, description } = props;

  return (
    <div className="py-5">
      <div className="pb-4 pt-1">
        <h1 className="text-3xl font-bold text-gray-800 font-roboto">
          {title} {router.query && router.query.courier ? courier.name : null}
        </h1>
        <p className="mt-1 text-lg text-gray-600 font-roboto">{description}</p>
      </div>

      {/* Ads */}
      <div className="flex justify-center mt-4">
        <img src="/tracking/images/ads.png" alt="ads" className="object-cover" />
      </div>
    </div>
  );
};

export default Hero;
