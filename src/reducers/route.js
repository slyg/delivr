import { NEW_ROUTE } from '../actionTypes'

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

    default:
      return state
  }

}

export default route
