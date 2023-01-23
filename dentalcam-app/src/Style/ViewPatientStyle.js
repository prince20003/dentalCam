import styled from "@emotion/styled"

const ViewPatientStyle = styled.div`${{
    '& .main':{
  padding:'122px 0px'  },
    '& .mainbo':{
      margin:'0 22px',
      display:'flex',
      width:'1039.2px',
    },
    '& .back':{
     paddingTop:'6px',
     color:'#0B3379'
    },
    '& .mainbox':{
      padding:'0 18px',
    },
    '& .bt':{
        display:'flex',
      },
    '& .det':{
        margin:'20px -40px',
        width:'250px',
        padding:'0px',
        display:'flex',
        justifyContent:'space-between'
      },
    '& .det2':{
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
      },
    '& .hr1':{
        width:'480px',
        margin:'0 10px 0 -40px',
        borderTop:'1px solid  rgba(145, 158, 171, 0.24);'
      },
    '& .hr2':{
        width:'480px',
        margin:'0 10px 0 20px',
        borderTop:'1px solid  rgba(145, 158, 171, 0.24);'
      },
    '& .createcliniclogo':{
        margin:'8px 0px',
        fontFamily:'Public sans,sans-serif',
        fontWeight:'400',
      },
    '& .updatebtn':{
        backgroundColor:'#0B3379',
        fontFamily:'Public sans,sans-serif',
        textTransform:'capitalize',
        borderRadius:'8px',
        boxShadow:'0 8px 16px 0 rgb(0 171 85 / 24%)',
        fontWeight:'700',
        margin:'0 30px 0 10px'
    },
    '& .updatebtn:hover':{
backgroundColor:'#007B55',
boxShadow:'0 0px 0px 0 rgb(0 171 85 / 24%)',
},
    '& .delbtn':{
        backgroundColor:'red',
        borderRadius:'8px',
        textTransform:'capitalize',
        fontWeight:'700',
        fontFamily:'Public sans,sans-serif',
        boxShadow:'0 8px 16px 0 rgb(0 171 85 / 24%)'
    },
    '& .otpbtn':{
        backgroundColor:'lightgray',
        borderRadius:'8px',
        border:'thin solid gray',
        textTransform:'capitalize',
        fontWeight:'700',
        fontFamily:'Public sans,sans-serif',
        color:'black',
        boxShadow:'0 8px 16px 0 rgb(0 171 85 / 24%)'
    },
    '& .delbtn:hover':{
        backgroundColor:'red',
boxShadow:'0 0px 0px 0 rgb(0 171 85 / 24%)',
    }
  }}
  @media (max-width:1024px) and (min-width:770px){
  }
  @media (max-width:768px) and (min-width:428px){
  }
  @media (max-width:426px) and (min-width:376px){
  }
  @media (max-width:376px) and (min-width:321px){
  }
  }
  @media (max-width:1440px) and (min-width:1030px){
  }
  `
  export default ViewPatientStyle