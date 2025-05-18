import React from 'react';
import { Box, Typography, Paper, Stack } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import DevicesIcon from '@mui/icons-material/Devices';
import HeadsetMicIcon from '@mui/icons-material/HeadsetMic';

const features = [
  {
    icon: <StarIcon sx={{ color: '#1976d2', fontSize: 48, mb: 1 }} />,
    title: 'Премиум Дизайн',
    description:
      'Эстетика и функциональность Material-UI для впечатляющего пользовательского опыта.',
  },
  {
    icon: <DevicesIcon sx={{ color: '#1976d2', fontSize: 48, mb: 1 }} />,
    title: 'Полная Адаптивность',
    description:
      'Идеальное отображение на любых экранах – от смартфонов до больших мониторов.',
  },
  {
    icon: <HeadsetMicIcon sx={{ color: '#1976d2', fontSize: 48, mb: 1 }} />,
    title: 'Поддержка 24/7',
    description:
      'Наша команда всегда готова помочь вам с любыми вопросами.',
  },
];

export default function WhyChooseUsSection() {
  return (
    <Box
      sx={{
        backgroundColor: '#fff',
        py: { xs: 5, md: 8 },
        px: 2,
        width: '100%',
      }}
    >
      <Typography
        variant="h4"
        align="center"
        sx={{
          fontWeight: 700,
          mb: { xs: 3, md: 5 },
          fontSize: { xs: 28, md: 38 },
        }}
      >
        Почему выбирают нас?
      </Typography>
      <Stack
        spacing={4}
        alignItems="center"
        sx={{
          maxWidth: 900,
          mx: 'auto',
        }}
      >
        {features.map((f) => (
          <Paper
            key={f.title}
            elevation={2}
            sx={{
              width: '100%',
              maxWidth: 760,
              px: { xs: 2, md: 5 },
              py: { xs: 3, md: 4 },
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              borderRadius: 2,
              boxShadow: '0 2px 8px 0 rgba(44,62,80,0.08)',
            }}
          >
            {f.icon}
            <Typography
              variant="h5"
              align="center"
              sx={{
                fontWeight: 500,
                mt: 1,
                mb: 1,
                fontSize: { xs: 20, md: 26 },
              }}
            >
              {f.title}
            </Typography>
            <Typography
              variant="body1"
              align="center"
              sx={{
                color: '#5c5c5c',
                fontSize: { xs: 16, md: 18 },
              }}
            >
              {f.description}
            </Typography>
          </Paper>
        ))}
      </Stack>
    </Box>
  );
}