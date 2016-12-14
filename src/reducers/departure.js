// @flow
import { REQUEST_NEW_DEPARTURE_TIME } from '../actionTypes'

import type { Kind, Choice } from '../types'
import type { REQUEST_NEW_DEPARTURE_TIME_ActionT } from '../actionTypes'

export const NOW = 'NOW'
export const LATER = 'LATER'

type State = {
  kind : Kind,
  date : Date,
  choices: Choice[],
  defaultChoiceIndex: number
}

const initialState = {
  kind: NOW,
  date: new Date(Date.now()),
  choices: [
    { kind: NOW, label: 'Now' },
    { kind: LATER, label: 'Later' }
  ],
  defaultChoiceIndex: 0
}

const route = (state: State = initialState, action: REQUEST_NEW_DEPARTURE_TIME_ActionT): State => {
  switch (action.type) {

    case REQUEST_NEW_DEPARTURE_TIME: {
      const { date, kind } = action
      return {
        ...state,
        kind,
        date,
      }
    }

    default:
      return state
  }

}

export default route
