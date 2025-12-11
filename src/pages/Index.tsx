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
      icon: 'Award',
      title: 'Более 15 лет опыта',
      description: 'Работаем в сфере электромонтажа с 2009 года'
    },
    {
      icon: 'Users',
      title: 'Работа без посредников',
      description: 'Прямая связь с мастером, никаких наценок'
    },
    {
      icon: 'Wrench',
      title: 'Берёмся за любые задачи',
      description: 'От простой розетки до полной замены проводки'
    },
    {
      icon: 'Sparkles',
      title: 'Работаем чисто',
      description: 'Убираем за собой после каждого этапа работ'
    },
    {
      icon: 'Camera',
      title: 'Ведём фотофиксацию',
      description: 'Документируем каждый этап выполнения работ'
    },
    {
      icon: 'Home',
      title: 'Работаем в меблированных квартирах',
      description: 'Аккуратно работаем с вашей мебелью и техникой'
    },
    {
      icon: 'Tag',
      title: 'Выгодные цены',
      description: 'Честные цены без скрытых доплат'
    },
    {
      icon: 'Clock',
      title: 'Соблюдаем сроки',
      description: 'Фиксируем сроки в договоре и выполняем их'
    },
    {
      icon: 'CheckCircle',
      title: 'Качественные материалы',
      description: 'Используем сертифицированную продукцию'
    },
    {
      icon: 'Hammer',
      title: 'Заделываем штробы',
      description: 'Восстанавливаем поверхности после прокладки проводов'
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
              Замена электропроводки в кирпичном доме
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Электропроводка — это основа безопасности и комфорта жилья. В кирпичных домах, построенных в советское время, проводка часто выполнена из алюминия, который давно исчерпал свой ресурс. Мы более 15 лет выполняем замену электропроводки в Уфе и пригороде, строго по СНИП и ПУЭ, с гарантией качества.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="gradient-electric text-white hover:opacity-90">
                <Icon name="Calculator" size={20} className="mr-2" />
                Рассчитать стоимость
              </Button>
              <Button size="lg" variant="outline">
                <Icon name="Phone" size={20} className="mr-2" />
                +7 (927) 236-27-69
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
                  <div className="font-bold text-2xl">15 лет</div>
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

      <section className="py-20">
        <div className="container">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl font-bold mb-4">5 причин заменить старую проводку</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6 mb-8">
            {[
              { num: '1', text: 'Алюминиевые провода – хуже проводят ток, быстро окисляются и подгорают' },
              { num: '2', text: 'Старение проводки – изоляция разрушается, жилы оголяются, алюминий становится хрупким' },
              { num: '3', text: 'Современные нагрузки – старая сеть не выдерживает работу современной техники' },
              { num: '4', text: 'Недостаток розеток – часто всего 1–2 розетки на комнату' },
              { num: '5', text: 'Отсутствие заземления – опасность поражения электрическим током' }
            ].map((reason, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-all duration-300 animate-scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardHeader>
                  <div className="w-16 h-16 rounded-full gradient-electric flex items-center justify-center mx-auto mb-4">
                    <span className="text-white text-3xl font-bold">{reason.num}</span>
                  </div>
                  <CardDescription className="text-base text-left">{reason.text}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted/30">
        <div className="container">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl font-bold mb-4">Как проходит замена проводки</h2>
          </div>
          <div className="max-w-4xl mx-auto space-y-6">
            {[
              'Составляем проект и подбираем материалы',
              'Демонтируем старую проводку',
              'Прокладываем новую медную проводку',
              'Выполняем соединения на сварке',
              'Монтируем щиток, розетки и выключатели',
              'При необходимости заделываем штробы'
            ].map((step, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardHeader className="flex flex-row items-center gap-4">
                  <div className="w-12 h-12 rounded-full gradient-blue flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-xl font-bold">{index + 1}</span>
                  </div>
                  <CardTitle className="text-lg">{step}</CardTitle>
                </CardHeader>
              </Card>
            ))}
          </div>
          <p className="text-center text-muted-foreground mt-8 text-lg">
            Работы выполняются поэтапно, с минимумом пыли и шума
          </p>
        </div>
      </section>

      <section id="services" className="py-20">
        <div className="container">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl font-bold mb-4">10 причин доверить замену проводки нам</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:scale-105 animate-scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardHeader>
                  <div className="w-14 h-14 rounded-lg gradient-electric flex items-center justify-center mb-4">
                    <Icon name={service.icon} size={28} className="text-white" />
                  </div>
                  <CardTitle className="text-base">{service.title}</CardTitle>
                  <CardDescription className="text-sm">{service.description}</CardDescription>
                </CardHeader>
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
            <h2 className="text-4xl font-bold mb-4">Замена электропроводки в панельном доме</h2>
            <p className="text-xl text-muted-foreground">В большинстве панельных домов проводка проложена в специальных каналах.<br/>Мы заменяем проводку без штробления стен и потолков, сохраняя чистоту и порядок.</p>
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
                <span className="font-bold text-xl">Ваш электрик</span>
              </div>
              <p className="text-background/70">Профессиональные электромонтажные работы в Москве и области</p>
            </div>
            <div>
              <h3 className="font-bold mb-4">Контакты</h3>
              <div className="space-y-2 text-background/70">
                <div className="flex items-center gap-2">
                  <Icon name="Phone" size={16} />
                  <span>+7 (927) 236-27-69</span>
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
            © 2024 Ваш электрик. Все права защищены.
          </div>
        </div>
      </footer>

      <a
        href="https://wa.me/79272362769"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 w-16 h-16 bg-[#25D366] hover:bg-[#20BA5A] rounded-full flex items-center justify-center shadow-2xl transition-all duration-300 hover:scale-110 animate-scale-in"
        aria-label="Написать в WhatsApp"
      >
        <svg
          viewBox="0 0 24 24"
          fill="white"
          className="w-9 h-9"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
        </svg>
      </a>
    </div>
  );
};

export default Index;