import { Fs } from './fs';
import { Leds } from './leds';
import { Wifi } from './wifi';

export interface Info {
  /**
   * @type string
   *
   * Version name.
   */
  ver?: string;

  /**
   * @type uinit32
   *
   * Build ID (YYMMDDB, B = daily build index).
   */
  vid?: number;

  /**
   * @type object
   *
   * Contains info about the LED setup.
   */
  leds?: Leds;

  /**
   * @type boolean
   *
   * If true, an UI with only a single button for toggling sync should toggle receive+send, otherwise send only
   */
  str?: boolean;

  /**
   * @type string
   *
   * Friendly name of the light. Intended for display in lists and titles.
   */
  name?: string;

  /**
   * @type uint16
   *
   * The UDP port for realtime packets and WLED broadcast.
   */
  udpport?: number;

  /**
   * @type boolean
   *
   * If true, the software is currently receiving realtime data via UDP or E1.31.
   */
  live?: boolean;

  /**
   * @type string
   *
   * Info about the realtime data source
   */
  lm?: string;

  /**
   * @type string
   *
   * Realtime data source IP address
   */
  lip?: string;

  /**
   * @type -1 to 8
   *
   * Number of currently connected WebSockets clients. -1 indicates that WS is unsupported in this build.
   */
  ws?: number;

  /**
   * @type byte
   *
   * Number of effects included.
   */
  fxcount?: number;

  /**
   * @type uint16
   *
   * Number of palettes configured.
   */
  palcount?: number;

  /**
   * @type object
   *
   * Info about current signal strength
   */
  wifi?: Wifi;

  /**
   * @type object
   *
   * Info about the embedded LittleFS filesystem (since 0.11.0)
   */
  fs?: Fs;

  /**
   * @type -1 to 255
   *
   * Number of other WLED devices discovered on the network. -1 if Node discovery disabled. (since 0.12.0)
   */
  ndc?: number;

  /**
   * @type string
   *
   * Name of the platform.
   */
  arch?: string;

  /**
   * @type string
   *
   * Version of the underlying (Arduino core) SDK.
   */
  core?: string;

  /**
   * @type 0, 1, or 2
   *
   * Version of LwIP. 1 or 2 on ESP8266, 0 (does not apply) on ESP32. Deprecated, removal in 0.14.0
   */
  lwip?: number;

  /**
   * @type uint32
   *
   * Bytes of heap memory (RAM) currently available. Problematic if <10k.
   */
  freeheap?: number;

  /**
   * @type uint32
   *
   * Time since the last boot/reset in seconds.
   */
  uptime?: number;

  /**
   * @type uint16
   *
   * Used for debugging purposes only.
   */
  opt?: number;

  /**
   * @type string
   *
   * The producer/vendor of the light. Always WLED for standard installations.
   */
  brand?: string;

  /**
   * @type string
   *
   * The product name. Always FOSS for standard installations.
   */
  product?: string;

  /**
   * @type string
   *
   * The hexadecimal hardware MAC address of the light, lowercase and without colons.
   */
  mac?: string;

  /**
   * @type string
   *
   * The IP address of this instance. Empty string if not connected. (since 0.13.0)
   */
  ip?: number;
}
