import { NEW_ROUTE, DELETE_ROUTE } from '../actionTypes'

const initialState = {
  exists: false,
  geometry: undefined,
  duration: undefined,
  distance: undefined
}

const route = (state = initialState, action) => {
  switch (action.type) {

    case NEW_ROUTE: {
      const { route } = action
      return {
        ...route,
        exists: true,
      }
    }

    case DELETE_ROUTE:
      return initialState

    default:
      return state
  }

}

export default route
