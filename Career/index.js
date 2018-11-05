import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import "./career.scss";
import IconButton from '@material-ui/core/IconButton';
import InputAdornment from '@material-ui/core/InputAdornment';
import TextField from '@material-ui/core/TextField';
import CareerForm from './form';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

export default class Career extends React.Component {
  render() {
    return (
			<div>
				<Grid>      	
					<Grid container spacing={24}>
						<Grid item xs={6}>
							<h3>things that matter</h3>
						</Grid>
						<Grid item xs={6} className="searchbox">
							<span class="fa fa-search"></span>
							<TextField
								id="outlined-adornment-password"
								variant="outlined"
								type="text"
								label="Search all jobs"
								className="fullWidth"
							/>
						</Grid>
						<Grid item xs={12}>
							<ExpansionPanel>
								<ExpansionPanelSummary expandIcon={<ExpandMoreIcon />} className="expand">
									<Typography>Terms and Conditions</Typography>
								</ExpansionPanelSummary>
								<ExpansionPanelDetails>
									<Typography>
										
									</Typography>
								</ExpansionPanelDetails>
							</ExpansionPanel>
						</Grid>
						<Grid item xs={12}>
							<ExpansionPanel>
								<ExpansionPanelSummary expandIcon={<ExpandMoreIcon /> } className="expand">
									<Typography>Locations</Typography>
								</ExpansionPanelSummary>
								<ExpansionPanelDetails>
									<Typography>
										
									</Typography>
								</ExpansionPanelDetails>
							</ExpansionPanel>
						</Grid>
						<Grid item xs={12}>
							<ExpansionPanel>
								<ExpansionPanelSummary expandIcon={<ExpandMoreIcon />} className="expand">
									<Typography>Our Company</Typography>
								</ExpansionPanelSummary>
								<ExpansionPanelDetails>
									<Typography>
										
									</Typography>
								</ExpansionPanelDetails>
							</ExpansionPanel>
						</Grid>
					</Grid>
				</Grid>
					<Grid container spacing={24}>
						<Grid item xs={12}>
							<div>
								<h3>things that matter</h3>
								<p>We value your interest in us. Ensure that all information is correct. We will contact you as soon as possible.</p>
							</div>
						</Grid>
						<Grid item xs={12}>
							<div className="careerForm">
								<CareerForm/>
							</div>
						</Grid>
					</Grid>
			</div>
    );
  }
}
