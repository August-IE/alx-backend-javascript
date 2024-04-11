export default class Airport {
// Initializes an Airport
  constructor(name, code) {
    this._name = name;
    this._code = code;
  }

  // Implementing getter & setter methods
  get name() {
    return this._name;
  }

  set name(value) {
    this._name = value;
  }

  get code() {
    return this._code;
  }

  set code(value) {
    this._code = value;
  }

  // Gets a string representation of the Airpirt
  get [Symbol.toStringTag]() {
    return this._code;
  }
}
