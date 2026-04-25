// 多语言系统 - 中文/俄文
const translations = {
    zh: {
        // 网站信息
        'site.title': 'BHTCH - 工程机械商城',
        'site.name': 'BHTCH',
        'brand.tagline': '工程机械商城',
        
        // 导航
        'nav.home': '首页',
        'nav.products': '全部产品',
        'nav.categories': '产品分类',
        'nav.services': '服务支持',
        'nav.about': '关于我们',
        'nav.contact': '联系我们',
        
        // 联系方式
        'contact.phone': '+8613209922368 / +8618167856752',
        'contact.hours': '周一至周五 09:00-18:00',
        
        // 搜索
        'search.placeholder': '搜索产品...',
        'search.btn': '搜索',
        
        // 页头
        'header.contact': '联系我们',
        
        // 首页轮播
        'hero.slide1.title': '专业工程机械设备',
        'hero.slide1.desc': '挖掘机、装载机、压路机等全系列工程机械，品质卓越',
        'hero.slide2.title': '全球配送 服务无忧',
        'hero.slide2.desc': '覆盖50+国家，专业物流团队保障交付',
        'hero.slide3.title': '20年行业经验',
        'hero.slide3.desc': '专注高品质工程机械，值得信赖的合作伙伴',
        'hero.cta': '浏览产品',
        
        // 优势
        'advantages.delivery.title': '快速配送',
        'advantages.delivery.desc': '全球物流配送',
        'advantages.quality.title': '品质保证',
        'advantages.quality.desc': '严格质量检测',
        'advantages.warranty.title': '售后支持',
        'advantages.warranty.desc': '全年无休服务',
        'advantages.price.title': '价格优惠',
        'advantages.price.desc': '厂家直销',
        
        // 分类
        'categories.title': '产品分类',
        'categories.excavator': '挖掘机',
        'categories.loader': '装载机',
        'categories.roller': '压路机',
        'categories.crane': '起重机',
        'categories.dump': '自卸车',
        'categories.other': '其他设备',
        'categories.products': '款产品',
        'categories.viewAll': '查看全部',
        
        // 热门产品
        'products.featured': '热门产品',
        'products.viewAll': '查看全部',
        'products.details': '查看详情',
        'products.hot': '热门',
        'products.new': '新品',
        
        // 为什么选择我们
        'whyUs.title': '为什么选择我们',
        'whyUs.item1.title': '专业经验',
        'whyUs.item1.desc': '20年行业经验，为客户提供最专业的工程机械解决方案',
        'whyUs.item2.title': '品质卓越',
        'whyUs.item2.desc': '所有设备均通过ISO质量认证，品质有保障',
        'whyUs.item3.title': '服务完善',
        'whyUs.item3.desc': '从售前咨询到售后服务，全程专业支持',
        
        // 订购流程
        'order.title': '如何订购',
        'order.step1': '选择产品',
        'order.step1.desc': '浏览我们的产品目录',
        'order.step2': '咨询报价',
        'order.step2.desc': '联系销售团队获取报价',
        'order.step3': '签订合同',
        'order.step3.desc': '确认订单并支付定金',
        'order.step4': '交付验收',
        'order.step4.desc': '物流配送并完成验收',
        
        // 页脚
        'footer.about': '专业工程机械供应商，致力于为全球客户提供高品质设备和完善的服务。',
        'footer.products.title': '产品中心',
        'footer.info.title': '信息',
        'footer.contact.title': '联系方式',
        'footer.contact.address': '新疆乌鲁木齐高新区(新市区)中亚北路418号中联润世物流园区项目4号楼1层商业32室',
        'footer.contact.hours': '周一至周五 09:00-18:00',
        'footer.copyright': '保留所有权利。',
        'footer.lang': '语言：',
        
        // 产品详情
        'product.specs': '技术参数',
        'product.features': '产品特点',
        'product.desc': '产品描述',
        'product.weight': '工作重量',
        'product.engine': '发动机功率',
        'product.bucket': '铲斗容量',
        'product.dimension': '外形尺寸',
        'product.contact': '联系我们',
        'product.quote': '获取报价',
        
        // 按钮
        'btn.submit': '提交',
        'btn.send': '发送消息',
        'btn.reset': '重置',
        'services.btn': '了解服务',
        'about.btn': '了解更多',
        'contact.btn': '立即咨询',
        
        // 联系页面
        'contact.title': '联系我们',
        'contact.subtitle': '有任何问题或建议？请随时联系我们',
        'contact.form.name': '您的姓名',
        'contact.form.email': '电子邮箱',
        'contact.form.phone': '联系电话',
        'contact.form.subject': '主题',
        'contact.form.message': '您的留言',
        'contact.form.subject1': '产品咨询',
        'contact.form.subject2': '价格报价',
        'contact.form.subject3': '售后服务',
        'contact.form.subject4': '其他',
        'contact.address': '公司地址',
        'contact.phone2': '电话',
        'contact.email': '邮箱',
        
        // 关于页面
        'about.title': '关于我们',
        'about.subtitle': '专业的工程机械解决方案供应商',
        'about.history': '公司历史',
        'about.mission': '企业使命',
        'about.vision': '发展愿景',
        'about.stat1': '年行业经验',
        'about.stat2': '个国家地区',
        'about.stat3': '家合作客户',
        'about.stat4': '款产品型号',
        
        // 服务页面
        'services.title': '服务支持',
        'services.subtitle': '全方位的服务支持，保障您的设备运行',
        'services.sales.title': '售前服务',
        'services.sales.desc': '专业团队提供产品咨询、方案定制、技术支持',
        'services.logistics.title': '物流配送',
        'services.logistics.desc': '覆盖全球的专业物流网络，确保设备安全送达',
        'services.warranty.title': '质量保证',
        'services.warranty.desc': '全程质量监控，完善的售后服务体系',
        'services.tech.title': '技术支持',
        'services.tech.desc': '7×24小时技术支持，随时解答您的疑问',
        
        // 筛选
        'filter.all': '全部',
        'filter.sort.default': '默认排序',
        'filter.sort.priceAsc': '价格从低到高',
        'filter.sort.priceDesc': '价格从高到低',
        'filter.sort.name': '按名称',
        
        // 错误信息
        'error.noProducts': '未找到相关产品',
        'error.searchEmpty': '请输入搜索关键词',

        // 产品列表页
        'products.pageTitle': '全部产品',
        'products.pageSubtitle': '涵盖挖掘机、装载机、压路机、起重机、自卸车等全系列工程设备',
        'products.filter': '筛选',
        'products.category': '产品类别',
        'products.resetFilter': '重置筛选',
        'products.count': '共 {n} 款产品',
        'products.grader': '平地机',
        'filter.sort.label': '排序方式'
    },
    ru: {
        // 网站信息
        'site.title': 'BHTCH - Магазин строительной техники',
        'site.name': 'BHTCH',
        'brand.tagline': 'Строительная техника',
        
        // 导航
        'nav.home': 'Главная',
        'nav.products': 'Все товары',
        'nav.categories': 'Категории',
        'nav.services': 'Услуги',
        'nav.about': 'О нас',
        'nav.contact': 'Контакты',
        
        // 联系方式
        'contact.phone': '+8613209922368 / +8618167856752',
        'contact.hours': 'Пн-Пт 09:00-18:00',
        
        // 搜索
        'search.placeholder': 'Поиск товаров...',
        'search.btn': 'Поиск',
        
        // 页头
        'header.contact': 'Связаться',
        
        // 首页轮播
        'hero.slide1.title': 'Профессиональная строительная техника',
        'hero.slide1.desc': 'Экскаваторы, погрузчики, катки и другая техника высшего качества',
        'hero.slide2.title': 'Глобальная доставка',
        'hero.slide2.desc': 'Более 50 стран, профессиональная логистика',
        'hero.slide3.title': '20 лет опыта',
        'hero.slide3.desc': 'Надёжный партнёр в строительной отрасли',
        'hero.cta': 'Смотреть товары',
        
        // 优势
        'advantages.delivery.title': 'Быстрая доставка',
        'advantages.delivery.desc': 'Глобальная логистика',
        'advantages.quality.title': 'Гарантия качества',
        'advantages.quality.desc': 'Строгий контроль качества',
        'advantages.warranty.title': 'Послепродажная поддержка',
        'advantages.warranty.desc': 'Круглосуточная поддержка',
        'advantages.price.title': 'Выгодные цены',
        'advantages.price.desc': 'Напрямую от производителя',
        
        // 分类
        'categories.title': 'Категории товаров',
        'categories.excavator': 'Экскаваторы',
        'categories.loader': 'Погрузчики',
        'categories.roller': 'Катки',
        'categories.crane': 'Краны',
        'categories.dump': 'Самосвалы',
        'categories.other': 'Другое',
        'categories.products': 'товаров',
        'categories.viewAll': 'Все товары',
        
        // 热门产品
        'products.featured': 'Популярные товары',
        'products.viewAll': 'Все товары',
        'products.details': 'Подробнее',
        'products.hot': 'Хит',
        'products.new': 'Новинка',
        
        // 为什么选择我们
        'whyUs.title': 'Почему выбирают нас',
        'whyUs.item1.title': 'Профессиональный опыт',
        'whyUs.item1.desc': '20 лет опыта для лучших решений',
        'whyUs.item2.title': 'Отличное качество',
        'whyUs.item2.desc': 'Все товары сертифицированы по ISO',
        'whyUs.item3.title': 'Полный сервис',
        'whyUs.item3.desc': 'От продажи до обслуживания',
        
        // 订购流程
        'order.title': 'Как заказать',
        'order.step1': 'Выбор товара',
        'order.step1.desc': 'Просмотрите наш каталог',
        'order.step2': 'Консультация',
        'order.step2.desc': 'Свяжитесь с нами для расчёта',
        'order.step3': 'Оформление',
        'order.step3.desc': 'Подтвердите заказ и оплатите',
        'order.step4': 'Доставка',
        'order.step4.desc': 'Быстрая доставка и приёмка',
        
        // 页脚
        'footer.about': 'Профессиональный поставщик строительной техники, предоставляющий клиентам по всему миру качественное оборудование и полный сервис.',
        'footer.products.title': 'Продукция',
        'footer.info.title': 'Информация',
        'footer.contact.title': 'Контакты',
        'footer.contact.address': 'Чуйская область, Сокулукский район, с.Новопавловка, ул.Крупская, д.311',
        'footer.contact.hours': 'Пн-Пт 09:00-18:00',
        'footer.copyright': 'Все права защищены.',
        'footer.lang': 'Язык：',
        
        // 产品详情
        'product.specs': 'Характеристики',
        'product.features': 'Особенности',
        'product.desc': 'Описание',
        'product.weight': 'Рабочий вес',
        'product.engine': 'Мощность двигателя',
        'product.bucket': 'Ёмкость ковша',
        'product.dimension': 'Габариты',
        'product.contact': 'Связаться',
        'product.quote': 'Получить расчёт',
        
        // 按钮
        'btn.submit': 'Отправить',
        'btn.send': 'Отправить сообщение',
        'btn.reset': 'Сбросить',
        'services.btn': 'Узнать больше',
        'about.btn': 'Подробнее',
        'contact.btn': 'Связаться',
        
        // 联系页面
        'contact.title': 'Свяжитесь с нами',
        'contact.subtitle': 'Есть вопросы или предложения? Свяжитесь с нами',
        'contact.form.name': 'Ваше имя',
        'contact.form.email': 'Email',
        'contact.form.phone': 'Телефон',
        'contact.form.subject': 'Тема',
        'contact.form.message': 'Сообщение',
        'contact.form.subject1': 'Консультация по товарам',
        'contact.form.subject2': 'Ценовое предложение',
        'contact.form.subject3': 'Послепродажное обслуживание',
        'contact.form.subject4': 'Другое',
        'contact.address': 'Адрес',
        'contact.phone2': 'Телефон',
        'contact.email': 'Email',
        
        // 关于页面
        'about.title': 'О компании',
        'about.subtitle': 'Профессиональный поставщик строительной техники',
        'about.history': 'История компании',
        'about.mission': 'Миссия',
        'about.vision': 'Видение',
        'about.stat1': 'Лет опыта',
        'about.stat2': 'Стран',
        'about.stat3': 'Клиентов',
        'about.stat4': 'Моделей',
        
        // 服务页面
        'services.title': 'Услуги',
        'services.subtitle': 'Полный спектр услуг для вашей техники',
        'services.sales.title': 'Продажи',
        'services.sales.desc': 'Профессиональные консультации и поддержка',
        'services.logistics.title': 'Логистика',
        'services.logistics.desc': 'Глобальная сеть доставки',
        'services.warranty.title': 'Гарантия',
        'services.warranty.desc': 'Контроль качества и гарантийный сервис',
        'services.tech.title': 'Техподдержка',
        'services.tech.desc': 'Круглосуточная техническая поддержка',
        
        // 筛选
        'filter.all': 'Все',
        'filter.sort.default': 'По умолчанию',
        'filter.sort.priceAsc': 'Цена по возрастанию',
        'filter.sort.priceDesc': 'Цена по убыванию',
        'filter.sort.name': 'По названию',
        
        // 错误信息
        'error.noProducts': 'Товары не найдены',
        'error.searchEmpty': 'Введите поисковый запрос',

        // 产品列表页
        'products.pageTitle': 'Все товары',
        'products.pageSubtitle': 'Экскаваторы, погрузчики, катки, краны, самосвалы и другая техника',
        'products.filter': 'Фильтр',
        'products.category': 'Категория',
        'products.resetFilter': 'Сбросить фильтр',
        'products.count': 'Всего {n} товаров',
        'products.grader': 'Грейдер',
        'filter.sort.label': 'Сортировка'
    }
};

// i18n 类
class I18n {
    constructor() {
        this.currentLang = localStorage.getItem('lang') || 'zh';
    }

    init() {
        this.setLanguage(this.currentLang);
        this.bindLanguageButtons();
        this.translatePage();
    }

    setLanguage(lang) {
        this.currentLang = lang;
        localStorage.setItem('lang', lang);
        document.documentElement.setAttribute('data-i18n-lang', lang);
        document.documentElement.lang = lang === 'zh' ? 'zh-CN' : 'ru';
        this.updateLanguageButtons();
        this.translatePage();
    }

    translatePage() {
        // 翻译所有带 data-i18n 的元素
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (translations[this.currentLang][key]) {
                el.textContent = translations[this.currentLang][key];
            }
        });

        // 翻译所有带 data-i18n-placeholder 的元素
        document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
            const key = el.getAttribute('data-i18n-placeholder');
            if (translations[this.currentLang][key]) {
                el.placeholder = translations[this.currentLang][key];
            }
        });
    }

    t(key) {
        return translations[this.currentLang][key] || key;
    }

    updateLanguageButtons() {
        document.querySelectorAll('.lang-btn').forEach(btn => {
            if (btn.getAttribute('data-lang') === this.currentLang) {
                btn.classList.add('active');
            } else {
                btn.classList.remove('active');
            }
        });
    }

    bindLanguageButtons() {
        document.querySelectorAll('.lang-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                const lang = btn.getAttribute('data-lang');
                if (lang !== this.currentLang) {
                    this.setLanguage(lang);
                }
            });
        });
    }
}

// 全局实例
const i18n = new I18n();

