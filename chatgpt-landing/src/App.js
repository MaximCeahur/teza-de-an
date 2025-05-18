import logo from './logo.svg';
import './App.css';
import { AppBar, Toolbar, Typography, Button, Box, Container, Grid, Paper, CardContent, Avatar, Card, Link, Divider } from "@mui/material";
import StarIcon from '@mui/icons-material/Star';
import DevicesIcon from '@mui/icons-material/Devices';
import HeadsetMicIcon from '@mui/icons-material/HeadsetMic';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import FavoriteIcon from '@mui/icons-material/Favorite';

const LandingPage = () => {
  return (
    <Box sx={{ background: "linear-gradient(to right, #1e88e5, #2196f3)", paddingBottom: "80px", color: "white" }}>
      <AppBar position="static" sx={{ backgroundColor: "transparent", boxShadow: "none" }}>
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <Typography variant="h6" sx={{ fontWeight: "bold" }}>
            🌐 PRO-ЛЕНДИНГ
          </Typography>
          <Box>
            <Button color="inherit">ГЛАВНАЯ</Button>
            <Button color="inherit">ВОЗМОЖНОСТИ</Button>
            <Button color="inherit">О НАС</Button>
            <Button color="inherit">КОНТАКТЫ</Button>
          </Box>
          <Button variant="outlined" sx={{ color: "white", borderColor: "white" }}>
            РЕГИСТРАЦИЯ
          </Button>
        </Toolbar>
      </AppBar>

      <Container maxWidth="md" sx={{ textAlign: "center", mt: 12 }}>
        <Typography variant="h3" fontWeight="bold" gutterBottom>
          Откройте Новые Горизонты
        </Typography>
        <Typography variant="h3" fontWeight="bold" gutterBottom>
          с Нами!
        </Typography>
        <Typography variant="h6" sx={{ mt: 3, mb: 5 }}>
          Наш инновационный продукт поможет вам достичь невероятных
          результатов быстрее, чем вы могли себе представить. Присоединяйтесь к
          тысячам довольных клиентов.
        </Typography>
        <Box sx={{ display: "flex", justifyContent: "center", gap: 2 }}>
          <Button variant="contained" color="secondary" sx={{ bgcolor: "#ab47bc", fontWeight: "bold", px: 4, py: 1.5 }}>
            НАЧАТЬ БЕСПЛАТНО
          </Button>
          <Button variant="outlined" sx={{ color: "white", borderColor: "white", px: 4, py: 1.5 }}>
            ДЕМО-ВЕРСИЯ
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

const FeaturesSection = () => {
  const features = [
    {
      icon: <StarIcon sx={{ fontSize: 40, color: '#1976d2' }} />,
      title: "Премиум Дизайн",
      description: "Эстетика и функциональность Material-UI для впечатляющего пользовательского опыта."
    },
    {
      icon: <DevicesIcon sx={{ fontSize: 40, color: '#1976d2' }} />,
      title: "Полная Адаптивность",
      description: "Идеальное отображение на любых экранах – от смартфонов до больших мониторов."
    },
    {
      icon: <HeadsetMicIcon sx={{ fontSize: 40, color: '#1976d2' }} />,
      title: "Поддержка 24/7",
      description: "Наша команда всегда готова помочь вам с любыми вопросами."
    }
  ];

  return (
    <Container sx={{ py: 8 }}>
      <Typography variant="h4" fontWeight="bold" align="center" gutterBottom>
        Почему выбирают нас?
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        {features.map((feature, index) => (
          <Grid item xs={12} sm={10} md={8} key={index}>
            <Paper elevation={3} sx={{ p: 4, textAlign: 'center' }}>
              <Box mb={2}>{feature.icon}</Box>
              <Typography variant="h6" gutterBottom>{feature.title}</Typography>
              <Typography color="text.secondary">{feature.description}</Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};
const HowItWorksSection = () => {
  const steps = [
    {
      icon: <CheckCircleIcon sx={{ fontSize: 40, color: '#9c27b0' }} />,
      title: "1. Регистрация",
      description: "Быстрый и простой процесс создания аккаунта. Никаких скрытых платежей."
    },
    {
      icon: <LightbulbIcon sx={{ fontSize: 40, color: '#9c27b0' }} />,
      title: "2. Настройка",
      description: "Персонализируйте сервис под ваши нужды с помощью интуитивно понятных инструментов."
    },
    {
      icon: <RocketLaunchIcon sx={{ fontSize: 40, color: '#9c27b0' }} />,
      title: "3. Запуск!",
      description: "Начинайте использовать все возможности нашего продукта и достигайте новых высот."
    }
  ];

  return (
    <Container sx={{ py: 8 }}>
      <Typography variant="h4" fontWeight="bold" align="center" gutterBottom>
        Как это работает?
      </Typography>
      <Grid container spacing={6} direction="column" alignItems="center">
        {steps.map((step, index) => (
          <Grid item key={index} sx={{ textAlign: 'center' }}>
            <Box mb={2}>{step.icon}</Box>
            <Typography variant="h6" gutterBottom>{step.title}</Typography>
            <Typography color="text.secondary">{step.description}</Typography>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

const testimonials = [
  {
    name: 'Анна Иванова',
    position: 'CEO, TechSolutions',
    quote: 'Этот продукт превзошел все мои ожидания! Мой бизнес вышел на новый уровень.',
    initial: 'А',
  },
  {
    name: 'Петр Сидоров',
    position: 'Маркетолог, CreativeMinds',
    quote: 'Невероятно удобный интерфейс и мощный функционал. Рекомендую всем!',
    initial: 'П',
  },
];

const TestimonialsSection = () => {
  return (
    <Box sx={{ py: 6, px: 2, maxWidth: 900, mx: 'auto' }}>
      <Typography variant="h4" align="center" fontWeight="bold" gutterBottom>
        Что говорят наши клиенты
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        {testimonials.map((item, index) => (
          <Grid item xs={12} sm={6} key={index}>
            <Card elevation={3}>
              <CardContent>
                <Box display="flex" justifyContent="center" mb={2}>
                  <Avatar sx={{ bgcolor: 'purple', width: 56, height: 56 }}>
                    <Typography variant="h6">{item.initial}</Typography>
                  </Avatar>
                </Box>
                <Typography variant="body1" fontStyle="italic" align="center" mb={3}>
                  “{item.quote}”
                </Typography>
                <Typography variant="subtitle1" align="center" fontWeight="bold">
                  {item.name}
                </Typography>
                <Typography variant="body2" align="center" color="textSecondary">
                  {item.position}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

const CTASection = () => {
  return (
    <Box
      sx={{
        backgroundColor: '#1565c0', // синий цвет
        color: '#fff',
        py: 8,
        textAlign: 'center',
      }}
    >
      <Typography variant="h4" fontWeight="bold" gutterBottom>
        Готовы начать?
      </Typography>
      <Typography variant="h6" sx={{ mb: 4, maxWidth: 600, mx: 'auto' }}>
        Присоединяйтесь к нам сегодня и измените свой подход к работе. Это проще, чем кажется!
      </Typography>
      <Button
        variant="contained"
        sx={{
          background: 'linear-gradient(to right, #9c27b0, #e91e63)',
          color: '#fff',
          px: 4,
          py: 1.5,
          borderRadius: 2,
          boxShadow: 3,
          '&:hover': {
            background: 'linear-gradient(to right, #8e24aa, #d81b60)',
          },
        }}
      >
        ЗАРЕГИСТРИРОВАТЬСЯ СЕЙЧАС
      </Button>
    </Box>
  );
};

const Footer = () => {
  return (
    <Box component="footer" sx={{ backgroundColor: '#f1f1f1', mt: 8 }}>
      <Box sx={{ px: { xs: 2, sm: 6 }, py: 6 }}>
        <Grid container spacing={4} justifyContent="center">
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" fontWeight="bold" gutterBottom>
              PRO-ЛЕНДИНГ
            </Typography>
            <Typography variant="body2" color="textSecondary">
              Инновационные решения для вашего успеха.
            </Typography>
          </Grid>
          <Grid item xs={6} sm={4}>
            <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
              Продукт
            </Typography>
            <Link href="#" underline="hover" display="block" color="textPrimary">
              Возможности
            </Link>
            <Link href="#" underline="hover" display="block" color="textPrimary">
              Тарифы
            </Link>
            <Link href="#" underline="hover" display="block" color="textPrimary">
              Интеграции
            </Link>
          </Grid>
          <Grid item xs={6} sm={4}>
            <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
              Компания
            </Typography>
            <Link href="#" underline="hover" display="block" color="textPrimary">
              О нас
            </Link>
            <Link href="#" underline="hover" display="block" color="textPrimary">
              Контакты
            </Link>
            <Link href="#" underline="hover" display="block" color="textPrimary">
              Карьера
            </Link>
          </Grid>
        </Grid>
      </Box>

      <Divider />

      <Box sx={{ textAlign: 'center', py: 3 }}>
        <Typography variant="body2" color="textSecondary">
          © 2025 PRO-ЛЕНДИНГ. Все права защищены.
        </Typography>
        <Typography variant="body2" color="textSecondary">
          Сделано с <FavoriteIcon fontSize="small" sx={{ color: 'hotpink', mx: 0.5 }} /> и Material-UI.
        </Typography>
      </Box>
    </Box>
  );
};


function App() {
    return (
        <>
            <LandingPage />
            <FeaturesSection />
            <HowItWorksSection />
            <TestimonialsSection />
            <CTASection />
            <Footer />
        </>
    );
}

export default App;
