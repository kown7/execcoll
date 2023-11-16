import json from "./assets/data.json"

export function filterExercises(filter) {
    // expose managed state as return value
    return json['exercises']
}
