import {API_KEY, API_URL, URL_COMICS , HASH} from './config';



const getAllCategories = async () => {
    const response = await fetch(API_URL + URL_COMICS + API_KEY + HASH + '&limit=50');
   
 return  await response.json();
}

export { getAllCategories } ;
