import React from 'react';
import { Box, Typography, Stack } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';

const steps = [
  {
    icon: <CheckCircleIcon sx={{ color: '#9c27b0', fontSize: 54, mb: 1 }} />,
    title: '1. Регистрация',
    description: 'Быстрый и простой процесс создания аккаунта. Никаких скрытых платежей.',
  },
  {
    icon: <LightbulbIcon sx={{ color: '#9c27b0', fontSize: 54, mb: 1 }} />,
    title: '2. Настройка',
    description: 'Персонализируйте сервис под ваши нужды с помощью интуитивно понятных инструментов.',
  },
  {
    icon: <RocketLaunchIcon sx={{ color: '#9c27b0', fontSize: 54, mb: 1 }} />,
    title: '3. Запуск!',
    description: 'Начинайте использовать все возможности нашего продукта и достигайте новых высот.',
  },
];

export default function HowItWorksSection() {
  return (
    <Box
      sx={{
        background: '#fff',
        width: '100%',
        py: { xs: 5, md: 8 },
        px: 2,
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
        Как это работает?
      </Typography>
      <Stack spacing={7} alignItems="center" sx={{ maxWidth: 800, mx: 'auto' }}>
        {steps.map((step) => (
          <Box
            key={step.title}
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              textAlign: 'center',
              width: '100%',
            }}
          >
            {step.icon}
            <Typography
              variant="h6"
              sx={{
                fontWeight: 700,
                mb: 1,
                mt: 1,
                fontSize: { xs: 20, md: 24 },
              }}
            >
              {step.title}
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: '#444',
                fontSize: { xs: 16, md: 18 },
                maxWidth: 600,
              }}
            >
              {step.description}
            </Typography>
          </Box>
        ))}
      </Stack>
    </Box>
  );
}