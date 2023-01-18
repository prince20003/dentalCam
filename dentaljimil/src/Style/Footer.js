import styled from "@emotion/styled"


const Fo = styled.div({
  
  '& .main':{
display:'flex',
minHeight:'53px',
height:'auto',
maxWidth:'100vw',
width:'100%',
bottom:'0px',
position:'fixed',
zIndex:'2000',
alignItems:'center',
justifyContent:'space-between'

  },
  
 
  '& .delink':{
    textDecoration:'none'
} ,
  '& .a':{
   marginLeft:'30px',
   fontFamily:'Public Sans,sans-serif',
   fontWeight:400,
   

} ,
  '& a':{
   textDecoration:"none",
   color:'#0B3379',
  },
 
  '& .aa':{
    float:'right',
    width:'60%',
    marginLeft:'780px',
    textDecoration:'none'
 
} ,
  '& .footerline':{
   margin:'0 10px',
   color:'rgb(11,51,121)'
 
} ,


  
}
)



export default Fo