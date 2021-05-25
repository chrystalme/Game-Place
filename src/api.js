const score = () => {
  const key = 'w2QrElL4pZZ70MTwdThv';
  const url = `https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${key}/scores/`;
  const data = {};

  const postData = async () => {
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
      return response.json();
    } catch (error) {
      throw new Error(error);
    }
  };

  const setName = (name) => {
    data.user = name;
  };

  const setScore = (score) => {
    data.score = score;
  };
  return {
    postData, getData, setName, setScore,
  };
};

export default score;
