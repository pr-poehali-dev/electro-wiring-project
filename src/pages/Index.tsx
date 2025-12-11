import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [area, setArea] = useState<string>('');
  const [calculatedPrice, setCalculatedPrice] = useState<number | null>(null);

  const calculatePrice = () => {
    const areaNum = parseFloat(area);
    if (areaNum && areaNum > 0) {
      const basePrice = 3500;
      const total = Math.round(areaNum * basePrice);
      setCalculatedPrice(total);
    }
  };

  const services = [
    {
      icon: 'Zap',
      title: 'Полная замена проводки',
      description: 'Демонтаж старой и монтаж новой электропроводки под ключ',
      price: 'от 3500₽/м²'
    },
    {
      icon: 'Lightbulb',
      title: 'Установка освещения',
      description: 'Монтаж люстр, светильников, LED-подсветки',
      price: 'от 800₽/шт'
    },
    {
      icon: 'Shield',
      title: 'Электрощиты и автоматика',
      description: 'Сборка и установка распределительных щитов',
      price: 'от 5000₽'
    },
    {
      icon: 'Plug',
      title: 'Розетки и выключатели',
      description: 'Установка и замена электроустановочных изделий',
      price: 'от 300₽/шт'
    },
    {
      icon: 'Home',
      title: 'Умный дом',
      description: 'Автоматизация освещения и электроприборов',
      price: 'от 15000₽'
    },
    {
      icon: 'AlertTriangle',
      title: 'Аварийный ремонт',
      description: 'Устранение неисправностей в короткие сроки',
      price: 'от 1500₽'
    }
  ];

  const portfolio = [
    {
      image: 'https://cdn.poehali.dev/projects/3aae2f5b-7afb-415f-8a87-c35950266097/files/f6e6e851-5a5f-4ba2-aa8d-c7e2c70c5a56.jpg',
      title: 'Квартира 85м², ЖК Новая Москва',
      description: 'Полная замена проводки, 3 комнаты'
    },
    {
      image: 'https://cdn.poehali.dev/projects/3aae2f5b-7afb-415f-8a87-c35950266097/files/a7ee64c9-0239-4b92-8ed7-305c207add0d.jpg',
      title: 'Квартира 120м², ЖК Премиум класса',
      description: 'Электрощит, умный дом, дизайнерское освещение'
    },
    {
      image: 'https://cdn.poehali.dev/projects/3aae2f5b-7afb-415f-8a87-c35950266097/files/0156bb6e-7c4b-4ff8-873b-07a291db0aab.jpg',
      title: 'Квартира 60м², Центр города',
      description: 'LED-освещение, замена розеток и выключателей'
    }
  ];

  const advantages = [
    {
      icon: 'Award',
      title: 'Опыт 12+ лет',
      description: 'Более 500 успешно выполненных проектов'
    },
    {
      icon: 'CheckCircle',
      title: 'Гарантия 3 года',
      description: 'На все виды выполненных работ'
    },
    {
      icon: 'Clock',
      title: 'Точные сроки',
      description: 'Договор с фиксированными датами'
    },
    {
      icon: 'FileText',
      title: 'Официально',
      description: 'Договор, смета, акт выполненных работ'
    }
  ];

  const reviews = [
    {
      name: 'Александр К.',
      text: 'Отличная работа! Все сделано быстро и качественно. Проводку заменили за 5 дней, все аккуратно, чисто. Рекомендую!',
      rating: 5
    },
    {
      name: 'Мария С.',
      text: 'Профессионалы своего дела. Помогли с выбором материалов, дали гарантию. Цены адекватные, качество на высоте.',
      rating: 5
    },
    {
      name: 'Дмитрий В.',
      text: 'Делали электрику в новостройке. Все по плану, без задержек. Мастер грамотный, объяснил все нюансы. Спасибо!',
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-lg gradient-electric flex items-center justify-center">
              <Icon name="Zap" size={24} className="text-white" />
            </div>
            <span className="font-bold text-xl">ЭлектроМастер</span>
          </div>
          <nav className="hidden md:flex gap-6">
            <a href="#services" className="text-sm font-medium hover:text-primary transition-colors">Услуги</a>
            <a href="#portfolio" className="text-sm font-medium hover:text-primary transition-colors">Портфолио</a>
            <a href="#calculator" className="text-sm font-medium hover:text-primary transition-colors">Калькулятор</a>
            <a href="#reviews" className="text-sm font-medium hover:text-primary transition-colors">Отзывы</a>
            <a href="#contacts" className="text-sm font-medium hover:text-primary transition-colors">Контакты</a>
          </nav>
          <Button className="gradient-electric text-white hover:opacity-90">
            <Icon name="Phone" size={16} className="mr-2" />
            Позвонить
          </Button>
        </div>
      </header>

      <section className="relative min-h-[600px] flex items-center overflow-hidden">
        <div className="absolute inset-0 gradient-electric opacity-10"></div>
        <div className="container relative z-10 py-20">
          <div className="max-w-3xl animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Замена электропроводки <span className="text-gradient">под ключ</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Профессиональный монтаж электрики в квартирах. Гарантия 3 года. Фиксированные сроки и цены.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="gradient-electric text-white hover:opacity-90">
                <Icon name="Calculator" size={20} className="mr-2" />
                Рассчитать стоимость
              </Button>
              <Button size="lg" variant="outline">
                <Icon name="Phone" size={20} className="mr-2" />
                +7 (999) 123-45-67
              </Button>
            </div>
            <div className="flex flex-wrap gap-8 mt-12">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full gradient-blue flex items-center justify-center">
                  <Icon name="Award" size={24} className="text-white" />
                </div>
                <div>
                  <div className="font-bold text-2xl">500+</div>
                  <div className="text-sm text-muted-foreground">Проектов</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full gradient-orange flex items-center justify-center">
                  <Icon name="Clock" size={24} className="text-white" />
                </div>
                <div>
                  <div className="font-bold text-2xl">12 лет</div>
                  <div className="text-sm text-muted-foreground">Опыт работы</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full gradient-electric flex items-center justify-center">
                  <Icon name="Star" size={24} className="text-white" />
                </div>
                <div>
                  <div className="font-bold text-2xl">4.9/5</div>
                  <div className="text-sm text-muted-foreground">Рейтинг</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 bg-muted/30">
        <div className="container">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl font-bold mb-4">Наши услуги</h2>
            <p className="text-xl text-muted-foreground">Полный спектр электромонтажных работ</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:scale-105 animate-scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardHeader>
                  <div className="w-14 h-14 rounded-lg gradient-electric flex items-center justify-center mb-4">
                    <Icon name={service.icon} size={28} className="text-white" />
                  </div>
                  <CardTitle>{service.title}</CardTitle>
                  <CardDescription className="text-base">{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-gradient">{service.price}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="portfolio" className="py-20">
        <div className="container">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl font-bold mb-4">Портфолио работ</h2>
            <p className="text-xl text-muted-foreground">Примеры наших реализованных проектов</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {portfolio.map((project, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-all duration-300 animate-slide-up" style={{ animationDelay: `${index * 0.15}s` }}>
                <div className="aspect-video overflow-hidden">
                  <img src={project.image} alt={project.title} className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" />
                </div>
                <CardHeader>
                  <CardTitle className="text-lg">{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted/30">
        <div className="container">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl font-bold mb-4">Наши преимущества</h2>
            <p className="text-xl text-muted-foreground">Почему выбирают нас</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {advantages.map((advantage, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-all duration-300 animate-scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardHeader>
                  <div className="w-16 h-16 rounded-full gradient-blue flex items-center justify-center mx-auto mb-4">
                    <Icon name={advantage.icon} size={32} className="text-white" />
                  </div>
                  <CardTitle className="text-xl">{advantage.title}</CardTitle>
                  <CardDescription className="text-base">{advantage.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="calculator" className="py-20">
        <div className="container">
          <div className="max-w-2xl mx-auto">
            <Card className="shadow-xl animate-scale-in">
              <CardHeader className="text-center">
                <div className="w-16 h-16 rounded-full gradient-electric flex items-center justify-center mx-auto mb-4">
                  <Icon name="Calculator" size={32} className="text-white" />
                </div>
                <CardTitle className="text-3xl">Калькулятор стоимости</CardTitle>
                <CardDescription className="text-base">Узнайте примерную стоимость замены проводки в вашей квартире</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="area" className="text-base">Площадь квартиры (м²)</Label>
                  <Input
                    id="area"
                    type="number"
                    placeholder="Например: 65"
                    value={area}
                    onChange={(e) => setArea(e.target.value)}
                    className="text-lg h-12"
                  />
                </div>
                <Button onClick={calculatePrice} className="w-full gradient-electric text-white text-lg h-12 hover:opacity-90">
                  <Icon name="Zap" size={20} className="mr-2" />
                  Рассчитать стоимость
                </Button>
                {calculatedPrice !== null && (
                  <div className="p-6 rounded-lg gradient-electric text-white text-center animate-scale-in">
                    <div className="text-sm font-medium mb-2">Примерная стоимость работ:</div>
                    <div className="text-4xl font-bold">{calculatedPrice.toLocaleString('ru-RU')} ₽</div>
                    <div className="text-sm mt-2 opacity-90">*Итоговая стоимость уточняется после осмотра объекта</div>
                  </div>
                )}
                <div className="bg-muted p-4 rounded-lg text-sm space-y-2">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Базовая стоимость:</span>
                    <span className="font-medium">3500 ₽/м²</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Включает:</span>
                    <span className="font-medium">Материалы + Работа</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="reviews" className="py-20 bg-muted/30">
        <div className="container">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl font-bold mb-4">Отзывы клиентов</h2>
            <p className="text-xl text-muted-foreground">Что говорят о нашей работе</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {reviews.map((review, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardHeader>
                  <div className="flex gap-1 mb-2">
                    {[...Array(review.rating)].map((_, i) => (
                      <Icon key={i} name="Star" size={20} className="text-yellow-500 fill-yellow-500" />
                    ))}
                  </div>
                  <CardTitle className="text-lg">{review.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{review.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contacts" className="py-20">
        <div className="container">
          <div className="max-w-2xl mx-auto">
            <Card className="shadow-xl animate-scale-in">
              <CardHeader className="text-center">
                <CardTitle className="text-3xl">Оставьте заявку</CardTitle>
                <CardDescription className="text-base">Мы свяжемся с вами в течение 15 минут</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Ваше имя</Label>
                  <Input id="name" placeholder="Иван Иванов" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Телефон</Label>
                  <Input id="phone" type="tel" placeholder="+7 (999) 123-45-67" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Комментарий</Label>
                  <Textarea id="message" placeholder="Расскажите о вашем проекте..." rows={4} />
                </div>
                <Button className="w-full gradient-electric text-white text-lg h-12 hover:opacity-90">
                  <Icon name="Send" size={20} className="mr-2" />
                  Отправить заявку
                </Button>
                <div className="text-center text-sm text-muted-foreground">
                  Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="bg-foreground text-background py-12">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 rounded-lg gradient-electric flex items-center justify-center">
                  <Icon name="Zap" size={24} className="text-white" />
                </div>
                <span className="font-bold text-xl">ЭлектроМастер</span>
              </div>
              <p className="text-background/70">Профессиональные электромонтажные работы в Москве и области</p>
            </div>
            <div>
              <h3 className="font-bold mb-4">Контакты</h3>
              <div className="space-y-2 text-background/70">
                <div className="flex items-center gap-2">
                  <Icon name="Phone" size={16} />
                  <span>+7 (999) 123-45-67</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="Mail" size={16} />
                  <span>info@electromaster.ru</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="MapPin" size={16} />
                  <span>Москва, ул. Примерная, 123</span>
                </div>
              </div>
            </div>
            <div>
              <h3 className="font-bold mb-4">Режим работы</h3>
              <div className="space-y-2 text-background/70">
                <div>Пн-Пт: 9:00 - 21:00</div>
                <div>Сб-Вс: 10:00 - 18:00</div>
                <div className="mt-4 text-sm">Выезд мастера - круглосуточно</div>
              </div>
            </div>
          </div>
          <div className="border-t border-background/20 mt-8 pt-8 text-center text-background/70 text-sm">
            © 2024 ЭлектроМастер. Все права защищены.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
