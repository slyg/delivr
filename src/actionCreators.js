// @flow
import {
  REMOVE_STEP,
  SEARCH_INPUT_UPDATE,
  SEARCH_INPUT_SUGGESTIONS_UPDATE,
  ADD_STEP,
  ADD_STEP_WITH_COORDINATES,
  NEW_ROUTE,
  DELETE_ROUTE,
  REQUEST_NEW_DEPARTURE_TIME
} from './actionTypes'

import type {
  REMOVE_STEP_ActionT,
  SEARCH_INPUT_UPDATE_ActionT,
  SEARCH_INPUT_SUGGESTIONS_UPDATE_ActionT,
  ADD_STEP_ActionT,
  ADD_STEP_WITH_COORDINATES_ActionT,
  NEW_ROUTE_ActionT,
  DELETE_ROUTE_ActionT,
  REQUEST_NEW_DEPARTURE_TIME_ActionT
} from './actionTypes'

import type { Suggestion, Coordinates, Kind } from './types'


export const removeStopOver = (index: number): REMOVE_STEP_ActionT => ({
  type: REMOVE_STEP,
  index
})

export const searchInputUpdate = (value: string): SEARCH_INPUT_UPDATE_ActionT => ({
  type: SEARCH_INPUT_UPDATE,
  value
})

export const searchInputSuggestionsUpdate = (suggestions: Suggestion[]): SEARCH_INPUT_SUGGESTIONS_UPDATE_ActionT => ({
  type: SEARCH_INPUT_SUGGESTIONS_UPDATE,
  suggestions
})

export const addStep = (value: string, index: number): ADD_STEP_ActionT => ({
  type: ADD_STEP,
  index,
  value
})

export const addStepWithCoordinates = (label: string, id: number, coordinates: Coordinates): ADD_STEP_WITH_COORDINATES_ActionT => ({
  type: ADD_STEP_WITH_COORDINATES,
  coordinates,
  id,
  label
})

export const newRoute = (route: any): NEW_ROUTE_ActionT => ({
  type: NEW_ROUTE,
  route
})

export const deleteRoute = (): DELETE_ROUTE_ActionT => ({
  type: DELETE_ROUTE
})

export const requestNewDepartureTime = (kind: Kind, date: Date): REQUEST_NEW_DEPARTURE_TIME_ActionT => ({
  type: REQUEST_NEW_DEPARTURE_TIME,
  date,
  kind
})
