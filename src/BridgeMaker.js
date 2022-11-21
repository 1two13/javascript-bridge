const BridgeMaker = {
  makeBridge(size, generateRandomNumber) {
    const bridge = [];
    for (let i = 1; i <= size; i++) {
      const random = String(generateRandomNumber());
      if (random === '1') bridge.push('U');
      else bridge.push('D');
    }

    return bridge;
  },
};

module.exports = BridgeMaker;
