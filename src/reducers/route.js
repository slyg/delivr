// @flow
import { NEW_ROUTE, DELETE_ROUTE } from '../actionTypes'

import type { NEW_ROUTE_ActionT, DELETE_ROUTE_ActionT } from '../actionTypes'

type State = {
  exists: boolean,
  geometry: ?any,
  duration: ?number,
  distance: ?number
}

type Action = NEW_ROUTE_ActionT
            | DELETE_ROUTE_ActionT

const initialState = {
  exists: false,
  geometry: undefined,
  duration: undefined,
  distance: undefined
}

const route = (state: State = initialState, action: Action): State => {
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
