import styled from "@emotion/styled";

const Slidbarstyle = styled.div`${{
    '& .blogo': {
        padding: '15px 30%'
    },
    '& .logo': {
        width: '100px',
        height: '100px',
    },
    '& .title': {
        fontFamily: 'Public Sans,sans-serif',
        background: 'linear-gradient(90deg, rgb(171, 48, 177) 0%, rgb(91, 114, 180) 70%)',
        WebkitBackgroundClip: 'text',
        color: 'transparent',
    },
    '& .admin': {
        marginBottom: '40px',
        marginLeft: '20px',
        marginRight: '20px',
    },
    '& .ad': {
        padding: '16px 20px',
        borderRadius: '12px',
        backgroundColor: '#F4F6F8',
        fontWeight: '500'
    },
    '& .profile': {
        margin: 0,
        lineHeight: '1.5',
        fontSize: '12px',
        fontFamily: 'Public Sans, sans - serif',
        fontWeight: '400',
        color: '#637381',
    },
    // '& .listext': {
    //     fontFamily: 'Public Sans, sans - serif',
    //     fontWeight: '400',
    //     color: '#637381',
    //     // fontSize: '10px',
    //     textDecoration: 'none'
    // },
    // '& .listitem': {
    //     paddingLeft: '25px'
    // },

    '.active .listitem': {
        backgroundColor: "#0B3379",
    },
    '.active .listicon': {
        color: "white",
    },
    '.active .listext': {
        color: "white",
        textDecoration: 'none'
    },
    ' & .listicon': {
        color: '#637381'
    },

    '& .data': {
        paddingTop: '116px',
        paddingLeft: '16px',
        paddingRight: '16px',
        paddingBottom: '80px',
        width: '1207px'
    },
    '& .search': {
        display: 'flex',
        width: '100%',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    '& .sea': {
        borderRadius: '8px',
        fontFamily: 'Public Sans, sans-serif',
    },
    '& .iconch': {
        textDecoration: 'none',
        marginRight: '20px',
        color: '#0B3379'
    },
    '& .errorico': {
        color: '#0B3379',
        width: '1em',
        height: '1em',
    },
}}

`


export default Slidbarstyle;