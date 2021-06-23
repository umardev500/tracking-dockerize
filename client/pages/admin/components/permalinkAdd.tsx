import axios from 'axios';
import { Dispatch, SetStateAction, useState } from 'react';
import OnClickOutside from 'react-outside-click-handler';
import { useDispatch } from 'react-redux';

export type ErrProps = {
  setOpen: Dispatch<SetStateAction<boolean>>;
};

const PermalinkAdd: any = ({ setOpen }: ErrProps): JSX.Element => {
  const API_BASE = process.env.NEXT_PUBLIC_API_BASEURL;
  const [title, setTitle] = useState<string>('');
  const [slug, setSlug] = useState<string>('');
  const [code, setCode] = useState<string>('');
  const [desc, setDesc] = useState<string>('');
  const [isLoading, setLoading] = useState<boolean>(false);
  const dispath = useDispatch();

  const handleTitlChange = (e: any) => setTitle(e.target.value);
  const handleSlugChange = (e: any) => setSlug(e.target.value);
  const handleCodeChange = (e: any) => setCode(e.target.value);
  const handleDescChange = (e: any) => setDesc(e.target.value);

  const handleClose = (): void => {
    setOpen(false);
  };

  const handleSubmit = () => {
    setLoading(true);
    axios({
      url: `${API_BASE}/create-courier`,
      method: 'POST',
      data: {
        title,
        slug,
        value: code,
        description: desc
      }
    })
      .then((res) => {
        console.log(res);
        setOpen(false);
        setLoading(false);
        dispath({ type: 'SET_ADD_STATE', payload: true });
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
        dispath({ type: 'SET_ADD_STATE', payload: true });
      });
  };

  return (
    <div className="fixed z-10 overflow-y-auto inset-0">
      <div className="flex justify-center pt-4 px-4">
        <div className="fixed inset-0 bg-black bg-opacity-40 transition-opacity" />
        <div className="inline-block transform w-full max-w-lg lg:my-8 shadow-xl rounded-lg overflow-hidden transition-all">
          <OnClickOutside onOutsideClick={() => setOpen(false)}>
            <div className="bg-white px-4 pt-5 pb-6 lg:p-6 lg:pb-4">
              <div className="lg:flex lg:justify-start flex-col">
                <div className="text-center lg:text-left">
                  <h3 className="text-lg leading-6 font-roboto font-medium text-gray-600">Permalink informations</h3>
                </div>
                <div className="mt-4">
                  <div className="mt-2">
                    <span className="font-roboto mb-1 flex text-gray-500">Title</span>
                    <input value={title} id="title" type="text" onChange={handleTitlChange} className="flex items-center font-roboto bg-white border border-gray-300 focus:outline-none focus:ring-1 focus:ring-indigo-500 w-full rounded-md shadow-sm px-3 h-11 mb-4" placeholder="Type your email here" />
                  </div>
                  <div className="mt-2">
                    <span className="font-roboto mb-1 flex text-gray-500">Slug</span>
                    <input value={slug} type="text" onChange={handleSlugChange} className="flex items-center font-roboto bg-white border border-gray-300 focus:outline-none focus:ring-1 focus:ring-indigo-500 w-full rounded-md shadow-sm px-3 h-11 mb-4" placeholder="Type your email here" />
                  </div>
                  <div className="mt-2">
                    <span className="font-roboto mb-1 flex text-gray-500">Code</span>
                    <input value={code} type="text" onChange={handleCodeChange} className="flex items-center font-roboto bg-white border border-gray-300 focus:outline-none focus:ring-1 focus:ring-indigo-500 w-full rounded-md shadow-sm px-3 h-11 mb-4" placeholder="Type your email here" />
                  </div>
                  <div className="mt-2">
                    <span className="font-roboto mb-1 flex text-gray-500">Description</span>
                    <input value={desc} type="text" onChange={handleDescChange} className="flex items-center font-roboto bg-white border border-gray-300 focus:outline-none focus:ring-1 focus:ring-indigo-500 w-full rounded-md shadow-sm px-3 h-11 mb-4" placeholder="Type your email here" />
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 px-4 py-3 lg:flex lg:px-6 lg:justify-end">
              <button onClick={handleSubmit} type="button" className="w-full lg:w-auto mb-2 lg:mr-2 lg:mb-0 bg-indigo-500 inline-flex justify-center items-center rounded-md shadow-sm border border-gray-300 font-roboto  bg-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 px-4 py-2 text-base lg:text-sm font-medium text-white">
                {isLoading ? '...' : 'Submit'}
              </button>
              <button onClick={handleClose} type="button" className="w-full lg:w-auto inline-flex justify-center items-center rounded-md shadow-sm border border-gray-300 font-roboto hover:bg-gray-50 bg-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 px-4 py-2 text-base lg:text-sm font-medium text-gray-700">
                Cancel
              </button>
            </div>
          </OnClickOutside>
        </div>
      </div>
    </div>
  );
};

export default PermalinkAdd;
