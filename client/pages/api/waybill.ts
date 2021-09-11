import { NextApiRequest, NextApiResponse } from 'next';

const slugs = [
  { value: 'jnt', slug: 'cek-resi-jnt', title: 'Cek resi jnt dengan mudah disini', description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s` },
  { value: 'wahana', slug: 'cek-resi-wahana', title: 'Cek resi wahana di tailwind web', description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s` },
  { value: 'sicepat', slug: 'cek-resi-sicepat', title: 'Cek resi sicepat', description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s` }
];

export default (req: NextApiRequest, res: NextApiResponse): void => {
  const { slug } = req.query;
  if (slug) {
    const selected = slugs.find((elem) => elem.slug === slug);

    if (selected) {
      res.status(200).json(selected);
    } else {
      res.status(404).json({ msg: 'Internal server error' });
    }
  } else {
    res.status(200).json(slugs);
  }
};
