import { useSelector } from 'react-redux';
import { AppState } from '../../../redux/reducers';

const Result = (): JSX.Element => {
  const costResult = useSelector((state: AppState) => state.costResult);
  console.log('RESULT COST');
  console.log(costResult);

  console.log(costResult.costResult && costResult.costResult.results.length > 0);

  return (
    <div className="flex flex-col col-span-3 lg:col-span-2 px-1">
      <div className="grid grid-cols-3">
        <div className="col-span-3 lg:col-span-2">
          <div className="shadow hide-scrollbar border-b border-gray-200 rounded-lg">
            <div className="text-center py-3 border-b mb-2 px-4">
              <span className="text-gray-500 font-roboto text-sm text-center uppercase">{costResult.costResult ? `${costResult.costResult.origin_details.subdistrict_name} - ${costResult.costResult.destination_details.subdistrict_name}` : 'ORIGIN - DESTINATION'}</span>
            </div>

            {costResult.costResult && costResult.costResult.results.length > 0
              ? costResult.costResult.results[0].costs.map((item: any, index: any) => {
                  return (
                    <div key={index.toString()} className={`px-4 h-14 flex items-center border-b ${index % 2 !== 0 ? 'bg-gray-50' : null}`}>
                      <div className="flex flex-col font-roboto justify-center pt-1">
                        <span className="text-xs text-gray-500 uppercase">{costResult.costResult.results[0].code}</span>
                        <span className="text-gray-800">{item.service}</span>
                      </div>
                      <div className="flex flex-col font-roboto justify-center pt-1 ml-auto">
                        <span className="text-xs text-gray-500 text-right">{item.cost[0].etd.replace(/[A-Z]+/, '')} Hari</span>
                        <span className="text-gray-800 text-right font-medium text-lg">Rp{new Intl.NumberFormat('id-ID', { maximumSignificantDigits: 3 }).format(item.cost[0].value)}</span>
                      </div>
                    </div>
                  );
                })
              : null}
            {costResult.costResult && costResult.costResult.results[0].costs.length === 0 ? (
              <div className="px-4 h-14 flex items-center border-b">
                <div className="flex flex-col font-roboto justify-center pt-1">
                  <span className="text-xs text-gray-500">INFO</span>
                  <span className="text-gray-800">NO SERVICE FOUND</span>
                </div>
              </div>
            ) : null}

            {!costResult.costResult ? (
              <>
                <div className="px-4 h-14 flex items-center border-b">
                  <div className="flex flex-col font-roboto justify-center pt-1">
                    <span className="text-xs text-gray-500">JNE</span>
                    <span className="text-gray-800">REGULER</span>
                  </div>
                  <div className="flex flex-col font-roboto justify-center pt-1 ml-auto">
                    <span className="text-xs text-gray-500 text-right">1 - 4 Hari</span>
                    <span className="text-gray-800 text-right font-medium text-lg">Rp7.000</span>
                  </div>
                </div>
                <div className="px-4 h-14 flex items-center border-b bg-gray-50">
                  <div className="flex flex-col font-roboto justify-center pt-1">
                    <span className="text-xs text-gray-500">JNE</span>
                    <span className="text-gray-800">OKE</span>
                  </div>
                  <div className="flex flex-col font-roboto justify-center pt-1 ml-auto">
                    <span className="text-xs text-gray-500 text-right">1 - 3 Hari</span>
                    <span className="text-gray-800 text-right font-medium text-lg">Rp19.000</span>
                  </div>
                </div>
                <div className="px-4 h-14 flex items-center">
                  <div className="flex flex-col font-roboto justify-center pt-1">
                    <span className="text-xs text-gray-500">JNE</span>
                    <span className="text-gray-800">YES</span>
                  </div>
                  <div className="flex flex-col font-roboto justify-center pt-1 ml-auto">
                    <span className="text-xs text-gray-500 text-right">1 - 2 Hari</span>
                    <span className="text-gray-800 text-right font-medium text-lg">Rp29.000</span>
                  </div>
                </div>
              </>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Result;
