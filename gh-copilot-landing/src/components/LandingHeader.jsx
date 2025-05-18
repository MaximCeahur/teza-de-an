import React from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  Container,
  Stack,
  useMediaQuery,
  useTheme,
  Link as MuiLink,
} from '@mui/material';
import AdbIcon from '@mui/icons-material/Adb';

const navLinks = [
  { label: 'ГЛАВНАЯ', href: '#' },
  { label: 'ВОЗМОЖНОСТИ', href: '#' },
  { label: 'О НАС', href: '#' },
  { label: 'КОНТАКТЫ', href: '#' },
];

export default function LandingHeader() {
  const theme = useTheme();
  useMediaQuery(theme.breakpoints.down('md')); // just to trigger MUI reactivity

  return (
    <Box sx={{
      minHeight: '100vh',
      width: '100%',
      background: 'linear-gradient(135deg, #2196f3 0%, #42a5f5 100%)',
    }}>
      <AppBar
        position="static"
        sx={{
          background: '#2196f3',
          boxShadow: '0 2px 6px 0 rgba(0,0,0,0.05)',
        }}
        elevation={1}
      >
        <Toolbar sx={{ maxWidth: 1400, width: '100%', margin: '0 auto', px: { xs: 1, md: 3 } }}>
          <Box sx={{ display: 'flex', alignItems: 'center', flexGrow: 1 }}>
            <AdbIcon sx={{ mr: 1, fontSize: 32 }} />
            <Typography
              variant="h6"
              noWrap
              sx={{
                fontWeight: 700,
                letterSpacing: '0.15em',
                color: '#fff',
                textTransform: 'uppercase',
                fontSize: { xs: 18, md: 22 },
              }}
            >
              ПРО-ЛЕНДИНГ
            </Typography>
          </Box>
          <Stack direction="row" spacing={3} alignItems="center" sx={{ mr: 3, display: { xs: 'none', md: 'flex' } }}>
            {navLinks.map((link) => (
              <MuiLink
                key={link.label}
                href={link.href}
                underline="none"
                sx={{
                  color: '#fff',
                  fontSize: 18,
                  fontWeight: 400,
                  letterSpacing: '0.02em',
                  '&:hover': { color: '#e3e3e3' },
                  transition: 'color 0.2s',
                }}
              >
                {link.label}
              </MuiLink>
            ))}
          </Stack>
          <Button
            variant="outlined"
            sx={{
              color: '#fff',
              borderColor: 'rgba(255,255,255,0.7)',
              fontWeight: 500,
              fontSize: 18,
              px: 3,
              py: 0.7,
              borderRadius: 2,
              '&:hover': {
                borderColor: '#fff',
                background: 'rgba(255,255,255,0.08)',
              },
            }}
          >
            РЕГИСТРАЦИЯ
          </Button>
        </Toolbar>
      </AppBar>

      <Container
        maxWidth={false}
        sx={{
          minHeight: { xs: '70vh', md: '82vh' },
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          pt: { xs: 7, md: 10 },
        }}
      >
        <Typography
          variant="h2"
          align="center"
          sx={{
            fontWeight: 700,
            color: '#fff',
            fontSize: { xs: 36, md: 72 },
            mb: { xs: 3, md: 4 },
            lineHeight: 1.05,
            letterSpacing: '-0.01em',
          }}
        >
          Откройте Новые Горизонты<br />с Нами!
        </Typography>
        <Typography
          variant="h5"
          align="center"
          sx={{
            color: '#fff',
            fontWeight: 400,
            mb: { xs: 4, md: 5 },
            fontSize: { xs: 18, md: 32 },
            maxWidth: 1000,
            mx: 'auto',
          }}
        >
          Наш инновационный продукт поможет вам достичь невероятных результатов быстрее, чем вы могли себе представить. Присоединяйтесь к тысячам довольных клиентов.
        </Typography>
        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={3} sx={{ mt: 2 }}>
          <Button
            variant="contained"
            size="large"
            sx={{
              background: 'linear-gradient(90deg, #9c27b0 0%, #e040fb 100%)',
              color: '#fff',
              px: 5,
              py: 1.5,
              fontSize: 20,
              fontWeight: 600,
              borderRadius: 2,
              boxShadow: '0 4px 16px 0 rgba(156,39,176,0.18)',
              '&:hover': {
                background: 'linear-gradient(90deg, #8e24aa 0%, #ce93d8 100%)',
              },
            }}
          >
            НАЧАТЬ БЕСПЛАТНО
          </Button>
          <Button
            variant="outlined"
            size="large"
            sx={{
              color: '#fff',
              borderColor: '#fff',
              px: 5,
              py: 1.5,
              fontSize: 20,
              fontWeight: 600,
              borderRadius: 2,
              background: 'rgba(255,255,255,0.04)',
              '&:hover': {
                background: 'rgba(255,255,255,0.10)',
                borderColor: '#fff',
              },
            }}
          >
            ДЕМО-ВЕРСИЯ
          </Button>
        </Stack>
      </Container>
    </Box>
  );
}