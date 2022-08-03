import { AddCircleRounded, BedRounded, CalendarMonth, ConfirmationNumberRounded, LocalHospital, PeopleRounded, SettingsRounded } from '@mui/icons-material';
import { Box, Grid } from '@mui/material';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import { ReactComponentElement, ReactElement, ReactNode } from 'react';
import { Link, useNavigate } from 'react-router-dom';

interface IProps {
    children: JSX.Element;
}

const NavItem = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    cursor: 'pointer',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    padding: '12px 24px',
    gap: '10px',
    height: '48px',

    fontFamily: 'Montserrat',
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: '16px',
    lineHeight: '20px',
    color: '#6D6E71',
    '&:hover': {
        color: '#DA3923',
        background: '#EAEAEA',
    },
}))

const NavItems = styled(Paper)(({ theme }) => ({
    padding: theme.spacing(1),
}));

const NavMenus = [
    { icon: LocalHospital, label: "Doctor" },
    { icon: PeopleRounded, label: "Patient" },
    { icon: CalendarMonth, label: "Appointment" },
    { icon: SettingsRounded, label: "Settings" },
]
const Sidebar: React.FC<IProps> = ({ children }) => {
    let navigate = useNavigate();
    return (
        <>
            <Box sx={{ display: 'flex', minHeight: 'calc(100vh - 64px)' }}>
                <Grid container>
                    <Grid item xs={2}>
                        <Paper sx={{ padding: '30px 0', height: '100%' }}>
                            <>
                                {NavMenus.map((item, index) => (
                                    <NavItem key={index} elevation={0}>
                                        <item.icon />
                                        <span>{item.label}</span>
                                    </NavItem>
                                ))}
                            </>
                        </Paper>
                    </Grid>
                    <Grid item xs={10}>
                        {/* other */}
                        {children}
                    </Grid>
                </Grid>
            </Box>

        </>
    );
}

export default Sidebar;