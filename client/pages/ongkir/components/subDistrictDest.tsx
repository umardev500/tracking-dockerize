import axios from 'axios';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import onClickOutside from 'react-onclickoutside';
import ErrModal from '../../components/errModal';
import { AppState } from '../../../redux/reducers';

const SubDistrictDest: any = (): JSX.Element => {
  const cost = useSelector((state: AppState) => state.costinfo);
  const costData = useSelector((state: AppState) => state.provinces);
  const API_BASE = process.env.NEXT_PUBLIC_API_BASEURL;
  const [isError, setError] = useState<string>('');
  const [isOpen, setOpen] = useState<boolean>(false);
  const [isCityChanging, setCityChanging] = useState<boolean>(false);

  console.log(costData);
  console.log(cost);

  const toggleMenu = (): void => setOpen(!isOpen);
  const toggleButton = (): void => {
    if (cost.cityDest.id === null) {
      setError('Must be sequenced');
    } else {
      toggleMenu();
    }
  };

  const dispatch = useDispatch();

  useEffect(() => {
    console.log('Refreshing subDistrict Dest');
    const cityId = cost.cityDest.id;

    // Chek if last city not null
    if (cityId) {
      // Set state into loading
      setCityChanging(true);

      // Reset state
      dispatch({ type: 'SET_SUBDISTRICT_DEST', payload: { subDistrictDest: { name: null, id: null } } });

      // Get subdistrict by city id
      axios({ url: `${API_BASE}/subdistrict?city=${cityId}` })
        .then((res) => {
          const { rajaongkir } = res.data;
          const { results } = rajaongkir;
          console.log(results);
          dispatch({ type: 'SET_SUBDISTRICT_DATA_DEST', payload: results });
          setCityChanging(false);
        })
        .catch((err) => {
          console.log('error fetch');
          console.log(err);
        });
    }
  }, [cost.cityDest]);

  const handleClick = (item: any) => {
    dispatch({ type: 'SET_SUBDISTRICT_DEST', payload: { subDistrictDest: { name: item.subdistrict_name, id: item.subdistrict_id } } });
    toggleMenu();
  };

  SubDistrictDest.handleClickOutside = (): void => {
    setOpen(false);
  };

  return (
    <>
      {isError !== '' ? <ErrModal setError={setError} errMessage={isError} /> : null}
      <div className="lg:ml-1 mb-4">
        <div className="relative">
          <button onClick={toggleButton} type="button" className="relative overflow-hidden flex items-center w-full bg-white border border-gray-300 rounded-md shadow-sm pl-3 pr-10 h-10 text-left cursor-default focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" aria-haspopup="listbox" data-toggle="dropdown" aria-expanded="true" aria-labelledby="listbox-label">
            <span className="flex items-center">
              <span className="block truncate font-roboto uppercase">{cost.subDistrictDest.id ? cost.subDistrictDest.name : 'KECAMATAN TUJUAN'}</span>
            </span>
            <span className="ml-3 absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none bg-white">
              <svg className="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fillRule="evenodd" d="M10 3a1 1 0 01.707.293l3 3a1 1 0 01-1.414 1.414L10 5.414 7.707 7.707a1 1 0 01-1.414-1.414l3-3A1 1 0 0110 3zm-3.707 9.293a1 1 0 011.414 0L10 14.586l2.293-2.293a1 1 0 011.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </span>
          </button>
          {isOpen ? (
            <ul tabIndex={-1} className="absolute z-10 bg-white shadow-lg w-full mt-1 max-h-56 rounded-md py-1 text-base lg:text-sm ring-1 ring-black ring-opacity-5 overflow-auto">
              {isCityChanging ? (
                <li role="presentation" className="flex items-center text-gray-900 hover:bg-gray-50 relative pl-3 pr-9 h-10 cursor-default font-roboto">
                  <div className="flex items-center">
                    <span className="font-normal block truncate">Loading...</span>
                  </div>
                </li>
              ) : null}
              {costData.subDistrictDest.length > 0 && isCityChanging === false
                ? costData.subDistrictDest.map((item: any, index: any) => {
                    return (
                      <li onClick={() => handleClick(item)} key={index.toString()} role="presentation" className="flex items-center text-gray-900 hover:bg-gray-50 relative pl-3 pr-9 h-10 cursor-default font-roboto">
                        <div className="flex items-center">
                          <span className="font-normal block truncate uppercase">{item.subdistrict_name}</span>
                        </div>
                        {cost.subDistrictDest.id === item.subdistrict_id ? (
                          <span className="text-indigo-600 absolute right-0 flex items-center inset-y-0 pr-4">
                            <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                          </span>
                        ) : null}
                      </li>
                    );
                  })
                : null}
            </ul>
          ) : null}
        </div>
      </div>
    </>
  );
};

const outsideClickConfig = {
  handleClickOutside: () => SubDistrictDest.handleClickOutside
};

export default onClickOutside(SubDistrictDest, outsideClickConfig);
