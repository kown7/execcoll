import json from "./assets/data.json"


export interface ExerciseItem {
  uuid: string;
  author: string;
  title: string;
  headers: Array<string>;  // string of uuid
  license?: string
  content: string
}

export interface FilterExercises {
  author?: string;
}

export function filterExercises(filter?: FilterExercises) {
    // expose managed state as return value
    return json['exercises']
}
