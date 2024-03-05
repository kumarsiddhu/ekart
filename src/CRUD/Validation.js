 export default function Validation (values) {
const errors={}
const email_pattern=/^[^\s@]+@[^\s@]+\.[^\s@]{2,6}$/;
const password_pattern=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
if(values.name ===""){
    errors.name="Name Should Not Be Empty";
}
if(values.email===''){
    errors.email="Email should not be Empty";
}
else if(!email_pattern.test(values.email)){
    errors.email="Enter Valid Email";
}
if(values.password===""){
    errors.password="Password should not Empty";
}
else if(!password_pattern.test(values.password)){
    errors.password="Enter Valid Password";
}
return errors;
 }