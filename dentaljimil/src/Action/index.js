export const addcreate = (data) => {
    return {
        type: 'ADDCREATE',
        payload: {
            id: new Date().getTime().toString(),
           data:data

        }

    }

}

export const prob= (problem) => {
    console.log(problem);
    return {
        type: 'PROB',
        payload: {
            problemid:new Date().getTime().toString(),
           problemdata:problem

        }

    }

}

export const update = (id,data) => {
    console.log(id,data)
    return {
        type: 'UPDATE',
        payload:{
            idd:id,
            name:data,
        }

  }
}
export const dele = (id) => {
    console.log(id);
    return {
        type: 'DEL',
        id,
    }
}
export const pbdele = (id) => {
    return {
        type: 'PBDEL',
        id,
    }
}
export const log = (logdata) => {
    return {
        type: 'LOG',
        payload:{
            logdata    }

        ,
    }
}
export const patientscreate =(data)=>{
    console.log(data);
    return {
        type:'PATIENTSCREATE',
        payload:{
            ppid: new Date().getTime().toString(),

            patientdata:data
        }
    }
}
export const patientsdele =(pid)=>{
    return{
           type:'PDELE',
           payload:{
                pid,
           }
    }
}
export const updatepatients = (pid,data)=>{
    return {
        type :'UPDATEPATIENTS',
        payload:{
               upid:pid,
               udata:data,
        }
    }
}
export const staffcreate =(data)=>{
    return {
        type:'STAFF',
        payload:{
            spid: new Date().getTime().toString(),

            staffcreatedata:data
        }
    }
}
export const logout = ()=>{

    return {
        type:'LOGOUT'
    }
}
export const updatestaff = (sid,data)=>{
    return {
        type :'UPDATESTAFF',
        payload:{
               usid:sid,
               sdata:data,
        }
    }
}
export const staffdele =(sid)=>{
    return{
           type:'STAFFDELE',
           payload:{
                sid,
           }
    }
}
export const uplodeimg =(result,pid)=>{
    console.log(result,"dis")
    return{
        type:'UPIMG',
           payload:{
            iid: new Date().getTime().toString(),

               im:result,
               imid:pid,
           }
    }
}
export const imgdele =(elem,imgdata)=>{
    return{
           type:'IMGDELE',
           payload:{
                elem,
                imgdata,
           }
    }
}

