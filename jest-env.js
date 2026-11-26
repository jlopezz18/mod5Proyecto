const { TestEnvironment } = require('jest-environment-node');

class CustomNodeEnvironment extends TestEnvironment {
  async setup() {
    await super.setup();
    this.global.Uint8Array = Uint8Array;
    this.global.ArrayBuffer = ArrayBuffer;
    this.global.Map = Map;
    this.global.Set = Set;
  }
}

module.exports = CustomNodeEnvironment;