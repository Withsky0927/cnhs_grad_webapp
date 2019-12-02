const path = require('path');
const getLoginForm = async (req, res) => {
  try {
    const title = 'Cavite National High School- Senior High School Graduate Tracer System';
    await res.render('index', { title: title });
  } catch (error) {
    await res.sendStatus(404);
  }
};
module.exports = {
  getLoginForm,
};
