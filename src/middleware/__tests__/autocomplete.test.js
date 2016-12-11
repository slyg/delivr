jest.unmock('ramda')

import middleware from '../autocomplete'
import { SEARCH_INPUT_UPDATE } from '../../actionTypes'
import { searchInputSuggestionsUpdate } from '../../actionCreators'

describe('The autocomplete middleware', () => {

  const storeMock = {}
  const dummyAction = { type: 'DUMMY_ACTION' }

  window.fetch = jest.fn().mockImplementation(
    () =>
      Promise.resolve(
        { json: () => ({ features: 'stuff' }) }
      )
  )

  it('should pass any dummy action', (done) => {
    middleware({})(done)(dummyAction)
  })

  it('should pass SEARCH_INPUT_UPDATE action with value length lt 2', (done) => {
    middleware({})(done)({ type: SEARCH_INPUT_UPDATE, value: [1, 2] })
  })

  it('should pass dispatch on SEARCH_INPUT_UPDATE action with value length gt 2', (done) => {

    const nextMock = () => {}
    const actionMock = { type: SEARCH_INPUT_UPDATE, value: [1, 2, 3] }

    middleware({
      dispatch: (action) => {
        expect(action).toEqual(searchInputSuggestionsUpdate('stuff'))
        return done()
      }
    })(nextMock)(actionMock)
    
  })

})
