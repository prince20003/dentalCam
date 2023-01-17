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
    return {
        type: 'DEL',
        id,
    }
}