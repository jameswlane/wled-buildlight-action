type ComputeRange<N extends number, Result extends unknown[] = []> = Result['length'] extends N
  ? Result
  : ComputeRange<N, [...Result, Result['length']]>;

export type ColorChannel = ComputeRange<256>[number];
export type RGB = [ColorChannel, ColorChannel, ColorChannel];
