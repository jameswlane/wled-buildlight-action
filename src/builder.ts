import core from '@actions/core';

import { Root } from './wled-client/types';
import { Effects } from './wled-client/types/effects';
import { Palettes } from './wled-client/types/palettes';

const validStatus = [
  "in_progress",
  "failure",
  "success",
  "cancelled",
  "neutral",
  "action_required",
  "timed_out",
]
export default function objectBuilder(status: string, palette: Palettes, effect: Effects): Root {
  const state = {};
  const info = {};
  let paletteDefault = 'Default';
  let effectDefault = 'Solid';

  if (!validStatus.includes(status)) {
    core.setFailed("Status was not valid");
  }

  switch (status) {
    case 'neutral':
    case 'in_progress':
      paletteDefault = (palette === undefined) ? 'Orangery' : palette;
      effectDefault = (effect === undefined) ? 'Breathe' : effect;
      break;

    case 'action_required':
    case 'timed_out':
    case 'failure':
      paletteDefault = (palette === undefined) ? 'Color 1' : palette;
      effectDefault = (effect === undefined) ? 'Blink' : effect;
      break;

    case 'success':
      paletteDefault = (palette === undefined) ? 'Forest' : palette;
      effectDefault = (effect === undefined) ? 'Dynamic' : effect;
      break;

    case 'cancelled':
      paletteDefault = (palette === undefined) ? 'Red Tide' : palette;
      effectDefault = (effect === undefined) ? 'Scan Dual' : effect;
      break;

    default:
      break;
  }

  return { state, info, effects: paletteDefault, palettes: effectDefault, };
}
