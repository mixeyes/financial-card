import { getUserAPI } from '@api/user';
import { useEffect, useState } from 'react';

export const usePremium = () => {
  const [isPremium, setIsPremium] = useState<boolean>(false);

  useEffect(() => {
    (async () => {
      const res = await getUserAPI();
      setIsPremium(() => res['premium']);
    })();
  }, []);

  return isPremium;
};
