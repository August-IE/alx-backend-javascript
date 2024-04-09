export default function appendToEachArrayValue(array, appendString) {
  const result = [];
  for (const idx in array) {
    if (Object.prototype.hasOwnProperty.call(array, idx)) {
      const value = appendString + array[idx];
      result.push(value);
    }
  }
  return result;
}
