import { Nightlight } from './nightlight';
import { Playlist } from './platlist';
import { Seg } from './seg';
import { Udpn } from './udpn';
import { ColorChannel } from './utilities';

export interface State {
  /**
   * @type boolean
   *
   * On/Off state of the light
   */
  on?: boolean;

  /**
   * @type 0 to 255
   *
   * Brightness of the light.
   * If on is false, contains last brightness when light was on (aka brightness when on is set to true.
   * Setting bri to 0 is supported but it is recommended to use the range 1-255 and use on: false to turn off.
   * The state response will never have the value 0 for bri.
   */
  bri?: ColorChannel;

  /**
   * @type 0 to 255
   *
   * Duration of the crossfade between different colors/brightness levels.
   * One unit is 100ms, so a value of 4 results in atransition of 400ms.
   */
  transition?: ColorChannel;

  /**
   * @type 0 to 255
   *
   * Similar to transition, but applies to just the current API call.
   * Not included in state response.
   */
  tt?: ColorChannel;

  /**
   * @type -1 to 65535
   *
   * ID of currently set preset. 1~17~ can be used to iterate through presets 1-17.
   */
  ps?: number;

  /**
   * @type 1 to 16 (250 in 0.11)
   *
   * Save current light config to specified preset slot.
   * Not included in state response.
   */
  psave?: number;

  /**
   * @type -1 to 0
   *
   * ID of currently set playlist.
   * For now, this sets the preset cycle feature, -1 is off and 0 is on.
   */
  pl?: number;

  /**
   * @type object
   *
   * Nightlight
   */
  nl?: Nightlight;

  /**
   * @type object
   *
   * UDPN
   */
  udpn?: Udpn;

  /**
   * @type boolean
   *
   * If set to true in a JSON POST command, the response will contain the full JSON state object.
   * Not included in state response.
   */
  v?: boolean;

  /**
   * @type boolean
   *
   * If set to true, device will reboot immediately.
   * Not included in state response.
   */
  rb?: boolean;

  /**
   * @type boolean
   *
   * If set to true, enters realtime mode and blanks the LEDs.
   * The realtime timeout option does not have an effect when this command is used,
   * WLED will stay in realtime mode until the state (color/effect/segments, excluding brightness) is changed.
   * It is expected that {"live":false} is sent once live data sending is terminated.
   * Not included in state response.
   */
  live?: boolean;

  /**
   * @type 0, 1, or 2
   *
   * Live data override. 0 is off, 1 is override until live data ends, 2 is override until ESP reboot.
   */
  lor?: 0 | 1 | 2;

  /**
   * @type uint32
   *
   * Set module time to unix timestamp.
   * Not included in state response.
   */
  time?: number;

  /**
   * @type 0 to info.leds.maxseg-1
   *
   * Main Segment
   */
  mainseg?: number;

  /**
   * @type Array of segment objects
   *
   * Segments are individual parts of the LED strip.
   * In 0.9.0 this will enables running different effects on differentparts of the strip.
   */
  seg?: Seg[];

  /**
   * @type object
   *
   * Custom preset playlists. Not included in state response (available since 0.11.0)
   */
  playlist?: Playlist;

  /**
   * @type uint32
   *
   * Sets timebase for effects. Not reported.
   */
  tb?: number;
}
