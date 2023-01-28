const initialData = {
    list: [],
    problem: [],
    LoginData: [],
    userinfo: [],
    PatientDATA: [],
    Staff: [],
    photos: [],
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

        case "LOGIN":
            const { val } = action.payload;
            let useri = ''
            let userinfoid = ''
            for (let i = 0; i < state.list.length; i++) {
                if (val.username === state.list[i].data.username && val.password === state.list[i].data.password) {
                    useri = (state.list[i].data)
                    userinfoid = (state.list[i].id)
                }
            }
            return {
                ...state,
                LoginData: [
                    {
                        data: val
                    }
                ],
                userinfo: [{
                    userData: useri,
                    id: userinfoid
                }]
            }

        case "ADD_PATIENT": {
            const { pdata, ppid } = action.payload
            for (let j = 0; j < state.list.length; j++) {
                if (state.userinfo[0].id === state.list[j].id) {
                    return {
                        ...state,
                        PatientDATA: [
                            ...state.PatientDATA,
                            {
                                id: state.list[j].id,
                                patientDAta: pdata,
                                pid: ppid,
                                photos: []
                            }]
                    }
                }
            }
        }
            break;
        case "DELE_PATI": {
            const { pid } = action.payload
            const dele = state.PatientDATA.filter((ele) => ele.pid !== pid)
            return {
                ...state,
                PatientDATA: dele
            }
        }
        case "DELE_STAFF": {
            const { sid } = action.payload
            const dele1 = state.Staff.filter((ele) => ele.sid !== sid)
            return {
                ...state,
                Staff: dele1
            }
        }

        case "EDIT_PATI":
            const { idd1, name1 } = action.payload

            for (let i = 0; i < state.PatientDATA.length; i++) {
                console.log(state.PatientDATA[i].pid)
                console.log(idd1);
                if (state.PatientDATA[i].pid === idd1) {
                    console.log("mk")
                    state.PatientDATA[i].patientDAta = name1
                    return {
                        ...state,
                        PatientDATA: [...state.PatientDATA,]
                    }
                }
            }
            break;

        case "EDIT_STAFF":
            const { idd2, name2 } = action.payload

            for (let i = 0; i < state.Staff.length; i++) {
                console.log(state.Staff[i].sid)
                if (state.Staff[i].sid === idd2) {
                    console.log("mk")
                    state.Staff[i].staffDATA = name2
                    return {
                        ...state,
                        Staff: [...state.staffDATA,]
                    }
                }
            }
            break;

        case "LOGOUT": {
            state.LoginData[0].data.username = "";
            state.LoginData[0].data.password = "";
            return {
                ...state,
                LoginData: [
                    ...state.LoginData,
                ],
                userinfo: []
            }
        }

        case "ADD_STAFF": {
            const { staffdata, spid } = action.payload

            for (let p = 0; p < state.list.length; p++) {
                if (state.userinfo[0].id === state.list[p].id) {
                    return {
                        ...state,
                        Staff: [
                            ...state.Staff,
                            {
                                id: state.list[p].id,
                                staffDATA: staffdata,
                                sid: spid,
                            }]
                    }
                }
            }
        }
            break;

        case "UPLOAD_IMG": {
            const { iid, image, imid } = action.payload
            for (let p = 0; p < state.PatientDATA.length; p++) {
                if (imid === state.PatientDATA[p].pid) {
                    // console.log(imid)
                    let ph = {
                        images: image,
                        imgid: iid
                    }
                    console.log(state.PatientDATA[p].pid)
                    // console.log(image)
                    state.PatientDATA[p].photos.push(ph)
                    return {
                        ...state,
                        PatientDATA: [
                            ...state.PatientDATA
                        ]
                    }
                }
            }
        }
            break;

        case 'IMG_DELE': {
            const { elem, displayimg, imdid } = action.payload
            console.log(elem, "reducer-elem")
            for (let d = 0; d < state.PatientDATA.length; d++) {
                console.log(displayimg, "displayimg-reducer");
                const dele23 = displayimg.filter((ele) => ele.imgid !== elem.imgid);
                console.log(imdid,"imdid");
                console.log(state.PatientDATA[d].pid,"state.PatientDATA[d].pid")
                // if (imdid === state.PatientDATA[d].pid) {
                if (state.PatientDATA[d].pid === imdid) {
                    state.PatientDATA[d].photos = dele23
                }
            }
            return {
                ...state,
                PatientDATA: [
                    ...state.PatientDATA,
                ]
            }
        }
        //   break;

        default: return state;
    }
}

export default dentalreducers
