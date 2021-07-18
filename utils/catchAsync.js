// This is to catch errors in Async functions.
module.exports = (func) => {
  return (req, res, next) => {
    func(req, res, next).catch(next);
  };
};
