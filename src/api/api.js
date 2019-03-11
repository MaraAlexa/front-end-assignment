const SuggestionService = {

  fetchAPI: async function(relativeEndpoint) {
    try {
      const serverUrl = 'http://localhost:3000';
      const res = await fetch(`${serverUrl}${relativeEndpoint}`);
      let data = await res.json();
      return data;
    } catch(err) {
      console.log(err);
    }  
  }
  
};

export default SuggestionService;