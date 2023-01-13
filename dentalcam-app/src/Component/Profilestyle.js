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
  @media (max-width:1027px) and (min-width:775px){    
    .mprofile{
        width:1000px;
        padding-top:100px;
        
    }
  }
  @media (max-width:775px) and (min-width:430px){    
    .mprofile{
        width:600px;
        padding-left: 90px;
    }
  }
  @media (max-width:430px) and (min-width:390px){    
     .mprofile{
      width:380px;
      padding-left:20px;
     }
  }
  @media (max-width:390px) and (min-width:360px){    
    .mprofile{
      width:300px;
      padding-left:40px;
     }
  }
`


export default Profilestyle