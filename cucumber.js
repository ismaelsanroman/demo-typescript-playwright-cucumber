module.exports = {
    default: {
      require: ["./step-definitions/*_steps.ts"],
      requireModule: ["ts-node/register"],
      format: ["progress"],
      worldParameters: {
        timeout: 20000
      }
    }
  };
  