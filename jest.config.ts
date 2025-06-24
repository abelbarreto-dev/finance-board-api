import {createDefaultPreset} from "ts-jest";

const tsJestTransformCfg = createDefaultPreset().transform;

/** @type {import("jest").Config} **/
module.exports = {
  testEnvironment: "node",
  transform: {
    ...tsJestTransformCfg,
  },
  moduleNameMapper: {
    "^@Utils/(.*)$": "<rootDir>/Src/Utils/$1",
    "^@Exceptions/(.*)$": "<rootDir>/Src/Exceptions/$1",
  },
};
