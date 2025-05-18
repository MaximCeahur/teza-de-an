import React from 'react';
import { Box, Typography, Paper, Avatar, Stack } from '@mui/material';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';

const testimonials = [
  {
    initial: 'А',
    name: 'Анна Иванова',
    position: 'CEO, TechSolutions',
    text: 'Этот продукт превзошел все мои ожидания! Мой бизнес вышел на новый уровень.',
  },
  {
    initial: 'П',
    name: 'Петр Сидоров',
    position: 'Маркетолог, CreativeMinds',
    text: 'Невероятно удобный интерфейс и мощный функционал. Рекомендую всем!',
  },
];

export default function TestimonialsSection() {
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
        Что говорят наши клиенты
      </Typography>
      <Stack spacing={5} alignItems="center" sx={{ maxWidth: 900, mx: 'auto' }}>
        {testimonials.map((item) => (
          <Paper
            key={item.name}
            elevation={2}
            sx={{
              width: '100%',
              maxWidth: 760,
              px: { xs: 2, md: 5 },
              py: { xs: 4, md: 5 },
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              borderRadius: 2,
              boxShadow: '0 2px 8px 0 rgba(44,62,80,0.08)',
              position: 'relative',
            }}
          >
            <Avatar
              sx={{
                bgcolor: '#9c27b0',
                width: 56,
                height: 56,
                fontSize: 28,
                mb: 2,
                fontWeight: 700,
              }}
            >
              {item.initial}
            </Avatar>
            <FormatQuoteIcon sx={{ color: '#888', fontSize: 38, mb: 2 }} />
            <Typography
              variant="body1"
              sx={{
                fontStyle: 'italic',
                color: '#222',
                fontSize: { xs: 17, md: 19 },
                textAlign: 'center',
                mb: 3,
              }}
            >
              {item.text}
            </Typography>
            <Box sx={{ textAlign: 'center', mt: 1 }}>
              <Typography variant="h6" sx={{ fontWeight: 700, fontSize: 19 }}>
                {item.name}
              </Typography>
              <Typography
                variant="body2"
                sx={{ color: '#888', fontSize: 15, mt: 0.5 }}
              >
                {item.position}
              </Typography>
            </Box>
            <FormatQuoteIcon
              sx={{
                color: '#888',
                fontSize: 34,
                position: 'absolute',
                right: 28,
                bottom: 20,
                opacity: 0.8,
                transform: 'scaleX(-1)',
                display: { xs: 'none', sm: 'block' },
              }}
            />
          </Paper>
        ))}
      </Stack>
    </Box>
  );
}