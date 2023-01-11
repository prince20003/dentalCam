import styled from "@emotion/styled";


const Profilestyle = styled.div`${{
    '& .mprofile': {
        paddingTop: '116px',
        paddingLeft: '16px',
        paddingRight: '16px',
        paddingBottom:'80px',
        width:'1224px',
    },

    '& .cell':{
       borderBottom:'1px solid rgba(241, 243, 244, 1)',
       fontFamily: 'Public Sans,sans-serif',
       fontWeight:'500',
       lineHeight:'1.5'
    },

    '& .cardc':{
        padding:'24px',
    }

}}
  @media (max-width:1445px) and (min-width:1027px){    
   
  }
  @media (max-width:1026px) and (min-width:775px){    
    .mprofile{
        width:1000px;
        padding-top:100px
    }
  }
  @media (max-width:770px) and (min-width:440px){    
    .mprofile{
        width:700px;
    }
  }
  @media (max-width:430px) and (min-width:390px){    
    
  }
  @media (max-width:380px) and (min-width:325px){    
    
  }
`


export default Profilestyle