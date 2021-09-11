import axios, { AxiosRequestConfig } from 'axios';

export type AxiosPropsssss = {
  method: string;
};

export const axiosFetch = (data: AxiosRequestConfig): Promise<any> => {
  return new Promise((resolve, reject) => {
    axios(data)
      .then((res) => resolve(res))
      .catch((err) => reject(err));
  });
};
