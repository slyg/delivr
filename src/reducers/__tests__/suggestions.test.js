import suggestionsReducer from '../suggestions'
import { SEARCH_INPUT_SUGGESTIONS_UPDATE } from '../../actionTypes'

const dummyAction = {type: 'DUMMY_TYPE'}

describe('The suggestions reducer', () => {

  it('should return an initial value', () => {

    const initialState = suggestionsReducer(undefined, dummyAction)
    expect(initialState).toEqual([])

  })

  it('should return a new suggestions array on SEARCH_INPUT_SUGGESTIONS_UPDATE action', () => {

    const step0 = suggestionsReducer(undefined, dummyAction)
    const step1 = suggestionsReducer(step0, {
      type: SEARCH_INPUT_SUGGESTIONS_UPDATE,
      suggestions: ['a', 'b']
    })
    const step2 = suggestionsReducer(step1, {
      type: SEARCH_INPUT_SUGGESTIONS_UPDATE,
      suggestions: ['c', 'd']
    })

    expect(step2).toEqual(['c', 'd'])

  })

  it('should return same state on dummy action', () => {

    const step0 = suggestionsReducer(undefined, dummyAction)
    const step1 = suggestionsReducer(step0, {
      type: SEARCH_INPUT_SUGGESTIONS_UPDATE,
      suggestions: ['a', 'b']
    })
    const step2 = suggestionsReducer(step1, {
      type: SEARCH_INPUT_SUGGESTIONS_UPDATE,
      suggestions: ['c', 'd']
    })
    const step3 = suggestionsReducer(step2, dummyAction)

    expect(step3).toEqual(step2)

  })

})
