const Score = () => {
  const key = 'w2QrElL4pZZ70MTwdThv';
  const url = `https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${key}/scores/`;

  const postData = async (data = {}) => {
    try {
      const response = await fetch(url, {
        method: 'POST',
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: {
          'Content-Type': 'application/json',
        },
        redirect: 'follow',
        referrerPolicy: 'no-referrer',
        body: JSON.stringify(data),
      });

      return response.json();
    } catch (error) {
      throw new Error(`API could not be reached: ${error}`);
    }
  };

  const getData = async () => {
    try {
      const response = await fetch(url, {
        mode: 'cors',
      });
      const data = await response.json();
      return data.result;
    } catch (error) {
      throw new Error(error);
    }
  };


  return {
    postData, getData,
  };
};

export default Score;
