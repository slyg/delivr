// @flow
import { SEARCH_INPUT_SUGGESTIONS_UPDATE } from '../actionTypes'

import type { SEARCH_INPUT_SUGGESTIONS_UPDATE_ActionT } from '../actionTypes'
import type { Suggestion } from '../types'

type State = Suggestion[]
type Action = SEARCH_INPUT_SUGGESTIONS_UPDATE_ActionT

const initialState = []

const suggestions = (state: State = initialState, action: Action): State => {
  switch (action.type) {
    case SEARCH_INPUT_SUGGESTIONS_UPDATE:
      return action.suggestions
    default:
      return state
  }

}

export default suggestions
