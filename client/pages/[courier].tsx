import Head from 'next/head';
import axios from 'axios';
import { GetServerSideProps } from 'next';
import ErrorPage from 'next/error';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import WaybillPage from './cek-resi';

export type CourierPageProps = {
  statusCode: number;
  isError: boolean;
  value: string;
  slug: string;
  title: string;
  description: string;
};

const CourierPage = (props: CourierPageProps): JSX.Element => {
  const { statusCode, isError, value, title, description } = props;
  const dispatch = useDispatch();

  console.log(`err: ${isError} code: ${statusCode}`);
  console.log(process.env.NEXT_PUBLIC_SELF_BASEURL);

  useEffect(() => {
    if (!isError) {
      axios({ url: `${process.env.NEXT_PUBLIC_SELF_BASEURL}/api/courier?id=${value}` })
        .then((res) => {
          const { data } = res;
          dispatch({ type: 'CHANGE_COURIER', payload: data.courier });
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, []);

  return isError ? (
    <ErrorPage statusCode={statusCode} />
  ) : (
    <>
      <WaybillPage />
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} key="description" />
      </Head>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (ctx): Promise<any> => {
  const { params } = ctx;
  console.log('Server side props');
  console.log(params);
  console.log(process.env.NEXT_PUBLIC_API_BASEURL);
  console.log(`${process.env.NEXT_PUBLIC_API_BASEURL}/courier?slug=${params?.courier}`);

  try {
    const getSlug = await axios({ url: `${process.env.NEXT_PUBLIC_API_BASEURL}/courier?slug=${params?.courier}` });
    // const getSlug = await axios({ url: `http://foo.com/api/waybill?slug=${params?.courier}` });
    const { data } = getSlug;

    return { props: { value: data.value, title: data.title, description: data.description } };
  } catch (err) {
    console.log('This is catch the error');
    // console.log(err);
    const statusCode = err.response?.status;
    console.log('this is a response');
    console.log(statusCode);

    return { props: { isError: true, statusCode: statusCode || 500 } };
  }
  // return { props: {} };
};

export default CourierPage;
