import styled from "@emotion/styled"


const Main = styled.div({
   
  '& .main':{
padding:'122px 14px'  },
  
  '& .mainbo':{
    height:'336px',
    margin:'0 122px',
    display:'flex'
  },
  '& .back':{
   paddingTop:'6px',
   color:'#0B3379;'
  },
  '& .mainbox':{
    
    padding:'0 18px',

  },
  '& .had':{
    display:'flex',
    alignItems:'center'
  },
  '& .createcliniclogo':{
    fontFamily:'Public sans,sans-serif',
    fontSize:'32px',
    fontWeight:'700'
  },
  '& .Createbtn':{
  boxShadow: "0 8px 16px 0 rgb(0 171 85 / 24%);", 
  width: '100%', 
  height: '47px', 
  backgroundColor: '#0B3379',
  fontFamily:'Public Sans,sans-serif',
  fontWeight:'500',
  borderRadius:'8px',
  textTransform:'capitalize'

  },
  '& .Createbtn:hover':{
    backgroundColor: '#007B55',

  },
  

  

})
export default Main