export default class HolbertonCourse {
  constructor(name, length, students) {
    this._name = name;
    this._length = length;
    this._students = Array.isArray(students) ? students : [];

    // Type verification for name
    if (typeof this._name !== 'string') {
      throw new TypeError('Name must be a string');
    }
    // Type verification for length
    if (typeof this._length !== 'number' || Number.isNaN(this._length)) {
      throw new TypeError('Length must be a number');
    }
    // Type verification for students
    if (!Array.isArray(this._students)) {
      throw new TypeError('Students must be an array');
    }
    for (const student of this._students) {
      if (typeof student !== 'string') {
        throw new TypeError('Each student must be a string');
      }
    }
  }

  // Getter and setter for name
  get name() {
    return this._name;
  }

  set name(value) {
    if (typeof value !== 'string') {
      throw new TypeError('Name must be a string');
    }
    this._name = value;
  }

  // Getter and setter for length
  get length() {
    return this._length;
  }

  set length(value) {
    if (typeof value !== 'number' || Number.isNaN(value)) {
      throw new TypeError('Length must be a number');
    }
    this._length = value;
  }

  // Getter and setter for students
  get students() {
    return this._students;
  }

  set students(value) {
    if (!Array.isArray(value)) {
      throw new TypeError('Students must be an array');
    }
    for (const student of value) {
      if (typeof student !== 'string') {
        throw new TypeError('Each student must be a string');
      }
    }
    this._students = value;
  }
}
