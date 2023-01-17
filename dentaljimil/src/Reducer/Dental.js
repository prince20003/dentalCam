
const initialState = {
    list: [],
    PR: [],

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
                            data: data,

                        }
                    ]
                }
            }

            break;


            case "PROB":

            const { problemid, problemdata } = action.payload;
            console.log(problemid);
            console.log(problemdata);
            return {
                ...state,
                PR:[
                    ...state.PR,
                    {
                    id : problemid,
                    data : problemdata
                }]

            }

            case "UPDATE":
                const {idd,name} = action.payload

                 for(let i=0; i<state.list.length ; i++){
                    console.log(state.list[i].id)
                    console.log(idd)

                     if(idd === state.list[i].id){
                       state.list[i].data = name;
                    return{...state,
                     list:[
                         ...state.list,
                       
                     ]
         
                    }
                     }
                  }
                  break;

                  case "DEL":

                  const de = state.list.filter((ele)=>ele.id !== action.id);
                  return{
                        ...state,
                        list : de
                  }


        
        default: return state

    }

}

export default Dental;