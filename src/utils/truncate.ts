export function Truncate(str: string) {
  return str.length > 240 ? str.substring(0, 140) + '...' : str
}
