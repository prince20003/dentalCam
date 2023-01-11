import styled from "@emotion/styled"


// const Main = styled.div({
   
//   '& .main':{
//         width:'1220px',
// padding:'116px 16px 80px'  },
  
//   '& .mainbo':{
//     height:'auto',
//     width:'100%',

//     margin:'0 0px',
//   },
  
//   '& .mainbox':{
//     width:'100%',

//     margin:'10px 0',
//     padding:'0 0px',

//   },
  

//   '& .Createbtn':{
//   boxShadow: "0 8px 16px 0 rgb(0 171 85 / 24%);", 
//   width: '100%', 
//   maxWidth:'64px',
//   height: '36px', 
//   backgroundColor: '#0B3379',
//   fontFamily:'Public Sans,sans-serif',
//   fontWeight:'500',
//   borderRadius:'6px',
//   textTransform:'capitalize'

//   },
//   '& .Createbtn:hover':{
//     backgroundColor: '#007B55',

//   },
//   '& .Createbtn1':{
//   boxShadow: "0 8px 16px 0 rgb(0 171 85 / 24%);", 
//   width: '100%', 
//   maxWidth:'64px',
//   height: '36px', 
//   backgroundColor: '#0B3379',
//   fontFamily:'Public Sans,sans-serif',
//   fontWeight:'500',
//   borderRadius:'6px',
//   textTransform:'capitalize',
//   padding:'6px 16px',
//   marginLeft:'10px'

//   },
//   '& .Createbtn1:hover':{
//     backgroundColor: '#007B55',

//   },
  

  

// })
const Main = styled.div`${{
   
  '& .main':{
      padding:'116px 16px 80px ' 
     },
  
  '& .table':{
        width:'1220px',
     },
  
     
  
  '& .mainbox':{
    width:'100%',

    margin:'10px 0',
    padding:'0 0px',

  },
  

  '& .Createbtn':{
  boxShadow: "0 8px 16px 0 rgb(0 171 85 / 24%);", 
  width: '100%', 
  maxWidth:'64px',
  height: '36px', 
  backgroundColor: '#0B3379',
  fontFamily:'Public Sans,sans-serif',
  fontWeight:'500',
  borderRadius:'6px',
  textTransform:'capitalize'

  },
  '& .Createbtn:hover':{
    backgroundColor: '#007B55',

  },
  '& .Createbtn1':{
  boxShadow: "0 8px 16px 0 rgb(0 171 85 / 24%);", 
  width: '100%', 
  maxWidth:'64px',
  height: '36px', 
  backgroundColor: '#0B3379',
  fontFamily:'Public Sans,sans-serif',
  fontWeight:'500',
  borderRadius:'6px',
  textTransform:'capitalize',
  padding:'6px 16px',
  marginLeft:'10px'

  },
  '& .Createbtn1:hover':{
    backgroundColor: '#007B55',

  },
  

  

}}
@media (max-width:1440px) and (min-width:1026px){
  .table{
    width:1128px
}}
@media (max-width:1025px) and (min-width:770px){
  
  .table{
    width:990px  
  }

}
@media (max-width:769px) and (min-width:428px){
  .table{
    width:730px  
  }
}
@media (max-width:427px) and (min-width:377px){
  .table{
    width:390px ;
  }
}
@media (max-width:376px) and (min-width:323px){
  .table{
    width:335px  
  }

`
export default Main