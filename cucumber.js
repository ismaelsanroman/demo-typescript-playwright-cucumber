module.exports = {
    default: {
      require: ["./step-definitions/*.ts"],
      requireModule: ["ts-node/register"],
      format: ["progress"],
      worldParameters: {
        timeout: 20000
      }
    }
  };
  