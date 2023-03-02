import { Effects } from './effects';
import { Info } from './info';
import { Palettes } from './palettes';
import { State } from './state';

export interface Root {
  state: State;
  info: Info;
  effects: Effects;
  palettes: Palettes;
}
