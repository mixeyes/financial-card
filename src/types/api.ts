import { AxiosError } from 'axios';

export type IAPIErrorResponse = AxiosError<IError>;

export interface APIResponse<T> {
  data: T;
  meta: MetaData;
}

export interface MetaData {
  totalCount?: number;
  totalGain?: number;
  // user?: IUser;
}

export interface IError {
  message: string;
  details?: ErrorDetail[];
}

export interface IApiError<T = IError> {
  response: {
    data: T;
    status: number;
  };
}

export interface ErrorDetail {
  field: string;
  message: string;
}
