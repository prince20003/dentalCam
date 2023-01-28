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


export const LoginD = (val) =>{
    return {
        type : "LOGIN",
        payload : {
            val,
        }
    }
}

export const Addpatient = (patientdata) =>{
    console.log(patientdata)
    return {
        type : "ADD_PATIENT",
        payload :{
            ppid : new Date().getTime().toString(),
            pdata : patientdata
        }
    }
}

export const editPatient = (updatep,pid) =>{
    return {
        type : "EDIT_PATI",
        payload : {
            idd1 : pid,
           name1: updatep
        }
    }
}


export const patientdele = (pid) =>{
   return{
    type : "DELE_PATI",
    payload :{
        pid,
    }
   }
}

export const addstaff = (staffData) =>{
    return{
        type : 'ADD_STAFF',
        payload : {
            spid : new Date().getTime().toString(),
            staffdata : staffData
        }
    }
}

export const editStaff = (updates,sid) =>{
    return{
        type : 'EDIT_STAFF',
        payload : {
            idd2 : sid,
           name2: updates
        }
    }
}

export const staffdele = (sid) =>{
    return{
     type : "DELE_STAFF",
     payload :{
        sid,
     }
    }
 }

export const uploadimg = (result,pid)=>{
   return{
    type:"UPLOAD_IMG",
    payload:{
        iid : new Date().getTime().toString(),
        image : result,
        imid : pid,
    }
   }
}

export const imgdele = (elem,displayimg,pid) =>{
    console.log(pid,"pid")
   return{
    type:'IMG_DELE',
    payload:{
        elem,
        displayimg,
        imdid : pid,
    }
   }
}

export const logout = () =>{
    return{
        type : "LOGOUT",
    }
} 