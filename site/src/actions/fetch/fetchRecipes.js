const fetchRecipes = async () => {
  const result = await fetch('/api/recipes');
  return await result.json();
};

export default fetchRecipes;
