export interface Wifi {
  /**
   * @type string
   *
   * The BSSID of the currently connected network.
   */
  bssid: string;

  /**
   * @type 0 to 100
   *
   * Relative signal quality of the current connection.
   */
  signal: number;

  /**
   * @type 1 to 14
   *
   * The current WiFi channel.
   */
  channel: number;
}
