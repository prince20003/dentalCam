import styled from "@emotion/styled";


const Contactstyled = styled.div({
    '& .main': {
        padding: '0px 14px'
    },
    '& .mainbo': {
        // height:'336px',
        // width:'400px',
        margin: '0 132px',
    },
    '& .mainbox': {
        display:'flex',
        justifyContent:'center',
        flexDirection:'column',
        padding: '0 18px',
    },
    '& .had': {
        display: 'flex',
        alignItems: 'center'
    },
    '& .createcliniclogo': {
        fontFamily: 'Public sans,sans-serif',
        fontSize: '24px',
        fontWeight: '700',
    },
    '& .title': {
        fontFamily:'Public Sans,sans-serif',
        background: 'linear-gradient(90deg, rgb(171, 48, 177) 0%, rgb(91, 114, 180) 70%)',
        WebkitBackgroundClip: 'text',
        color: 'transparent',
        
     },
    '& .logo1': {
        width: '150px',
        height: '150px',
    },
    '& .contactbox': {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        cursor:'pointer'
    }
})

export default Contactstyled