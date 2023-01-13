import styled from "@emotion/styled";


const Contactstyled = styled.div`${{
    '& .main': {
        padding: '0px 14px'
    },
    '& .mainbo': {
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
}}
// @media (max-width:1025px) and (min-width:770px){
//     .main{
//         padding:0px
//     }
//     .mainbo{
//         margin : 0px 50px 
//     }
// }
// @media (max-width:769px) and (min-width:480px){
//     .main{
//         padding:0px
//     }
//     .mainbo{
//         margin : 0px 60px;
//         padding:0px 20px 
//     }
// }
// @media (max-width:4px) and (min-width:){
//     .main{
//         padding:0px
//     }
//     .mainbo{
//         margin : 0px 60px;
//         padding:0px 20px 
//     }
// }

@media (max-width:1445px) and (min-width:1026px){    
    .mainbo{
       margin : 0px 75px
    }
  }
  @media (max-width:1025px) and (min-width:770px){    
    .mainbo{
       margin : 0px 10px
    }
    .main{
    padding-top:40px;
    padding-left:14px;
    padding-right:14px;
    padding-bottom:70px;
    }
  }
  @media (max-width:769px) and (min-width:428px){    
    .mainbo{
       margin : 0px 30px 0px 30px
    }
    .main{
      padding : 20px 14px 70px 14px 
    }
  }
  @media (max-width:427px) and (min-width:377px){    
    .mainbo{
       margin : 0px 
    }
    .main{
      padding : 10px 14px 90px 14px
    }
  }
  @media (max-width:376px) and (min-width:325px){    
    .mainbo{
       margin : 0px 
    }
    .main{
      padding : 5px 10px 90px 10px
    }
  }


`

export default Contactstyled