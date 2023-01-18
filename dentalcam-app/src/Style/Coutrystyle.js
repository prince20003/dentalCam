import styled from "@emotion/styled";


const Countrystyle = styled.div({
   '& .menu':{
    padding:'8px 20px'
   },
   '& .flag':{
    width:'24px',
    height:'24px',
    objectFit:'cover',
    borderRadius:'50%',
   },
   '& .en':{
       marginLeft:'12px',
       fontFamily:'Public Sans, sans-serif',
       fontSize:'15px'
   },

})

export default Countrystyle;