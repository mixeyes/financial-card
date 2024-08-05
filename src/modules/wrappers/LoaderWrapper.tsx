import { axiosInstance } from '@api/instance';
import { FC, ReactNode, useEffect, useState } from 'react';

interface ILoaderWrapper {
  children: ReactNode;
}

const useAxiosLoader = () => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const inc = (mod: number) => setCounter((c) => c + mod);

    const handleRequest = (config: any) => (inc(1), config);
    const handleResponse = (response: any) => (inc(-1), response);
    const handleError = (error: any) => (inc(-1), Promise.reject(error));

    // add request interceptors
    const reqInterceptor = axiosInstance.interceptors.request.use(handleRequest, handleError);
    // add response interceptors
    const resInterceptor = axiosInstance.interceptors.response.use(handleResponse, handleError);
    return () => {
      // remove all intercepts when done
      axiosInstance.interceptors.request.eject(reqInterceptor);
      axiosInstance.interceptors.response.eject(resInterceptor);
    };
  }, []);

  return counter > 0;
};
export const LoaderWrapper: FC<ILoaderWrapper> = ({ children }) => {
  const loading = useAxiosLoader();
  const showAppLoader = () => {
    const element = document.querySelector('.app-loader');
    if (element) {
      element.setAttribute('hidden', 'false');
      element.classList.add('block');
    }
  };

  const hideAppLoader = () => {
    const element = document.querySelector('.app-loader');
    if (element) {
      element.setAttribute('hidden', 'true');
      element.classList.remove('block');
    }
  };

  useEffect(() => {
    window.addEventListener('load', hideAppLoader);
  }, []);

  useEffect(() => {
    if (loading) {
      showAppLoader();
    } else {
      hideAppLoader();
    }
  }, [loading]);

  return <>{children}</>;
};
