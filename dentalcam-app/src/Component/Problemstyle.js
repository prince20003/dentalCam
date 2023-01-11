import styled from "@emotion/styled";


const Problemstyle = styled.div`${{
      '& .mainp': {
            paddingBottom: '80px',
            paddingTop: '116px',
            paddingLeft: '16px',
            paddingRight: '16px',
            // width: '1220px'
      },
      '& .tablew':{
            width:'1220px'
      }
}}
   @media (max-width:1445px) and (min-width:1026px){    
      .tablew {
            width:1120px
      }
    }
    @media (max-width:1025px) and (min-width:770px){    
      .tablew {
            width:986px
      }
    }
    @media (max-width:769px) and (min-width:428px){    
      .tablew {
            width:730px
      }
    }
    @media (max-width:427px) and (min-width:377px){    
      .tablew {
            width:auto
      }
    }
    @media (max-width:376px) and (min-width:323px){    
      .tablew {
            width:340px
      }
    }
`



export default Problemstyle