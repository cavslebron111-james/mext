import React,{Component} from 'react';
//import Dialog from '@material-ui/Dialog';
import AppBar from 'material-ui/AppBar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';




export class FormPersonalDetail extends Component {

continue = e =>{
    e.preventDefault();
    this.props.nextStep();
}

back = e => {
    e.preventDefault();
    this.props.prevStep();
}


    render(){
        const {values,handleChange} = this.props;
        return(
           <MuiThemeProvider>
           <React.Fragment>
           <AppBar />
          <TextField
           hintText="Enter Your occupation"
           floatingLabelText="Occupation"
           onChange={handleChange('occupation')}
           defaultValue={values.occupation} />
           <br/>

           <TextField
           hintText="Enter Your City"
           floatingLabelText="City"
           onChange={handleChange('city')}
           defaultValue={values.city} />
           <br/>

           <TextField
           hintText="Enter Your Bio"
           floatingLabelText="Bio"
           onChange={handleChange('bio')}
           defaultValue={values.bio} />
           <br/>

           <RaisedButton
           label='Continue'
           primary={true}
           style={styles.button}
           onClick={this.continue} >
           </RaisedButton>

           <RaisedButton
           label='back'
           primary={true}
           style={styles.button}
           onClick={this.back} >
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
export default FormPersonalDetail;