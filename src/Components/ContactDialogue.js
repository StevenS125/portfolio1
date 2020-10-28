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
  const [email, setEmail] = React.useState("")
  const [message, setMessage] = React.useState("")
  const [snackBarOpen, setSnackBarOpen] = React.useState(false)
  const [snackbarState, setSnackbarState] = React.useState("success")
  const [emailValid, setEmailValid] = React.useState(false)
  const [nameValid, setNameValid] = React.useState(false)
  const [messageValid, setMessageValid] = React.useState(false)

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

  //  Open and close dialogue
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = () => {
    const mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if(!email.match(mailformat) || name.length < 3 || message.length < 3) {
      // Form Validators
      !email.match(mailformat) ? setEmailValid(true) : setEmailValid(false) 
      name.length < 3 ? setNameValid(true) : setNameValid(false)
      message.length < 3 ? setMessageValid(true) :setMessageValid(false)

    } else {

      setNameValid(false)
      setMessageValid(false)
      setEmailValid(false)

    // Email Service and reset form
    emailjs.send(serviceId, templateId, templateParams, userId)
    .then(() => {

      setSnackBarOpen(true)
      setSnackbarState("success")
      setTimeout(() => {
        setSnackBarOpen(false)  
      }, 6000);
      // Reset Form
      setName("")
      setEmail("")
      setMessage("")

    }, (err) => {
      setSnackBarOpen(true)
      setSnackbarState("error")
      setTimeout(() => {
        setSnackBarOpen(false)  
      }, 6000);
    });
      setOpen(false);

}
  }

  return (
    <div>
      <Button variant="contained" color="primary" onClick={handleClickOpen}>
        Contact Me!
      </Button>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Subscribe</DialogTitle>
        <DialogContent  >
          <DialogContentText>
            To connect with me, please enter your information here
          </DialogContentText>
          <TextField
            error={emailValid}
            required
            autoFocus
            margin="dense"
            id="email"
            label="Email Address"
            type="email"
            value={email}
            onChange={handleEmail}
            fullWidth
          />
          <TextField
            error={nameValid}
            required
            autoFocus
            margin="dense"
            id="name"
            label="Name"
            type="text"
            value={name}
            onChange={handleName}
            fullWidth
          />
          <TextField
            error={messageValid}
            required
            autoFocus
            multiline
            rowsMax={4}
            margin="dense"
            id="message"
            label="Message"
            type="text"
            value={message}
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
