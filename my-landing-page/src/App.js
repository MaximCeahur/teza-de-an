import React, { useState } from 'react';
import {
    AppBar,
    Toolbar,
    Typography,
    Button,
    Container,
    Grid,
    Card,
    Box,
    CssBaseline,
    IconButton,
    Menu,
    MenuItem,
    Paper,
    Avatar,
    Divider 
} from '@mui/material';
import { styled, alpha } from '@mui/material/styles'; 
import MenuIcon from '@mui/icons-material/Menu';
import AdbIcon from '@mui/icons-material/Adb';
import StarIcon from '@mui/icons-material/Star';
import DevicesIcon from '@mui/icons-material/Devices';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import LightbulbIcon from '@mui/icons-material/Lightbulb'; 
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch'; 
import FormatQuoteIcon from '@mui/icons-material/FormatQuote'; 


const HeroBox = styled(Box)(({ theme }) => ({
    background: `linear-gradient(45deg, ${theme.palette.primary.main} 30%, ${alpha(theme.palette.primary.dark, 0.8)} 90%)`,
    color: theme.palette.primary.contrastText,
    paddingTop: theme.spacing(12),
    paddingBottom: theme.spacing(10),
    textAlign: 'center',
}));

const FeatureCard = styled(Card)(({ theme }) => ({
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: theme.spacing(3),
    transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
    '&:hover': {
        transform: 'translateY(-5px)',
        boxShadow: theme.shadows[10],
    }
}));

const SectionTitle = styled(Typography)(({ theme }) => ({
    marginBottom: theme.spacing(6),
    fontWeight: 'bold',
}));

const FooterBox = styled(Box)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'light' ? theme.palette.grey[200] : theme.palette.grey[800],
    padding: theme.spacing(6),
    marginTop: theme.spacing(8),
}));

const navItems = ['Главная', 'Возможности', 'О нас', 'Контакты'];

function Header() {
    const [anchorElNav, setAnchorElNav] = useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    return (
        <AppBar position="sticky">
            <Container maxWidth="lg">
                <Toolbar disableGutters>
                    <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
                    <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        href="#app-bar-with-responsive-menu"
                        sx={{
                            mr: 2,
                            display: { xs: 'none', md: 'flex' },
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.2rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        PRO-ЛЕНДИНГ
                    </Typography>
                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="меню навигации"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: 'block', md: 'none' },
                            }}
                        >
                            {navItems.map((item) => (
                                <MenuItem key={item} onClick={handleCloseNavMenu}>
                                    <Typography textAlign="center">{item}</Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                    <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1, flexGrow: {xs: 1, md:0} }} />
                     <Typography
                        variant="h5"
                        noWrap
                        component="a"
                        href="#app-bar-with-responsive-menu"
                        sx={{
                            mr: 2,
                            display: { xs: 'flex', md: 'none' },
                            flexGrow: 1,
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.2rem',
                            color: 'inherit',
                            textDecoration: 'none',
                            justifyContent: {xs: 'flex-start', md: 'center'}
                        }}
                    >
                    </Typography>
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'center' }}>
                        {navItems.map((item) => (
                            <Button
                                key={item}
                                onClick={handleCloseNavMenu}
                                sx={{ my: 2, color: 'white', display: 'block', mx: 1 }} 
                            >
                                {item}
                            </Button>
                        ))}
                    </Box>

                    <Box sx={{ flexGrow: 0 }}>
                        <Button variant="outlined" color="inherit" sx={{ borderColor: 'rgba(255,255,255,0.5)', '&:hover': { borderColor: 'white'} }}>
                            Регистрация
                        </Button>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}

function HeroSection() {
    return (
        <HeroBox>
            <Container maxWidth="md">
                <Typography
                    component="h1"
                    variant="h2"
                    gutterBottom
                    sx={{ fontWeight: 'bold', mb: 3 }}
                >
                    Откройте Новые Горизонты с Нами!
                </Typography>
                <Typography variant="h5" paragraph sx={{ mb: 4, opacity: 0.9 }}>
                    Наш инновационный продукт поможет вам достичь невероятных результатов быстрее, чем вы могли себе представить. Присоединяйтесь к тысячам довольных клиентов.
                </Typography>
                <Grid container spacing={2} justifyContent="center">
                    <Grid item>
                        <Button variant="contained" color="secondary" size="large">
                            Начать бесплатно
                        </Button>
                    </Grid>
                    <Grid item>
                        <Button variant="outlined" size="large" sx={{ color: 'white', borderColor: 'rgba(255,255,255,0.7)', '&:hover': {borderColor: 'white'} }}>
                            Демо-версия
                        </Button>
                    </Grid>
                </Grid>
            </Container>
        </HeroBox>
    );
}

const features = [
    {
        icon: <StarIcon fontSize="large" color="primary" />,
        title: 'Премиум Дизайн',
        description: 'Эстетика и функциональность Material-UI для впечатляющего пользовательского опыта.',
    },
    {
        icon: <DevicesIcon fontSize="large" color="primary" />,
        title: 'Полная Адаптивность',
        description: 'Идеальное отображение на любых экранах – от смартфонов до больших мониторов.',
    },
    {
        icon: <SupportAgentIcon fontSize="large" color="primary" />,
        title: 'Поддержка 24/7',
        description: 'Наша команда всегда готова помочь вам с любыми вопросами.',
    },
];

function FeaturesSection() {
    return (
        <Container sx={{ py: 8 }} maxWidth="lg">
            <SectionTitle variant="h4" align="center">
                Почему выбирают нас?
            </SectionTitle>
            <Grid container spacing={4} justifyContent={'center'}>
                {features.map((feature) => (
                    <Grid item key={feature.title} xs={12} sm={6} md={4}>
                        <FeatureCard elevation={3}>
                            <Box sx={{ color: 'primary.main', mb: 2 }}>{React.cloneElement(feature.icon, {sx: { fontSize: 50}})}</Box>
                            <Typography gutterBottom variant="h5" component="h3" fontWeight="medium">
                                {feature.title}
                            </Typography>
                            <Typography color="text.secondary">
                                {feature.description}
                            </Typography>
                        </FeatureCard>
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
}

const howItWorksSteps = [
    {
        icon: <HowToRegIcon sx={{ fontSize: 60 }} color="secondary" />,
        title: '1. Регистрация',
        description: 'Быстрый и простой процесс создания аккаунта. Никаких скрытых платежей.',
    },
    {
        icon: <LightbulbIcon sx={{ fontSize: 60 }} color="secondary" />,
        title: '2. Настройка',
        description: 'Персонализируйте сервис под ваши нужды с помощью интуитивно понятных инструментов.',
    },
    {
        icon: <RocketLaunchIcon sx={{ fontSize: 60 }} color="secondary" />,
        title: '3. Запуск!',
        description: 'Начинайте использовать все возможности нашего продукта и достигайте новых высот.',
    },
];

function HowItWorksSection() {
    return (
        <Box sx={{ py: 8, bgcolor: 'alternateBackground.default'}}>
            <Container maxWidth="lg">
                <SectionTitle variant="h4" align="center">
                    Как это работает?
                </SectionTitle>
                <Grid container spacing={5} justifyContent="center">
                    {howItWorksSteps.map((step) => (
                        <Grid item key={step.title} xs={12} md={4} sx={{ textAlign: 'center' }}>
                            <Box mb={2}>{step.icon}</Box>
                            <Typography variant="h6" component="h3" fontWeight="bold" gutterBottom>
                                {step.title}
                            </Typography>
                            <Typography color="text.secondary">
                                {step.description}
                            </Typography>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Box>
    );
}

const testimonials = [
    {
        avatar: "A",
        name: "Анна Иванова",
        quote: "Этот продукт превзошел все мои ожидания! Мой бизнес вышел на новый уровень.",
        company: "CEO, TechSolutions"
    },
    {
        avatar: "П",
        name: "Петр Сидоров",
        quote: "Невероятно удобный интерфейс и мощный функционал. Рекомендую всем!",
        company: "Маркетолог, CreativeMinds"
    }
];

function TestimonialSection() {
    return (
        <Container sx={{ py: 8 }} maxWidth="md">
            <SectionTitle variant="h4" align="center">
                Что говорят наши клиенты
            </SectionTitle>
            <Grid container spacing={4} justifyContent="center">
                {testimonials.map((testimonial, index) => (
                    <Grid item key={index} xs={12} sm={6}>
                        <Paper elevation={2} sx={{ p: 3, display: 'flex', flexDirection: 'column', alignItems: 'center', height: '100%'}}>
                            <Avatar sx={{ width: 56, height: 56, bgcolor: 'secondary.main', mb: 2 }}>
                                {testimonial.avatar}
                            </Avatar>
                            <FormatQuoteIcon sx={{ color: 'text.disabled', fontSize: 40, transform: 'rotate(180deg)' }} />
                            <Typography variant="body1" sx={{ fontStyle: 'italic', textAlign: 'center', my: 2, flexGrow: 1 }}>
                                {testimonial.quote}
                            </Typography>
                            <FormatQuoteIcon sx={{ color: 'text.disabled', fontSize: 40, alignSelf: 'flex-end' }} />
                            <Typography variant="subtitle1" fontWeight="bold" align="center">
                                {testimonial.name}
                            </Typography>
                            <Typography variant="caption" color="text.secondary" align="center">
                                {testimonial.company}
                            </Typography>
                        </Paper>
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
}


function CallToActionSection() {
    return (
         <Box sx={{ py: 10, textAlign: 'center', backgroundColor: 'primary.dark', color: 'white' }}>
            <Container maxWidth="md">
                <Typography variant="h3" component="h2" fontWeight="bold" gutterBottom>
                    Готовы начать?
                </Typography>
                <Typography variant="h6" color="rgba(255,255,255,0.8)" paragraph sx={{mb: 4}}>
                    Присоединяйтесь к нам сегодня и измените свой подход к работе. Это проще, чем кажется!
                </Typography>
                <Button variant="contained" color="secondary" size="large" sx={{px: 5, py: 1.5, fontSize: '1.1rem'}}>
                    Зарегистрироваться сейчас
                </Button>
            </Container>
        </Box>
    );
}


function Footer() {
    return (
        <FooterBox component="footer">
            <Container maxWidth="lg">
                <Grid container spacing={4} justifyContent="space-evenly">
                    <Grid item xs={12} sm={4} md={3}>
                        <Typography variant="h6" gutterBottom fontWeight="bold">PRO-ЛЕНДИНГ</Typography>
                        <Typography variant="body2" color="text.secondary">
                            Инновационные решения для вашего успеха.
                        </Typography>
                    </Grid>
                    <Grid item xs={6} sm={4} md={2}>
                        <Typography variant="subtitle1" gutterBottom fontWeight="medium">Продукт</Typography>
                        <Button component="a" href="#" color="inherit" sx={{display: 'block', p:0, textAlign:'left', textTransform: 'none', color: 'text.secondary'}} >Возможности</Button>
                        <Button component="a" href="#" color="inherit" sx={{display: 'block', p:0, textAlign:'left', textTransform: 'none', color: 'text.secondary'}} >Тарифы</Button>
                        <Button component="a" href="#" color="inherit" sx={{display: 'block', p:0, textAlign:'left', textTransform: 'none', color: 'text.secondary'}} >Интеграции</Button>
                    </Grid>
                     <Grid item xs={6} sm={4} md={2}>
                        <Typography variant="subtitle1" gutterBottom fontWeight="medium">Компания</Typography>
                        <Button component="a" href="#" color="inherit" sx={{display: 'block', p:0, textAlign:'left', textTransform: 'none', color: 'text.secondary'}} >О нас</Button>
                        <Button component="a" href="#" color="inherit" sx={{display: 'block', p:0, textAlign:'left', textTransform: 'none', color: 'text.secondary'}} >Контакты</Button>
                        <Button component="a" href="#" color="inherit" sx={{display: 'block', p:0, textAlign:'left', textTransform: 'none', color: 'text.secondary'}} >Карьера</Button>
                    </Grid>
                </Grid>
                <Divider sx={{ my: 4 }} />
                <Typography variant="body2" color="text.secondary" align="center">
                    © {new Date().getFullYear()} PRO-ЛЕНДИНГ. Все права защищены.
                </Typography>
                <Typography variant="caption" color="text.secondary" align="center" display="block">
                    Сделано с ❤️ и Material-UI.
                </Typography>
            </Container>
        </FooterBox>
    );
}

 

export default App;