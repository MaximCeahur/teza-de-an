import React from 'react';
import { Box, Typography, Link as MuiLink, Stack, Grid } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';

export default function Footer() {
  return (
    <Box component="footer" sx={{ width: '100%', bgcolor: '#f1f1f1', mt: 0 }}>
      <Box sx={{ px: { xs: 2, md: 10 }, py: { xs: 5, md: 6 }, borderBottom: '1px solid #e0e0e0' }}>
        <Grid container spacing={4} justifyContent="flex-start">
          <Grid item xs={12} md={5}>
            <Typography
              variant="h5"
              sx={{ fontWeight: 700, mb: 1, letterSpacing: 1 }}
            >
              PRO-ЛЕНДИНГ
            </Typography>
            <Typography variant="body1" sx={{ color: '#444', fontSize: 17 }}>
              Инновационные решения для вашего успеха.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4} md={3}>
            <Typography variant="h6" sx={{ fontWeight: 500, fontSize: 19, mb: 1 }}>
              Продукт
            </Typography>
            <Stack spacing={0.5}>
              <MuiLink href="#" underline="none" sx={{ color: '#444', fontSize: 17, '&:hover': { color: '#9c27b0' } }}>
                Возможности
              </MuiLink>
              <MuiLink href="#" underline="none" sx={{ color: '#444', fontSize: 17, '&:hover': { color: '#9c27b0' } }}>
                Тарифы
              </MuiLink>
              <MuiLink href="#" underline="none" sx={{ color: '#444', fontSize: 17, '&:hover': { color: '#9c27b0' } }}>
                Интеграции
              </MuiLink>
            </Stack>
          </Grid>
          <Grid item xs={12} sm={4} md={3}>
            <Typography variant="h6" sx={{ fontWeight: 500, fontSize: 19, mb: 1 }}>
              Компания
            </Typography>
            <Stack spacing={0.5}>
              <MuiLink href="#" underline="none" sx={{ color: '#444', fontSize: 17, '&:hover': { color: '#9c27b0' } }}>
                О нас
              </MuiLink>
              <MuiLink href="#" underline="none" sx={{ color: '#444', fontSize: 17, '&:hover': { color: '#9c27b0' } }}>
                Контакты
              </MuiLink>
              <MuiLink href="#" underline="none" sx={{ color: '#444', fontSize: 17, '&:hover': { color: '#9c27b0' } }}>
                Карьера
              </MuiLink>
            </Stack>
          </Grid>
        </Grid>
      </Box>
      <Box sx={{ px: 2, py: 2, textAlign: 'center', bgcolor: '#f1f1f1' }}>
        <Typography variant="body2" sx={{ color: '#444', mb: 0.5, fontSize: 16 }}>
          © 2025 PRO-ЛЕНДИНГ. Все права защищены.
        </Typography>
        <Typography variant="body2" sx={{ color: '#888', fontSize: 15, display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 0.5 }}>
          Сделано с <FavoriteIcon sx={{ color: '#e040fb', fontSize: 18, mx: 0.3, mb: '2px' }} /> и Material-UI.
        </Typography>
      </Box>
    </Box>
  );
}