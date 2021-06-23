import Header from './components/header';
import Footer from './components/footer';

const About = (): JSX.Element => {
  return (
    <>
      <Header />
      <div className="px-4 lg:px-32 min-h-screen">
        <div className="grid grid-cols-1 lg:grid-cols-3 mt-5">
          <div className="col-span-2">
            <div className="py-5">
              <div className="pb-4 pt-1">
                <h1 className="text-3xl font-bold text-gray-800 font-roboto">About Tailwind</h1>
                <p className="mt-1 text-md text-gray-600 font-roboto mt-4 leading-7">Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, obcaecati fuga accusantium iste aspernatur aperiam minus corrupti doloremque non. Enim eos voluptatem maxime autem deleniti sunt sed quis velit magni!</p>
                <p className="mt-1 text-md text-gray-600 font-roboto mt-4 leading-7">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium accusantium nam amet dolor, dignissimos inventore accusamus! Voluptatum quas, obcaecati unde nam expedita quia minima quam architecto aliquam numquam ut sit.</p>
                <p className="mt-1 text-md text-gray-600 font-roboto mt-4 leading-7">Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, obcaecati fuga accusantium iste aspernatur aperiam minus corrupti doloremque non. Enim eos voluptatem maxime autem deleniti sunt sed quis velit magni!</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default About;
