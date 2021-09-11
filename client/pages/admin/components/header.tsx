import Link from 'next/link';
import { useState } from 'react';
import PermalinkAdd from './permalinkAdd';

const AdminHeader = (): JSX.Element => {
  const [isPermalinkOpen, setPermalinkOpen] = useState<boolean>(false);

  const handleClickNew = () => setPermalinkOpen(true);

  return (
    <>
      {isPermalinkOpen ? <PermalinkAdd setOpen={setPermalinkOpen} /> : null}
      <div className="grid grid-cols-1 lg:grid-cols-3 mt-5">
        <div className="col-span-2">
          <div className="py-5">
            <div className="pb-4 pt-1">
              <h1 className="text-3xl font-bold text-gray-800 font-roboto">Admin Dashboard</h1>
              <p className="mt-1 text-lg text-gray-600 font-roboto">Welcome to admin controll panel system</p>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-4 lg:px-1">
        <div className="lg:col-span-1 col-span-4 mb-2">
          <a href="#add-new" onClick={handleClickNew}>
            <div className="border p-4 rounded flex items-center lg:mr-1 hover:shadow cursor-pointer text-green-500">
              <span className="flex items-center">
                <i className="fas fa-plus text-2xl" />
              </span>
              <span className="ml-3 font-medium">NEW PERMALINK</span>
            </div>
          </a>
        </div>
        <div className="lg:col-span-1 col-span-4 mb-2">
          <Link href="/admin/home">
            <a href="/admin/home">
              <div className="border p-4 rounded flex items-center lg:ml-1 lg:mr-1 hover:shadow cursor-pointer text-green-500">
                <span className="flex items-center">
                  <i className="fas fa-link text-2xl" />
                </span>
                <span className="ml-3 font-medium">PERMALINK</span>
              </div>
            </a>
          </Link>
        </div>
        <div className="lg:col-span-1 col-span-4 mb-2">
          <Link href="/admin/message">
            <a href="/admin/message">
              <div className="border p-4 rounded flex items-center lg:mr-1 lg:ml-1 hover:shadow cursor-pointer text-green-500">
                <span className="flex items-center">
                  <i className="fas fa-envelope text-2xl" />
                </span>
                <span className="ml-3 font-medium">MESSAGE</span>
              </div>
            </a>
          </Link>
        </div>
      </div>
    </>
  );
};

export default AdminHeader;
