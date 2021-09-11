import { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { AppState } from '../../../redux/reducers';
import CourierDropdown from './courier-dropdown';
import ErrModal from '../../components/errModal';

const WaybillForm = (): JSX.Element => {
  const courier = useSelector((state: AppState) => state.courier);
  const waybillRef = useRef<HTMLInputElement>(null);
  const dispatch = useDispatch();
  const API_BASE = process.env.NEXT_PUBLIC_API_BASEURL;
  const [isError, setError] = useState<string>('');
  const [isLoading, setLoading] = useState<boolean>(false);

  const setModalErr = (msg: string): void => {
    setError(msg);
  };

  const handleSubmit = async (): Promise<any> => {
    let waybillCode: string;

    if (waybillRef.current) {
      waybillCode = waybillRef.current.value;

      // if is null then pass the error modal
      // else processed it
      if (waybillCode === '') {
        setError('Beberapa informasi pada kolom terdeteksi kosong. Silahkan isi kembali form yang terdeteksi kosong.');
      } else {
        // Set isLoading to true
        setLoading(true);
        console.log(waybillCode);
        console.log(courier.value);
        try {
          const result = await axios({
            method: 'post',
            url: `${API_BASE}/waybill-check`,
            data: {
              waybill: waybillCode,
              // waybill: 'JP14114090133',
              courier: courier.value
            }
          });
          const { data } = result;
          const { rajaongkir } = data;
          const { status } = rajaongkir;

          // if status code more than 200 then pass the error modal
          // else make the output to the table
          if (status.code > 200) {
            setModalErr(status.description);
          } else {
            const { result: waybillResult } = rajaongkir;
            dispatch({ type: 'SET_WAYBILL_INFO', payload: waybillResult });
          }
          setLoading(false);
        } catch (err) {
          setError('Oops internal server error');
          setLoading(false);
        }
      }
    }
  };

  const handleCancel = (): void => {
    if (typeof document !== 'undefined') {
      if (waybillRef.current) {
        waybillRef.current.focus();
        waybillRef.current.value = '';
      }
    }
  };

  useEffect(() => {
    if (waybillRef.current) {
      waybillRef.current.addEventListener('keyup', (e: any) => {
        const { value } = e.target;
        const escValue: string = value.replaceAll(' ', '');

        e.target.value = escValue;
      });
    }
  }, []);

  return (
    <>
      {isError !== '' ? <ErrModal setError={setError} errMessage={isError} /> : null}
      <div className="col-span-1">
        <div className="mt-1 relative mb-4">
          <CourierDropdown />
        </div>
        <div>
          <input ref={waybillRef} type="text" className="flex items-center font-roboto bg-white border border-gray-300 focus:outline-none focus:ring-1 focus:ring-indigo-500 w-full rounded-md shadow-sm px-3 h-11 mb-4" placeholder="Waybill numbers" />
        </div>
        <div className="grid lg:grid-cols-2 mb-5">
          <div className="lg:pr-1 mb-3">
            <button onClick={handleSubmit} type="button" className="shadow-sm ring-1 focus:outline-none w-full rounded-md h-10 px-4 ring-indigo-500 bg-indigo-500 hover:bg-indigo-600 font-roboto text-white focus:ring-2 focus:ring-offset-2">
              {isLoading ? 'Loading...' : 'Submit'}
            </button>
          </div>
          <div className="lg:pl-1 mb-3">
            <button onClick={handleCancel} type="button" className="shadow-sm border border-gray-300 bg-white focus:outline-none w-full rounded-md h-10 px-4 ring-indigo-500 hover:ring-indigo-600 font-roboto text-gray-700 hover:bg-gray-50 focus:ring-2 focus:ring-offset-2">
              Cancel
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default WaybillForm;
