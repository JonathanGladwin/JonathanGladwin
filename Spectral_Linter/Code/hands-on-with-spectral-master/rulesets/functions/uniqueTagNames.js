//import the spectral core function
import { createRulesetFunction } from '@stoplight/spectral-core';

const NAME_PROPERTY = "name";

//Descripe the functionoptions present in ruleset
export default createRulesetFunction(
  {
    input: {
      type: "array",
      items: {
        type: "object",
        properties: {
          name: {
            type: "string",
          },
        },
      },
    },
    options: null,
  },
  (input, options, { path }) => { //input => given path value and options => functionoptions value for ruleset
    const seen = [];
    const results = [];

    const tagName = input[0][NAME_PROPERTY];
    
    //Find the duplicate values present in the tags property
    for (const type of input) {  
        
        if (seen.includes(type.name)) {
            results.push({
              message: `Duplicate tag name '${type.name}'`,
            });
          } else {
            seen.push(type.name);
          }
    }

    return results;
  },
);