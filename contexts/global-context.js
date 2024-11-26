class GlobalContext {
  constructor() {
    this.context = {};
  }

  set(key, value) {
    this.context[key] = value;
  }

  get(key) {
    return this.context[key];
  }
}

module.exports = GlobalContext;
