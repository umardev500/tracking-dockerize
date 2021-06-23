import { createContext, FC, useState } from 'react';

export const PermalinkAddContext = createContext(false);

const PermalinkProvider = ({ children }: any): any => {
  const [isAdded, setAdded] = useState<boolean>(false);

  const savePermalink = () => setAdded(true);

  return { children };
};

export default PermalinkProvider;
