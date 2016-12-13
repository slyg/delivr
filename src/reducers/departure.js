import { TICK, REQUEST_NEW_DEPARTURE_TIME } from '../actionTypes'

export const NOW = 'NOW'
export const LATER = 'LATER'

const initialState = {
  kind: NOW,
  date: new Date(Date.now()),
  choices: [
    { kind: NOW, label: 'Now' },
    { kind: LATER, label: 'Later' }
  ],
  defaultChoiceIndex: 0
}

const route = (state = initialState, action) => {
  switch (action.type) {

    case TICK: {
      const { date } = action
      if (state.kind === NOW) {
        return {
          ...state,
          date
        }
      } else {
        return state;
      }
    }

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
