
const initialState = {
    list: [],
    view:[]

}
const Dental = (state = initialState, action) => {
    switch (action.type) {
        case "ADDCREATE":

            const { id, data } = action.payload;

            if (data === "") {
                alert("Please Enter The List")
            } else {


                return {
                    ...state,
                    list: [
                        ...state.list,
                        {
                            id: id,
                            data:data,

                        }
                    ]
                }
            }

            break;
        case "VIEW":
            const {viewid,viewdata} = action.payload
               return {
                ...state,
                view:[
                    
                   {id:viewid,
                    data:viewdata 
                   }
                ]
               }


        // case "DEL":

        //     const de = state.list.filter((ele) => ele.id !== action.id);
        //     return {
        //         ...state,
        //         list: de
        //     }
        // case "ALL":

        //     return {
        //         ...state,
        //         list: []
        //     }
        // case "EDI":
        //     const { idd, name } = action.payload
        //     for (let i = 0; i < state.list.length; i++) {
        //         if (idd === state.list[i].id) {
        //             console.log("Dd")
        //             state.list[i].data = name;
        //             return {
        //                 ...state,
        //                 list: [
        //                     ...state.list,

        //                 ]

        //             }
        //         }
        //     }


        //     break;
        // case "CHEK":
            // let todoArray = [];
            // const { iddd } = action.payload
            // state.list.forEach((todo) => {
            //     console.log(todo.id)
            //     if (todo.id === iddd) {
            //         if (todo.completed === false) {
            //             todo.completed = true;

            //         }
            //         else if (todo.completed === true) {
            //             todo.completed = false;
            //         }




            //         todoArray.push(todo);
            //     }
            // })
            // break
        default: return state

    }

}

export default Dental;