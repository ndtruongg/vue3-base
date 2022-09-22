export default ({ next, to }) => {
  console.log(to.name);

  return next();
};
