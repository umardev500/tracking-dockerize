import { NextApiRequest, NextApiResponse } from 'next';
import { CourierModel } from '../../models/courier';

type Data = {
  courier: CourierModel[] | null | undefined;
};

type SingleData = {
  courier: CourierModel | null | undefined;
};

const couriersCost = [
  { name: 'POS Indonesia', value: 'pos', logo: '/tracking/logos/pos.svg' },
  { name: 'JNE Express', value: 'jne', logo: '/tracking/logos/jne.svg' },
  { name: 'JNT Express', value: 'jnt', logo: '/tracking/logos/jnt.svg' },
  { name: 'Tiki', value: 'tiki', logo: '/tracking/logos/tiki.svg' },
  { name: 'Sicepat Express', value: 'sicepat', logo: '/tracking/logos/sicepat.svg' },
  { name: 'Ninja Express', value: 'ninja', logo: '/tracking/logos/ninja.svg' },
  { name: 'Jet Express', value: 'jet', logo: '/tracking/logos/jet.png' },
  { name: 'Wahana Express', value: 'wahana', logo: '/tracking/logos/wahana.svg' },
  { name: 'Lion Parcel', value: 'lion', logo: '/tracking/logos/lion.svg' },
  { name: 'Anteraja', value: 'anteraja', logo: '/tracking/logos/anteraja.png' },
  { name: 'Indotama Domestik Lestari', value: 'idl', logo: '/tracking/logos/idl.png' },
  { name: 'IDexpress Service Solution', value: 'ide', logo: '/tracking/logos/ide.png' },
  { name: 'Sentral Cargo', value: 'sentral', logo: '/tracking/logos/sentral2.png' },
  { name: 'Royal Express Indonesia', value: 'rex', logo: '/tracking/logos/rex2.jpg' },
  { name: 'Synergy First Logistics', value: 'first', logo: '/tracking/logos/first.png' },
  { name: '21 Express', value: 'dse', logo: '/tracking/logos/dse.png' },
  { name: 'Satria Antaran Prima', value: 'sap', logo: '/tracking/logos/sap.png' },
  { name: 'RPX', value: 'rpx', logo: '/tracking/logos/rpx.svg' },
  { name: 'Pandu Express', value: 'pandu', logo: '/tracking/logos/pandu.png' },
  { name: 'Pahala Kencana Express', value: 'pahala', logo: '/tracking/logos/pahala.png' },
  { name: 'Indah Logistic', value: 'indah', logo: '/tracking/logos/indah.png' },
  { name: 'Solusi Ekspres', value: 'slis', logo: '/tracking/logos/slis.jpg' },
  { name: 'Nusantara Card Semesta', value: 'ncs', logo: '/tracking/logos/ncs.png' },
  { name: 'Star Cargo', value: 'star', logo: '/tracking/logos/star.png' }
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
