import { useDispatch, useSelector } from 'react-redux';
import { AppState } from '../../../redux/reducers';

const Weight = (): JSX.Element => {
  const cost = useSelector((state: AppState) => state.costinfo);
  const dispatch = useDispatch();

  function handleKeyUp(e: any) {
    dispatch({ type: 'SET_WEIGHT', payload: { weight: e.target.value } });
  }

  return (
    <div className="lg:mr-1 mb-4">
      <input value={cost.weight ? cost.weight : ''} type="number" onChange={handleKeyUp} className="flex items-center font-roboto bg-white border border-gray-300 focus:outline-none focus:ring-1 focus:ring-indigo-500 w-full rounded-md shadow-sm px-3 h-10" placeholder="Weight in gram" />
    </div>
  );
};

export default Weight;
