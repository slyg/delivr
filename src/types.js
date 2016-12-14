// @flow
export type Kind = 'NOW' | 'LATER'
export type Choice = { kind: Kind, label: string }
export type Coordinates = [number, number]
export type Step = { label: string, coordinates: Coordinates }
export type Suggestion = string
