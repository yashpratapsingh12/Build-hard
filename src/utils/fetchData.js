export const exerciseOptions = {
  //   method: 'GET',
 
  //   headers: {
  //       'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
        
  //     'X-RapidAPI-Key': 'b014123293mshae648029c50c277p136984jsnb80d71732f1f',
  //   }
  // }
  method: 'GET',

  headers: {
    'X-RapidAPI-Key': 'b014123293mshae648029c50c277p136984jsnb80d71732f1f',
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
  }
}
export const youtubeOptions = {
  method: 'GET',

  headers: {
    'X-RapidAPI-Key': 'b014123293mshae648029c50c277p136984jsnb80d71732f1f',
    'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
  }
};

export const fetchData= async(url,options)=>{
    const response = await fetch(url,options);
    const data = await response.json ();
    return data;



}