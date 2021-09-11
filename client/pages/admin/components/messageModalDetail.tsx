import { Dispatch, SetStateAction } from 'react';
import OnClickOutside from 'react-outside-click-handler';
import { MessageProps } from './message';

export type ErrProps = {
  setOpen: Dispatch<SetStateAction<boolean>>;
  message: MessageProps;
};

const Contact: any = ({ setOpen, message }: ErrProps): JSX.Element => {
  const handleClose = (): void => {
    setOpen(false);
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
                  <h3 className="text-lg leading-6 font-roboto font-medium text-gray-600">Message</h3>
                </div>
                <div className="mt-2">
                  <p className="leading-8 font-roboto">{message && message.message ? message.message : ''}</p>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 px-4 py-3 lg:flex lg:px-6 lg:justify-end">
              <button onClick={handleClose} type="button" className="w-full lg:w-auto mb-2 lg:mb-0 inline-flex justify-center items-center rounded-md shadow-sm border border-gray-300 font-roboto hover:bg-gray-50 bg-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 px-4 py-2 text-base lg:text-sm font-medium text-gray-700">
                Cancel
              </button>
            </div>
          </OnClickOutside>
        </div>
      </div>
    </div>
  );
};

export default Contact;
