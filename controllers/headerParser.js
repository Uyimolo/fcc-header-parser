const headerParser = (request, response) => {
  const preferredLanguage = request.headers['accept-language'];
  const browser = request.headers['user-agent'];
  const ipAddress = request.connection.remoteAddress;

  const userInfo = {
    ipaddress: ipAddress,
    software: browser,
    language: preferredLanguage,
  };

  response.status(200).json(userInfo);
};

module.exports = headerParser;
