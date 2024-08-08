
import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
// import * as React from 'react';


import MediaControlCard from './MediaContorlCard';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  // width: "100%69bbbb 8y76kj 98yu76 0o-0",
  height:300,
  
  bgcolor: 'background.paper',
  border: '4px solid #8bc34a',
  boxShadow: 24,

};

export default function BasicModal({open,handleClose,singleProduct}) {
  

  return (
    <div>
      
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>

        <MediaControlCard  singleProduct={singleProduct} />

        </Box>
      </Modal>
    </div>
  );
}
