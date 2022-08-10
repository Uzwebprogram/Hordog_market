import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
const ModalCommon = ({open ,handleClose ,children ,style , none}) =>{
    return(
      <Modal
        style={{display : none}}
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade  in={open}>
          <Box sx={style}>
            {children}
          </Box>
        </Fade>
      </Modal>
    )
}
export default ModalCommon