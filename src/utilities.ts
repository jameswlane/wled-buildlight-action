export function checkValue(
  name = 'value',
  value: number,
  min = 1,
  max = 255
): Error | boolean {
  if (value > max || value < min) {
    throw new Error(
      `${name} must be between ${min} and ${max}. You provided ${value}.`
    )
  } else return true
}
