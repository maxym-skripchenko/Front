import { useState } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import PerfectScrollbar from 'react-perfect-scrollbar';
import {
  Avatar,
  Box,
  Card,
  Checkbox,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TablePagination,
  TableRow,
  Typography,
  IconButton
} from '@material-ui/core';
import getInitials from 'src/utils/getInitials';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
import {removepreland} from 'src/actions/requests';

const PrelandListResults = ({ prelands, ...rest }) => {
  const [selectedPrelandIds, setSelectedPrelandIds] = useState([]);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(0);

  const handleSelectAll = (event) => {
    let newSelectedPrelandIds;

    if (event.target.checked) {
      newSelectedPrelandIds = prelands.map((preland) => preland.id);
    } else {
      newSelectedPrelandIds = [];
    }

    setSelectedPrelandIds(newSelectedPrelandIds);
  };

  const handleSelectOne = (event, id) => {
    const selectedIndex = selectedPrelandIds.indexOf(id);
    let newSelectedPrelandIds = [];

    if (selectedIndex === -1) {
      newSelectedPrelandIds = newSelectedPrelandIds.concat(selectedPrelandIds, id);
    } else if (selectedIndex === 0) {
      newSelectedPrelandIds = newSelectedPrelandIds.concat(selectedPrelandIds.slice(1));
    } else if (selectedIndex === selectedPrelandIds.length - 1) {
      newSelectedPrelandIds = newSelectedPrelandIds.concat(selectedPrelandIds.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelectedPrelandIds = newSelectedPrelandIds.concat(
        selectedPrelandIds.slice(0, selectedIndex),
        selectedPrelandIds.slice(selectedIndex + 1)
      );
    }

    setSelectedPrelandIds(newSelectedPrelandIds);
  };

  const handleLimitChange = (event) => {
    setLimit(event.target.value);
  };

  const handlePageChange = (event, newPage) => {
    setPage(newPage);
  };

  return (
    <Card {...rest}>
      <PerfectScrollbar>
        <Box sx={{ minWidth: 1050 }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>
                  Active
                </TableCell>
                <TableCell>
                  Name
                </TableCell>
                <TableCell>
                  Showing
                </TableCell>
                <TableCell>
                  Unique showing
                </TableCell>
                <TableCell>
                  Transitions
                </TableCell>
                <TableCell>
                  Conversions
                </TableCell>
                <TableCell>
                  Unique
                </TableCell>
                <TableCell>
                  Distribution
                </TableCell>
                <TableCell>
                  Actions
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {prelands.slice(0, limit).map((preland) => (
                <TableRow
                  hover
                  key={preland.id}
                  selected={selectedPrelandIds.indexOf(preland.id) !== -1}
                >
                  <TableCell padding="checkbox" sx={{pl: 2}}>
                    <Checkbox
                      color="primary"
                      checked={selectedPrelandIds.indexOf(preland.id) !== -1}
                      onChange={(event) => handleSelectOne(event, preland.id)}
                      value="true"
                    />
                  </TableCell>
                  <TableCell>
                    <Box
                      sx={{
                        alignItems: 'center',
                        display: 'flex'
                      }}
                    >
                      <Typography
                        color="textPrimary"
                        variant="body1"
                      >
                        {preland.name}
                      </Typography>
                    </Box>
                  </TableCell>
                  <TableCell>
                    {preland.showing}
                  </TableCell>
                  <TableCell>
                    {preland.uniques}
                  </TableCell>
                  <TableCell>
                    {preland.transitions}
                  </TableCell>
                  <TableCell>
                    {preland.conversion}
                  </TableCell>
                  <TableCell>
                    {preland.unique}
                  </TableCell>
                  <TableCell>
                    {preland.distribution}
                  </TableCell>
                  <TableCell>
                  <IconButton 
                  color="inherit"
                  href="./editpreland"
                  onClick={()=>{
                    console.log(preland.name)
                    localStorage.setItem("name",preland.name)
                    localStorage.setItem("showing",preland.showing)
                    localStorage.setItem("uniques",preland.uniques)
                    localStorage.setItem("transitions",preland.transitions)
                    localStorage.setItem("unique",preland.unique)
                    localStorage.setItem("distribution",preland.distribution)
                }}
                  >
                      <EditOutlinedIcon 
                      color="primary"/>
                    </IconButton>
                    <IconButton color="inherit"
                        onClick={()=>{
                        console.log(preland.name)
                        removepreland(preland.name)
                    }}
                    >
                      <DeleteOutlineIcon color="secondary" />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Box>
      </PerfectScrollbar>
      <TablePagination
        component="div"
        count={prelands.length}
        onPageChange={handlePageChange}
        onRowsPerPageChange={handleLimitChange}
        page={page}
        rowsPerPage={limit}
        rowsPerPageOptions={[5, 10, 25]}
      />
    </Card>
  );
};

PrelandListResults.propTypes = {
  prelands: PropTypes.array.isRequired
};

export default PrelandListResults;
