import { useSelector } from 'react-redux';
import { AppState } from '../../../redux/reducers';

const WaybillInfo = (): JSX.Element => {
  const { waybillinfo } = useSelector((state: AppState) => state.waybillinfo);
  const details = waybillinfo !== null ? waybillinfo.details : null;
  const summary = waybillinfo !== null ? waybillinfo.summary : null;
  const delivered = waybillinfo !== null ? waybillinfo.delivered : null;

  return (
    <>
      <div className="flex flex-wrap">
        <div className="pr-4 font-roboto flex flex-col flex-auto mb-4">
          <span className="text-sm text-gray-400">Resi</span>
          <span className="text-sm text-gray-700 mt-1">{details ? details.waybill_number : 'FOO1559078'}</span>
        </div>
        <div className="pr-4 font-roboto flex flex-col flex-auto mb-4">
          <span className="text-sm text-gray-400">Kurir</span>
          <span className="text-sm text-gray-700 mt-1">{summary ? summary.courier_name : 'JNT'}</span>
        </div>
        <div className="pr-4 font-roboto flex flex-col flex-auto mb-4">
          <span className="text-sm text-gray-400">Status</span>
          <div>{delivered ? <span className="text-sm text-white mt-1 bg-green-500 rounded px-2 py-1 shadow-sm">Sudah di terima</span> : <span className="text-sm text-white mt-1 bg-gray-500 rounded px-2 py-1 shadow-sm">Belum di terima</span>}</div>
        </div>
      </div>
      <div className="flex flex-wrap">
        <div className="pr-4 font-roboto flex flex-col flex-auto mb-3">
          <span className="text-sm text-gray-400">Pengirim</span>
          <span className="text-sm text-gray-700 mt-1">{details ? `${details.shippper_name.toUpperCase()} - ${details.origin}` : 'SARAH - Jakarta, Jawa Barat'}</span>
        </div>
      </div>
      <div className="flex flex-wrap">
        <div className="pr-4 font-roboto flex flex-col flex-auto mb-3">
          <span className="text-sm text-gray-400">Penerima</span>
          <span className="text-sm text-gray-700 mt-1">{details ? `${details.receiver_name.toUpperCase()} - ${details.destination}` : 'IBRAHIM - Bandung, Jawa Barat'}</span>
        </div>
      </div>
    </>
  );
};

export default WaybillInfo;
