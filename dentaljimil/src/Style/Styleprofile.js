import styled from "@emotion/styled"


const Prof = styled.div`${{
    '& .main': {
        height:'auto',
        width:'1200px',
        display: 'flex',
        justifyContent: 'center',
        padding:'116px 20px 80px'
    },
    '& .peper': {
       borderRadius:'16px',
       boxShadow: '0 0 2px 0 rgb(145 158 171 / 24%), 0 16px 32px -4px rgb(145 158 171 / 24%)',
    },
    '& .table': {
       padding:'24px'
    },

    '& .prologo': {
        width: '603.6px',
        height: '200px',
        backgroundSize:'cover',
        borderRadius:'16px 16px 0 0',

        objectFit:'cover',
    },



}}
@media (max-width:1440px) and (min-width:1030px){
    .main{
        width:1080px; 
        padding:116px 0 80px 40px

      }
      
    .prologo{
        width: 564.6px;
        
    },
}
  @media (max-width:1025px) and (min-width:770px){
    
    .main{
      width:890px;
      padding:116px 60px 80px 68px
  
    }
    .prologo{
        width: 512px;
        
    }
  
  }
  @media (max-width:768px) and (min-width:428px){
    .main{
        width:640px;
        padding:116px 60px 80px 68px
    
      }
      .prologo{
          width: 512px;
          height: 200px
          
      }
  }
  @media (max-width:426px) and (min-width:390px){
    .main{
      width:280px;
      padding:80px 0px 60px 80px;
  
    }
    .prologo{
        width: 312px;
        height: 200px
        
    }
  }
  @media (max-width:390px) and (min-width:323px){
    .main{
      width:280px;
      padding:80px 0px 60px 50px
  
    }
    .prologo{
        width: 282px;
        height: 200px
        
    }
    `
export default Prof