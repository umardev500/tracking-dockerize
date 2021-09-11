import axios from 'axios';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { PermalinkModel } from '../../../models/permalink';
import { AppState } from '../../../redux/reducers';
import PermalinkEdit from './permalinkEdit';

const Permalink = (): JSX.Element => {
  const API_BASE = process.env.NEXT_PUBLIC_API_BASEURL;
  const [permalink, setPermalink] = useState<PermalinkModel[]>([]);
  const [singlePermalink, setSinglePermalink] = useState<PermalinkModel>();
  const [isEditOpen, setEditOpen] = useState<boolean>(false);
  const addState = useSelector((state: AppState) => state.permalink);

  console.log(addState);

  const loadCourier = () => {
    axios({
      url: `${API_BASE}/courier-all`
    })
      .then((res) => {
        console.log(res);
        setPermalink(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // Open edit modal
  const openEdit = (item: PermalinkModel) => {
    setEditOpen(true);
    setSinglePermalink(item);
  };

  // Delete
  const handleDelete = (id: number) => {
    axios({
      url: `${API_BASE}/courier?id=${id}`,
      method: 'DELETE'
    })
      .then((res) => {
        console.log(res.data);
        loadCourier();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    console.log('re running');
    loadCourier();

    return (): any => loadCourier;
  }, [isEditOpen, addState]);

  return (
    <>
      {isEditOpen ? <PermalinkEdit setOpen={setEditOpen} permalink={singlePermalink} /> : null}
      <div className="flex flex-col mt-10">
        <div className="shadow hide-scrollbar border-b border-gray-200 rounded-lg">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-100 font-roboto">
              <tr>
                <th scope="col" className="py-3 px-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider whitespace-nowrap">
                  slug
                </th>
                <th scope="col" className="py-3 px-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider whitespace-nowrap">
                  value
                </th>
                <th scope="col" className="py-3 px-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider whitespace-nowrap">
                  Title
                </th>
                <th scope="col" className="py-3 px-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider whitespace-nowrap">
                  Description
                </th>
                <th scope="col" className="py-3 px-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider whitespace-nowrap">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="even:rotate-45 font-roboto">
              {permalink.map((item: PermalinkModel, index: number) => {
                return (
                  <tr className="border-b" key={index.toString()}>
                    <td className="px-6 py-2 whitespace-nowrap text-gray-600 text-md">{item.slug}</td>
                    <td className="px-6 py-2 whitespace-nowrap text-gray-600 text-md">
                      {item.title.substr(0, 20)} {item.title.length > 20 ? '...' : null}
                    </td>
                    <td className="px-6 py-2 whitespace-nowrap text-gray-600 text-md">{item.value}</td>
                    <td className="px-6 py-2 whitespace-nowrap text-gray-600 text-md">
                      {item.description.substr(0, 20)} {item.description.length > 20 ? '...' : null}
                    </td>
                    <td className="px-6 py-2 whitespace-nowrap text-gray-600 text-md">
                      <div className="flex items-center">
                        <button onClick={() => handleDelete(item.id)} type="button" className="bg-red-500 text-white px-3 h-8 rounded">
                          <i className="fas fa-trash-alt" />
                        </button>
                        <button onClick={() => openEdit(item)} type="button" className="bg-indigo-500 ml-1 text-white px-3 h-8 rounded">
                          <i className="fas fa-clipboard-list" />
                        </button>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Permalink;
