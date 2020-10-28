export const addInput = (val) => ({
    type: "ADD_INPUT",
    payload: val,
    id: Math.random()
})
export const delInput = (id) => ({
    type: "DEL_INPUT",
    payload: id,

})