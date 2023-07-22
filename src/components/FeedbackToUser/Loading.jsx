import React from 'react';
import { Box, Typography } from "@mui/material";
import { DotLoading, LoadingWrapper } from '../../assets/styles/DotLoading';

export const Loading = () => {
    return (
        <Box sx={{ display: "flex", justifyContent: "center" }}>
            <LoadingWrapper>
                <Typography variant='overline'>Loading</Typography>
                <DotLoading delay="0s" />
                <DotLoading delay="0.1s" />
                <DotLoading delay="0.2s" />
            </LoadingWrapper>
        </Box>
    )
}
