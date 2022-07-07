// The below database resource (https://rapidapi.com/justin-WFnsXH_t6/api/exercisedb)
// is free to every user for up to 500 requests a month
export const exerciseOptions = {
  method: "GET",
  headers: {
    // For security reasons, to run this key, you must make an account at the following link (https://rapidapi.com/justin-WFnsXH_t6/api/exercisedb) and copy the key
    // for 'X-RapidAPI-Key' after you make an account and subscribe to the API and put it into a folder called .env
    // In the .env folder you need to put REACT_APP_RAPID_API_KEY=(your key here). Stop the app from running
    // if you have it running, run it again with "npm start" to populate the key
    "X-RapidAPI-Key": process.env.REACT_APP_RAPID_API_KEY,
    "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
  },
};

export const youtubeOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": process.env.REACT_APP_RAPID_API_KEY,
    "X-RapidAPI-Host": "youtube-search-and-download.p.rapidapi.com",
  },
};

export const fetchData = async (url, options) => {
  const response = await fetch(url, options);
  const data = await response.json();

  return data;
};
