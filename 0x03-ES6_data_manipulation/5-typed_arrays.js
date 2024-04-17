export default function createInt8TypedArray(length, position, value) {
  if (position >= length) {
    throw new Error('Position is outside the range of the array');
  }

  const buffer = new ArrayBuffer(length);
  const view = new DataView(buffer);

  view.setUint8(position, value);

  return view;
}
