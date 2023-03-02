export interface Seg {
  /**
   * @type 0 to info.maxseg -1
   *
   * Zero-indexed ID of the segment. May be omitted, in that case the ID will be inferred from the order of the segment objects in the seg array.
   */
  id?: number;

  /**
   * @type 0 to info.leds.count -1
   *
   * LED the segment starts at.
   */
  start?: number;

  /**
   * @type 0 to info.leds.count
   *
   * LED the segment stops at, not included in range. If stop is set to a lower or equal value than start (setting to 0 is recommended), the segment is invalidated and deleted.
   */
  stop?: number;

  /**
   * @type 0 to info.leds.count
   *
   * Length of the segment (stop - start). stop has preference, so if it is included, len is ignored.
   */
  len?: number;

  /**
   * @type 0 to 255
   *
   * Grouping (how many consecutive LEDs of the same segment will be grouped to the same color)
   */
  grp?: number;

  /**
   * @type 0 to 255
   *
   * Spacing (how many LEDs are turned off and skipped between each group)
   */
  spc?: number;

  /**
   * @type -len+1 to len
   *
   * Offset (how many LEDs to rotate the virtual start of the segments, available since 0.13.0)
   */
  of?: number;

  /**
   * @type array of colors
   *
   * Array that has up to 3 color arrays as elements, the primary, secondary (background) and tertiary colors of the segment. Each color is an array of 3 or 4 bytes, which represent an RGB(W) color.
   */
  col?: number;

  /**
   * @type 0 to info.fxcount -1
   *
   * ID of the effect or ~ to increment, ~- to decrement, or r for random.
   */
  fx?: number;

  /**
   * @type 0 to 255
   *
   * Relative effect speed. ~ to increment, ~- to decrement. ~10 to increment by 10, ~-10 to decrement by 10.
   */
  sx?: number;

  /**
   * @type 0 to 255
   *
   * Effect intensity. ~ to increment, ~- to decrement. ~10 to increment by 10, ~-10 to decrement by 10.
   */
  ix?: number;

  /**
   * @type 0 to info.palcount -1
   *
   * ID of the color palette or ~ to increment, ~- to decrement, or r for random.
   */
  pal?: number;

  /**
   * @type boolean
   *
   * true if the segment is selected. Selected segments will have their state (color/FX) updated by APIs that don't support segments (e.g. UDP sync, HTTP API). If no segment is selected, the first segment (id:0) will behave as if selected. WLED will report the state of the first (lowest id) segment that is selected to APIs (HTTP, MQTT, Blynk...), or mainseg in case no segment is selected and for the UDP API. Live data is always applied to all LEDs regardless of segment configuration.
   */
  sel?: boolean;

  /**
   * @type boolean
   *
   * Flips the segment, causing animations to change direction.
   */
  rev?: boolean;

  /**
   * @type boolean
   *
   * Turns on and off the individual segment. (available since 0.10.0)
   */
  on?: number;

  /**
   * @type 0 to 255
   *
   * Sets the individual segment brightness (available since 0.10.0)
   */
  bri?: number;

  /**
   * @type boolean
   *
   * Mirrors the segment (available since 0.10.2)
   */
  mi?: number;

  /**
   * @type 0 to 255 or 1900 to 10091
   *
   * White spectrum color temperature (available since 0.13.0)
   */
  cct?: number;

  /**
   * @type BBBGGGRRR: 0 - 100100100
   * @type 20bbbtttt: 200002700 - 201006500
   *
   * Loxone RGB value for primary color. Each color (RRR,GGG,BBB) is specified in the range from 0 to 100%.
   * Loxone brightness and color temperature values for primary color. Brightness bbb is specified in the range 0 to 100%. tttt defines the color temperature in the range from 2700 to 6500 Kelvin. (available since 0.11.0, not included in state response)
   */
  lx?: number;

  /**
   * @type BBBGGGRRR: 0 - 100100100
   * @type 20bbbtttt: 200002700 - 201006500
   *
   * Loxone RGB value for secondary color. Each color (RRR,GGG,BBB) is specified in the range from 0 to 100%.
   * Loxone brightness and color temperature values for secondary color. Brightness bbb is specified in the range 0 to 100%. tttt defines the color temperature in the range from 2700 to 6500 Kelvin. (available since 0.11.0, not included in state response)
   */
  ly?: number;

  /**
   * @type array
   *
   * Individual LED control. Not included in state response (available since 0.10.2)
   */
  i?: number;

  /**
   * @type boolean
   *
   * freezes/unfreezes the current effect
   */
  frz?: number;

  /**
   * @type 0 to 4 [map1D2D.count]
   *
   * Setting of segment field 'Expand 1D FX'. (0: Pixels, 1: Bar, 2: Arc, 3: Corner)
   */
  m12?: number;

  /**
   * @type 0 to 3
   *
   * Setting of the sound simulation type for audio enhanced effects. (0: 'BeatSin', 1: 'WeWillRockYou', 2: '10_3', 3: '14_3') (as of 0.14.0-b1, there are these 4 types defined)
   */
  si?: number;
}
