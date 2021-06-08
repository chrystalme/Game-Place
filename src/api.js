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
    const response = await fetch(url);
    return response.json(); // parses JSON response into native JavaScript objects
  };

  const returnData = async () => {
    const result = document.getElementById('result');
    result.innerHTML = '';
    result.style.display = 'grid';
    const rData = await this.getData(url);
    const data = this.sortData(rData.result);
    const record = data.slice(0, 10);
    for (let i = 0; i < record.length; i += 1) {
      const pTag = document.createElement('span');
      pTag.innerHTML = `${i + 1} - ${record[i].user} : ${record[i].score}`;
      result.appendChild(pTag);
    }
  };


  return {
    postData, getData, returnData,
  };
};

export default Score;
