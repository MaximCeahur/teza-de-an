import React from 'react';
import { Box, Typography, Button, Stack } from '@mui/material';

export default function ReadyToStartSection() {
  return (
    <Box
      sx={{
        width: '100%',
        background: '#156dcc',
        py: { xs: 7, md: 11 },
        px: 2,
        textAlign: 'center',
        color: '#fff',
      }}
    >
      <Typography
        variant="h3"
        sx={{
          fontWeight: 700,
          mb: { xs: 2, md: 3 },
          fontSize: { xs: 32, md: 64 },
        }}
      >
        Готовы начать?
      </Typography>
      <Typography
        variant="h5"
        sx={{
          fontWeight: 400,
          mb: { xs: 4, md: 5 },
          fontSize: { xs: 18, md: 28 },
          maxWidth: 1200,
          mx: 'auto',
        }}
      >
        Присоединяйтесь к нам сегодня и измените свой подход к работе. Это проще, чем кажется!
      </Typography>
      <Stack alignItems="center">
        <Button
          variant="contained"
          size="large"
          sx={{
            background: 'linear-gradient(90deg, #9c27b0 0%, #c628b0 100%)',
            color: '#fff',
            px: 7,
            py: 2,
            fontSize: 28,
            fontWeight: 600,
            borderRadius: 2,
            boxShadow: '0 4px 16px 0 rgba(156,39,176,0.22)',
            mt: 2,
            '&:hover': {
              background: 'linear-gradient(90deg, #8e24aa 0%, #ad1db0 100%)',
            },
          }}
        >
          ЗАРЕГИСТРИРОВАТЬСЯ СЕЙЧАС
        </Button>
      </Stack>
    </Box>
  );
}