
import * as ActionTypes from './ActionTypes';
import { DISHES } from '../shared/dishes';
import { COMMENTS } from '../shared/comments';
import { PROMOTIONS } from '../shared/promotions';

export const postComment = (dishId, rating, author, comment) => ({
    type: ActionTypes.ADD_COMMENT,
    payload: {
        dishId: dishId,
        rating: rating,
        author: author,
        comment: comment
    }
});


export const fetchComments = () => (dispatch) => {

    dispatch(commentsLoading(true));

    setTimeout(() => {
        dispatch(addComments(COMMENTS));
    }, 2000);
}

export const fetchDishes = () => (dispatch) => {

    dispatch(dishesLoading(true));

    setTimeout(() => {
        dispatch(addDishes(DISHES));
    }, 2000);
}

export const fetchPromos = () => (dispatch) => {

    dispatch(promosLoading(true));

    setTimeout(() => {
        dispatch(addPromos(PROMOTIONS));
    }, 2000);
}

export const commentsLoading = () => ({
    type: ActionTypes.COMMENTS_LOADING
});

export const commentsFailed = (errmess) => ({
    type: ActionTypes.COMMENTS_FAILED,
    payload: errmess
});

export const addComments = (comments) => ({
    type: ActionTypes.ADD_COMMENTS,
    payload: comments
});

export const dishesLoading = () => ({
    type: ActionTypes.DISHES_LOADING
});

export const dishesFailed = (errmess) => ({
    type: ActionTypes.DISHES_FAILED,
    payload: errmess
});

export const addDishes = (dishes) => ({
    type: ActionTypes.ADD_DISHES,
    payload: dishes
});


export const promosLoading = () => ({
    type: ActionTypes.PROMOS_LOADING
});

export const promosFailed = (errmess) => ({
    type: ActionTypes.PROMOS_FAILED,
    payload: errmess
});

export const addPromos = (promos) => ({
    type: ActionTypes.ADD_PROMOS,
    payload: promos
});

// import * as ActionTypes from './ActionTypes';

// export const addComment = (comment) => ({
//     type: ActionTypes.ADD_COMMENT,
//     payload: comment
// });
// export const postComment = (dishId, rating, author, comment) => (dispatch) => {

//     const newComment = {
//         dishId: dishId,
//         rating: rating,
//         author: author,
//         comment: comment
//     };
//     newComment.date = new Date().toISOString();
//     console.log('newComment', newComment)
//     return fetch('comments', {
//         method: 'POST',
//         body: JSON.stringify(newComment),
//         headers: {
//           "Content-Type": "application/json"
//         },
//         credentials: "same-origin"
//     })
//     .then(response => {
//         if (response.ok) {
//           return response;
//         } else {
//           var error = new Error('Error ' + response.status + ': ' + response.statusText);
//           error.response = response;
//           throw error;
//         }
//       },
//       error => {
//             throw error;
//       })
//     .then(response => response.json())
//     .then(function(response){
//         console.log(response)
//         return dispatch(addComment(response))
//     })
//     // .then(response => dispatch(addComment(response)))
//     .catch(error =>  { console.log('post comments', error.message);
//      alert('Your comment could not be posted\nError: '+error.message); });
// };
// export const fetchDishes = () => (dispatch) => {

//     dispatch(dishesLoading(true));

//     return fetch('dishes')
//     .then(response => {
//         if (response.ok) {
//           return response;
//         } else {
//           var error = new Error('Error ' + response.status + ': ' + response.statusText);
//           error.response = response;
//           throw error;
//         }
//       },
//       error => {
//             var errmess = new Error(error.message);
//             throw errmess;
//       })
//     .then(response => response.json())
//     .then(dishes => dispatch(addDishes(dishes)))
//     .catch(error => dispatch(dishesFailed(error.message)));
// }
// export const dishesLoading = () => ({
//     type: ActionTypes.DISHES_LOADING
// });

// export const dishesFailed = (errmess) => ({
//     type: ActionTypes.DISHES_FAILED,
//     payload: errmess
// });

// export const addDishes = (dishes) => ({
//     type: ActionTypes.ADD_DISHES,
//     payload: dishes
// });

// export const fetchComments = () => (dispatch) => {    
//     return fetch('comments')
//     .then(response => {
//         if (response.ok) {
//           return response;
//         } else {
//           var error = new Error('Error ' + response.status + ': ' + response.statusText);
//           error.response = response;
//           throw error;
//         }
//       },
//       error => {
//             var errmess = new Error(error.message);
//             throw errmess;
//       })
//     .then(response => response.json())
//     .then(comments => dispatch(addComments(comments)))
//     .catch(error => dispatch(commentsFailed(error.message)));
// };

// export const commentsFailed = (errmess) => ({
//     type: ActionTypes.COMMENTS_FAILED,
//     payload: errmess
// });

// export const addComments = (comments) => {  
//     console.log('addComments', comments)
//     return{
//     type: ActionTypes.ADD_COMMENTS,
//     payload: comments
// }};

// export const fetchPromos = () => (dispatch) => {
    
//     dispatch(promosLoading());

//     return fetch('promotions')
//     .then(response => {
//         if (response.ok) {
//           return response;
//         } else {
//           var error = new Error('Error ' + response.status + ': ' + response.statusText);
//           error.response = response;
//           throw error;
//         }
//       },
//       error => {
//             var errmess = new Error(error.message);
//             throw errmess;
//       })
//     .then(response => response.json())
//     .then(promos => dispatch(addPromos(promos)))
//     .catch(error => dispatch(promosFailed(error.message)));
// }

// export const promosLoading = () => ({
//     type: ActionTypes.PROMOS_LOADING
// });

// export const promosFailed = (errmess) => ({
//     type: ActionTypes.PROMOS_FAILED,
//     payload: errmess
// });

// export const addPromos = (promos) => ({
//     type: ActionTypes.ADD_PROMOS,
//     payload: promos
// });