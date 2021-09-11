import { useRouter } from 'next/dist/client/router';

const Test = (): JSX.Element => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div>
      <p>Your id {id}</p>
    </div>
  );
};
export default Test;
