export interface Playlist {
  /**
   * Array of preset ID integers to be applied in this order.
   */
  ps?: number[];

  /**
   * Array of time each preset should be kept, in tenths of seconds. If only one integer is supplied, all presets will be kept for that time.Defaults to 10 seconds if not provided.
   */
  dur?: number[];

  /**
   * Array of time each preset should transition to the next one, in tenths of seconds. If only one integer is supplied, all presets will transition for that time. Defaults to the current transition time if not provided.
   */
  transition?: number;

  /**
   * How many times the entire playlist should cycle before finishing. Set to 0 for an indefinite cycle. Default to indefinite if not provided.
   */
  repeat?: number;

  /**
   * Single preset ID to apply after the playlist finished. Has no effect when an indefinite cycle is set. If not provided, the light will stay on the last preset of the playlist.
   */
  end?: number;
}
