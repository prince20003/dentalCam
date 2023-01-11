import styled from "@emotion/styled";


const Headerstyle = styled.div({
    '& .admin':{
        margin:'12px 0',
        padding:'0 20px',
        fontSize:'16px',
        fontWeight:'600',
        fontFamily:'Public Sans,sans-serif',
    },
    '& .menu':{
        fontSize:'14px',
        fontFamily:'Public Sans, sans-serif',
        fontWeight:'500',
        padding:'8px 20px'
    },
    '& .log':{
        padding:'12px 16px 16px'
    },
    '& .logout':{
        color:'#0000EE',
        border:  '1px solid rgba(145, 158, 171, 0.32)',
        width:'186px',
        borderRadius:'8px',
        fontSize:'14px',
        fontFamily:'Public Sans, sans-serif',
        fontWeight:'800',
        textTransform:'capitalize',
    },
})

export default Headerstyle