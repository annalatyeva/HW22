import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';

function BasicRating() {
    const [value, setValue] = React.useState(2);

    return (
        <Box
            sx={{
            '& > legend': { mt: 2 },
            }}
        >
        <Typography component="legend">Controlled</Typography>
        <Rating
            name="simple-controlled"
            value={value}
            onChange={(newValue) => {
            setValue(newValue);
        }}
        />
    </Box>
    );
}

export default BasicRating;