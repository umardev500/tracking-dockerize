const FormSelect = (): JSX.Element => {
  return (
    <div className="relative">
      <button type="button" className="relative flex items-center w-full bg-white border border-gray-300 rounded-md shadow-sm pl-3 pr-10 h-10 text-left cursor-default focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" aria-haspopup="listbox" data-toggle="dropdown" aria-expanded="true" aria-labelledby="listbox-label">
        <span className="flex items-center">
          <span className="block truncate font-roboto">BALI</span>
        </span>
        <span className="ml-3 absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
          <svg className="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            <path fillRule="evenodd" d="M10 3a1 1 0 01.707.293l3 3a1 1 0 01-1.414 1.414L10 5.414 7.707 7.707a1 1 0 01-1.414-1.414l3-3A1 1 0 0110 3zm-3.707 9.293a1 1 0 011.414 0L10 14.586l2.293-2.293a1 1 0 011.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </span>
      </button>
      <ul tabIndex={-1} className="absolute bg-white shadow-lg w-full mt-1 max-h-56 rounded-md py-1 text-base lg:text-sm ring-1 ring-black ring-opacity-5 overflow-auto">
        <li role="presentation" className="flex items-center text-gray-900 hover:bg-gray-50 relative pl-3 pr-9 h-10 cursor-default font-roboto">
          <div className="flex items-center">
            <span className="font-normal block truncate">BALI</span>
          </div>
          <span className="text-indigo-600 absolute right-0 flex items-center inset-y-0 pr-4">
            <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
          </span>
        </li>
        <li role="presentation" className="flex items-center text-gray-900 hover:bg-gray-50 relative pl-3 pr-9 h-10 cursor-default font-roboto">
          <div className="flex items-center">
            <span className="font-normal block truncate">BANTEN</span>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default FormSelect;
