import styled from "@emotion/styled"


// const Menu = styled.div({
//   '& .main':{
// width:'100px',
// display:'flex',
// flexDirection:'column',
//   },
//   '& .menu':{

// display:'flex',
// flexDirection:'column',
// justifyContent:'center',
// alignItems:'center',
// padding:'15px'

//   },
//   '& .Menulogo':{
// height:'100px',
// width:'100px',

//   },
//   '& .adminbox':{
//     height:'41px',
//     width:'200px',
//     marginTop:'18px',
//     padding: '17px 20px',
//     borderRadius:'12px',
//     backgroundColor:'#F4F6F8',
//     fontSize:'14px',
//     textDecoration:'none',
//     color:'black'


//   },
//   '& .adminboxicon':{
//     marginLeft:'5px',
//     fontFamily:'Public Sans,sans-serif',
//     fontWeight:'500',
//   },
//   '& .datatable':{
//     maxWidth:'1239.2px',
//     padding:'116px 16px 80px',
//   },
//   '& .datatablesearch':{
//     width:'300px',
//   },
//   '& .Createbtn':{
//     boxShadow: "0 8px 16px 0 rgb(0 171 85 / 24%);", 
//     height: '36px', 
//     width:'77.18',
//     backgroundColor: '#0B3379',
//     fontFamily:'Public Sans,sans-serif',
//     fontWeight:'500',
//     borderRadius:'8px',
//     textTransform:'capitalize',
//     padding:'6px 16px',
   
//     },
//     '& .Createbtn:hover':{
//       backgroundColor: '#007B55',
  
//     },
//     '& .ff':{
//    color:'#637381'  
//     },
//     '& .nav':{
//    textDecoration:'none'  
//     },
//     '.active .abcd':{
//       backgroundColor:'#0B3379',
//     },
//     '.active .adminboxicon':{
//       color:'white'
//     },
//     '.active .ff':{
//       color:'white'
//     },
    
//   })
const Menu = styled.div`${{
  '& .main':{
width:'100px',
display:'flex',
flexDirection:'column',
  },
  '& .menu':{

display:'flex',
flexDirection:'column',
justifyContent:'center',
alignItems:'center',
padding:'15px'

  },
  '& .Menulogo':{
height:'100px',
width:'100px',

  },
  '& .adminbox':{
    height:'41px',
    width:'200px',
    marginTop:'18px',
    padding: '17px 20px',
    borderRadius:'12px',
    backgroundColor:'#F4F6F8',
    fontSize:'14px',
    textDecoration:'none',
    color:'black'


  },
  '& .adminboxicon':{
    marginLeft:'5px',
    fontFamily:'Public Sans,sans-serif',
    fontWeight:'500',
  },
  '& .datatable':{
    maxWidth:'1239.2px',
    padding:'116px 16px 80px',
  },
  '& .datatablesearch':{
    width:'300px',
  },
  '& .Createbtn':{
    boxShadow: "0 8px 16px 0 rgb(0 171 85 / 24%);", 
    height: '36px', 
    width:'77.18',
    backgroundColor: '#0B3379',
    fontFamily:'Public Sans,sans-serif',
    fontWeight:'500',
    borderRadius:'8px',
    textTransform:'capitalize',
    padding:'6px 16px',
   
    },
    '& .Createbtn:hover':{
      backgroundColor: '#007B55',
  
    },
    '& .ff':{
   color:'#637381'  
    },
    '& .nav':{
   textDecoration:'none'  
    },
    '.active .abcd':{
      backgroundColor:'#0B3379',
    },
    '.active .adminboxicon':{
      color:'white'
    },
    '.active .ff':{
      color:'white'
    },
    '& .table':{
      width:'1220px'  
       },
    
  }}
  @media (max-width:1440px) and (min-width:1030px){
    .table{
      width:1128px
  }}
  @media (max-width:1025px) and (min-width:770px){
    
    .table{
      width:990px  
    }
  
  }
  @media (max-width:768px) and (min-width:428px){
    .table{
      width:730px  
    }
  }
  @media (max-width:426px) and (min-width:376px){
    .table{
      width:390px  
    }
  }
  @media (max-width:376px) and (min-width:323px){
    .table{
      width:335px  
    }
  `


export default Menu;