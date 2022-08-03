import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import { Button, ButtonProps } from '@mui/material';
import { getAllDoctorsList, deleteDoctor } from './actions';
import { Link } from 'react-router-dom';
import Navbar from '../../common/Navbar';
import Sidebar from '../../common/Sidebar';
import { AddCircleRounded } from '@mui/icons-material';
import styled from '@emotion/styled';
import { Box } from '@mui/system';

interface Column {
    id: string;
    label: string;
    minWidth?: number;
    align?: 'right';
    format?: (value: number) => string;
}

const columns: readonly Column[] = [
    { id: 'name', label: 'Name', minWidth: 100 },
    { id: 'email', label: 'Email', minWidth: 100 },
    { id: 'phone', label: 'Phone', minWidth: 100 },
    { id: 'address', label: 'Address', minWidth: 100 },
    { id: 'speciality', label: 'Speciality', minWidth: 100 },
    { id: 'actions', label: 'Actions', minWidth: 100 },
];

interface Data {
    name: string;
    code: string;
    population: number;
    size: number;
    density: number;
}

interface IDoctorsInfo {
    name: string,
    phone: string,
    email: string,
    role: string,
    _id: string;
    info: {
        doctorAddress: string,
        doctorSpecialites: Array<{ value: string, label: string }>
    },
}

function createData(
    name: string,
    code: string,
    population: number,
    size: number,
): Data {
    const density = population / size;
    return { name, code, population, size, density };
}


const DoctorsList = () => {
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);
    const [gridData, setGridData] = React.useState<IDoctorsInfo[]>([{
        name: '',
        phone: '',
        email: '',
        role: '',
        info: {
            doctorAddress: '',
            doctorSpecialites: [{ value: '', label: '' }],
        },
        _id: '',
    }]);

    const handleChangePage = (event: unknown, newPage: number) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    React.useEffect(() => {
        getAllDoctorsList([], setGridData);
    }, [])

    return (
        <>
            <Navbar />
            <Sidebar>
                <>
                    <Container>
                        <H5>Patient Details</H5>
                        <ColorButton variant="contained" onClick={() => { }}>
                            <AddCircleRounded />
                            <H5>New</H5>
                        </ColorButton>
                    </Container>
                    <div style={{ padding: '0 30px' }}>
                        <Paper sx={{ width: '100%', overflow: 'hidden' }}>
                            <TableContainer sx={{ maxHeight: 440 }}>
                                <Table stickyHeader aria-label="sticky table">
                                    <TableHead>
                                        <TableRow>
                                            {columns.map((column) => (
                                                <TableCell
                                                    key={column.id}
                                                    align={column.align}
                                                    style={{ minWidth: column.minWidth }}
                                                >
                                                    {column.label}
                                                </TableCell>
                                            ))}
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {gridData.map((item) => {
                                            return (
                                                <TableRow hover role="checkbox" tabIndex={-1} key={item._id}>
                                                    <TableCell>
                                                        {item.name}
                                                    </TableCell>
                                                    <TableCell>
                                                        {item.email}
                                                    </TableCell>
                                                    <TableCell>
                                                        {item.phone}
                                                    </TableCell>
                                                    <TableCell>
                                                        {item?.info?.doctorAddress}
                                                    </TableCell>
                                                    <TableCell>
                                                        {item?.info?.doctorSpecialites?.length > 0 && item?.info?.doctorSpecialites?.map((speciality, i) => (
                                                            <p key={i}>
                                                                {speciality?.label}
                                                            </p>
                                                        ))}
                                                    </TableCell>
                                                    <TableCell>
                                                        <Button variant='outlined'>
                                                            <Link to={`/editDoctor/${item?._id}`}>
                                                                Edit
                                                            </Link>
                                                        </Button>
                                                        <Button variant='contained' onClick={() => {
                                                            deleteDoctor({ email: item.email }, () => {
                                                                getAllDoctorsList([], setGridData);
                                                            });
                                                        }}>Delete</Button>
                                                    </TableCell>
                                                </TableRow>
                                            );
                                        })}
                                    </TableBody>
                                </Table>
                            </TableContainer>
                            <TablePagination
                                rowsPerPageOptions={[10, 25, 100]}
                                component="div"
                                count={gridData.length}
                                rowsPerPage={rowsPerPage}
                                page={page}
                                onPageChange={handleChangePage}
                                onRowsPerPageChange={handleChangeRowsPerPage}
                            />
                        </Paper>
                    </div>
                </>
            </Sidebar>
        </>
    );
}

const Container = styled.div`
padding: 30px;
display: flex;
justify-content: space-between;
align-items: center;
`

const ColorButton = styled(Button)<ButtonProps>(({ theme }) => ({
    '&:hover': {
        backgroundColor: '#DA3923',
        opacity: 0.8,
    },
    margin: '0 0 24px 0',
    padding: '11px 28px',
    gap: '10px',
    width: '127px',
    height: '46px',
    background: '#DA3923',
    borderRadius: '4px'
}));

const H5 = styled.h5`
margin: 10px,
font-family: Montserrat,
font-style: normal,
font-weight: 600,
font-size: 16px,
line-height: 20px,
color: #FFFFFF,
`

export default DoctorsList;
