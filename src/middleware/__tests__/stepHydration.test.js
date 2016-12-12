import middleware from '../stepHydration'
import { ADD_STEP } from '../../actionTypes'
import { addStepWithCoordinates } from '../../actionCreators'

describe('The autocomplete middleware', () => {

  const storeMock = {}
  const dummyAction = { type: 'DUMMY_ACTION' }

  it('should pass any dummy action', (done) => {
    middleware({})(done)(dummyAction)
  })

  it('should pass ADD_STEP action', (done) => {
    const action = {
      type: ADD_STEP
    }
    middleware({})(done)(action)
  }))

}
