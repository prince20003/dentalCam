import styled from "@emotion/styled"

const ViewPatientStyle = styled.div`${{
  '& .main': {
    // padding: '122px 0px'
    paddingTop:'122px',
    paddingBottom:'110px',
    paddingLeft: '0px',
    paddingRight:'0px',
  },
  '& .mainbo': {
    margin: '0 22px',
    // display:'flex',
    width: '1190px',
  },
  '& .back': {
    paddingTop: '6px',
    color: '#0B3379',
    position: 'absolute'
  },
  '& .mainbox': {
    padding: '0 18px',
  },
  '& .bt': {
    display: 'flex',
  },
  '& .createcliniclogo': {
    margin: '8px 0px',
    fontFamily: 'Public sans,sans-serif',
    fontWeight: '400',
  },
  '& .updatebtn': {
    backgroundColor: '#0B3379',
    fontFamily: 'Public sans,sans-serif',
    textTransform: 'capitalize',
    borderRadius: '8px',
    boxShadow: '0 8px 16px 0 rgb(0 171 85 / 24%)',
    fontWeight: '700',
    margin: '0 30px 0 30px'
  },
  '& .photos': {
    backgroundColor: '#0B3379',
    fontFamily: 'Public sans,sans-serif',
    textTransform: 'capitalize',
    borderRadius: '8px',
    boxShadow: '0 8px 16px 0 rgb(0 171 85 / 24%)',
    fontWeight: '700',
    margin: '0 10px 0 0px'
  },
  '& .updatebtn:hover': {
    backgroundColor: '#007B55',
    boxShadow: '0 0px 0px 0 rgb(0 171 85 / 24%)',
  },
  '& .photos:hover': {
    backgroundColor: '#007B55',
    boxShadow: '0 0px 0px 0 rgb(0 171 85 / 24%)',
  },
  '& .delbtn': {
    backgroundColor: 'red',
    borderRadius: '8px',
    textTransform: 'capitalize',
    fontWeight: '700',
    fontFamily: 'Public sans,sans-serif',
    boxShadow: '0 8px 16px 0 rgb(0 171 85 / 24%)'
  },
  '& .otpbtn': {
    backgroundColor: 'lightgray',
    borderRadius: '8px',
    border: 'thin solid gray',
    textTransform: 'capitalize',
    fontWeight: '700',
    fontFamily: 'Public sans,sans-serif',
    color: 'black',
    boxShadow: '0 8px 16px 0 rgb(0 171 85 / 24%)'
  },
  '& .delbtn:hover': {
    backgroundColor: 'red',
    boxShadow: '0 0px 0px 0 rgb(0 171 85 / 24%)',
  },
  '& .gallery':{
    textAlign: 'center', display: 'grid', alignItems: 'center', minHeight: '400px'
  },
  '& .uploadbox':{
    display: 'flex',
    justifyContent: 'flex-end',
    marginTop:'50px'
  },
  '& .uploadbtn':{
    backgroundColor: '#0B3379',
    fontFamily: 'Public sans,sans-serif',
    textTransform: 'capitalize',
    borderRadius: '8px',
    boxShadow: '0 8px 16px 0 rgb(0 171 85 / 24%)',
    fontWeight: '700',
    margin: '0 20px 0 0px'
  },
  '& .uploadbtn:hover':{
    backgroundColor: '#007B55',
    boxShadow: '0 0px 0px 0 rgb(0 171 85 / 24%)',
  },
  '& .imagesga':{
    display:'grid',
    gridTemplateColumns: '0.25fr 0.25fr 0.25fr 0.25fr',
    gridColumnGap: '3rem',
    gridRowGap: '3rem',
    overflow: 'hidden',
    marginTop:'30px',
  },
  '& .imageBox':{
    position:'relative',
    display:'flex',
  },
  '& .deleicon':{
    position: 'absolute',
    bottom: '0px',
    backgroundColor: 'red',
    minWidth: '20px',
  },
 '& .imageSelectionBox':{
  display: 'block',
  position: 'absolute',
  color:'blue'
 },
 '& .check':{
  cursor: 'inherit',
    position: 'absolute',
    opacity: '0',
    width: '100%',
    height: '100%',
    top: '0',
    left: '0',
    margin: '0',
    padding: '0',
    zIndex: '1',
 }

}}
  @media (max-width:1440px) and (min-width:1025px){
    .mainbo {
      width: 1100px
    }
  }
  @media (max-width:1025px) and (min-width:770px){
    .mainbo {
      width: 980px
    }
  }
  @media (max-width:770px) and (min-width:430px){
    .mainbo{
      width: 720px
    }
  }
  @media (max-width:430px) and (min-width:380px){
    .mainbo{
      width:390px
    }
    .imagesga{
      overflow: scroll
    }
  }
  }
  `
export default ViewPatientStyle