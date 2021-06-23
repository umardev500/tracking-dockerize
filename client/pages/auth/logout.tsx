import { useRouter } from 'next/dist/client/router';
import { useEffect } from 'react';

function Logout() {
  const router = useRouter();
  useEffect(() => {
    localStorage.removeItem('token');
    router.push('/auth/login');
  }, []);

  return <p>Loading...</p>;
}

export default Logout;
