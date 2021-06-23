import { NextApiRequest, NextApiResponse } from 'next';
import { CourierModel } from '../../models/courier';

type Data = {
  courier: CourierModel[] | null | undefined;
};

type SingleData = {
  courier: CourierModel | null | undefined;
};

const couriers = [
  { name: 'POS Indonesia', value: 'pos', logo: '/tracking/logos/pos.svg' },
  { name: 'JNT Express', value: 'jnt', logo: '/tracking/logos/jnt.svg' },
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
  { name: 'Satria Antaran Prima', value: 'sap', logo: '/tracking/logos/sap.png' }
];

export default (req: NextApiRequest, res: NextApiResponse<Data | SingleData>): void => {
  if (req.query.id) {
    const { id } = req.query;

    const result = couriers.find((el) => el.value === id);
    res.status(200).json({ courier: result });
  } else {
    res.status(200).json({ courier: couriers });
  }
};
