import { Root } from './wled-client/types';
import { Effects } from './wled-client/types/effects';
import { Palettes } from './wled-client/types/palettes';

export function objectBuilder(status: string, palette: Palettes, effect: Effects): Root {
  const state = new Map();
  const info = new Map();

  return { state, info, palette, effect };
}
