'use strict';


module.exports = function (err, response) {
  let msg = err.message.toLowerCase();
  switch(true) {
  case msg.includes('not found'):
    return response.status(404).send(`${err.name}: ${err.message}`);
  default: return response.status(500).send(`${err.name}: ${err.message}`);
  }
};
