import styled from "@emotion/styled"


const Logmain = styled.div`${{
  '& .main':{
display:'flex',
height:'100vh'
  },
  
  '& .den':{
    background: 'linear-gradient(90deg, rgb(171, 48, 177) 0%, rgb(91, 114, 180) 70%) text' ,
    WebkitTextFillColor: 'transparent'} ,

    '& .mainbox':{
    width:'100%',
    maxWidth: '464px',
    height:'681px',
    display:'flex',
    margin: '16px 0px 16px 16px',
        flexDirection:'column',
    boxShadow: '0 0 2px 0 rgb(145 158 171 / 24%), 0 16px 32px -4px rgb(145 158 171 / 24%)',
    borderRadius:'16px'
  },
  
    '& .logo':{
      height: '232px',
    width: '232px',
    margin:'0 25%',
    marginTop:'20px'
  },
    '& .lo':{
      height: '348px',
    width: '464px',
  },
  
    '& .textfil2':{
      display:'flex',
      flexDirection:'column',
      justifyContent:'center',
      width:'100%',
     maxWidth:'480px',
     height:'auto',
    margin:'auto',
    padding:'96px 0'
  },
  
    '& .form':{
      width:'500px',
      
    marginTop:'68px'
    },
    '& .log':{
      marginTop: '17px', 
    boxShadow: "0 8px 16px 0 rgb(0 171 85 / 24%);", 
    width: '480px', height: '47px', 
    backgroundColor: '#0B3379',
    fontFamily:'Public Sans,sans-serif',
    fontWeight:'500',
    textTransform:'capitalize'

    },
    '& .log:hover':{
      backgroundColor: '#007B55',

    }
  
}}
@media (max-width:1440px) and (min-width:1026px){
  
}
@media (max-width:1025px) and (min-width:770px){
  
 
}
@media (max-width:769px) and (min-width:428px){
  '& .mainbox':{
    width:'100%',
    maxWidth: '464px',
    height:'681px',
    
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
export default Logmain