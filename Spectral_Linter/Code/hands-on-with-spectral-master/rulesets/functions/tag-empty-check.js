//Check the tags property is empty or not
module.exports = (tags) => { // eslint-disable-line consistent-return
    if(tags.length == 0){
      return [{ message: 'Tags must have a non empty array' }];
    }
  };