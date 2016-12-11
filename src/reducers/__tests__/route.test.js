import routeReducer from '../route'
import { NEW_ROUTE, DELETE_ROUTE } from '../../actionTypes'

const dummyAction = {type: 'DUMMY_TYPE'}

describe('The route reducer', () => {

  it('should return an initial value', () => {

    const initialState = routeReducer(undefined, dummyAction)

    expect(initialState).toEqual({exists: false})

  })

  it('should return a new route on NEW_ROUTE action', () => {

    const step0 = routeReducer(undefined, dummyAction)
    const step1 = routeReducer(step0, {
      type: NEW_ROUTE,
      route: {
        geometry: {},
        duration: 2,
        distance: 2
      }
    })
    const step2 = routeReducer(step1, {
      type: NEW_ROUTE,
      route: {
        geometry: {},
        duration: 3,
        distance: 3
      }
    })

    expect(step2).toEqual({
      exists: true,
      geometry: {},
      duration: 3,
      distance: 3
    })

  })

  it('should return default initialState on DELETE_ROUTE action', () => {
    const step0 = routeReducer(undefined, dummyAction)
    const step1 = routeReducer(step0, {
      type: NEW_ROUTE,
      route: {
        geometry: {},
        duration: 2,
        distance: 2
      }
    })
    const step2 = routeReducer(step0, {
      type: DELETE_ROUTE
    })

    expect(step2).toEqual({exists: false})

  })

  it('should return same state on dummy action', () => {

    const step0 = routeReducer(undefined, dummyAction)
    const step1 = routeReducer(step0, {
      type: NEW_ROUTE,
      route: {
        geometry: {},
        duration: 2,
        distance: 2
      }
    })
    const step2 = routeReducer(step1, {
      type: NEW_ROUTE,
      route: {
        geometry: {},
        duration: 3,
        distance: 3
      }
    })
    const step3 = routeReducer(step2, dummyAction)

    expect(step3).toEqual(step2)

  })

})
