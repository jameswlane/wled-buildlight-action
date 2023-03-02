export interface Udpn {
  /**
   * @type boolean
   *
   * Send WLED broadcast (UDP sync) packet on state change
   */
  send?: boolean;

  /**
   * @type boolean
   *
   * Receive broadcast packets
   */
  recv?: boolean;

  /**
   * @type boolean
   *
   * Don't send a broadcast packet (applies to just the current API call). Not included in state response.
   */
  nn?: boolean;
}
