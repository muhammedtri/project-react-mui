import {
  Add,
  DateRange,
  EmojiEmotions,
  Image,
  PersonAdd,
  VideoLibrary,
} from "@mui/icons-material";
import {
  Button,
  ButtonGroup,
  Fab,
  IconButton,
  Modal,
  TextField,
  Tooltip,
  Typography,
} from "@mui/material";
import { Box, Stack } from "@mui/system";
import React, { useState } from "react";

function AddPostButton() {
  const [open, setOpen] = useState(false);
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "white",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };
  return (
    <>
      <Tooltip
        title="Delete"
        sx={{
          position: "fixed",
          bottom: 20,
          left: { xs: "calc(50% - 25px)", md: 20 },
        }}
        onClick={(e) => setOpen(true)}
      >
        <Fab color="primary">
          <IconButton>
            <Add />
          </IconButton>
        </Fab>
      </Tooltip>
      <Modal
        open={open}
        onClose={(e) => setOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Create Post
          </Typography>
          <TextField
            sx={{ width: "100%" }}
            id="standard-basic"
            label="What's on your mind ?"
            variant="standard"
            multiline
            rows={4}
          />
          <Stack direction={"row"} gap={1} mt={2} mb={2}>
            <EmojiEmotions color="primary" />
            <Image color="secondary" />
            <VideoLibrary color="success" />
            <PersonAdd color="error" />
          </Stack>
          <ButtonGroup
            variant="contained"
            aria-label="outlined primary button group"
            fullWidth
          >
            <Button>POST</Button>
            <Button sx={{ width: "100px" }}>
              <DateRange />
            </Button>
          </ButtonGroup>
        </Box>
      </Modal>
    </>
  );
}

export default AddPostButton;
