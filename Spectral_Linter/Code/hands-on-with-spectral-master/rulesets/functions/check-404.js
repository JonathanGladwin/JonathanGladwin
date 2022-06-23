module.exports = (responseObjects) => { // eslint-disable-line consistent-return
    /**
     * Loop through the response objects
     */
    const okOrDefault = Object.keys(responseObjects)
      .filter((key) => key.match(/404/));
  
    if (okOrDefault.length === 0) {
      return [{ message: 'Both 404 operations and default are missing' }];
    }
  };