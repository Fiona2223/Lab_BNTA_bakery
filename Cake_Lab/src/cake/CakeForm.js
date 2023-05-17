import { useState } from "react";


const CakeForm = ({listOfCakes, setListOfCakes}) => {

    const [cakeName, setCakeName] = useState("");
    const [ingredients, setIngredients] = useState([]);
    const [price, setPrice] = useState(0);
    const [rating, setRating] = useState(0);
    const [error, setError] = useState ("");

    const handleValidation = () => {
        let errorMessage = "";

        if(listOfCakes.find((cake) => cake.cakeName === cakeName)){
            errorMessage = "This cake already exists!";
          };

          if(price  < 0){
            errorMessage = "Price cannot be less than 0";
          };
    
        setError(errorMessage);
    
        return errorMessage !== "";
      };
      


    const handleFormSubmit = (e) => {
        e.preventDefault();    

        const updatedCakes = [...listOfCakes];
    
        const newCake = {
        cakeName: cakeName,
        ingredients: handleIngredientListSubmit(ingredients),
        price: price,
        rating: rating
        }

        updatedCakes.push(newCake);

        setListOfCakes(updatedCakes);
    }

    const handleIngredientListSubmit = (stringOfIngredients) =>{
        return stringOfIngredients.split(',');
    }


    return (
        <>
            <h2>Add New Cake</h2>
            <form onSubmit={handleFormSubmit}>
                <input 
                type="text"
                name="cakeName"
                placeholder="Cake Name"
                value={cakeName}
                onChange={(e) => setCakeName(e.target.value)}/>

                <input 
                id="ingredients-input"
                type="list"
                name="ingredients"
                placeholder="Ingredients (comma-separated)"
                value={ingredients}
                onChange={(e) => setIngredients(e.target.value)}/>

                <label> Price 
                    <input 
                    className="number-input"
                    type="number"
                    name="price"
                    placeholder="Price"
                    min={0}
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}/>
                </label>
                
                <label> Rating 
                    <input 
                    className="number-input"
                    type="number"
                    name="rating"
                    placeholder="Rating"
                    min={0}
                    max={10}
                    value={rating}
                    onChange={(e) => setRating(e.target.value)}/>
                </label>
                <input type="submit" value="Submit"/>
            </form>

            <p>{error}</p>
        </>
    )
}

export default CakeForm;