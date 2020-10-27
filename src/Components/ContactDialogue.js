import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import * as emailjs from 'emailjs-com'
import DialogueSnackBar from './DialogueSnackBar';

export default function ContactDialog() {
  const [open, setOpen] = React.useState(false)
  const [name, setName] = React.useState("")
  const [email, setEmail] = React.useState("testing from name")
  const [message, setMessage] = React.useState("testing message")
  const [snackBarOpen, setSnackBarOpen] = React.useState(false)
  const [snackbarState, setSnackbarState] = React.useState("success")

  let serviceId = process.env.REACT_APP_EMAIL_SERVICE_ID;
  let templateId = process.env.REACT_APP_TEMPLATE_ID;
  let userId = process.env.REACT_APP_USER_ID

  let templateParams = {
    from_name: name,
    to_name: 'Steven Snyder',
    subject: "New Message from " + name,
    message: `Reply to ${name} at  ${email} 
               ${message}`,
   }

   const handleEmail = (event) => {
    setEmail(event.target.value)
   }

   const handleName = (event) => {
    setName(event.target.value)
   }

   const handleMessage = (event) => {
    setMessage(event.target.value)
   }

  const handleClickOpen = () => {
    setOpen(true);
    
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = () => {
    emailjs.send(serviceId, templateId, templateParams, userId)
    .then(() => {

      setSnackBarOpen(true)
      setSnackbarState("success")
      console.log(process.env.REACT_APP_EMAIL_SERVICE_ID)
      setTimeout(() => {
        setSnackBarOpen(false)  
      }, 6000);
    }, (err) => {
      setSnackBarOpen(true)
      setSnackbarState("error")
      console.log(process.env.REACT_APP_EMAIL_SERVICE_ID)
      setTimeout(() => {
        setSnackBarOpen(false)  
      }, 6000);
    });
      // templateParams, userID);
      setOpen(false);
  }

  return (
    <div>
      <Button variant="contained" color="primary" onClick={handleClickOpen}>
        Contact Me!
      </Button>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Subscribe</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To connect with me, please enter your information here
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="email"
            label="Email Address"
            type="email"
            onChange={handleEmail}
            fullWidth
          />
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Name"
            type="text"
            onChange={handleName}
            fullWidth
          />
          <TextField
            autoFocus
            margin="dense"
            id="message"
            label="Message"
            type="text"
            onChange={handleMessage}
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleSubmit} color="primary">
            Submit
          </Button>
        </DialogActions>
      </Dialog>
      { snackBarOpen &&
      <DialogueSnackBar alertState={snackbarState} />
}
    </div>
  );
}
