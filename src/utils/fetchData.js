export const exerciseOptions = {
  //   method: 'GET',
 
  //   headers: {
  //       'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
        
  //     'X-RapidAPI-Key': 'b014123293mshae648029c50c277p136984jsnb80d71732f1f',
  //   }
  // }
  method: 'GET',

  headers: {
    // 'X-RapidAPI-Key': 'b014123293mshae648029c50c277p136984jsnb80d71732f1f',
    // 'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
   'x-rapidapi-host': 'exercisedb.p.rapidapi.com' ,
   'x-rapidapi-key': 'e9726a31aemsh7bbe54858538333p1ccfa7jsn4fc85a8cf509'
  }
}
export const youtubeOptions = {
  method: 'GET',

  headers: {
    // 'X-RapidAPI-Key': 'b014123293mshae648029c50c277p136984jsnb80d71732f1f',

    // 'X-RapidAPI-Key': 'b014123293mshae648029c50c277p136984jsnb80d71732f1f',
    // 'X-RapidAPI-Key': 'b014123293mshae648029c50c277p136984jsnb80d71732f1f',
    // 'API-key':'AIzaSyDFOB31BkDuyaUiVH-cW5-_mwjg8z2q-24',

    'x-rapidapi-key': 'e9726a31aemsh7bbe54858538333p1ccfa7jsn4fc85a8cf509',

   'x-rapidapi-host': 'youtube-search-and-download.p.rapidapi.com' 



    // 'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
  }
};

export const fetchData= async(url,options)=>{
    const response = await fetch(url,options);
    const data = await response.json ();
    return data;



}