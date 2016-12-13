import departureReducer, { NOW, LATER } from '../departure'
import { TICK, REQUEST_NEW_DEPARTURE_TIME } from '../../actionTypes'

const dummyAction = {type: 'DUMMY_TYPE'}
const staticValues = {
  choices: [
    { kind: NOW, label: 'Now' },
    { kind: LATER, label: 'Later' }
  ],
  defaultChoiceIndex: 0
}

describe('The departure reducer', () => {

  it('should return an initial value', () => {

    const { kind, date, choices, defaultChoiceIndex } = departureReducer(undefined, dummyAction)

    expect(kind).toEqual(NOW)
    expect(date.getTime()).toBeLessThanOrEqual(Date.now())
    expect(choices).toEqual(staticValues.choices)
    expect(defaultChoiceIndex).toEqual(staticValues.defaultChoiceIndex)

  })

  it('should return a new departure on REQUEST_NEW_DEPARTURE_TIME action', () => {

    const step0 = departureReducer(undefined, dummyAction)
    const step1 = departureReducer(step0, {
      type: REQUEST_NEW_DEPARTURE_TIME,
      date: 1,
      kind: LATER
    })
    const step2 = departureReducer(step1, {
      type: REQUEST_NEW_DEPARTURE_TIME,
      date: 2,
      kind: NOW
    })

    expect(step1).toEqual({
      ...staticValues,
      date: 1,
      kind: LATER
    })

    expect(step2).toEqual({
      ...staticValues,
      date: 2,
      kind: NOW
    })

  })

  it('should update date value on TICK action when kind was previously NOW', () => {

    const step0 = departureReducer(undefined, dummyAction)
    const step1 = departureReducer(step0, {
      type: REQUEST_NEW_DEPARTURE_TIME,
      date: 1,
      kind: NOW
    })
    const step2 = departureReducer(step1, {
      type: TICK,
      date: 3
    })

    expect(step2).toEqual({
      ...staticValues,
      date: 3,
      kind: NOW
    })

  })

  it('should not update date value on TICK action when kind was previously LATER', () => {

    const step0 = departureReducer(undefined, dummyAction)
    const step1 = departureReducer(step0, {
      type: REQUEST_NEW_DEPARTURE_TIME,
      date: 1,
      kind: LATER
    })
    const step2 = departureReducer(step1, {
      type: TICK,
      date: 3
    })

    expect(step2).toEqual({
      ...staticValues,
      date: 1,
      kind: LATER
    })

  })

})
