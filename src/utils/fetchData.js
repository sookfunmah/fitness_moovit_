export const exerciseOptions = {
    method: 'GET',
    params: {limit: '25'},
    headers: {
      'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
      'X-RapidAPI-Key': "d23fc093c9mshc200b4314c35e36p10619bjsnd444df410e66"
    }
  };


export const fetchData = async (url,options) => {
    const response = await fetch(url,options)
    const data = await response.json()
    return data
}
