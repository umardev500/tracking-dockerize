import WaybillForm from './components/form';
import WaybillInfo from './components/info';
import WaybillResult from './components/result';

const Home = (): JSX.Element => {
  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-3 mt-10">
        <WaybillForm />

        <div className="col-span-2 lg:pl-8">
          <WaybillInfo />
          <WaybillResult />
        </div>
      </div>
    </>
  );
};

export default Home;
