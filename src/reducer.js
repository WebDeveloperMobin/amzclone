export const initialState={
    basket:[ ],
    user:null,
};


export const getTotal = (basket) => (
    basket.reduce((amount, item) => item.price + amount, 0)
); {/* selector */}


const reducer=(state,action)=>{
    console.log(action);

    switch(action.type){

        case "SET_USER":
            return{
                ...state,
                user:action.user
            }

        case "ADD_TO_BASKET":
            // LOGIC
            return{
                ...state,
                basket:[...state.basket,action.item]
            }
            break;

        case "REMOVE_FROM_BASKET":
            // LOGIC

            // we cloned the basket
            let newBasket = [...state.basket];

            // check here product existes or not.
            const index = state.basket.findIndex(
                (basketItem) => basketItem.id === action.id
            );

            // if exists it will remove
            if(index >= 0) {
                newBasket.splice(index, 1);
            } else {
                console.warn(
                    `Cannot remove product (id: ${action.id})`
                );
            }
            return {...state, basket: newBasket};
            break;
            default:

            return state;
    }
}

export default reducer;