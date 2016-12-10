import {
  REMOVE_STEP,
  SEARCH_INPUT_UPDATE,
  SEARCH_INPUT_SUGGESTIONS_UPDATE,
  ADD_STEP,
  ADD_STEP_WITH_COORDINATES,
  NEW_ROUTE
} from './actionTypes'

export const removeStopOver = (index) => ({
  type: REMOVE_STEP,
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

export const addStepWithCoordinates = (label, id, coordinates) => ({
  type: ADD_STEP_WITH_COORDINATES,
  coordinates,
  id,
  label
})

export const newRoute = (route) => ({
  type: NEW_ROUTE,
  route
})
