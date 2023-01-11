import styled from "@emotion/styled";

const FooterStyle = styled.div`${{
    '& .footer': {
        width: '100%',
        display: 'flex',
        justifyContent: 'space-between',
        padding: '18px 0px',
        backgroundColor: 'white',
        alignItems: 'center',
        position: 'fixed',
        zIndex: '1202',
        bottom: '0',
        borderTop: '1px solid rgba(145, 158, 171, 0.24)',
        fontFamily:'Public Sans,sans-serif',
        fontWeight:'400'
    },
    '& .copy':{
       paddingLeft:"30px"
    },
    '& .tc':{
       paddingRight:"30px"
    },
    '& a': {
       textDecoration:'none',
       color:'#0B3379',
    },
    '& .footerline': {
        margin: "0px 10px", 
        color: "rgb(11, 51, 121)",
    },

}}
@media (max-width:430px){
    .footer{
        line-height:1.5
     }

     .sign{
        font-size: 20px
    }   
}
@media (max-width:380px){
    .footer{
        line-height:1.5
     }

     .sign{
        font-size: 20px
    }   
     .copy{
        padding-left:12px
    }   
     .tc{
        padding-left: 10px
    }   
}



`

export default FooterStyle;