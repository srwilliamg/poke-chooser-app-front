import { Injectable } from '@angular/core';
import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios';
import { defer } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CallApiService {

  constructor() {
    axios.defaults.baseURL = 'https://pokeapi.co/api/v2/pokemon';
    axios.interceptors.response.use(this.getResponse, this.rejectResponse);
  }

  private getResponse(response: AxiosResponse) {
    const { data: responseData } = response;
    // console.info('Intercept response: ', responseData);
    return responseData;
  }

  private rejectResponse(error: AxiosError) {
    const { code, message } = error;
    const messageError = { code, message };

    console.error('Intercept: ', messageError);

    if (!code && !message) return Promise.reject(new Error('Unknown api error'));

    return Promise.reject(messageError);
  }

  /**
   * callApi
   */
  public callApi<T>(endpoint: {
    method: string;
    url: string;
  }, data: { params?: object, data?: object }) {
    return defer(() => axios<T, T>({ ...endpoint, ...data } as AxiosRequestConfig));
  }
}
