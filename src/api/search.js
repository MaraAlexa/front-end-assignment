import APIService from './api';

export default async function getSearchResults(query) {
  if (query.length < 3) {
    return;
  }

  try {
    const data = await APIService.fetchAPI('/search');

    const filteredData = data.suggestions.filter(object => {
      const regex = new RegExp(query, 'gi');
      return object.searchterm.match(regex);
    });
    return filteredData;

  } catch(err) {
    console.log(err);
  }  
};  