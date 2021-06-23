import { useSelector } from 'react-redux';
import { AppState } from '../../../redux/reducers';

const WaybillResult = (): JSX.Element => {
  const { waybillinfo } = useSelector((state: AppState) => state.waybillinfo);

  const manifestJSX =
    waybillinfo && waybillinfo.manifest
      ? waybillinfo.manifest.map((item: any, index: number) => {
          if (index % 2 !== 0) {
            return (
              <tr className="border-b bg-gray-50" key={index.toString()}>
                <td className="px-6 py-2 whitespace-nowrap text-gray-500 text-sm">{`${item.manifest_date} ${item.manifest_time}`}</td>
                <td className="px-6 py-2 whitespace-nowrap text-gray-600 text-md">{`${item.manifest_description} - ${item.city_name}`}</td>
              </tr>
            );
          }

          // if (index === 0) {
          /* return (
              <tr className="bg-indigo-100" key={index.toString()}>
                <td className="px-6 py-2 whitespace-nowrap text-gray-700 text-sm">{`${item.manifest_date} ${item.manifest_time}`}</td>
                <td className="px-6 py-2 font-bold whitespace-nowrap text-gray-700 text-md">{`${item.manifest_description} - ${item.city_name}`}</td>
              </tr>
              ); */
          // }

          return (
            <tr className="border-b" key={index.toString()}>
              <td className="px-6 py-2 whitespace-nowrap text-gray-500 text-sm">{`${item.manifest_date} ${item.manifest_time}`}</td>
              <td className="px-6 py-2 whitespace-nowrap text-gray-600 text-md">{`${item.manifest_description} - ${item.city_name}`}</td>
            </tr>
          );
        })
      : null;

  return (
    <div className="flex flex-col mt-4">
      <div className="shadow hide-scrollbar border-b border-gray-200 rounded-lg">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-100 font-roboto">
            <tr>
              <th scope="col" className="py-3 px-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider whitespace-nowrap">
                Manifest Time
              </th>
              <th scope="col" className="py-3 px-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider whitespace-nowrap">
                Description
              </th>
            </tr>
          </thead>
          <tbody className="even:rotate-45 font-roboto">{manifestJSX}</tbody>
        </table>
      </div>
    </div>
  );
};

export default WaybillResult;
