import { elementAcceptingRef } from "@mui/utils";

const initialState = {
    list: [],
    PR: [],
    logindata: [],
    info: [],
    patientsdata: [],
    staff: [],
    photos: [],

}
const Dental = (state = initialState, action) => {
    switch (action.type) {
        case "ADDCREATE": {

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
        }
            break;


        case "PROB": {

            const { problemid, problemdata } = action.payload;
            console.log(problemid);
            console.log(problemdata);
            return {
                ...state,
                PR: [
                    ...state.PR,
                    {
                        id: problemid,
                        data: problemdata
                    }]

            }
        }
        case "UPDATE": {
            const { idd, name } = action.payload

            for (let i = 0; i < state.list.length; i++) {
                console.log(state.list[i].id)

                if (idd === state.list[i].id) {
                    state.list[i].data = name;
                    return {
                        ...state,
                        list: [
                            ...state.list,

                        ]

                    }
                }
            }
        }
            break;

        case "DEL": {

            const de = state.list.filter((ele) => ele.id !== action.id);
            return {
                ...state,
                list: de
            }
        }
        case "PBDEL": {

            const del = state.PR.filter((ele) => ele.id !== action.id);
            return {
                ...state,
                PR: del
            }
        }

        case "LOG": {
            const { logdata } = action.payload
            let arr = '';
            let infoid = '';
            for (let i = 0; i < state.list.length; i++) {
                if (logdata.username === state.list[i].data.Username && logdata.password === state.list[i].data.password) {

                    arr = (state.list[i].data)
                    infoid = (state.list[i].id)


                }

            }
            return {
                ...state,

                logindata: [{
                    data: logdata
                }],
                info: [{
                    data: arr,
                    id: infoid,
                }]
            }
        }
        case "PATIENTSCREATE": {
            const { patientdata, ppid } = action.payload
            for (let i = 0; i < state.list.length; i++) {
                console.log("fgg");

                if (state.info[0].id === state.list[i].id) {
                    return {
                        ...state,

                        patientsdata: [
                            ...state.patientsdata,
                            {
                                id: state.list[i].id,
                                pdata: patientdata,
                                pid: ppid,
                                photos: [],
                            }]

                    }



                }

            }
        }
        case "PDELE": {
            const { pid } = action.payload
            const dele = state.patientsdata.filter((ele) => ele.pid !== pid);
            return {
                ...state,
                patientsdata: dele
            }
        }
        case "UPDATEPATIENTS": {
            const { upid, udata } = action.payload

            for (let i = 0; i < state.patientsdata.length; i++) {

                if (upid === state.patientsdata[i].pid) {
                    state.patientsdata[i].pdata = udata;
                    return {
                        ...state,
                        patientsdata: [
                            ...state.patientsdata,

                        ]

                    }
                }
            }
        }
            break;
        case "STAFF": {
            const { staffcreatedata, spid } = action.payload

            for (let i = 0; i < state.list.length; i++) {

                if (state.info[0].id === state.list[i].id) {

                    return {
                        ...state,

                        staff: [
                            ...state.staff,
                            {
                                id: state.list[i].id,
                                sdata: staffcreatedata,
                                sid: spid,
                            }]

                    }



                }

            }
        }
        case "LOGOUT": {
            state.logindata[0].data.username = "";
            state.logindata[0].data.password = "";
            return {
                ...state,

                logindata: [
                    ...state.logindata,
                ],
                info: [],
            }
        }
        case "UPDATESTAFF": {
            const { usid, sdata } = action.payload

            for (let i = 0; i < state.staff.length; i++) {

                if (usid === state.staff[i].sid) {
                    state.staff[i].sdata = sdata;
                    return {
                        ...state,
                        staff: [
                            ...state.staff,

                        ]

                    }
                }
            }
        }
            break;
        case "STAFFDELE": {
            const { sid } = action.payload
            const sdele = state.staff.filter((ele) => ele.sid !== sid);
            return {
                ...state,
                staff: sdele
            }
        }
        case "UPIMG": {
            const { imid, im, iid } = action.payload
            for (let i = 0; i < state.patientsdata.length; i++) {
                if (imid === state.patientsdata[i].pid) {
                    let ph = {
                        images: im,
                        imgid: iid,
                    }
                    state.patientsdata[i].photos.push(ph)
                    return {
                        ...state,
                        patientsdata: [
                            ...state.patientsdata,

                        ]

                    }
                }
            }
        }
            break;
        case "IMGDELE": {
            const { elem,imgdata,ppid } = action.payload
            for (let i = 0; i < state.patientsdata.length; i++) {
            const dele23 = imgdata.filter((ele) => ele.imgid != elem.imgid);
                        if (state.patientsdata[i].pid === ppid) {
                            state.patientsdata[i].photos = dele23
                        }}
            return {
                ...state,
                patientsdata: [
                    ...state.patientsdata,

                ]            }
          
       
        
    }
        
        default: return state

    }

}

export default Dental;