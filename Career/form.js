import React from 'react';
import Select from 'react-select';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Input from '@material-ui/core/Input';
import InputAdornment from '@material-ui/core/InputAdornment';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import NativeSelect from '@material-ui/core/NativeSelect';
import TextField from '@material-ui/core/TextField';


const initialState = {

};

export default class CareerForm extends React.Component {
    state = {
        fname: '',
        lname: '',
        email: '',
        phone: '',
        school: '',
        result: '',
        course: '',
        qualification: '',
        interest: '',
        experience: '',
        location: {
            stateNames:
            [{
            "name": "Abia"
          },{
            "name": "Adamawa"
          },{
            "name": "Akwa Ibom"
          },{
            "name": "Anambra"
          },{
            "name": "Bauchi"
          },{
            "name": "Bayelsa"
          },{
            "name": "Benue"
          },{
            "name": "Benue-Plateau"
          },{
            "name": "Borno"
          },{
            "name": "Cross River"
          },{
            "name": "Delta"
          },{
            "name": "East Central"
          },{
            "name": "Ebonyi"
          },{
            "name": "Edo"
          }
        ]},
        selectedState:'',
        resume: ''
    };

    handleChange = (event) => {
        if (event.target.name === 'location') {
            this.setState({selectedState: event.target.value});
        } else {
        this.setState({[event.target.name]: event.target.value});
        }
    };

    reset = () => {
        this.setState(initialState);
    };

    render() {
        return (
                <Grid item xs={10} >
                    <form >
                        <Grid container spacing={24}>
                            <Grid item xs={6} >
                                <TextField
                                  
                                    name="fname"
                                    id="input-with-icon-textfield"
                                    placeholder="First Name"
                                />
                            </Grid>
                            <Grid item xs={6}>
                                <TextField
                               
                                name="lname"
                                id="input-with-icon-textfield"
                                placeholder="Last Name"
                                />
                            </Grid>
                            <Grid item xs={6} sm={4} >
                                <TextField
                                
                                name="email"
                                id="input-with-icon-textfield"
                                placeholder="Email Address"
                                />
                            </Grid>
                            <Grid item xs={6} sm={4}>
                                <TextField
                               
                                name="phone"
                                id="input-with-icon-textfield"
                                placeholder="Phone Number"
                                />
                            </Grid>
                            <Grid item xs={6} sm={4}>
                                <TextField
                                name="school"
                                id="input-with-icon-textfield"
                                placeholder="School Name"
                                />
                            </Grid>
                             <Grid item xs={6} sm={4}>
                                <InputLabel htmlFor="result-label-placeholder">
                                    Class/Result
                                </InputLabel>  
                               <div>
                                    <Select
                                        className="fullWidth"
                                        value={this.state.result}
                                        onChange={this.handleChange}
                                        input={<Input name="result" id="result-label-placeholder" />}
                                        name="result">
                                        <MenuItem value="1st">1st Class</MenuItem>
                                        <MenuItem value="2nd">2nd Class</MenuItem>
                                        <MenuItem value="3rd">3rd Class</MenuItem>
                                    </Select>
                                </div> 
                            </Grid>
                            <Grid item xs={6} sm={4}>
                                <InputLabel htmlFor="course-label-placeholder">
                                    Course of Study
                                </InputLabel>
                                <div>
                                    <Select
                                        className="fullWidth"
                                        value={this.state.course}
                                        onChange={this.handleChange}
                                        input={<Input name="course" id="course-label-placeholder" />}
                                        name="course">
                                        <MenuItem value="mca">MCA</MenuItem>
                                        <MenuItem value="mba">MBA</MenuItem>
                                        <MenuItem value="mtech">M.TECH</MenuItem>
                                    </Select>
                                </div> 
                           </Grid>
                            <Grid item xs={6} sm={4}>
                                <InputLabel htmlFor="qualification-label-placeholder">
                                    Highest Qualification
                                </InputLabel>
                               <div>
                                    <Select
                                        className="fullWidth"
                                        value={this.state.qualification}
                                        onChange={this.handleChange}
                                        input={<Input name="qualification" id="qualification-label-placeholder" />}
                                        name="qualification">
                                        <MenuItem value="graduation">Graduation</MenuItem>
                                        <MenuItem value="postgraduation">Post Graduation</MenuItem>
                                        <MenuItem value="doctorate">Doctorate</MenuItem>
                                    </Select>
                                </div> 
                            </Grid>  
                            <Grid item xs={6} sm={4}>
                                <InputLabel htmlFor="interest-label-placeholder">
                                    Interest
                                </InputLabel>
                                <div>
                                    <Select
                                        className="fullWidth"
                                        value={this.state.interest}
                                        onChange={this.handleChange}
                                        input={<Input name="interest" id="interest-label-placeholder" />}
                                        name="interest">
                                        <MenuItem value="accounting">Accounting</MenuItem>
                                        <MenuItem value="business">Business</MenuItem>
                                        <MenuItem value="computers">Computer Applications</MenuItem>
                                    </Select>
                                </div>
                            </Grid>
                            <Grid item xs={6} sm={4}>
                                <InputLabel htmlFor="experience-label-placeholder">
                                    Experience
                                </InputLabel>
                                <div>
                                    <Select
                                        className="fullWidth"
                                        value={this.state.experience}
                                        onChange={this.handleChange}
                                        input={<Input name="experience" id="experience-label-placeholder" />}
                                        name="experience">
                                        <MenuItem value="0-1">0-1</MenuItem>
                                        <MenuItem value="1-2">1-2</MenuItem>
                                        <MenuItem value="2-3">2-3</MenuItem>
                                        <MenuItem value="3-4">3-4</MenuItem>
                                        <MenuItem value="4-5">4-5</MenuItem>
                                        <MenuItem value="5+">5+</MenuItem>
                                    </Select>
                                </div>
                            </Grid>   
                            <Grid item xs={6} sm={4}>
                                <InputLabel htmlFor="location-label-placeholder">
                                    Location
                                </InputLabel>
                                <div>
                                    <Select
                                    className="fullWidth"
                                        value={this.state.selectedState}
                                        onChange={this.handleChange}
                                        input={<Input name="location" id="location-label-placeholder"/>}
                                        name="location">
                                        {this.state.location.stateNames && 
                                        this.state.location.stateNames.map((sname,index) => 
                                        <MenuItem key={index} value={sname.name}>{sname.name}</MenuItem>)
                                        }
                                    </Select>
                                </div>
                            </Grid>  
                            <Grid item xs={12}>
                                <div>
                                    <p>Attach Resume</p>
                                    <input type="file" name="file" onChange={this.handleChange}/>
                                </div>
                            </Grid>                     
                            <Grid item xs={12} className="career_button">
                                    <Button variant="contained" color="secondary">
                                        Submit
                                    </Button>
                                    <Button variant="contained" color="secondary" onClick={this.reset}>
                                        Reset
                                     </Button>
                            </Grid>
                        </Grid>
                </form>
            </Grid>  
        );
    }
}
