export const exerciseOptions = {

  method: 'GET',

  headers: {

   'x-rapidapi-host': 'exercisedb.p.rapidapi.com' ,
   'x-rapidapi-key': '361817c644msh0c88376ac1e3143p12fe0ajsnc97f56b3499f'
  }
}
export const youtubeOptions = {
  method: 'GET',

  headers: {
    

    'x-rapidapi-key': '361817c644msh0c88376ac1e3143p12fe0ajsnc97f56b3499f',

   'x-rapidapi-host': 'youtube-search-and-download.p.rapidapi.com' 




  }
};

export const fetchData= async(url,options)=>{
    const response = await fetch(url,options);
    const data = await response.json ();
    return data;



}
