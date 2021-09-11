import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import ErrModal from '../../components/errModal';
import { AppState } from '../../../redux/reducers';

const FormAction = (): JSX.Element => {
  const [isError, setError] = useState<string>('');
  const [isLoading, setLoading] = useState<boolean>(false);
  const cost = useSelector((state: AppState) => state.costinfo);
  const courirSelected = useSelector((state: AppState) => state.courierCost);
  const dispatch = useDispatch();
  const API_BASE = process.env.NEXT_PUBLIC_API_BASEURL;

  const handleSubmit = (): void => {
    const { cityDest, cityOrigin, provinceDest, provinceOrigin, subDistrictDest, subDistrictOrigin, weight } = cost;
    // console.log(!cityDest.id || !cityOrigin.id || !provinceDest.id || !provinceOrigin.id || !subDistrictDest.id || !subDistrictOrigin.id || !weight);
    // Checking inputs
    if (!cityDest.id || !cityOrigin.id || !provinceDest.id || !provinceOrigin.id || !subDistrictDest.id || !subDistrictOrigin.id || !weight) {
      setError('You must filled all inputs');
    } else {
      setLoading(true);
      console.log(`Origin ID: ${subDistrictOrigin.id}`);
      console.log(`Destination ID: ${subDistrictDest.id}`);
      console.log(`Weight: ${weight}`);
      console.log(`Courier: ${courirSelected.value}`);

      axios({
        url: `${API_BASE}/cost`,
        method: 'POST',
        data: {
          origin: subDistrictOrigin.id,
          destination: subDistrictDest.id,
          weight,
          courier: courirSelected.value
        }
      })
        .then((res) => {
          console.log(res.data);
          const { rajaongkir } = res.data;
          dispatch({ type: 'SET_COST_RESULT', payload: rajaongkir });
          setLoading(false);
        })
        .catch((err) => {
          console.log(err);
          setError('Internal server error');
          setLoading(false);
        });
    }
    // console.log(courirSelected);
  };

  const handleCancel = (): void => {
    console.log(cost);
    dispatch({ type: 'SET_PROV', payload: { provinceOrigin: { name: null, id: null } } });
    dispatch({ type: 'SET_PROV_DEST', payload: { provinceDest: { name: null, id: null } } });
    dispatch({ type: 'SET_CITY', payload: { cityOrigin: { name: null, id: null } } });
    dispatch({ type: 'SET_CITY_DEST', payload: { cityDest: { name: null, id: null } } });
    dispatch({ type: 'SET_SUBDISTRICT', payload: { subDistrictOrigin: { name: null, id: null } } });
    dispatch({ type: 'SET_SUBDISTRICT_DEST', payload: { subDistrictDest: { name: null, id: null } } });
    dispatch({ type: 'SET_WEIGHT', payload: { weight: null } });
  };

  return (
    <>
      {isError !== '' ? <ErrModal setError={setError} errMessage={isError} /> : null}
      <div className="mb-3 lg:col-span-3">
        <div className="grid lg:grid-cols-3">
          <div className="col-span-1 lg:mr-1 mb-3">
            <button onClick={handleSubmit} type="button" className="shadow-sm ring-1 focus:outline-none w-full rounded-md h-10 px-4 ring-indigo-500 bg-indigo-500 hover:bg-indigo-600 font-roboto text-white focus:ring-2 focus:ring-offset-2">
              {isLoading ? 'Loading...' : 'Submit'}
            </button>
          </div>
          <div className="col-span-1 lg:mr-1 lg:ml-1">
            <button onClick={handleCancel} type="button" className="shadow-sm border border-gray-300 bg-white focus:outline-none w-full rounded-md h-10 px-4 ring-indigo-500 hover:ring-indigo-600 font-roboto text-gray-700 hover:bg-gray-50 focus:ring-2 focus:ring-offset-2">
              Cancel
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default FormAction;
