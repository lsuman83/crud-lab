import cuid from 'cuid'


export default function manageReviews(state = {
    reviews: []
}, action){
debugger
    switch(action.type){
        case 'ADD_REVIEW':
            const review = {
                id: cuid(),
                text: action.text,
                restaurant_id: action.restaurant_id
            }

            return {...state, reviews: [...state.reviews, review] }

        default:
            return state
    }
}