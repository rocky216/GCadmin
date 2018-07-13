export const APP_SELECT_KEY = 'APP_SELECT_KEY'

export function selectKey(params, next){
  return function(dispatch, getState){
    dispatch({
      type: APP_SELECT_KEY,
      aa: "11"
    })
  }
}
