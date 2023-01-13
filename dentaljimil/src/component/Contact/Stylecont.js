import styled from "@emotion/styled"


const Main = styled.div`${{
   
  '& .main':{
padding:'0px 14px'  },
  
  '& .mainbo':{
    height:'auto',
    margin:'0 132px',
    
  },
  
  '& .mainbox':{
    display:'flex',
    justifyContent:'center',
    flexDirection:'column',
    padding:'0 18px',

  },
  '& .had':{
    display:'flex',
    alignItems:'center'
  },
  '& .createcliniclogo':{
    fontFamily:'Public sans,sans-serif',
    fontSize:'24px',
    fontWeight:'700',
    marginTop:'7px'
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
  
  '& .logo':{
    height: '150px',
  width: '150px',
  
},
  
  
  '& .boxlogo':{
    
  display:'flex',
  justifyContent:'center',
  alignItems:'center',
},
  

}}
@media (max-width:1024px) and (min-width:770px){
  .mainbo{
     margin : 0 10px
  }
  .main{
    padding : 0px 14px 95px 14px
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
    padding : 0 0 90px 0px  
  }
}
@media (max-width:376px) and (min-width:321px){
  .mainbo{
     margin : 0px
  }
  .main{
    padding : 0 0 75px 0px  
  }
}

}
@media (max-width:1441px) and (min-width:1030px){
  .mainbo{
    padding:0px 0 75px 0;
  }
  
}
`
export default Main