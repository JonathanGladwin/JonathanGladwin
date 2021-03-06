import { getLocationForJsonPath, JsonParserResult, parseWithPointers, trapAccess } from '@stoplight/json';
import { IParser } from './types';

export { JsonParserResult };

export const parseJson = (input: string): JsonParserResult<unknown> =>
  parseWithPointers(input, {
    ignoreDuplicateKeys: false,
    preserveKeyOrder: true,
  });

export const Json: IParser<JsonParserResult<unknown>> = {
  parse: parseJson,
  getLocationForJsonPath,
  trapAccess,
};
