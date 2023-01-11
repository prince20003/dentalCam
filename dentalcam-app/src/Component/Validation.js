const Validation = (values) => {
   let error = {}


   if(!values.username){
    error.username = "User Name is Required";
   }

   if(!values.password){
    error.password = 'Password is Required';
   }

   return error;
}

export default Validation