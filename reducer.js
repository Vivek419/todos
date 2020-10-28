
const initial = {
    data: [],
}
const todo = (state = initial, action) => {
    switch (action.type) {
        case 'ADD_INPUT':
            return {
                ...state,
                data: [...state.data, { val: action.payload, id: action.id }],
            };
        case 'DEL_INPUT':
            const data = state.data.filter((item) => item.id !== action.payload)
            return {
                ...state,
                data: data
            }
        default:
            return state
    }
};
export default todo;