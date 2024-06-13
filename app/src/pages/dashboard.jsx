import Generatedata from "../redux/generatedata";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import Box from "@mui/material/Box";
import { useCallback } from "react";
import Typography from "@mui/material/Typography";
function Dashboard() {
  const Getdata = useCallback(Generatedata, []);
  const columns = [
    { field: "id", headerName: "ID", width: 40 },
    { field: "name", headerName: "Name", width: 150 },
    { field: "email", headerName: "Email", width: 200 },
    { field: "phone", headerName: "Phone", width: 150 },
    { field: "location", headerName: "Location", width: 200 },
    { field: "position", headerName: "Position", width: 200 },
    { field: "experience", headerName: "Experience", width: 100 },
    { field: "role", headerName: "Role", width: 100 },
  ];

  return (
    <Box mx="2">
      <Typography
        variant="h5"
        color="primary"
        fontFamily={"monospace"}
        fontWeight={"bold"}
        my={5}
        textTransform={"capitalize"}
        textAlign={"center"}
      >
        dashboard
      </Typography>
      <DataGrid
        sx={{
          boxShadow: 1,
          padding: 3,
          fontFamily: "sans-serif",
          "& .MuiDataGrid-cell:hover": {},
        }}
        pageSizeOptions={[5, 10, 20, 30, 40, 50, 75, 100]}
        slots={{
          toolbar: GridToolbar,
        }}
        slotProps={{
          toolbar: {
            showQuickFilter: true,
          },
        }}
        rows={Getdata()}
        columns={columns}
      />
    </Box>
  );
}

export default Dashboard;
