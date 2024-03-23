const apiDomain = process.env.NEXT_PUBLIC_API_DOMAIN || null;



// To fetch properties
async function fetchProperties() {
    try {
      //Handle the case where the domaine is not available yet
      if(!apiDomain){
        return [];
      };

      const res = await fetch(`${apiDomain}/properties`);
  
      if(!res.ok){
        throw new Error("Failed to fetch data");
      }
  
      return res.json();
    } catch (error) {
      console.log(error);
      return [];
    }
};

export { fetchProperties };