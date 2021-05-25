
const key = 'w2QrElL4pZZ70MTwdThv';
const url = `https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${key}/scores/`;

const { score } = this.game.global;

const data = { user: name, score };

const postData = async (url = '', data = {}) => {
  // Default options are marked with *
  try {
    const response = await fetch(url, {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      mode: 'cors', // no-cors, *cors, same-origin
      cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      credentials: 'same-origin', // include, *same-origin, omit
      headers: {
        'Content-Type': 'application/json',
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      redirect: 'follow', // manual, *follow, error
      referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      body: JSON.stringify(data), // body data type must match "Content-Type" header
    });

    return response.json(); // parses JSON response into native JavaScript objects
  } catch (error) {
    throw new Error(`API could not be reached: ${error}`);
  }
};

const getData = async (url = '') => {
  // Default options are marked with *
  const response = await fetch(url, {
    mode: 'cors', // no-cors, *cors, same-origin
  });
  return response.json(); // parses JSON response into native JavaScript objects
};

export default { postData, getData };
