import {
  REMOVE_STOPOVER,
  SEARCH_INPUT_UPDATE,
  SEARCH_INPUT_SUGGESTIONS_UPDATE,
  ADD_STEP,
  ADD_STEP_WITH_ID
} from './actionTypes'

export const removeStopOver = (index) => ({
  type: REMOVE_STOPOVER,
  index
})

export const searchInputUpdate = (value) => ({
  type: SEARCH_INPUT_UPDATE,
  value
})

export const searchInputSuggestionsUpdate = (suggestions) => ({
  type: SEARCH_INPUT_SUGGESTIONS_UPDATE,
  suggestions
})

export const addStep = (value, index) => ({
  type: ADD_STEP,
  index,
  value
})

export const addStepWithId = (value, id) => ({
  type: ADD_STEP_WITH_ID,
  id,
  value
})
