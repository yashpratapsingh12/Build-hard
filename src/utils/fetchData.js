export const exerciseOptions = {

  method: 'GET',

  headers: {

   'x-rapidapi-host': 'exercisedb.p.rapidapi.com' ,
   'x-rapidapi-key': 'e9726a31aemsh7bbe54858538333p1ccfa7jsn4fc85a8cf509'
  }
}
export const youtubeOptions = {
  method: 'GET',

  headers: {
    

    'x-rapidapi-key': 'e9726a31aemsh7bbe54858538333p1ccfa7jsn4fc85a8cf509',

   'x-rapidapi-host': 'youtube-search-and-download.p.rapidapi.com' 




  }
};

export const fetchData= async(url,options)=>{
    const response = await fetch(url,options);
    const data = await response.json ();
    return data;



}