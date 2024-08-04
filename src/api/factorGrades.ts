import { IRatings } from '@app-types/ratings';
import { ENDPOINTS } from './endpoints';
import { axiosInstance } from './instance';

export const get3mGradesAPI = async (): Promise<Record<string, boolean>> => {
  const { data } = await axiosInstance.get(`${ENDPOINTS.FactorGrades3Mago}`);

  return data;
};

export const get6mGradesAPI = async (): Promise<Record<string, boolean>> => {
  const { data } = await axiosInstance.get(`${ENDPOINTS.FactorGrades6Mago}`);

  return data;
};

export const getCurrentGradesAPI = async (): Promise<Record<string, boolean>> => {
  const { data } = await axiosInstance.get(`${ENDPOINTS.FactorGradesNow}`);

  return data;
};

export const getQuantRankingAPI = async (): Promise<Record<string, boolean>> => {
  const { data } = await axiosInstance.get(`${ENDPOINTS.QuantRanking}`);

  return data;
};

export const getRatingSummaryAPI = async (): Promise<IRatings> => {
  const { data } = await axiosInstance.get(`${ENDPOINTS.RatingSummary}`);

  return data;
};
