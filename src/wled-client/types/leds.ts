export interface Leds {
  /**
   * @type boolean
   *
   * true if the light supports color temperature control (available since 0.13.0, deprecated, use info.leds.lc)
   */
  cct?: boolean;

  /**
   * @type 1 to 1200
   *
   * Total LED count.
   */
  count?: number;

  /**
   * @type 0 to 255
   *
   * Current frames per second. (available since 0.12.0)
   */
  fps?: number;

  /**
   * @type 0 to 65000
   *
   * Current LED power usage in milliamps as determined by the ABL. 0 if ABL is disabled.
   */
  pwr?: number;

  /**
   * @type 0 to 65000
   *
   * Maximum power budget in milliamps for the ABL. 0 if ABL is disabled.
   */
  maxpwr?: number;

  /**
   * @type byte
   *
   * Maximum number of segments supported by this version.
   */
  maxseg?: number;

  /**
   * @type byte
   *
   * Logical AND of all active segment's virtual light capabilities
   */
  lc?: number;

  /**
   * @type byte array
   *
   * Per-segment virtual light capabilities
   */
  seglc?: number;
}
