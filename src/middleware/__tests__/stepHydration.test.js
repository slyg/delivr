import middleware from '../stepHydration'
import { ADD_STEP } from '../../actionTypes'
import { addStepWithCoordinates } from '../../actionCreators'

describe('The autocomplete middleware', () => {

  const storeMock = {}
  const dummyAction = { type: 'DUMMY_ACTION' }

  it('should pass any dummy action', done => {
    middleware({})(done)(dummyAction)
  })

  it('should pass ADD_STEP action', done => {
    const action = {
      type: ADD_STEP
    }
    middleware({})(done)(action)
  })

  it('should dispatch an addStepWithCoordinates action on ADD_STEP action', done => {

    const action = {
      type: ADD_STEP,
      index: 1,
      value: 'London'
    }

    const storeMock = {
      getState : () => ({
        suggestions: [
          {
            id: 'random000',
            geometry: { coordinates: [1, 2] }
          },
          {
            id: 'random001',
            geometry: { coordinates: [2, 3] }
          }
        ]
      }),
      dispatch: action => {
        expect(action).toEqual(expectedDispatchedAction)
        return done()
      }
    }

    const expectedDispatchedAction = addStepWithCoordinates('London', 'random001', [2, 3] )

    middleware(storeMock)(() => {})(action)

  })

})
