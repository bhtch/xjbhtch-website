// 产品数据
const products = [
    // ==================== 挖掘机 ====================
    {
        id: 1,
        category: 'excavator',
        name: {
            zh: '柳工 HEX 936E 履带挖掘机',
            ru: 'Гусеничный экскаватор LiuGong HEX 936E'
        },
        image: 'images/liugong_HEX 936E_p1_1.jpeg',
        description: {
            zh: '35-37吨级大型液压挖掘机，矿山作业首选，动力强劲',
            ru: 'Гидравлический экскаватор 35-37т для горных работ'
        },
        price: 1850000,
        priceUSD: 258000,
        hot: true,
        specs: {
            zh: {
                weight: '35,000-37,000 kg',
                engine: 'Cummins 6LTAA8.9-C325 241kW',
                bucket: '1.6 m³',
                dimension: '11,167 × 3,530 × 3,175 mm'
            },
            ru: {
                weight: '35,000-37,000 kg',
                engine: 'Cummins 6LTAA8.9-C325 241кВт',
                bucket: '1.6 м³',
                dimension: '11,167 × 3,530 × 3,175 мм'
            }
        },
        features: {
            zh: [
                '康明斯大功率发动机',
                '先进负流量液压系统',
                '大缸径油缸自动增压',
                '重载强化型动臂',
                '标配岩石铲斗'
            ],
            ru: [
                'Двигатель Cummins высокой мощности',
                'Продвинутая гидравлика',
                'Автоматическое усиление',
                'Усиленная стрела',
                'Роковая ковш в комплекте'
            ]
        }
    },
    {
        id: 101,
        category: 'excavator',
        name: {
            zh: '履带式挖掘机 HE215C',
            ru: 'Гусеничный экскаватор HE215C'
        },
        image: 'images/liugong_HEX 936E_p1_1.jpeg',
        description: {
            zh: '21.5吨级液压挖掘机，适用于各种土方工程',
            ru: 'Гидравлический экскаватор 21.5т для земляных работ'
        },
        price: 850000,
        priceUSD: 118000,
        hot: true,
        specs: {
            zh: {
                weight: '21,500 kg',
                engine: '118 kW / 2000 rpm',
                bucket: '0.8 - 1.2 m³',
                dimension: '9,850 × 2,990 × 3,250 mm'
            },
            ru: {
                weight: '21,500 kg',
                engine: '118 кВт / 2000 об/мин',
                bucket: '0.8 - 1.2 м³',
                dimension: '9,850 × 2,990 × 3,250 мм'
            }
        },
        features: {
            zh: [
                '高效节能的液压系统',
                '舒适的驾驶室设计',
                '智能控制系统',
                '高可靠性和耐久性',
                '易于维护保养'
            ],
            ru: [
                'Эффективная гидравлическая система',
                'Комфортная кабина оператора',
                'Интеллектуальная система управления',
                'Высокая надёжность и долговечность',
                'Простое обслуживание'
            ]
        }
    },
    {
        id: 2,
        category: 'excavator',
        name: {
            zh: '柳工 922FE 电动挖掘机',
            ru: 'Электрический экскаватор LiuGong 922FE'
        },
        image: 'images/liugong_BEV 922FE Spec _p1_1.jpeg',
        description: {
            zh: '24.1吨电动挖掘机，零排放低噪音，适合环保要求高的工地',
            ru: 'Электрический экскаватор 24.1т с нулевым выбросом'
        },
        price: 1980000,
        priceUSD: 276000,
        hot: true,
        specs: {
            zh: {
                weight: '24,100 kg',
                engine: 'IPMSM电机 105kW',
                bucket: '1.0 m³',
                dimension: '9,910 × 3,050 × 2,980 mm'
            },
            ru: {
                weight: '24,100 kg',
                engine: 'IPMSМ мотор 105кВт',
                bucket: '1.0 м³',
                dimension: '9,910 × 3,050 × 2,980 мм'
            }
        },
        features: {
            zh: [
                '423kWh磷酸铁锂电池',
                '直流快充80分钟',
                '零排放环保',
                '低噪音作业',
                '运营成本低'
            ],
            ru: [
                'Аккумулятор LFP 423кВтч',
                'Быстрая зарядка 80 мин',
                'Нулевые выбросы',
                'Низкий уровень шума',
                'Низкая стоимость эксплуатации'
            ]
        }
    },
    {
        id: 3,
        category: 'excavator',
        name: {
            zh: '国机 SINOMACH GE365D 挖掘机',
            ru: 'Экскаватор SINOMACH GE365D'
        },
        image: 'images/Sinomach_GE365D_2.jpeg',
        description: {
            zh: '36.5吨级大型挖掘机，矿山重载作业专家',
            ru: 'Большой экскаватор 36.5т для горных работ'
        },
        price: 1680000,
        priceUSD: 235000,
        hot: false,
        specs: {
            zh: {
                weight: '36,500 kg',
                engine: '东风康明斯大功率发动机',
                bucket: '1.6-2.0 m³',
                dimension: '11,500 × 3,600 × 3,500 mm'
            },
            ru: {
                weight: '36,500 kg',
                engine: 'Cummins высокой мощности',
                bucket: '1.6-2.0 м³',
                dimension: '11,500 × 3,600 × 3,500 мм'
            }
        },
        features: {
            zh: [
                '东风康明斯大功率发动机',
                '先进负流量液压系统',
                '四种功率模式',
                '有限元分析结构',
                '可靠精准燃油喷射'
            ],
            ru: [
                'Двигатель Cummins',
                'Отрицательный расход гидравлики',
                '4 режима мощности',
                'Анализ методом конечных элементов',
                'Точный впрыск топлива'
            ]
        }
    },
    {
        id: 4,
        category: 'excavator',
        name: {
            zh: '国机 SINOMACH 160W 轮式挖掘机',
            ru: 'Колёсный экскаватор SINOMACH 160W'
        },
        image: 'images/SINOMACH_160W_2.jpeg',
        description: {
            zh: '14-14.5吨级轮式挖掘机，机动灵活，城市作业首选',
            ru: 'Колёсный экскаватор 14-14.5т для городских работ'
        },
        price: 720000,
        priceUSD: 100000,
        hot: false,
        specs: {
            zh: {
                weight: '14,000-14,500 kg',
                engine: '93-132 kW / 2200 rpm',
                bucket: '0.6-0.7 m³',
                dimension: '7,900 × 2,580 × 3,255 mm'
            },
            ru: {
                weight: '14,000-14,500 kg',
                engine: '93-132 кВт / 2200 об/мин',
                bucket: '0.6-0.7 м³',
                dimension: '7,900 × 2,580 × 3,255 мм'
            }
        },
        features: {
            zh: [
                '四轮驱动设计',
                '高速行驶能力',
                '进口液压元件',
                '操作灵活便捷',
                '维护成本低'
            ],
            ru: [
                'Полный привод',
                'Высокая скорость движения',
                'Импортная гидравлика',
                'Гибкое управление',
                'Низкое обслуживание'
            ]
        }
    },
    {
        id: 5,
        category: 'excavator',
        name: {
            zh: '轮式挖掘机 WE150',
            ru: 'Колёсный экскаватор WE150'
        },
        image: 'images/liugong_BEV 922FE Spec _p1_1.jpeg',
        description: {
            zh: '15吨级轮式挖掘机，机动灵活',
            ru: 'Колёсный экскаватор 15т, высокая мобильность'
        },
        price: 680000,
        priceUSD: 95000,
        hot: false,
        specs: {
            zh: {
                weight: '15,200 kg',
                engine: '103 kW / 2200 rpm',
                bucket: '0.5 - 0.8 m³',
                dimension: '8,200 × 2,500 × 3,100 mm'
            },
            ru: {
                weight: '15,200 kg',
                engine: '103 кВт / 2200 об/мин',
                bucket: '0.5 - 0.8 м³',
                dimension: '8,200 × 2,500 × 3,100 мм'
            }
        },
        features: {
            zh: [
                '四轮驱动，转向灵活',
                '快速移动能力',
                '低噪音设计',
                '节能高效'
            ],
            ru: [
                'Полный привод, гибкое рулевое управление',
                'Быстрое перемещение',
                'Низкий уровень шума',
                'Энергоэффективность'
            ]
        }
    },
    {
        id: 6,
        category: 'loader',
        name: {
            zh: '柳工 WL 856H 轮式装载机',
            ru: 'Фронтальный погрузчик LiuGong WL 856H'
        },
        image: 'images/liugong_WL 856H_p1_1.jpeg',
        description: {
            zh: '5吨级轮式装载机，动力强劲，装载效率高',
            ru: 'Фронтальный погрузчик 5т с высокой эффективностью'
        },
        price: 580000,
        priceUSD: 81000,
        hot: true,
        specs: {
            zh: {
                weight: '17,250 kg',
                engine: 'Cummins 6LT9.3 162kW',
                bucket: '2.7-5.6 m³',
                dimension: '8,390 × 2,750 × 3,500 mm'
            },
            ru: {
                weight: '17,250 kg',
                engine: 'Cummins 6LT9.3 162кВт',
                bucket: '2.7-5.6 м³',
                dimension: '8,390 × 2,750 × 3,500 мм'
            }
        },
        features: {
            zh: [
                '康明斯发动机',
                '3.3m³标准铲斗',
                '165kN最大掘起力',
                '先进液压系统',
                '空调驾驶室'
            ],
            ru: [
                'Двигатель Cummins',
                'Стандартный ковш 3.3м³',
                'Макс. усилие отрыва 165кН',
                'Продвинутая гидравлика',
                'Кондиционер в кабине'
            ]
        }
    },
    {
        id: 7,
        category: 'loader',
        name: {
            zh: '国机 SINOMACH 956H 轮式装载机',
            ru: 'Фронтальный погрузчик SINOMACH 956H'
        },
        image: 'images/Sinomach_956H_2.jpeg',
        description: {
            zh: '5吨级高端轮式装载机，矿山重载首选',
            ru: 'Премиум погрузчик 5т для горных работ'
        },
        price: 620000,
        priceUSD: 87000,
        hot: true,
        specs: {
            zh: {
                weight: '18,000 kg',
                engine: '康明斯大功率发动机',
                bucket: '3.0-3.5 m³',
                dimension: '8,500 × 3,000 × 3,500 mm'
            },
            ru: {
                weight: '18,000 kg',
                engine: 'Cummins высокой мощности',
                bucket: '3.0-3.5 м³',
                dimension: '8,500 × 3,000 × 3,500 мм'
            }
        },
        features: {
            zh: [
                '大排量主泵',
                '液压损失减少25%',
                '制动系统获国家专利',
                '动力集中分配设计',
                '易于维护保养'
            ],
            ru: [
                'Насос большого объёма',
                'Гидравлические потери -25%',
                'Патент на тормозную систему',
                'Централизованное распределение',
                'Простое обслуживание'
            ]
        }
    },
    {
        id: 8,
        category: 'loader',
        name: {
            zh: '国机 SINOMACH 936H 轮式装载机',
            ru: 'Фронтальный погрузчик SINOMACH 936H'
        },
        image: 'images/Sinomach_936H_2.jpeg',
        description: {
            zh: '3吨级轮式装载机，灵活高效',
            ru: 'Фронтальный погрузчик 3т для различных задач'
        },
        price: 380000,
        priceUSD: 53000,
        hot: false,
        specs: {
            zh: {
                weight: '11,000 kg',
                engine: '东风康明斯发动机',
                bucket: '1.8-2.2 m³',
                dimension: '7,200 × 2,320 × 3,180 mm'
            },
            ru: {
                weight: '11,000 kg',
                engine: 'Cummins',
                bucket: '1.8-2.2 м³',
                dimension: '7,200 × 2,320 × 3,180 мм'
            }
        },
        features: {
            zh: [
                '发动机重心后移',
                '变速箱风冷设计',
                '大直径制动油管',
                '优化液压系统连接',
                '故障率低'
            ],
            ru: [
                'Центр тяжести двигателя назад',
                'Воздушное охлаждение КПП',
                'Увеличенный диаметр тормозных трубок',
                'Оптимизация гидравлики',
                'Низкая частота отказов'
            ]
        }
    },
    {
        id: 9,
        category: 'loader',
        name: {
            zh: '轮式装载机 HL955',
            ru: 'Фронтальный погрузчик HL955'
        },
        image: 'images/liugong_WL 856H_p1_1.jpeg',
        description: {
            zh: '5吨级轮式装载机，装载效率高',
            ru: 'Фронтальный погрузчик 5т для высокой эффективности'
        },
        price: 520000,
        priceUSD: 72000,
        hot: true,
        specs: {
            zh: {
                weight: '17,500 kg',
                engine: '162 kW / 2200 rpm',
                bucket: '2.5 - 4.0 m³',
                dimension: '8,100 × 2,950 × 3,450 mm'
            },
            ru: {
                weight: '17,500 kg',
                engine: '162 кВт / 2200 об/мин',
                bucket: '2.5 - 4.0 м³',
                dimension: '8,100 × 2,950 × 3,450 мм'
            }
        },
        features: {
            zh: [
                '大容量的铲斗设计',
                '强劲的提升能力',
                '舒适的驾驶环境',
                '低能耗高效率'
            ],
            ru: [
                'Большой ковш',
                'Мощная грузоподъёмность',
                'Комфортная кабина',
                'Низкое энергопотребление'
            ]
        }
    },
    {
        id: 18,
        category: 'loader',
        name: {
            zh: '小型装载机 SL30',
            ru: 'Мини-погрузчик SL30'
        },
        image: 'images/liugong_WL 856H_p1_1.jpeg',
        description: {
            zh: '3吨级小型装载机，灵活多用',
            ru: 'Мини-погрузчик 3т для различных задач'
        },
        price: 280000,
        priceUSD: 39000,
        hot: false,
        specs: {
            zh: {
                weight: '9,800 kg',
                engine: '74 kW / 2500 rpm',
                bucket: '1.2 - 1.5 m³',
                dimension: '6,200 × 2,100 × 2,850 mm'
            },
            ru: {
                weight: '9,800 kg',
                engine: '74 кВт / 2500 об/мин',
                bucket: '1.2 - 1.5 м³',
                dimension: '6,200 × 2,100 × 2,850 мм'
            }
        },
        features: {
            zh: [
                '紧凑的车身设计',
                '狭窄空间作业能力',
                '多种工作装置可选',
                '易于操作'
            ],
            ru: [
                'Компактная конструкция',
                'Работа в узких пространствах',
                'Различные навесные оборудования',
                'Простое управление'
            ]
        }
    },
    {
        id: 10,
        category: 'grader',
        name: {
            zh: '国机 SINOMACH 719H 平地机',
            ru: 'Грейдер SINOMACH 719H'
        },
        image: 'images/Sinomach 719H_01.png',
        description: {
            zh: '15.6吨级平地机，道路建设和养护理想设备',
            ru: 'Грейдер 15.6т для строительства дорог'
        },
        price: 780000,
        priceUSD: 109000,
        hot: true,
        specs: {
            zh: {
                weight: '15,600 kg',
                engine: 'Cummins 6CTA8.3-C190 142kW',
                bucket: '4268×580mm 刀板',
                dimension: '8,945 × 2,600 × 3,420 mm'
            },
            ru: {
                weight: '15,600 kg',
                engine: 'Cummins 6CTA8.3-C190 142кВт',
                bucket: '4268×580мм отвал',
                dimension: '8,945 × 2,600 × 3,420 мм'
            }
        },
        features: {
            zh: [
                '康明斯发动机可靠耐用',
                '动力换档单手柄变速箱',
                '液压锁止差速器',
                '先进液压系统',
                '箱型结构车架'
            ],
            ru: [
                'Надёжный двигатель Cummins',
                'Power shift КПП',
                'Гидравлическая блокировка дифференциала',
                'Продвинутая гидравлика',
                'Коробчатая рама'
            ]
        }
    },
    {
        id: 11,
        category: 'roller',
        name: {
            zh: '柳工 RL 6118E 压路机',
            ru: 'Виброкаток LiuGong RL 6118E'
        },
        image: 'images/liugong_RL 6118E_p1_1.jpeg',
        description: {
            zh: '19吨单钢轮振动压路机，道路压实专家',
            ru: 'Виброкаток 19т для уплотнения дорог'
        },
        price: 620000,
        priceUSD: 87000,
        hot: true,
        specs: {
            zh: {
                weight: '19,000 kg',
                engine: 'Shangchai SC7H210.1G2 155kW',
                bucket: '-',
                dimension: '6,475 × 2,340 × 3,150 mm'
            },
            ru: {
                weight: '19,000 kg',
                engine: 'Shangchai SC7H210.1G2 155кВт',
                bucket: '-',
                dimension: '6,475 × 2,340 × 3,150 мм'
            }
        },
        features: {
            zh: [
                '额定振幅2.0/1.3mm',
                '激振力360/300kN',
                '双频率28/32Hz',
                '铰接式转向±35°',
                '前9后10+8悬架'
            ],
            ru: [
                'Амплитуда 2.0/1.3мм',
                'Возмущающая сила 360/300кН',
                'Частота 28/32Гц',
                'Рулевое сочленение ±35°',
                'Подвеска передняя 9 / задняя 10+8'
            ]
        }
    },
    {
        id: 12,
        category: 'roller',
        name: {
            zh: '双钢轮压路机 RD26',
            ru: 'Двухвальцовый каток RD26'
        },
        image: 'images/liugong_RL 6118E_p1_1.jpeg',
        description: {
            zh: '26吨双钢轮振动压路机',
            ru: 'Вибрационный каток 26т с двумя вальцами'
        },
        price: 680000,
        priceUSD: 95000,
        hot: true,
        specs: {
            zh: {
                weight: '26,000 kg',
                engine: '140 kW / 2300 rpm',
                bucket: '-',
                dimension: '5,900 × 2,400 × 3,200 mm'
            },
            ru: {
                weight: '26,000 kg',
                engine: '140 кВт / 2300 об/мин',
                bucket: '-',
                dimension: '5,900 × 2,400 × 3,200 мм'
            }
        },
        features: {
            zh: [
                '高效压实效果',
                '驾驶舒适性好',
                '操作简便',
                '维护成本低'
            ],
            ru: [
                'Высокая эффективность уплотнения',
                'Комфортное управление',
                'Простота эксплуатации',
                'Низкие затраты на обслуживание'
            ]
        }
    },
    {
        id: 19,
        category: 'crane',
        name: {
            zh: '汽车起重机 QY50K',
            ru: 'Автокран QY50K'
        },
        image: 'images/Sinomach 719H_01.png',
        description: {
            zh: '50吨级汽车起重机，性能卓越',
            ru: 'Автокран 50т с превосходными характеристиками'
        },
        price: 1580000,
        priceUSD: 220000,
        hot: true,
        specs: {
            zh: {
                weight: '42,000 kg',
                engine: '280 kW / 2200 rpm',
                bucket: '-',
                dimension: '12,800 × 2,550 × 3,850 mm'
            },
            ru: {
                weight: '42,000 kg',
                engine: '280 кВт / 2200 об/мин',
                bucket: '-',
                dimension: '12,800 × 2,550 × 3,850 мм'
            }
        },
        features: {
            zh: [
                '五节伸缩臂',
                '先进的液压系统',
                '全方位安全保护',
                '高作业效率'
            ],
            ru: [
                'Пятисекционная стрела',
                'Продвинутая гидравлика',
                'Комплексная безопасность',
                'Высокая производительность'
            ]
        }
    },
    {
        id: 13,
        category: 'dump',
        name: {
            zh: '陕汽 SAGMOTO X7 10T 自卸车',
            ru: 'Самосвал SAGMOTO X7 10т'
        },
        image: 'images/Sinomach_956H_2.jpeg',
        description: {
            zh: '4×2驱动10吨级自卸车，陕汽经典车型',
            ru: 'Самосвал 10т 4×2, классическая модель Shaanxi'
        },
        price: 196000,
        priceUSD: 28000,
        hot: true,
        specs: {
            zh: {
                weight: '7,500 kg（整备）',
                engine: '玉柴YC4E160-33 118kW/160HP',
                bucket: '4,000×2,300×1,200mm 矩形斗',
                dimension: '轴距3,800mm'
            },
            ru: {
                weight: '7,500 кг (снаряжённая)',
                engine: 'Yuchai YC4E160-33 118кВт/160HP',
                bucket: '4,000×2,300×1,200мм',
                dimension: 'Колёсная база 3,800мм'
            }
        },
        features: {
            zh: [
                '玉柴国II排放发动机',
                '法士特8档变速箱',
                '前举Φ130油缸',
                'T700高强板车厢',
                '交付期65天'
            ],
            ru: [
                'Двигатель Yuchai Евро II',
                'КПП FAST 8-ступ.',
                'Передний цилиндр Φ130',
                'Кузов из стали T700',
                'Срок поставки 65 дней'
            ]
        }
    },
    {
        id: 14,
        category: 'dump',
        name: {
            zh: '陕汽 SAGMOTO X3s 25T 自卸车',
            ru: 'Самосвал SAGMOTO X3s 25т'
        },
        image: 'images/Sinomach_956H_2.jpeg',
        description: {
            zh: '6×4驱动25吨级自卸车，重载运输首选',
            ru: 'Самосвал 25т 6×4 для тяжёлых грузов'
        },
        price: 320000,
        priceUSD: 45000,
        hot: true,
        specs: {
            zh: {
                weight: '12,500 kg（整备）',
                engine: '康明斯ISME38530 385HP',
                bucket: '大型重载车厢',
                dimension: '6×4驱动形式'
            },
            ru: {
                weight: '12,500 кг (снаряжённая)',
                engine: 'Cummins ISME38530 385HP',
                bucket: 'Большой кузов',
                dimension: 'Привод 6×4'
            }
        },
        features: {
            zh: [
                '康明斯385马力发动机',
                '法士特12档变速箱',
                '13吨后桥承载',
                '加厚车厢板材',
                '适合矿区作业'
            ],
            ru: [
                'Двигатель Cummins 385HP',
                'КПП FAST 12-ступ.',
                'Задний мост 13т',
                'Усиленный кузов',
                'Для горнодобычи'
            ]
        }
    },
    {
        id: 15,
        category: 'dump',
        name: {
            zh: '陕汽 SAGMOTO X3s 8m³ 搅拌车',
            ru: 'Автобетоносмеситель SAGMOTO X3s 8м³'
        },
        image: 'images/Sinomach_956H_2.jpeg',
        description: {
            zh: '6×4驱动8方混凝土搅拌运输车',
            ru: 'Бетоносмеситель 8м³ 6×4'
        },
        price: 400000,
        priceUSD: 57700,
        hot: true,
        specs: {
            zh: {
                weight: '13,500 kg（整备）',
                engine: '康明斯ISME38530 385HP',
                bucket: '8m³罐体 Q355材质',
                dimension: '轴距3575+1400mm'
            },
            ru: {
                weight: '13,500 кг (снаряжённая)',
                engine: 'Cummins ISME38530 385HP',
                bucket: '8м³ бак Q355',
                dimension: 'Колёсная база 3575+1400мм'
            }
        },
        features: {
            zh: [
                '8方搅拌罐体',
                'Q355高强度钢材',
                '400L铝合金油箱',
                'TOPP68减速机',
                '交付期75天'
            ],
            ru: [
                'Бак 8м³',
                'Сталь Q355',
                'Алюминиевый топливный бак 400л',
                'Редуктор TOPP68',
                'Срок поставки 75 дней'
            ]
        }
    },
    {
        id: 16,
        category: 'dump',
        name: {
            zh: '矿用自卸车 MT36',
            ru: 'Карьерный самосвал MT36'
        },
        image: 'images/Sinomach_936H_2.jpeg',
        description: {
            zh: '36吨级矿用自卸车，承载能力强',
            ru: 'Карьерный самосвал 36т высокой грузоподъёмности'
        },
        price: 1250000,
        priceUSD: 175000,
        hot: false,
        specs: {
            zh: {
                weight: '28,000 kg',
                engine: '330 kW / 2100 rpm',
                bucket: '22 m³',
                dimension: '9,800 × 3,500 × 3,800 mm'
            },
            ru: {
                weight: '28,000 kg',
                engine: '330 кВт / 2100 об/мин',
                bucket: '22 м³',
                dimension: '9,800 × 3,500 × 3,800 мм'
            }
        },
        features: {
            zh: [
                '大容量的车厢',
                '强劲的动力系统',
                '坚固耐用的底盘',
                '适合恶劣工况'
            ],
            ru: [
                'Большой кузов',
                'Мощная силовая система',
                'Прочное шасси',
                'Для тяжёлых условий'
            ]
        }
    },
    {
        id: 17,
        category: 'dump',
        name: {
            zh: '工程自卸车 ET8',
            ru: 'Строительный самосвал ET8'
        },
        image: 'images/Sinomach_956H_2.jpeg',
        description: {
            zh: '8吨级工程自卸车，城市作业首选',
            ru: 'Строительный самосвал 8т для городских работ'
        },
        price: 380000,
        priceUSD: 53000,
        hot: false,
        specs: {
            zh: {
                weight: '12,500 kg',
                engine: '180 kW / 2500 rpm',
                bucket: '5 m³',
                dimension: '7,200 × 2,500 × 2,950 mm'
            },
            ru: {
                weight: '12,500 kg',
                engine: '180 кВт / 2500 об/мин',
                bucket: '5 м³',
                dimension: '7,200 × 2,500 × 2,950 мм'
            }
        },
        features: {
            zh: [
                '紧凑的车身',
                '适合城市道路',
                '低排放环保',
                '经济实惠'
            ],
            ru: [
                'Компактный размер',
                'Для городских дорог',
                'Экологичный двигатель',
                'Доступная цена'
            ]
        }
    },
    {
        id: 20,
        category: 'roller',
        name: {
            zh: '胶轮压路机 CP12',
            ru: 'Пневмоколёсный каток CP12'
        },
        image: 'images/liugong_RL 6118E_p1_1.jpeg',
        description: {
            zh: '12吨胶轮压路机，压实平整',
            ru: 'Пневмоколёсный каток 12т для финишного уплотнения'
        },
        price: 420000,
        priceUSD: 59000,
        hot: false,
        specs: {
            zh: {
                weight: '12,000 kg',
                engine: '96 kW / 2400 rpm',
                bucket: '-',
                dimension: '4,800 × 2,200 × 3,100 mm'
            },
            ru: {
                weight: '12,000 kg',
                engine: '96 кВт / 2400 об/мин',
                bucket: '-',
                dimension: '4,800 × 2,200 × 3,100 мм'
            }
        },
        features: {
            zh: [
                '均匀的压实效果',
                '压实表面平整',
                '操作舒适',
                '适用范围广'
            ],
            ru: [
                'Равномерное уплотнение',
                'Ровная поверхность',
                'Комфортное управление',
                'Широкая область применения'
            ]
        }
    },
    {
        id: 21,
        category: 'crane',
        name: {
            zh: '塔式起重机 TC6012',
            ru: 'Башенный кран TC6012'
        },
        image: 'images/Sinomach 719H_01.png',
        description: {
            zh: '6012吨米塔式起重机，高层建筑首选',
            ru: 'Башенный кран TC6012 для высотного строительства'
        },
        price: 2200000,
        priceUSD: 308000,
        hot: true,
        specs: {
            zh: {
                weight: '45,000 kg',
                engine: '45 kW × 2',
                bucket: '-',
                dimension: '18,500 × 4,200 × 5,200 mm'
            },
            ru: {
                weight: '45,000 kg',
                engine: '45 кВт × 2',
                bucket: '-',
                dimension: '18,500 × 4,200 × 5,200 мм'
            }
        },
        features: {
            zh: [
                '60米最大臂长',
                '12吨最大起重量',
                '先进的变频控制',
                '安全保护系统完善'
            ],
            ru: [
                'Макс. длина стрелы 60м',
                'Макс. грузоподъёмность 12т',
                'Частотное регулирование',
                'Полная система безопасности'
            ]
        }
    },
    {
        id: 22,
        category: 'excavator',
        name: {
            zh: '大型挖掘机 HE550',
            ru: 'Большой экскаватор HE550'
        },
        image: 'images/liugong_BEV 922FE Spec _p1_1.jpeg',
        description: {
            zh: '50吨级大型挖掘机，矿山作业专家',
            ru: 'Большой экскаватор 50т для горных работ'
        },
        price: 2800000,
        priceUSD: 392000,
        hot: false,
        specs: {
            zh: {
                weight: '52,000 kg',
                engine: '300 kW / 1800 rpm',
                bucket: '2.0 - 3.5 m³',
                dimension: '11,200 × 3,500 × 4,100 mm'
            },
            ru: {
                weight: '52,000 kg',
                engine: '300 кВт / 1800 об/мин',
                bucket: '2.0 - 3.5 м³',
                dimension: '11,200 × 3,500 × 4,100 мм'
            }
        },
        features: {
            zh: [
                '超大铲斗容量',
                '强劲挖掘力',
                '坚固的结构设计',
                '适合严苛工况'
            ],
            ru: [
                'Большой объём ковша',
                'Мощное усилие копания',
                'Прочная конструкция',
                'Для тяжёлых условий'
            ]
        }
    },
    {
        id: 23,
        category: 'loader',
        name: {
            zh: '大型装载机 HL985',
            ru: 'Большой погрузчик HL985'
        },
        image: 'images/liugong_WL 856H_p1_1.jpeg',
        description: {
            zh: '8.5吨大型装载机，矿山装卸利器',
            ru: 'Большой погрузчик 8.5т для горнодобычи'
        },
        price: 1680000,
        priceUSD: 235000,
        hot: false,
        specs: {
            zh: {
                weight: '38,000 kg',
                engine: '350 kW / 2000 rpm',
                bucket: '4.5 - 6.0 m³',
                dimension: '10,200 × 3,600 × 4,200 mm'
            },
            ru: {
                weight: '38,000 kg',
                engine: '350 кВт / 2000 об/мин',
                bucket: '4.5 - 6.0 м³',
                dimension: '10,200 × 3,600 × 4,200 мм'
            }
        },
        features: {
            zh: [
                '超大的铲斗设计',
                '极高的装载效率',
                '长寿命设计',
                '便于维护保养'
            ],
            ru: [
                'Очень большой ковш',
                'Высокая эффективность',
                'Долгий срок службы',
                'Простое обслуживание'
            ]
        }
    }
];

