import React from 'react';
import {
  Step,
  Stepper,
  StepLabel,
} from 'material-ui/Stepper';
import SvgIcon from 'material-ui/SvgIcon';

const ClearIcon = (props) => {
  return (
    <span style={{cursor: "pointer"}}>
      <SvgIcon {...props}>
        <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
        <path d="M0 0h24v24H0z" fill="none"/>
      </SvgIcon>
    </span>
  )
};

const Steps = ({steps, removeStopOver}) => {
  if (steps.length === 0) {
    return null
  }
  return (
    <Stepper activeStep={-1} orientation="vertical" linear={false} style={{paddingBottom: "1rem"}}>
      {steps.map(
        (item, i) =>
          <Step key={i}>
            <StepLabel>
              {item.label}
              <ClearIcon onClick={() => removeStopOver(i)} />
            </StepLabel>
          </Step>
      )}
    </Stepper>
  )
}

export default Steps
