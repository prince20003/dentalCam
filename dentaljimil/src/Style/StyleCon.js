import styled from "@emotion/styled"


// const Main = styled.div({
   
//   '& .main':{
// padding:'122px 14px'  },
  
//   '& .mainbo':{
//     height:'336px',
//     margin:'0 122px',
//     display:'flex'
//   },
//   '& .back':{
//    paddingTop:'6px',
//    color:'#0B3379;'
//   },
//   '& .mainbox':{
    
//     padding:'0 18px',

//   },
//   '& .had':{
//     display:'flex',
//     alignItems:'center'
//   },
//   '& .createcliniclogo':{
//     fontFamily:'Public sans,sans-serif',
//     fontSize:'32px',
//     fontWeight:'700'
//   },
//   '& .Createbtn':{
//   boxShadow: "0 8px 16px 0 rgb(0 171 85 / 24%);", 
//   width: '100%', 
//   height: '47px', 
//   backgroundColor: '#0B3379',
//   fontFamily:'Public Sans,sans-serif',
//   fontWeight:'500',
//   borderRadius:'8px',
//   textTransform:'capitalize'

//   },
//   '& .Createbtn:hover':{
//     backgroundColor: '#007B55',

//   },
  

  

// })
const Main = styled.div`${{
   
  '& .main':{
padding:'122px 14px'  },
  
  '& .mainbo':{
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
  
}}
@media (max-width:1024px) and (min-width:770px){
  .mainbo{
     margin : 0 10px
  }
  .main{
    padding : 95px 14px  
  }
}
@media (max-width:768px) and (min-width:428px){
  .mainbo{
     margin : 0 50px 0 30px
  }
  .main{
    padding : 95px 14px  
  }
}
@media (max-width:426px) and (min-width:376px){
  .mainbo{
     margin : 0px
  }
  .main{
    padding : 90px 0px  
  }
}
@media (max-width:376px) and (min-width:321px){
  .mainbo{
     margin : 0px
  }
  .main{
    padding : 90px 0px  
  }
}

}
@media (max-width:1440px) and (min-width:1030px){
  .mainbo{
    margin : 0 75px
  }
}


`
export default Main