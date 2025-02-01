 const API_KEY="e2e94c7a3d6fa42161fcbbf631922f61";
 const BASE_URL="https://api.themoviedb.org/3"; 

 export const getPopularMovies= async()=>{
    const response=await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`);
    const data=await response.json()
    return data.results
 };
 export const searchMovies = async (query) => {
   try {
     const response = await fetch(
       `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(query)}`
     );
 
     if (!response.ok) {
       throw new Error("Network response was not ok");
     }
 
     const data = await response.json();
     return data.results;
   } catch (error) {
     console.error("Error searching movies:", error);
     throw error;
   }
 };
 