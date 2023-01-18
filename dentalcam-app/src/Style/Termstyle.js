import styled from "@emotion/styled";

const Termstyle = styled.div`${{
   '& .mterm':{
    padding: '35px 50px',
   },
   '& .maint':{
     display:'flex',
     alignItems:'flex-start'
   },
   '& .policy':{
     paddingBottom:'20px'
   },
   '& .policy li,h1,h3,li':{
    padding: '0px',
    margin:' 0 0 18px 0',
    boxSizing: 'borderBox',
    fontFamily:'Public Sans,sans-serif'
   },
   '& a':{
    marginRight:'20px'
   },
   '& p':{
    lineHeight:'1.5'
   },
   '& ul, ol':{
    padding:'0px'
   }

}}`

export default Termstyle