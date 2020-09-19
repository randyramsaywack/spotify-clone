export const initialState = {
  user: null,
  playlists: [],
  playing: false,
  item: null,
  // REMOVE token after developing...
  token:
    "BQARNJhUlgTvFcicvB1O8mRZu-uvrvlMq0W2msrfqB5GwR_yDdGhHN0ZwG3sHaYoZrOv36fQlq9172lP1c-AcynCsjZvddunR0CcbUmq5A2Mdu7jZCHAXZK5UaqkheQQ3wj-LT4xqOrJhL66GoSRh17DT_w8XGzz5_LMiSQ",
};

const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };
    case "SET_TOKEN":
      return {
        ...state,
        token: action.token,
      };
    case "SET_PLAYLISTS":
      return {
        ...state,
        playlists: action.playlists,
      };
    default:
      return state;
  }
};

export default reducer;
