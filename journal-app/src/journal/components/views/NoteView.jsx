import { SaveOutlined } from "@mui/icons-material";
import { Grid, TextField, Typography, Button } from "@mui/material";
import { ImageGallery } from "../JournalUI/ImageGallery";

export const NoteView = () => {
  return (
    <Grid container direction="column" justifyContent="space-between">
      <Grid item>
        <Typography fontSize={39} fontWeight="light">
          28 de agosto, 2023
        </Typography>
      </Grid>
      <Grid color="primary" sx={{ p: 2 }}>
        <Button>
          <SaveOutlined sx={{ fontSize: 30, mr: 1 }} />
          Guardar
        </Button>
      </Grid>
      <Grid container>
        <TextField
          type="text"
          variant="filled"
          fullWidth
          name="title"
          placeholder="Ingrese un titulo"
          label="Title"
          sx={{ border: "none", mb: 1 }}
        ></TextField>
      </Grid>

      <TextField
        name="description"
        type="text"
        variant="filled"
        fullWidth
        multiline
        placeholder="Whats happen today?"
        sx={{ border: "none", mb: 1 }}
        minRows={5}
      />
      <ImageGallery />
    </Grid>
  );
};
