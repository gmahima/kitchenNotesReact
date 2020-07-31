export const getIds = () => {
    let list = []
    let s = []
    for(let i=1; i<=5; i++) {
        s={
            params: {
                id: i.toString()
            }
        }
        list.push(s)
    }
    return list
}

const recipeList = [
    {
        id: '1',
        name: 'tomato curry',
        ingredients: ['tomatoes', 'water', 'spices', 'oil'],
        procedure: ['wash tomatoes', 'heat oil', 'add tomatoes', 'add spices', 'add water', 'let it boil on simmer', 'eat']
    },
    {
        id: '2',
        name: 'spinach curry',
        ingredients: ['chopped spinach leaves', 'water', 'spices', 'oil'],
        procedure: ['wash spinach leaves', 'heat oil', 'add spinach leaves', 'add spices', 'add water', 'let it boil on simmer', 'eat']
    },
    {
        id: '3',
        name: 'cabbage curry',
        ingredients: ['chopped cabbage leaves ', 'water', 'spices', 'oil'],
        procedure: ['wash chopped cabbage leaves ', 'heat oil', 'add chopped cabbage leaves ', 'add spices', 'add water', 'let it boil on simmer', 'eat']
    },
    {
        id: '4',
        name: 'potato curry',
        ingredients: ['potatoes', 'water', 'spices', 'oil'],
        procedure: ['wash potatoes', 'heat oil', 'add potatoes', 'add spices', 'add water', 'let it boil on simmer', 'eat']
    },
    {
        id: '5',
        name: 'beans curry',
        ingredients: ['beans', 'water', 'spices', 'oil'],
        procedure: ['wash beans', 'heat oil', 'add beans', 'add spices', 'add water', 'let it boil on simmer', 'eat']
    },
]

export const getRecipeData = (id) =>{
    const data = recipeList.filter(r => r.id === id)[0]
    return data

}


export const getAllRecipes = () =>{
    const data = recipeList
    return data

}