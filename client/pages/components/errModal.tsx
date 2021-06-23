import { Dispatch, SetStateAction } from 'react';
import OnClickOutside from 'react-outside-click-handler';

export type ErrProps = {
  setError: Dispatch<SetStateAction<string>>;
  errMessage: string;
};

const ErrModal: any = ({ setError, errMessage }: ErrProps): JSX.Element => {
  const handleClose = (): void => {
    setError('');
  };

  return (
    <div className="fixed z-10 overflow-y-auto inset-0">
      <div className="flex justify-center pt-4 px-4">
        <div className="fixed inset-0 bg-black bg-opacity-40 transition-opacity" />
        <div className="inline-block transform w-full max-w-lg lg:my-8 shadow-xl rounded-lg overflow-hidden transition-all">
          <OnClickOutside onOutsideClick={() => setError('')}>
            <div className="bg-white px-4 pt-5 pb-6 lg:p-6 lg:pb-4">
              <div className="lg:flex lg:items-start">
                <div className="flex-shrink-0 flex mb-4 mx-auto lg:mx-0 lg:mb-0 items-center justify-center w-12 h-12 lg:w-10 lg:h-10 rounded-full bg-red-100">
                  <svg className="h-6 w-6 text-red-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="false">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                </div>
                <div className="text-center lg:text-left lg:ml-5">
                  <h3 className="text-lg leading-6 font-roboto font-medium text-gray-600">Notification error</h3>
                  <div className="mt-2">
                    <p className="text-sm text-gray-500 font-roboto">{errMessage}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 px-4 py-3 lg:flex lg:px-6 lg:justify-end">
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

export default ErrModal;
