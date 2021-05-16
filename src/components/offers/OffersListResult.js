import {useState} from 'react';
import PerfectScrollbar from 'react-perfect-scrollbar';

import {
    Box,
    Card,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
    IconButton,
    Button,
    TablePagination

  } from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import axios from 'axios';
import {post,remove} from 'src/actions/requests';


const OfferListResult=({offerlist, ...rest})=>{
    const [limit, setLimit]=useState(10);
    const [page,setPage]=useState(0);

    const handleLimitChange=(event)=>{
        setLimit(event.target.value);
    };
    const handlePageChange=(event, newPage)=>{
        setPage(newPage);
    };

    return(
        <Card {...rest}>
            <PerfectScrollbar>
            <Box sx={{minWidth: 1050}}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>
                                Name
                            </TableCell>
                            <TableCell>
                                Views
                            </TableCell>
                            <TableCell>
                                Transitions
                            </TableCell>
                            <TableCell>
                                Conversions
                            </TableCell>
                            <TableCell>
                                Actions
                            </TableCell>
    
                        </TableRow>
                    </TableHead>
                    <TableBody>
                    {offerlist.slice(0,limit).map((offerlist)=>(
                        <TableRow>
                        <TableCell>
                            {offerlist.offerName}
                        </TableCell>
                        <TableCell>
                            {offerlist.views}
                        </TableCell>
                        <TableCell>
                            {offerlist.transition}
                        </TableCell>
                        <TableCell>
                            {offerlist.conversion}
                        </TableCell>
                        <TableCell>
                        <Box 
                        sx={{
                            alignItems: 'center',
                            display: 'flex'
                        }}>
                        <IconButton 
                        color ="primary" 
                        aria-label="Edit offer"
                        href='editoffer'
                        onClick={()=>{
                            console.log(offerlist.id)
                            localStorage.setItem("link",offerlist.offerLink)
                            localStorage.setItem("name",offerlist.offerName)
                        }}
                        >
                            <EditIcon/>
                        </IconButton>
                        <IconButton 
                        color ="primary"
                        aria-label="Delete offer"
                        href="#"
                        onClick={()=>{
                            console.log(offerlist)
                            remove(offerlist.id)
                        }}>
                            <DeleteIcon/>
                        </IconButton>
                        <Button
                        href="./prelands"
                        >
                            Prelands
                        </Button>
                        </Box>
                        </TableCell>
                        
                        </TableRow>

                        ))}
                    </TableBody>
                </Table>
            </Box>
            </PerfectScrollbar>
            <TablePagination
            component="div"
            count={limit}
            onPageChange={handlePageChange}
            onRowsPerPageChange={handleLimitChange}
            page={page}
            rowsPerPage={limit}
            rowsPerPageOptions={[5,10,20]}
            />
        </Card>

    )

}
export default OfferListResult;