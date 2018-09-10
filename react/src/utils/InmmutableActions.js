import { Map as map } from 'immutable';

function VecInmutable(model, array) {
    return array.map(item => model(item))
}

function ConvertVecInmutableToObjectfull(array, id, initial) {
    return (
        array.reduce(
          (requests, request) => requests.set(request[id], map(request)),
          initial,
        )
    )
}
export {
    VecInmutable,
    ConvertVecInmutableToObjectfull,
}