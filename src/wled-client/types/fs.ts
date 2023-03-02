export interface Fs {
  /**
   * @type uint32
   *
   * Estimate of used filesystem space in kilobytes
   */
  u?: number;

  /**
   * @type uint32
   *
   * Total filesystem size in kilobytes
   */
  t?: number;

  /**
   * @type uint32
   *
   * Unix timestamp for the last modification to the presets.json file. Not accurate after boot or after using /edit
   */
  pmt?: number;
}
