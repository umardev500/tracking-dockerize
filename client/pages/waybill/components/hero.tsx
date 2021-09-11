import { useRouter } from 'next/dist/client/router';
import { useSelector } from 'react-redux';
import { AppState } from '../../../redux/reducers';

const Hero = (): JSX.Element => {
  const router = useRouter();
  const courier = useSelector((state: AppState) => state.courier);

  return (
    <div className="py-5">
      <div className="pb-4 pt-1">
        <h1 className="text-3xl font-bold text-gray-800 font-roboto">Cek Resi {router.query && router.query.courier ? courier.name : null}</h1>
        <p className="mt-1 text-lg text-gray-600 font-roboto">Lacak status dan posisi pesanana anda dari berbagai kurir di Indonesia</p>
      </div>

      {/* Ads */}
      <div className="flex justify-center mt-4">
        <img src="/images/ads.png" alt="ads" />
      </div>
    </div>
  );
};

export default Hero;
