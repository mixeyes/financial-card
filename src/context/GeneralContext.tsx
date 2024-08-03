import { IApiError } from '@app-types/api';
import { FC, ReactNode, createContext, useContext, useMemo, useState } from 'react';

interface IGeneralContext {
  isLoading: boolean;
  fetchData: (fetchFunction: (...props: any) => any) => <T = any>(props: any) => Promise<T>;
  error?: string;
  setError: (value: string) => void;
  info?: string;
  setInfo: (value: string) => void;
  success?: string;
  setSuccess: (value: string) => void;
  resetAllMessages: VoidFunction;
}

const GeneralContext = createContext<IGeneralContext>({} as IGeneralContext);

interface IGeneralProviderProps {
  children: ReactNode;
}
export const GeneralProvider: FC<IGeneralProviderProps> = ({ children }) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>();
  const [info, setInfo] = useState<string>();
  const [success, setSuccess] = useState<string>();

  const fetchData =
    (fetchFunction: (...funcProps: any) => any) =>
    async (...props: any[]) => {
      try {
        setIsLoading(true);
        const data = await fetchFunction(...props);
        if (data.status === 201) {
          setSuccess(data.data.message);
        }
        return data.data;
      } catch (err: unknown) {
        const { response } = err as IApiError;
        setError(response.data.message);
      } finally {
        setIsLoading(false);
      }
      return undefined;
    };

  const resetAllMessages = () => {
    setError(undefined);
    setInfo(undefined);
    setSuccess(undefined);
  };

  const value: IGeneralContext = useMemo(
    () => ({
      error,
      fetchData,
      info,
      isLoading,
      resetAllMessages,
      setError,
      setInfo,
      setSuccess,
      success,
    }),
    [isLoading, error, info, success],
  );
  return <GeneralContext.Provider value={value}>{children}</GeneralContext.Provider>;
};

GeneralContext.displayName = 'GeneralContext';

export const useGeneral = () => {
  return useContext(GeneralContext);
};
