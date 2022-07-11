const initialState = 0;

const changeCounter = (state=initialState , action) =>{
    switch(action.type){
        case 'increment': return state + 2;
        case 'decrement': return state -1;
        default: return state;
    }
}

export default changeCounter;