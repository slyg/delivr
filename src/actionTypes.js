// @flow
import type {
  Suggestion, Coordinates, Kind
} from './types'

export const SEARCH_INPUT_UPDATE = 'SEARCH_INPUT_UPDATE'
export const SEARCH_INPUT_SUGGESTIONS_UPDATE = 'SEARCH_INPUT_SUGGESTIONS_UPDATE'
export const ADD_STEP = 'ADD_STEP'
export const ADD_STEP_WITH_COORDINATES = 'ADD_STEP_WITH_COORDINATES'
export const REMOVE_STEP = 'REMOVE_STEP'
export const NEW_ROUTE = 'NEW_ROUTE'
export const DELETE_ROUTE = 'DELETE_ROUTE'
export const REQUEST_NEW_DEPARTURE_TIME = 'REQUEST_NEW_DEPARTURE_TIME'

export type REMOVE_STEP_ActionT = {
  type: 'REMOVE_STEP',
  index: number
}

export type SEARCH_INPUT_UPDATE_ActionT = {
  type: 'SEARCH_INPUT_UPDATE',
  value: string
}

export type SEARCH_INPUT_SUGGESTIONS_UPDATE_ActionT = {
  type: 'SEARCH_INPUT_SUGGESTIONS_UPDATE',
  suggestions: Suggestion[]
}

export type ADD_STEP_ActionT = {
  type: 'ADD_STEP',
  index: number,
  value: string
}

export type ADD_STEP_WITH_COORDINATES_ActionT = {
  type: 'ADD_STEP_WITH_COORDINATES',
  coordinates: Coordinates,
  id: number,
  label: string
}

export type NEW_ROUTE_ActionT = {
  type: 'NEW_ROUTE',
  route: any
}

export type DELETE_ROUTE_ActionT = {
  type: 'DELETE_ROUTE'
}

export type REQUEST_NEW_DEPARTURE_TIME_ActionT = {
  type: 'REQUEST_NEW_DEPARTURE_TIME', date: Date, kind: Kind
}
