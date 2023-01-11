import styled from "@emotion/styled";

const Butt =  styled.div({
    '& .loginb':{
       backgroundColor:'#0B3379',
       padding: '8px 22px',
       borderRadius:'8px',
       textTransform:'capitalize',
       height:'48px',
       boxShadow: '0 8px 16px 0 rgb(0 171 85 / 24%)',
       fontWeight:'700',
       fontFamily:'Public Sans,sans-serif'
    },
    '& .loginb:hover':{
       backgroundColor:'#007B55',
    },
    '& .add:hover':{
       backgroundColor:'#007B55',
    },

    '& .add' :{
      backgroundColor:'#0B3379',
      padding: '6px 16px',
      boxShadow: 'none',
      borderRadius: '5px',     
      textTransform:'capitalize',
      // height:'48px',
      fontWeight:'700',
      minWidth: '64px',
      fontFamily:'Public Sans,sans-serif'
    }

 })

export default Butt