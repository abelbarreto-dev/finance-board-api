import {createDefaultPreset} from "ts-jest";

const tsJestTransformCfg = createDefaultPreset().transform;

/** @type {import("jest").Config} **/
module.exports = {
  testEnvironment: "node",
  transform: {
    ...tsJestTransformCfg,
  },
  moduleNameMapper: {
    "^@Controllers/(.*)$": "<rootDir>/Src/Controllers/$1",
    "^@Dtos/(.*)$": "<rootDir>/Src/Dtos/$1",
    "^@Enums/(.*)$": "<rootDir>/Src/Enums/$1",
    "^@Exceptions/(.*)$": "<rootDir>/Src/Exceptions/$1",
    "^@Models/(.*)$": "<rootDir>/Src/Models/$1",
    "^@Repositories/(.*)$": "<rootDir>/Src/Repositories/$1",
    "^@Services/(.*)$": "<rootDir>/Src/Services/$1",
    "^@Utils/(.*)$": "<rootDir>/Src/Utils/$1",
    "^@MocksDtos/(.*)$": "<rootDir>/Tests/Mocks/Dtos/$1",
    "^@MocksModels/(.*)$": "<rootDir>/Tests/Mocks/Models/$1"
  },
};
