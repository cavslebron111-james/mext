import React,{Component} from 'react';
import FormUserDetail from './FormUserDetail'
import FormPersonalDetail from './FormPersonalDetail';
import Success from './Success';
import Confirm from './Confirm';





export class UserForm extends Component {
   state = {
       steph: 1,
       lastname: '',
       firstname: '',
       email: '',
       occupation: '',
       city: '',
       bio: ''

   };
   
   nextStep = () =>{
       const {steph} = this.state;
       this.setState({
           steph:steph + 1
       });
   }
   
   
   prevStep = () =>{
    const {steph} = this.state;
    this.setState({
        steph:steph - 1
    });
}

handleChange = input => e => {
    this.setState({[input]: e.target.value})
}




    render(){
      const {steph} = this.state;
      const {lastname,firstname,email,occupation,city,bio} = this.state;
      const values =  {lastname,firstname,email,occupation,city,bio};

      switch(steph){
          case 1:
              
             
          return(
                  <FormUserDetail
                  nextStep={this.nextStep}
                  handleChange={this.handleChange}
                  values={values} />
              );
              case 2:
                  return (
                      <FormPersonalDetail
                      nextStep={this.nextStep}
                      prevStep={this.prevStep}
                      handleChange={this.handleChange}
                      values={values} 
                      /> );
                  
              case 3:
                  return (
                  <Confirm 
                  nextStep={this.nextStep}
                      prevStep={this.prevStep}
                      values={values} 
                      
                  
                  
                  
                  
                  /> );
                  case 4:
                    return (
                     <Success /> );
                    
        
      
            }
      
       

    }
}

export default UserForm;