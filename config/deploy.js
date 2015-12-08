module.exports = function(deployTarget) {  
  return {
    pagefront: {
      app: 'dw-portfolio',
      key: process.env.PAGEFRONT_KEY
    }
  };
};
