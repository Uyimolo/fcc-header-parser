const headerParser = (request, response) => {
  // gets users language, browser and ip address
  const preferredLanguage = request.headers['accept-language'];
  const browser = request.headers['user-agent'];
  const ipAddress = request.connection.remoteAddress;

  // response in object format
  const userInfo = {
    ipaddress: ipAddress,
    software: browser,
    language: preferredLanguage,
  };

  // returns success status and response object in json format
  response.status(200).json(userInfo);
};

module.exports = headerParser;
