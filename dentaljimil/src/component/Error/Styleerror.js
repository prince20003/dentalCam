import styled from "@emotion/styled"


const Main = styled.div`${{
   
  '& .main':{
padding:'122px 14px'  },
  
  '& .mainbo':{
    margin:'0 122px',
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    textAlign:'center'
  },
  '& .box':{
    margin:'0px 202px',
    maxWidth:'480px',
    textAlign:'center',
    display:'flex',
    flexDirection:'column',
    justifyContent:'center',
    alignItems:'center',
  },
  
  '& .img404':{
height:'260px',
margin:'30px',
  },
  
  '& .btn':{
    boxShadow: "0 8px 16px 0 rgb(0 171 85 / 24%);", 
    padding:'8px 22px',  
    height: '48px', 
    backgroundColor: '#0B3379',
    fontFamily:'Public Sans,sans-serif',
    fontWeight:'700',
    borderRadius:'8px',
    textTransform:'capitalize',
    color:'white'
  
    },
    '& .btn:hover':{
      backgroundColor: '#007B55',
  
    },
  
  

  

}}
@media (max-width:1025px) and (min-width:770px) {
    
      .mainbo{
        margin:0px
        
      }
}
@media (max-width:768px) {
    
      .mainbo{
        margin:0px
        
      }
      .box{
        margin:0 100px;
        max-width:480px
        
      }
}
@media (max-width:426px) and (min-width:376px){
    .mainbo{
        margin:0px
        
      }
      .box{
        margin:0 10px;

        max-width:340px
        
      }
      .img404{
        height:200px;
          }
  }
  @media (max-width:376px) and (min-width:323px){
    .mainbo{
        margin:0px
        
      }
      .box{
        margin:0 5px;

        max-width:300px
        
      }
      .img404{
        height:200px;
        margin:30px
          }
    }
`
export default Main