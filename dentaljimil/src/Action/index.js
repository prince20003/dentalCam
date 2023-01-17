export const addcreate = (data) => {
    return {
        type: 'ADDCREATE',
        payload: {
            id: new Date().getTime().toString(),
           data:data

        }

    }

}
export const view = (id,data) => {
    console.log(data);
    return {
        type: 'VIEW',
        payload: {
            viewid:id,
           viewdata:data

        }

    }

}

