import React,{Component} from 'react';
//import Dialog from '@material-ui/Dialog';
import AppBar from 'material-ui/AppBar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';




export class FormUserDetail extends Component {

continue = e =>{
    e.preventDefault();
    this.props.nextStep();
}

    render(){
        const {values,handleChange} = this.props;
        return(
           <MuiThemeProvider>
           <React.Fragment>
           <AppBar />
          <TextField
           hintText="Enter Your lastname"
           floatingLabelText="LastName"
           onChange={handleChange('lastname')}
           defaultValue={values.lastname} />
           <br/>

           <TextField
           hintText="Enter Your FirstName"
           floatingLabelText="FirstName"
           onChange={handleChange('firstname')}
           defaultValue={values.firstname} />
           <br/>

           <TextField
           hintText="Enter Your Email"
           floatingLabelText="Email"
           onChange={handleChange('email')}
           defaultValue={values.email} />
           <br/>

           <RaisedButton
           label='Continue'
           primary={true}
           style={styles.button}
           onClick={this.continue} >
           </RaisedButton>




           
           
           
           </React.Fragment>
           
           
           
           
           </MuiThemeProvider>

        )
    }
}


const styles = {
    button:{
        margin: 15
    }
}
export default FormUserDetail;