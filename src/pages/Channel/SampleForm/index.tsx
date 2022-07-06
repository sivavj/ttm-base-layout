import React, { useEffect } from "react";
import { useState, ReactElement, Ref, forwardRef } from "react";
import type { FC, ChangeEvent } from "react";
import PropTypes from "prop-types";

// import numeral from 'numeral';

import {
  Avatar,
  Box,
  Card,
  Checkbox,
  Grid,
  Slide,
  Divider,
  Tooltip,
  IconButton,
  MenuItem,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TablePagination,
  TableContainer,
  TableRow,
  TextField,
  Button,
  Typography,
  Dialog,
  FormControl,
  Select,
  InputLabel,
  Zoom,
  InputAdornment,
  styled,
} from "@mui/material";
// import Link from 'components/Link';

import { TransitionProps } from "@mui/material/transitions";
import CloseIcon from "@mui/icons-material/Close";
// import { useTranslation } from 'react-i18next';
import LaunchTwoToneIcon from "@mui/icons-material/LaunchTwoTone";
import SearchTwoToneIcon from "@mui/icons-material/SearchTwoTone";
import DeleteTwoToneIcon from "@mui/icons-material/DeleteTwoTone";
import { Invoice, InvoiceStatus } from "..";
// import axios from "axios";
// import { useSnackbar } from 'notistack';
// import { format, formatDistance } from 'date-fns';

// const DialogWrapper = styled(Dialog)(
//     () => `
//         .MuiDialog-paper {
//           overflow: visible;
//         }
//   `
//   );

//   const AvatarError = styled(Avatar)(
//     ({ theme }) => `
//         background-color: ${theme.colors.error.lighter};
//         color: ${theme.colors.error.main};
//         width: ${theme.spacing(12)};
//         height: ${theme.spacing(12)};

//         .MuiSvgIcon-root {
//           font-size: ${theme.typography.pxToRem(45)};
//         }
//   `
//   );

//   const ButtonError = styled(Button)(
//     ({ theme }) => `
//        background: ${theme.colors.error.main};
//        color: ${theme.palette.error.contrastText};

//        &:hover {
//           background: ${theme.colors.error.dark};
//        }
//       `
//   );

interface ResultsProps {
  invoices: Invoice[];
}

interface Filters {
  status?: InvoiceStatus;
}

function createData(
  id: string,
  Client: string,
  Action: number,
  Status: number
) {
  return { id, Client, Action, Status };
}

const rows = [
  createData("0", "Cupcake", 305, 3.7),
  createData("1", "Donut", 452, 25.0),
  createData("2", "Eclair", 262, 16.0),
  createData("3", " yoghurt", 159, 6.0),
  createData("4", "Gingerbread", 356, 16.0),
  createData("5", "Honeycomb", 408, 3.2),
  createData("6", "Ice cream sandwich", 237, 9.0),
  createData("7", "Jelly Bean", 375, 0.0),
  createData("8", "KitKat", 518, 26.0),
  createData("9", "Lollipop", 392, 0.2),
  createData("10", "Marshmallow", 318, 0),
  createData("11", "Nougat", 360, 19.0),
  createData("12", "Oreo", 437, 18.0),
];

const applyPagination = (
  invoices: Invoice[],
  page: number,
  limit: number
): Invoice[] => {
  return invoices.slice(page * limit, page * limit + limit);
};

const applyFilters = (
  invoices: Invoice[],
  query: string,
  filters: any
): Invoice[] => {
  return invoices.filter((invoice) => {
    let matches = true;

    if (query) {
      const properties = ["clientName"];
      let containsQuery = false;

      properties.forEach((property) => {
        if (invoice[property].toLowerCase().includes(query.toLowerCase())) {
          containsQuery = true;
        }
      });

      if (filters.status && invoice.status !== filters.status) {
        matches = false;
      }

      if (!containsQuery) {
        matches = false;
      }
    }

    Object.keys(filters).forEach((key) => {
      const value = filters[key];

      if (value && invoice[key] !== value) {
        matches = false;
      }
    });

    return matches;
  });
};

const getInvoiceStatusLabel = (invoiceStatus: InvoiceStatus): any => {
  const map = {
    pending: {
      text: "Pending Payment",
      color: "warning",
    },
    completed: {
      text: "Completed",
      color: "success",
    },
    draft: {
      text: "Draft",
      color: "info",
    },
    progress: {
      text: "In progress",
      color: "primary",
    },
  };
};

const SampleForm: FC<ResultsProps> = ({ invoices }) => {
  const [selectedItems, setSelectedInvoices] = useState<string[]>([]);
  const [page, setPage] = useState<number>(0);
  const [limit, setLimit] = useState(5);
  const [query, setQuery] = useState<string>("");
  const [filters, setFilters] = useState<any>({ status: null });

  const filteredInvoices = applyFilters(invoices, query, filters);
  const paginatedInvoices = applyPagination(filteredInvoices, page, limit);
  const selectedBulkActions = selectedItems.length > 0;
  const selectedSomeInvoices =
    selectedItems.length > 0 && selectedItems.length < invoices.length;
  const selectedAllInvoices = selectedItems.length === invoices.length;
  const [openConfirmDelete, setOpenConfirmDelete] = useState(false);

  const handleSelectAllInvoices = (
    event: ChangeEvent<HTMLInputElement>
  ): void => {
    setSelectedInvoices(
      event.target.checked ? invoices.map((invoice) => invoice.id) : []
    );
  };
  // ---------------------------

  const handleChangePage = (
    event: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number
  ) => {
    setPage(newPage);
  };
  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setLimit(parseInt(event.target.value));
  };
  //--------------------------------

  const handleSelectOneInvoice = (
    _event: ChangeEvent<HTMLInputElement>,
    rowId: string
  ): void => {
    if (!selectedItems.includes(rowId)) {
      setSelectedInvoices((prevSelected) => [...prevSelected, rowId]);
    } else {
      setSelectedInvoices((prevSelected) =>
        prevSelected.filter((id) => id !== rowId)
      );
    }
  };

  const handleConfirmDelete = () => {
    setOpenConfirmDelete(true);
  };

  return (
    <div>
      <div>SampleForm</div>
      <Card>
        <Box>
          <Checkbox
            checked={selectedAllInvoices}
            indeterminate={selectedSomeInvoices}
            onChange={handleSelectAllInvoices}
          />
          {selectedBulkActions && (
            <Box flex={1} p={2}>
              <Typography>BulkActions</Typography>
            </Box>
          )}
          {!!selectedBulkActions && (
            <Box
              flex={1}
              p={2}
              display={{ xs: "block", sm: "flex" }}
              alignItems="center"
              justifyContent="space-between"
            >
              <Box>
                <Typography component="span" variant="subtitle1">
                  {"Showing"}:
                </Typography>{" "}
                <b>{paginatedInvoices.length}</b> <b>{"invoices"}</b>
              </Box>
              {/* <TablePagination
                                component="div"
                                count={filteredInvoices.length}
                                onPageChange={handlePageChange}
                                onRowsPerPageChange={handleLimitChange}
                                page={page}
                                rowsPerPage={limit}
                                rowsPerPageOptions={[5, 10, 15]}
                            /> */}
            </Box>
          )}
        </Box>
        <Divider />
        {rows.length === 0 ? (
          <Typography
            sx={{
              py: 10,
            }}
            variant="h3"
            fontWeight="normal"
            color="text.secondary"
            align="center"
          >
            {"We couldn't find any invoices matching your search criteria"}
          </Typography>
        ) : (
          <>
            {/* <Box>
                    <TablePagination 
                    component="div"
                    rowsPerPage={limit}
                    count={rows.length}
                    page={page}
                    rowsPerPageOptions={[5,10]}
                    onPageChange={handlePageChange}
                    onRowsPerPageChange={handleLimitChange}
                    />
                    </Box> */}

            <TableContainer>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>{"#"}</TableCell>
                    <TableCell>{"Date"}</TableCell>
                    <TableCell>{"Client"}</TableCell>
                    <TableCell>{"Amount"}</TableCell>
                    <TableCell>{"Status"}</TableCell>
                    <TableCell align="center">{"Actions"}</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows.map((row) => {
                    const isInvoiceSelected = selectedItems.includes(row.id);
                    return (
                      <TableRow key={row.id}>
                        <TableCell>
                          <Box display="flex" alignItems="center">
                            <Checkbox
                              checked={isInvoiceSelected}
                              onChange={(event) =>
                                handleSelectOneInvoice(event, row.id)
                              }
                              value={isInvoiceSelected}
                            />
                            <Box pl={1}>
                              <Typography noWrap variant="subtitle2">
                                {row.id}
                              </Typography>
                            </Box>
                          </Box>
                        </TableCell>
                        <TableCell>
                          <Typography>-</Typography>
                        </TableCell>
                        <TableCell>{row.Client}</TableCell>
                        <TableCell>
                          <Typography>-</Typography>
                        </TableCell>
                        <TableCell>{row.Status}</TableCell>
                        <TableCell align="center">
                          <Typography noWrap>
                            <Tooltip title={"View"} arrow>
                              <IconButton
                                // href="/management/invoices/single/1"
                                color="primary"
                              >
                                <LaunchTwoToneIcon fontSize="small" />
                              </IconButton>
                            </Tooltip>
                            <Tooltip title={"Delete"} arrow>
                              <IconButton
                                onClick={handleConfirmDelete}
                                color="primary"
                              >
                                <DeleteTwoToneIcon fontSize="small" />
                              </IconButton>
                            </Tooltip>
                          </Typography>
                        </TableCell>
                      </TableRow>
                    );
                  })}
                </TableBody>
              </Table>
            </TableContainer>
            <Box>
              <TablePagination
                count={rows.length}
                component="div"
                page={page}
                rowsPerPage={limit}
                onPageChange={handleChangePage}
                rowsPerPageOptions={[5, 10, 20]}
                onRowsPerPageChange={handleChangeRowsPerPage}
              />
            </Box>
          </>
        )}
      </Card>
    </div>
  );
};
SampleForm.propTypes = {
  invoices: PropTypes.array.isRequired,
};

SampleForm.defaultProps = {
  invoices: [],
};

export default SampleForm;
