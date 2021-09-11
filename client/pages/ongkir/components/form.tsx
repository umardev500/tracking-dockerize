import ProvinceOrigin from './provinceOrigin';
import CityOrigin from './cityOrigin';
import SubDistrictOrigin from './subDistrictOrigin';
import ProvinceDest from './provinceDest';
import CityDest from './cityDest';
import SubDistrictDest from './subDistrictDest';
import Weight from './weightForm';
import Courier from './courier';
import FormAction from './formAction';

const Form = (): JSX.Element => {
  return (
    <>
      <div className="col-span-3 lg:col-span-2 mb-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 lg:px-1">
          <ProvinceOrigin />
          <CityOrigin />
          <SubDistrictOrigin />
          <ProvinceDest />
          <CityDest />
          <SubDistrictDest />
          <Weight />
          <Courier />
          <FormAction />
        </div>
      </div>
    </>
  );
};

export default Form;
