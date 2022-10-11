import { Box } from "@mui/system"

export const SortNumber = ({ numero }) => {
    return (
        <Box sx={
            {
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                width: '111.2px', 
                height: '106.27px', 
                borderRadius: '50%', 
                backgroundColor: '#FFFFFF'
            }
            }>
            {numero}
        </Box>
    )
}