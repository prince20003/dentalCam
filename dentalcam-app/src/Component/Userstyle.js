import styled from "@emotion/styled";

const Userstyle = styled.div`${{
  '& .main': {
    padding: '122px 14px'
  },
  '& .mainbo': {
    // height:'336px',
    // width:'400px',
    margin: '0 122px',
    display: 'flex'
  },
  '& .back': {
    paddingTop: '6px',
    color: '#0B3379;'
  },
  '& .mainbox': {
    padding: '0 18px',
  },
  '& .had': {
    display: 'flex',
    alignItems: 'center'
  },
  '& .createcliniclogo': {
    fontFamily: 'Public sans,sans-serif',
    fontSize: '32px',
    fontWeight: '700'
  },

}}
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
    padding : 95px 14px
  }
}
@media (max-width:769px) and (min-width:428px){    
  .mainbo{
     margin : 0px 50px 0px 30px
  }
  .main{
    padding : 95px 14px
  }
}
@media (max-width:427px) and (min-width:377px){    
  .mainbo{
     margin : 0px 
  }
  .main{
    padding : 95px 14px
  }
}
@media (max-width:376px) and (min-width:325px){    
  .mainbo{
     margin : 0px 
  }
  .main{
    padding : 95px 10px
  }
}
`

export default Userstyle;