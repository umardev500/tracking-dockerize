import axios from 'axios';
import { useEffect, useState } from 'react';
import MsgModal from './messageModalDetail';

export interface MessageProps {
  id: number;
  email: string;
  message: string;
  humantime: string;
}

const Message = (): JSX.Element => {
  const [message, setMessage] = useState<MessageProps[]>([]);
  const [modalMessage, setModalMessage] = useState<MessageProps>();
  const [isModalOpen, setModalOpen] = useState<boolean>(false);
  const API_BASE = process.env.NEXT_PUBLIC_API_BASEURL;

  const loadMessage = () => {
    axios({ url: `${API_BASE}/all-message` })
      .then((res) => {
        setMessage(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleDelete = (id: number) => {
    axios({ url: `${API_BASE}/message?id=${id}`, method: 'DELETE' })
      .then((res) => {
        console.log('deleted');
        loadMessage();
      })
      .catch((err) => {
        console.log(err);
        console.log('deleted');
      });
  };

  useEffect(() => {
    loadMessage();

    return () => loadMessage();
  }, []);

  const handleDetail = (item: any) => {
    setModalMessage(item);
    setModalOpen(true);
  };

  return (
    <>
      <div className="flex flex-col mt-10">
        <div className="shadow hide-scrollbar border-b border-gray-200 rounded-lg">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-100 font-roboto">
              <tr>
                <th scope="col" className="py-3 px-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider whitespace-nowrap">
                  Email
                </th>
                <th scope="col" className="py-3 px-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider whitespace-nowrap">
                  Message
                </th>
                <th scope="col" className="py-3 px-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider whitespace-nowrap">
                  Posted at
                </th>
                <th scope="col" className="py-3 px-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider whitespace-nowrap">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="even:rotate-45 font-roboto">
              {message.map((item: MessageProps, index: number) => {
                return (
                  <tr className={`${index % 2 !== 0 ? 'bg-gray-50' : null} border-b`} key={index.toString()}>
                    <td className="px-6 py-2 whitespace-nowrap text-gray-500 text-sm">{item.email}</td>
                    <td className="px-6 py-2 whitespace-nowrap text-gray-600 text-md">
                      {item.message.substr(0, 20)} {item.message.length > 20 ? '...' : null}
                    </td>
                    <td className="px-6 py-2 whitespace-nowrap text-gray-600 text-md">{item.humantime}</td>
                    <td className="px-6 py-2 whitespace-nowrap text-gray-600 text-md">
                      <div className="flex items-center">
                        <button onClick={() => handleDelete(item.id)} type="button" className="bg-red-500 text-white px-3 h-8 rounded">
                          <i className="fas fa-trash-alt" />
                        </button>
                        <button onClick={() => handleDetail(item)} type="button" className="bg-indigo-500 ml-1 text-white px-3 h-8 rounded">
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

      {isModalOpen ? <MsgModal setOpen={setModalOpen} message={modalMessage} /> : null}
    </>
  );
};

export default Message;
