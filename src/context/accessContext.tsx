import { createContext, ReactNode, FC, useState, useMemo, useContext } from 'react';
// import { getUserAPI } from '@api/user';

interface IAccessContext {
  isPremium: boolean;
  getAccessStatus: VoidFunction;
  resetAccessStatus: VoidFunction;
}

const AccessContext = createContext<IAccessContext>({} as IAccessContext);

interface IFaqProviderProps {
  children: ReactNode;
}

export const AccessProvider: FC<IFaqProviderProps> = ({ children }) => {
  const [isPremium, setIsPremium] = useState<boolean>(false);

  const getAccessStatus = async () => {
    // const res = await getUserAPI();
    // setIsPremium(() => res['premium']);
    setIsPremium(() => true);
  };

  const resetAccessStatus = () => {
    setIsPremium(() => false);
  };

  const value: IAccessContext = useMemo(
    () => ({
      getAccessStatus,
      isPremium,
      resetAccessStatus,
    }),
    [isPremium],
  );

  return <AccessContext.Provider value={value}> {children} </AccessContext.Provider>;
};

AccessContext.displayName = 'AccessContext';

export const useAccess = () => {
  return useContext(AccessContext);
};
