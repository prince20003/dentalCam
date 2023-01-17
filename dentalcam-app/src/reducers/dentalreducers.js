const initialData = {
    list: [],
    problem: [],
}

const dentalreducers = (state = initialData, action) => {
    switch (action.type) {
        case "ADD_USER":
            const { id, data } = action.payload;
            return {
                ...state,
                list: [
                    ...state.list,
                    {
                        id: id,
                        data: data
                    }
                ]
            }

        case "DELETE_User":

            const newList = state.list.filter((elem) => elem.id !== action.id)

            return {
                ...state,
                list: newList
            }
            
        case "DELETE_Problem":

            const newProblem = state.problem.filter((elem) => elem.id !== action.id)
            return {
                ...state,
                problem: newProblem
            }

        case "ADD_Problem":
            const { ide, data1 } = action.payload;
            return {
                ...state,
                problem: [
                    ...state.problem,
                    {
                        id: ide,
                        data: data1
                    }
                ]
            }

        case "EDIT_USER":
            const { idd, name } = action.payload
            for (let i = 0; i < state.list.length; i++) {
                if (state.list[i].id === idd) {
                    console.log("mk")
                    state.list[i].data = name
                    return {
                        ...state,
                        list: [...state.list,]
                    }
                }
            }
            break;


        default: return state;
    }
}

export default dentalreducers
