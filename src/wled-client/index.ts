import axios, { AxiosPromise } from 'axios';
import { Root } from './types';
import { State } from './types/state';
import { Info } from './types/info';
import { Effects } from './types/effects';
import { Palettes } from './types/palettes';

export class WebClient {
  url: string;
  private api: string;

  constructor(url: string) {
    this.url = url;
    this.api = `http://${url}/json`;
  }

  async getState(): AxiosPromise<State> {
    const { data } = await axios.get(`${this.api}/state`);
    return data;
  }

  async getInfo(): AxiosPromise<Info> {
    const { data } = await axios.get(`${this.api}/info`);
    return data;
  }

  async getEffects(): AxiosPromise<Effects> {
    const { data } = await axios.get(`${this.api}/eff`);
    return data;
  }

  async getPalettes(): AxiosPromise<Palettes> {
    const { data } = await axios.get(`${this.api}/pal`);
    return data;
  }

  async exec(data: Root): Promise<void> {
    await axios.post(this.api, data);
  }
}
