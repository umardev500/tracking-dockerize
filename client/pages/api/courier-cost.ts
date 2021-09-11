import { NextApiRequest, NextApiResponse } from 'next';
import { CourierModel } from '../../models/courier';

type Data = {
  courier: CourierModel[] | null | undefined;
};

type SingleData = {
  courier: CourierModel | null | undefined;
};

const couriersCost = [
  { name: 'POS Indonesia', value: 'pos', logo: '/logos/pos.svg' },
  { name: 'JNE Express', value: 'jne', logo: '/logos/jne.svg' },
  { name: 'JNT Express', value: 'jnt', logo: '/logos/jnt.svg' },
  { name: 'Tiki', value: 'tiki', logo: '/logos/tiki.svg' },
  { name: 'Sicepat Express', value: 'sicepat', logo: '/logos/sicepat.svg' },
  { name: 'Ninja Express', value: 'ninja', logo: '/logos/ninja.svg' },
  { name: 'Jet Express', value: 'jet', logo: '/logos/jet.png' },
  { name: 'Wahana Express', value: 'wahana', logo: '/logos/wahana.svg' },
  { name: 'Lion Parcel', value: 'lion', logo: '/logos/lion.svg' },
  { name: 'Anteraja', value: 'anteraja', logo: '/logos/anteraja.png' },
  { name: 'Indotama Domestik Lestari', value: 'idl', logo: '/logos/idl.png' },
  { name: 'IDexpress Service Solution', value: 'ide', logo: '/logos/ide.png' },
  { name: 'Sentral Cargo', value: 'sentral', logo: '/logos/sentral2.png' },
  { name: 'Royal Express Indonesia', value: 'rex', logo: '/logos/rex2.jpg' },
  { name: 'Synergy First Logistics', value: 'first', logo: '/logos/first.png' },
  { name: '21 Express', value: 'dse', logo: '/logos/dse.png' },
  { name: 'Satria Antaran Prima', value: 'sap', logo: '/logos/sap.png' },
  { name: 'RPX', value: 'rpx', logo: '/logos/rpx.svg' },
  { name: 'Pandu Express', value: 'pandu', logo: '/logos/pandu.png' },
  { name: 'Pahala Kencana Express', value: 'pahala', logo: '/logos/pahala.png' },
  { name: 'Indah Logistic', value: 'indah', logo: '/logos/indah.png' },
  { name: 'Solusi Ekspres', value: 'slis', logo: '/logos/slis.jpg' },
  { name: 'Nusantara Card Semesta', value: 'ncs', logo: '/logos/ncs.png' },
  { name: 'Star Cargo', value: 'star', logo: '/logos/star.png' }
];

export default (req: NextApiRequest, res: NextApiResponse<Data | SingleData>): void => {
  if (req.query.id) {
    const { id } = req.query;

    const result = couriersCost.find((el) => el.value === id);
    res.status(200).json({ courier: result });
  } else {
    res.status(200).json({ courier: couriersCost });
  }
};
