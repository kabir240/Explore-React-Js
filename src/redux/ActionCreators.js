import * as ActionTypes from './ActionTypes';
import { baseUrl } from '../shared/baseUrl';

export const fetchTopblogs = () => (dispatch) => {
    
    dispatch(topblogsLoading(true));

    return fetch(baseUrl + 'topblogs')
        .then(response => {
            if (response.ok) {
                return response;
            }
            else {
                var error = new Error('Error '+ response.status + ': ' + response.statusText);
                error.response = response;
                throw error;
            }
        },
        error => {
            var errmess = new Error(error.message);
            throw errmess;
        })
        .then(response => response.json())
        .then(topblogs => dispatch(addTopblogs(topblogs)))
        .catch(error => dispatch(topblogsFailed(error.message)));
}

export const topblogsLoading = () => ({
    type: ActionTypes.TOPBLOGS_LOADING
});

export const topblogsFailed = (errmess) => ({
    type: ActionTypes.TOPBLOGS_FAILED,
    payload: errmess
});

export const addTopblogs = (topblogs) => ({
    type: ActionTypes.ADD_TOPBLOGS,
    payload: topblogs
});



export const fetchBlogs = () => (dispatch) => {
    
    dispatch(blogsLoading(true));

    return fetch(baseUrl + 'blogs')
        .then(response => {
            if (response.ok) {
                return response;
            }
            else {
                var error = new Error('Error '+ response.status + ': ' + response.statusText);
                error.response = response;
                throw error;
            }
        },
        error => {
            var errmess = new Error(error.message);
            throw errmess;
        })
        .then(response => response.json())
        .then(blogs => dispatch(addBlogs(blogs)))
        .catch(error => dispatch(BlogsFailed(error.message)));
}

export const blogsLoading = () => ({
    type: ActionTypes.BLOGS_LOADING
});

export const BlogsFailed = (errmess) => ({
    type: ActionTypes.BLOGS_FAILED,
    payload: errmess
});

export const addBlogs = (blogs) => ({
    type: ActionTypes.ADD_BLOGS,
    payload: blogs
});




export const fetchTours = () => (dispatch) => {
    
    dispatch(toursLoading(true));

    return fetch(baseUrl + 'tours')
        .then(response => {
            if (response.ok) {
                return response;
            }
            else {
                var error = new Error('Error '+ response.status + ': ' + response.statusText);
                error.response = response;
                throw error;
            }
        },
        error => {
            var errmess = new Error(error.message);
            throw errmess;
        })
        .then(response => response.json())
        .then(tours => dispatch(addTours(tours)))
        .catch(error => dispatch(ToursFailed(error.message)));
}

export const toursLoading = () => ({
    type: ActionTypes.TOURS_LOADING
});

export const ToursFailed = (errmess) => ({
    type: ActionTypes.TOURS_FAILED,
    payload: errmess
});

export const addTours = (tours) => ({
    type: ActionTypes.ADD_TOURS,
    payload: tours
});


export const fetchService = () => (dispatch) => {
    
    dispatch(serviceLoading(true));

    return fetch(baseUrl + 'service')
        .then(response => {
            if (response.ok) {
                return response;
            }
            else {
                var error = new Error('Error '+ response.status + ': ' + response.statusText);
                error.response = response;
                throw error;
            }
        },
        error => {
            var errmess = new Error(error.message);
            throw errmess;
        })
        .then(response => response.json())
        .then(service => dispatch(addService(service)))
        .catch(error => dispatch(ServiceFailed(error.message)));
}

export const serviceLoading = () => ({
    type: ActionTypes.SERVICE_LOADING
});

export const ServiceFailed = (errmess) => ({
    type: ActionTypes.SERVICE_FAILED,
    payload: errmess
});

export const addService = (service) => ({
    type: ActionTypes.ADD_SERVICE,
    payload: service
});

export const postFeedback = (firstname, lastname, telnum, email, message) => dispatch => {
  const newFeedback = {
    firstname: firstname,
    lastname: lastname,
    telnum: telnum,
    email: email,
    message: message
  };

  newFeedback.date = new Date().toISOString();

  return fetch(baseUrl + "feedback", {
    method: "POST",
    body: JSON.stringify(newFeedback),
    headers: {
      "Content-Type": "application/json"
    },
    credentials: "same-origin"
  })
    .then(response => {
            if (response.ok) {
                return response;
            }
            else {
                var error = new Error('Error '+ response.status + ': ' + response.statusText);
                error.response = response;
                throw error;
            }
        },
        error => {
            var errmess = new Error(error.message);
            throw errmess;
        })
    .then(response => response.json())
    .then(response =>
      alert("Thank you "+ response.firstname+ " " +response.lastname + " For Send YOur details! We will Contact You soon!")
    )
    .catch(error => {
      console.log("post feedbacks", error.message);
      alert("Your feedback could not be posted\nError: " + error.message);
    });
};

export const postSignUp = (firstname, lastname, email, password, description) => dispatch => {
  const newFeedback = {
    firstname: firstname,
    lastname: lastname,
    email: email,
    password: password,
    description: description
  };

  newFeedback.date = new Date().toISOString();

  return fetch(baseUrl + "signup", {
    method: "POST",
    body: JSON.stringify(newFeedback),
    headers: {
      "Content-Type": "application/json"
    },
    credentials: "same-origin"
  })
    .then(response => {
            if (response.ok) {
                return response;
            }
            else {
                var error = new Error('Error '+ response.status + ': ' + response.statusText);
                error.response = response;
                throw error;
            }
        },
        error => {
            var errmess = new Error(error.message);
            throw errmess;
        })
    .then(response => response.json())
    .then(response =>
      alert("Thank you "+ response.firstname+ " " +response.lastname + " For SignUp!")
    )
    .catch(error => {
      console.log("post feedbacks", error.message);
      alert("Your feedback could not be posted\nError: " + error.message);
    });
};




