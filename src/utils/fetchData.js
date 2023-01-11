export const exerciseOptions =  {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': "9b70967c55msh66e749aab3c318ap12fe17jsna07c3d0765e9" || process.env.REACT_APP_RAPID_API_KEY,
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
  }
};


export const fetchData = async (url, options) => {
    const response = await fetch(url, options);
    const data = await response.json();
    return data;
}