/*
    * This Ccustom function is used to check the open api base path follows the Standard Enterprise Format
    * Standard Enterprise Format - /{version}/{COSA}/{program (optional)}/{API name} or /{version}/{COSA}/{API name}
*/

let dataModule = require('./test-data.js');

module.exports = (inputJson) => { 

    
    let VERSION_DATA = dataModule.VERSIONS;
    let COSA_DATA = dataModule.COSA;
    let API_NAME_DATA = dataModule.API_NAME;

    
    let VERSION_NAME  = "";
    let COSA_NAME  = "";
    let API_NAME = "";
    let RETURN_MESSAGE = "";
    let SEGMENT_COUNT = 0;
    let DUPLICATE_STRING = "";


    (inputJson.basePath.split("/")).forEach(function(DATA,i){
        SEGMENT_COUNT++;
        
        if(i == 1)
        VERSION_NAME  =  DATA;

        if(i == 2)
        COSA_NAME  =  DATA;

        if(i > 2){
            // Check if the API name / title contains "API" or "service"
            /*if(API_NAME_DATA.some(substring=>DATA.includes(substring))){
                API_NAME  =  DATA;
            }*/
            API_NAME  =  DATA;
        }

        // Checking any duplicate words are present or not
        if((inputJson.basePath.match(new RegExp(DATA,'g')) || []).length > 1){
            DUPLICATE_STRING = DATA;
        }
    })

    // Check the base path contains the standard enterprise format
    if(SEGMENT_COUNT <= 3){
        RETURN_MESSAGE = RETURN_MESSAGE + 'Base path should follow hierarchical pattern after a version number to represent where in the business taxonomy this API should live \n';
    }

    // Check if base path only includes three segment (version, cosa, api name) instead of four (version, cosa, program, api name)
    if(SEGMENT_COUNT == 4){
        RETURN_MESSAGE = RETURN_MESSAGE + 'If no program included this should be for limited cases where your API is used wider and across two or more programs. \n';
    }

    // Check if base path first argument is a version should match something like /v[0-9]+
    if(!(/^v[0-9]$/.test(VERSION_NAME))){
        RETURN_MESSAGE = RETURN_MESSAGE + "Base path first argument should always be the major version v[x] where X is your major version whole number \n";
    }

    // Check if the base path second argument is COSA
    if(!(COSA_DATA.includes(COSA_NAME)) && (COSA_NAME != "")){
        RETURN_MESSAGE = RETURN_MESSAGE + "Base path second argument should always be your COSA, for ENT SGB that is almose always 'enterprise', other valid COSAs are 'bank', 'insurance', 'pnc', 'lifego', etc \n";
    }
    
    // Check if the API name / title contains "API" or "service"
    if(API_NAME_DATA.some(substring=>API_NAME.includes(substring))){
        RETURN_MESSAGE = RETURN_MESSAGE + "The API title does not need to include the 'API' or 'service'  terms in most cases, please consider sticking to a business or domain driven design name for this API in title case format. \n";
    }

    // Check if API name is underscore word (ex: member_assessment)
    if(API_NAME.includes("_")){
        RETURN_MESSAGE = RETURN_MESSAGE + "Please consider sticking to a business or domain driven design name for this API in title case format. \n";
    }

    // Check the base path having any duplicate word
    if(DUPLICATE_STRING != ""){
        RETURN_MESSAGE = RETURN_MESSAGE + "Duplicate use of " + DUPLICATE_STRING + "\n";
    }
    
    // Check the description is empty or under 10 words
    if(inputJson.info.description == "" || inputJson.info.description.split(" ").length <= 10){
        RETURN_MESSAGE = RETURN_MESSAGE + "Please include business description and purpose of this API, also include any related WIKI links for additional context. \n";
    }

    if(RETURN_MESSAGE != "")
    return [{ message: RETURN_MESSAGE }];

  };