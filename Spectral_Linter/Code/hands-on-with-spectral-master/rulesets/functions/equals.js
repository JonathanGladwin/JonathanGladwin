//import the spectral core function
import { createRulesetFunction } from '@stoplight/spectral-core';

//Descripe the functionoptions present in ruleset
export default createRulesetFunction({
  input: null,
  options: {
    type: 'object',
    additionalProperties: false,
    properties: {
      value: true,
    },
    required: ['value'],
  },
}, (input, options) => {
  const { value } = options;

  //Check the info.title value is equal to the functionoptions value
  if (input.title !== value) {
    return [
      {
        message: `Value must equal ${value}.`,
      },
    ];
  }
});