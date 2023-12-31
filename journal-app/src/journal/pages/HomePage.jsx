import { IconButton } from "@mui/material";
import { NoteView } from "../components/views/NoteView";
import { NothingSelectedView } from "../components/views/NothingSelectedView";
import { JournalLayout } from "../layouts/JournalLayout";
import { AddOutlined } from "@mui/icons-material";

export const HomePage = () => {
  return (
    <JournalLayout>
      <NothingSelectedView />
      {/* <NoteView /> */}
      <IconButton
        size="large"
        sx={{
          color: "white",
          backgroundColor: "error.main",
          ":hover": { backgroundColor: "error.main", opacity: 0.9 },
          position: "fixed",
          right: 50,
          bottom: 50,
        }}
      >
        <AddOutlined sx={{ fontSize: 30 }} />
      </IconButton>
    </JournalLayout>
  );
};
