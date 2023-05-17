const Cake = ({cakeName, ingredients, price, rating}) => {

  const recipeList = (listOfIngredients) => {
    let output = "";
    for (let i = 0; i < listOfIngredients.length; i++) {
      output += listOfIngredients[i];
      if (i !== listOfIngredients.length - 1) {
        output += ", ";
      }
    }
    return output + ".";
  };

  return (
    <>
        <h2>{cakeName}</h2>
        <p>Ingredients: {recipeList(ingredients)}</p>
        <p>Price: {price}</p>
        <p>Rating: {rating}</p>
        
    </>
  )
}

export default Cake;