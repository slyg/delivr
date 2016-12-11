import stepsReducer from '../steps'
import { REMOVE_STEP, ADD_STEP_WITH_COORDINATES } from '../../actionTypes'

const dummyAction = {type: 'DUMMY_TYPE'}

describe('The steps reducer', () => {

  it('should return an initial value', () => {

    const initialState = stepsReducer(undefined, dummyAction)
    expect(initialState).toEqual([])

  })

  it('should return a new steps array on ADD_STEP_WITH_COORDINATES action', () => {

    const step0 = stepsReducer(undefined, dummyAction)
    const step1 = stepsReducer(step0, {
      type: ADD_STEP_WITH_COORDINATES,
      label: 'London',
      coordinates: [1, 2]
    })
    const step2 = stepsReducer(step1, {
      type: ADD_STEP_WITH_COORDINATES,
      label: 'Chiswick',
      coordinates: [2, 2]
    })

    expect(step2).toEqual([
      {
        label: 'London',
        coordinates: [1, 2]
      },
      {
        label: 'Chiswick',
        coordinates: [2, 2]
      }
    ])

  })

  it('should return a new steps array without targeted step on REMOVE_STEP action', () => {
    const step0 = stepsReducer(undefined, dummyAction)
    const step1 = stepsReducer(step0, {
      type: ADD_STEP_WITH_COORDINATES,
      label: 'London',
      coordinates: [1, 2]
    })
    const step2 = stepsReducer(step1, {
      type: ADD_STEP_WITH_COORDINATES,
      label: 'Chiswick',
      coordinates: [2, 2]
    })
    const step3 = stepsReducer(step2, {
      type: REMOVE_STEP,
      index: 0
    })

    expect(step3).toEqual([
      {
        label: 'Chiswick',
        coordinates: [2, 2]
      }
    ])

  })

  it('should return same state on dummy action', () => {

    const step0 = stepsReducer(undefined, dummyAction)
    const step1 = stepsReducer(step0, {
      type: ADD_STEP_WITH_COORDINATES,
      label: 'London',
      coordinates: [1, 2]
    })
    const step2 = stepsReducer(step1, {
      type: ADD_STEP_WITH_COORDINATES,
      label: 'Chiswick',
      coordinates: [2, 2]
    })
    const step3 = stepsReducer(step2, dummyAction)


    expect(step3).toEqual(step2)

  })

})
