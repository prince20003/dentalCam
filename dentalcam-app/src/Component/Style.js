import styled from '@emotion/styled';
import ('https://fonts.googleapis.com/css2?family=Public+Sans:wght@700&display=swap')

//  const AB = styled.div({
//    '& body':{
//      margin:0,
//      padding:0,
//      fontFamily:'Public Sans,sans-serif',
//      boxSizing:'border-box',
//    },
//    '& .main': {
//       width: '100%',
//       height: '100%',
//       display: 'flex'
//    },
//    '& .leftside': {
//       display: "flex",
//       width: '100%',
//       maxWidth: '464px',
//       margin: '16px 0px 16px 16px',
//       justifyContent: 'center',
//       borderRadius: '16px',
//       flexDirection: 'column',
//       boxShadow: '0 0 2px 0 rgb(145 158 171 / 24%), 0 16px 32px -4px rgb(145 158 171 / 24%)',
//    },
//    '& .logo': {
//       margin: '0px 25%',
//       height: ' 232px',
//       width: '232px'
//    },
//    '& .title': {
//       fontFamily:'Public Sans,sans-serif',
//       background: 'linear-gradient(90deg, rgb(171, 48, 177) 0%, rgb(91, 114, 180) 70%)',
//       WebkitBackgroundClip: 'text',
//       color: 'transparent',
//    },
//    '& .loginimg2':{
//       display: 'block',
//       maxWidth: '100%'
//    },
//    '& .detail':{
//       display:"flex",
//       flexDirection:'column',
//       maxWidth:'480px',
//       margin:'auto',
//       justifyContent:'center',
//       minHeight:'100vh',
//    },
//    '& .de':{
//       display:'flex',
//       flexDirection:'column',
//       marginBottom:'40px',
//    },
//    '& .sign':{
//       fontSize:'23px',
//       fontWeight:'550',
//       lineHeight:'1.5',
//       fontFamily:'Public Sans,sans-serif;'
//    },
//    '& .formdata':{
//       display:'flex',
//       flexDirection:'column',
//       marginTop:'20px'
//    },
//    '& .check':{
//       margin:'16px 0px'
//    },
//    // @media screen and (maxWidth: '480px') {
//    //  "& .leftside": {
//    //      display: none
//    //    }
//    //  }
// })



 const AB = styled.div`${{
   '& body':{
     margin:0,
     padding:0,
     fontFamily:'Public Sans,sans-serif',
     boxSizing:'border-box',
   },
   '& .main': {
      width: '100%',
      height: '100%',
      display: 'flex'
   },
   '& .leftside': {
      display: "flex",
      width: '100%',
      maxWidth: '464px',
      margin: '16px 0px 16px 16px',
      justifyContent: 'center',
      borderRadius: '16px',
      flexDirection: 'column',
      boxShadow: '0 0 2px 0 rgb(145 158 171 / 24%), 0 16px 32px -4px rgb(145 158 171 / 24%)',
   },
   '& .logo': {
      margin: '0px 25%',
      height: ' 232px',
      width: '232px'
   },
   '& .title': {
      fontFamily:'Public Sans,sans-serif',
      background: 'linear-gradient(90deg, rgb(171, 48, 177) 0%, rgb(91, 114, 180) 70%)',
      WebkitBackgroundClip: 'text',
      color: 'transparent',
   },
   '& .loginimg2':{
      display: 'block',
      maxWidth: '100%'
   },
   '& .detail':{
      display:"flex",
      flexDirection:'column',
      maxWidth:'480px',
      margin:'auto',
      justifyContent:'center',
      minHeight:'100vh',
   },
   '& .de':{
      display:'flex',
      flexDirection:'column',
      marginBottom:'40px',
   },
   '& .sign':{
      fontSize:'23px',
      fontWeight:'550',
      lineHeight:'1.5',
      fontFamily:'Public Sans,sans-serif;'
   },
   '& .formdata':{
      display:'flex',
      flexDirection:'column',
      marginTop:'20px'
   },
   '& .check':{
      margin:'16px 0px'
   },
}}@media (max-width:480px){    
   .leftside{
      display: none
   }
   .footer{
      line-height:1.5
   }

   .sign{
      font-size: 20px;
  }
}`


   
   // @media screen and (maxWidth: '480px') {
   //  "& .leftside": {
   //      display: none
   //    }
   //  }
export default AB