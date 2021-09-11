import axios from 'axios';
import { Dispatch, SetStateAction, useState } from 'react';
import OnClickOutside from 'react-outside-click-handler';

export type ErrProps = {
  setOpen: Dispatch<SetStateAction<boolean>>;
};

const Contact: any = ({ setOpen }: ErrProps): JSX.Element => {
  const [email, setEmail] = useState<string>('');
  const [message, setMessage] = useState<string>('');
  const [isLoading, setLoading] = useState<boolean>(false);
  const API_BASE = process.env.NEXT_PUBLIC_API_BASEURL;

  const handleClose = (): void => {
    setOpen(false);
  };

  const handleEmailChange = (e: any) => {
    setEmail(e.target.value);
  };

  const handleMessageChange = (e: any) => {
    setMessage(e.target.value);
  };

  const handleSubmit = () => {
    // Set loading
    setLoading(true);

    axios({
      url: `${API_BASE}/send-message`,
      method: 'POST',
      data: {
        email,
        message
      }
    })
      .then((res) => {
        setMessage('');
        setEmail('');
        setOpen(false);
        // Set loading
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        // Set loading
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
                  <h3 className="text-lg leading-6 font-roboto font-medium text-gray-600">Contact form</h3>
                </div>
                <div className="mt-2">
                  <div className="mt-2">
                    <input value={email} type="email" onChange={handleEmailChange} className="flex items-center font-roboto bg-white border border-gray-300 focus:outline-none focus:ring-1 focus:ring-indigo-500 w-full rounded-md shadow-sm px-3 h-11 mb-4" placeholder="Type your email here" />
                  </div>
                  <div className="mt-2">
                    <textarea value={message} onChange={handleMessageChange} className="flex py-2 items-center font-roboto bg-white border border-gray-300 focus:outline-none focus:ring-1 focus:ring-indigo-500 w-full rounded-md shadow-sm px-3 h-20 mb-4" placeholder="Message" />
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 px-4 py-3 lg:flex lg:px-6 lg:justify-end">
              <button onClick={handleClose} type="button" className="w-full lg:w-auto lg:mr-2 mb-2 lg:mb-0 inline-flex justify-center items-center rounded-md shadow-sm border border-gray-300 font-roboto hover:bg-gray-50 bg-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 px-4 py-2 text-base lg:text-sm font-medium text-gray-700">
                Cancel
              </button>
              <button onClick={handleSubmit} type="button" className="w-full lg:w-auto bg-indigo-500 inline-flex justify-center items-center rounded-md shadow-sm border border-gray-300 font-roboto  bg-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 px-4 py-2 text-base lg:text-sm font-medium text-white">
                {isLoading ? '...' : 'submit'}
              </button>
            </div>
          </OnClickOutside>
        </div>
      </div>
    </div>
  );
};

export default Contact;
