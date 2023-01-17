export const addUser = (userData) =>{
    return {
        type : "ADD_USER",
        payload : {
            id : new Date().getTime().toString(),
            data : userData
        }
    }
}


export const editUser = (id,update) =>{
    // console.log(inputData)
    return {
        type : "EDIT_USER",
        payload : {
            idd : id,
           name: update
        }
    }
}

export const deleteUser = (id) =>{
    return {
        type : "DELETE_User",
        id
    }
}
export const deleteProblem = (id) =>{
    return {
        type : "DELETE_Problem",
        id
    }
}




export const addProblem = (problem) =>{
    return {
        type : "ADD_Problem",
        payload : {
            ide : new Date().getTime().toString(),
            data1 : problem
        }
    }
}