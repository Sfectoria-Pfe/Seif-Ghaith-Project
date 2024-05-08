import { useSelector, useDispatch } from "react-redux";

import { useEffect } from "react";

import {
  Card,
  CardHeader,
  Input,
  Typography,
  CardBody,
  Button,
} from "@material-tailwind/react";

import { DataGrid, GridToolbar } from "@mui/x-data-grid";

import { Link, useNavigate } from "react-router-dom";
import { getUsers } from "../../../../store/user";

export default function Users() {
  const dispatch = useDispatch();
  const store = useSelector((state) => state.user.users);
  console.log(store, "from storee");

  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  const Rows = store.map((row) => {
    return {
      id: row?.id,
      email: row?.email,
      isactive: row?.isActive,
      isclient: row?.isClient,
      nom: row.Client?.first_name,
      nomEmp: row.Employee?.first_name,
      prenom: row.Client?.last_name,
      prenomEmp: row.Employee?.last_name,
    };
  });

  const columns = [
    { field: "id", headerName: "ID", width: 30 },
    {
      field: "nom",
      headerName: "nom",
      width: 200,
      renderCell: (params) => {
        if (params.row.isclient === true) {
          return params.row.nom;
        } else {
          return params.row.nomEmp;
        }
      },
    },

    {
      field: "prenom",
      headerName: "prenom",
      width: 200,
      renderCell: (params) => {
        if (params.row.isclient === true) {
          return params.row.prenom;
        } else {
          return params.row.prenomEmp;
        }
      },
    },

    { field: "email", headerName: "Email", width: 200 },
    {
      field: "isclient",
      headerName: "Client / Employee",
      width: 200,
      renderCell: (params) => {
        if (params.row.isclient === true) {
          return "Client";
        } else {
          return "Employee";
        }
      },
    },
    {
      field: "isactive",
      headerName: "is active",
      width: 90,
      renderCell: (params) => {
        if (params.row.isactive === true) {
          return "🟢";
        } else {
          return "🔴";
        }
      },
    },
  ];

  return (
    <Card className="h-full w-full">
      <CardHeader floated={false} shadow={false} className="rounded-none">
        <div className="mb-8 flex items-center justify-between gap-8">
          <div>
            <Typography variant="h5" color="blue-gray">
              Liste des Users
            </Typography>
            <Typography color="gray" className="mt-1 font-normal">
              Voir des informations sur tous les Users.
            </Typography>
          </div>
          <div className="flex shrink-0 flex-col gap-2 sm:flex-row">
            <Link to={"addUser"}>
              <Button> Add User </Button>
            </Link>
          </div>
        </div>
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <div className="w-full md:w-72">
            {/* <Input
              label="Search"
              icon={<MagnifyingGlassIcon className="h-5 w-5" />}
              onChange={(e) =>
                dispatch(filteremployees_lastname(e.target.value))
              }
            /> */}
          </div>
        </div>
      </CardHeader>
      <CardBody>
        <div style={{ height: 500, width: "100%" }}>
          <DataGrid
            columns={columns}
            rows={Rows}
            slots={{ toolbar: GridToolbar }}
          />
        </div>
      </CardBody>
    </Card>
  );
}