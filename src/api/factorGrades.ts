import { IRatings } from '@app-types/ratings';
import { T3MGrades, T6MGrades, TGrades } from '@app-types/grades';
import { ENDPOINTS } from './endpoints';
import { axiosInstance } from './instance';
// import { GRADES_3M_MOCK, GRADES_6M_MOCK, GRADES_NOW_MOCK } from '@constants/grades';
// import { RATINGS } from '@constants/ratings';
// import { RANKING_MOCK } from '@constants/ranking';
import { IQuantRankings } from '@app-types/ranking';

export const get3mGradesAPI = async (): Promise<T3MGrades> => {
  const { data } = await axiosInstance.get(`${ENDPOINTS.FactorGrades3Mago}`);
  return data;
  // return GRADES_3M_MOCK;
};

export const get6mGradesAPI = async (): Promise<T6MGrades> => {
  const { data } = await axiosInstance.get(`${ENDPOINTS.FactorGrades6Mago}`);
  return data.data;
  // return GRADES_6M_MOCK.data;
};

export const getCurrentGradesAPI = async (): Promise<TGrades> => {
  const { data } = await axiosInstance.get(`${ENDPOINTS.FactorGradesNow}`);
  return data;
  // return GRADES_NOW_MOCK;
};

export const getQuantRankingAPI = async (): Promise<IQuantRankings> => {
  const { data } = await axiosInstance.get(`${ENDPOINTS.QuantRanking}`);
  return data;
  // return RANKING_MOCK;
};

export const getRatingSummaryAPI = async (): Promise<IRatings> => {
  const { data } = await axiosInstance.get(`${ENDPOINTS.RatingSummary}`);
  return data;
  // return RATINGS;
};
