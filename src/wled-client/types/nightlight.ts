export interface Nightlight {
  /**
   * @type boolean
   *
   * Nightlight currently active
   */
  on?: boolean;

  /**
   * @type 1 to 255
   *
   * Duration of nightlight in minutes
   */
  dur?: number;

  /**
   * @type 0 to 3
   *
   * Nightlight mode (0: instant, 1: fade, 2: color fade, 3: sunrise) (available since 0.10.2)
   */
  mode?: 0 | 1 | 2 | 3;

  /**
   * @type 0 to 255
   *
   * Target brightness of nightlight feature
   */
  tbri?: number;

  /**
   * @type -1 to 15300
   *
   * Remaining nightlight duration in seconds, -1 if not active. Only in state response, can not be set.
   */
  rem?: number;
}
