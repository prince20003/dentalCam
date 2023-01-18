import styled from "@emotion/styled"; 

const PageNotStyle = styled.div`${{

    '& .main':{
        padding:'122px 14px'  },
          '& .mainbo':{
            margin:'0 122px',
            display:'flex',
            justifyContent:'center',
            alignItems:'center',
            textAlign:'center'
          },
          '& .box':{
            margin:'0px 202px',
            maxWidth:'480px',
            textAlign:'center',
            display:'flex',
            flexDirection:'column',
            justifyContent:'center',
            alignItems:'center',
          },
          '& .img404':{
            height:'260px',
            margin:'30px',
        },
    
}} 
@media (max-width:1025px) and (min-width:771px){
    .mainbo{
        margin:0px
    }
}
@media (max-width:770px) and (min-width:430px){
    .mainbo{
        margin:0px
    }
    .box{
        max-width:270px
    }
}
@media (max-width:427px) and (min-width:380px){
    .mainbo{
        margin:0px
    }
    .box{
        margin: 0px 10px;
       max-width:340px
    }
    .img404{
        height:200px
    }
}
@media (max-width:379px) and (min-width:320px){
    .mainbo{
        margin:0px
    }
    .box{
        margin: 0px 5px;
       max-width:300px
    }
    .img404{
        height:200px
    }
}


`

export default PageNotStyle