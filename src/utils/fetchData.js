export const exerciseOptions = {
    method: 'GET',
    params: {limit: '25'},
    headers: {
      'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
      'X-RapidAPI-Key': "X"
      
    }
  };

export const fetchData = async (url,options) => {
    const response = await fetch(url,options)
    const data = await response.json()
    return data
}

