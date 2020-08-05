export const initialState={
    cart:[]
}

function reducer(state, action){
    switch(action.type){
        case  'ADD_TO_CART':
        //logice for adding item to cart
        break;
        case 'REMOVE_FROM_CART':

        break;

        default:
            return state;
    }
}

export default reducer;