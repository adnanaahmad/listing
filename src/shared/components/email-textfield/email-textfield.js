import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import { createTheme } from '@mui/material/styles';
import {ThemeProvider} from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';

const DarkTheme = createTheme({
    palette: {
      mode: 'dark',
      primary: {
        main: '#ebebeb',
      },
    },
});

export default function EmailTextField() {
    return (
        <ThemeProvider theme={DarkTheme}>
            <TextField 
                sx={{
                    minWidth: '50%', 
                    "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
                        borderWidth: "2px",
                        borderColor: 'white',
                        borderRadius: 2,
                    }
                }}
                id="input-with-icon-textfield"
                placeholder='Your Email'
                InputProps={{
                startAdornment: (
                    <InputAdornment position="start">
                        <SearchIcon fontSize='large'/>
                    </InputAdornment>
                ),
                }}
                variant="outlined"
            />
        </ThemeProvider>
    )
}