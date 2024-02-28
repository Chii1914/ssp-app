export const fetchLetters = async (type, reviewed, region) => {
    const status = reviewed ? 'rev' : 'snrev';
    const url = `http://localhost:3000/api/cartas-${type}/${status}/${region}`;
    
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return await response.json();
    } catch (error) {
      console.error("Could not fetch the data: ", error);
      return [];
    }
  };