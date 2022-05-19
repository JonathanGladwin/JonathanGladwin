import { createRulesetFunction } from '@stoplight/spectral-core';

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

  if (input.title !== value) {
    return [
      {
        message: `Value must equal ${value}.`,
      },
    ];
  }
});