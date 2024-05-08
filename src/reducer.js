export const initialState = {
    basket: [
        //  {        id: 12345,
        //         title: "Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.",
        //         image: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fcpimg.tistatic.com%2F%2F101227%2F15%2Ftr%3Aq-100%2Ftemplate_photo_2.jpg&imgrefurl=http%3A%2F%2Fwww.swarnimtechnocrats.com%2Fcontact-us.html&tbnid=42BEBpM0FIwh3M&vet=12ahUKEwi5p-uov9rtAhXDVHwKHYpJC0AQMyhZegUIARCOAQ..i&docid=7S8RmXwgIqajMM&w=1500&h=654&q=techmocrats%20bannner&ved=2ahUKEwi5p-uov9rtAhXDVHwKHYpJC0AQMyhZegUIARCOAQ",
        //         price: 299,
        //         rating: 5,
        //  }       
    ],
    user: null,
};

//price total calculation
export const getBasketTotal = (basket) => basket?.reduce((amount, item) => item.price + amount, 0);
//console.log(basket);


function reducer(state, action) {
    switch (action.type) {
        case "SET_USER":
            return {
                ...state,  // it is the current state
                user: action.user
            }
        case "ADD_TO_BASKET":
            //lOGIC FOR ADDING ITEMS TO BASKET
            return {
                ...state,
                basket: [...state.basket, action.item],
            }
        case "EMPTY_BASKET":
            return {
                ...state,
                basket: []
            }
        case "REMOVE_FROM_BASKET":
            //LOGIC FOR REMOVING

            //we cloned the basket
            let newBasket = [...state.basket];
            const index = state.basket.findIndex((basketItem) => basketItem.id === action.id);

            if (index >= 0) {
                //item exist in basket,remove it...
                newBasket.splice(index, 1);
            } else {
                console.warn("can't remove product becoz it does not exist ");
            }
            return {
                ...state,
                basket: newBasket,
            }

        default:
            return state;
    }
}
export default reducer;