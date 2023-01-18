import styled from "@emotion/styled"

const Main = styled.div`${{
   
    '& .main':{
  padding:'122px 14px'  },
    
    '& .mainbo':{
      margin:'0 22px',
      display:'flex',
      width:'1039.2px',
      justifyContent:'center',
    },
    '& .back':{
     paddingTop:'6px',
     color:'#0B3379'
    },
    '& .mainbox':{
      
      padding:'0 18px',
  
    },
    '& .createcliniclogo':{
        fontFamily:'Public sans,sans-serif',
        fontSize:'32px',
        fontWeight:'700'
      },
    '& .paper':{
        padding:'24px',
        paddingTop:'35px',
       width:'503px',
       lineHeight:'2rem',
       borderRadius:'8px',
        boxShadow:'0 0 2px 0 rgb(145 158 171 / 24%), 0 16px 32px -4px rgb(145 158 171 / 24%)',
      },
      '& .bt':{
        display:'flex',
        justifyContent:'space-between'
      },
    '& .updatebtn':{
        backgroundColor:'#0B3379',
        width:'240px',
        fontFamily:'Public sans,sans-serif',
        textTransform:'capitalize',
        borderRadius:'8px',
        boxShadow:'0px 3px 1px -2px rgb(145 158 171 / 20%), 0px 2px 2px 0px rgb(145 158 171 / 14%), 0px 1px 5px 0px rgb(145 158 171 / 12%)',
        boxShadow:'0 8px 16px 0 rgb(0 171 85 / 24%)',
        fontWeight:'700'

    },
    '& .updatebtn:hover':{
backgroundColor:'#007B55',
boxShadow:'0px 0px 0px -0px rgb(145 158 171 / 20%), 0px 0px 0px 0px rgb(145 158 171 / 14%), 0px 0px 0px 0px rgb(145 158 171 / 12%)',
boxShadow:'0 0px 0px 0 rgb(0 171 85 / 24%)',
},
    '& .delbtn':{
        backgroundColor:'red',
        width:'240px',
        borderRadius:'8px',
        textTransform:'capitalize',
        fontWeight:'700',
        fontFamily:'Public sans,sans-serif',

        boxShadow:'0px 3px 1px -2px rgb(145 158 171 / 20%), 0px 2px 2px 0px rgb(145 158 171 / 14%), 0px 1px 5px 0px rgb(145 158 171 / 12%)',
        boxShadow:'0 8px 16px 0 rgb(0 171 85 / 24%)'

    },
    '& .delbtn:hover':{
        backgroundColor:'red',

        boxShadow:'0px 0px 0px -0px rgb(145 158 171 / 20%), 0px 0px 0px 0px rgb(145 158 171 / 14%), 0px 0px 0px 0px rgb(145 158 171 / 12%)',
boxShadow:'0 0px 0px 0 rgb(0 171 85 / 24%)',        
    }
    
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