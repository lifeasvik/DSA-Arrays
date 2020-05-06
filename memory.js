class Memory {
  constructor() {
    this.memory = new Float64Array(1024);
    this.head = 0;
  }

  // Allocates the size for the array 
  allocate(size) {
    if (this.head + size > this.memory.length) {
      return null;
    }

    let start = this.head;

    this.head += size;
    return start;
  }

  // clears the array 
  free(ptr) { }

  // copys array ,itterate fwd and backwards
  copy(toIdx, fromIdx, size) {
    if (fromIdx === toIdx) {
      return;
    }

    if (fromIdx > toIdx) {
      // Iterate forwards
      for (let i = 0; i < size; i++) {
        this.set(toIdx + i, this.get(fromIdx + i));
      }
    } else {
      // Iterate backwards
      for (let i = size - 1; i >= 0; i--) {
        this.set(toIdx + i, this.get(fromIdx + i));
      }
    }
  }

  // gets position of the pointer in the array
  get(ptr) {
    return this.memory[ptr];
  }

  // sets the value of the pointer inside the array
  set(ptr, value) {
    this.memory[ptr] = value;
  }
}

module.exports = Memory;