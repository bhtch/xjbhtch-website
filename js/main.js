// 加载首页热门产品
function loadFeaturedProducts() {
    const container = document.getElementById('featured-products');
    if (!container) return;
    
    // 确保 products 已加载
    if (typeof products === 'undefined') {
        console.error('Products data not loaded');
        return;
    }
    
    const lang = i18n ? i18n.currentLang : 'zh';
    const featured = products.filter(p => p.hot).slice(0, 6);
    
    if (featured.length === 0) {
        container.innerHTML = '<div class="col-12 text-center"><p class="text-muted">暂无热门产品</p></div>';
        return;
    }
    
    const detailsText = i18n ? i18n.t('products.details') : '查看详情';
    
    container.innerHTML = featured.map(p => `
        <div class="col-md-6 col-lg-4">
            <div class="product-card">
                <div class="card-img">
                    <span class="product-badge">${lang === 'zh' ? '热门' : 'Хит'}</span>
                    ${p.image 
                        ? `<img src="${p.image}" alt="${p.name[lang]}" style="width:100%;height:100%;object-fit:cover;" 
                            onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';"
                          ><i class="bi bi-truck" style="display:none;"></i>`
                        : `<i class="bi bi-truck"></i>`
                    }
                </div>
                <div class="card-body">
                    <h3 class="card-title">${p.name[lang]}</h3>
                    <p class="card-text">${p.description[lang]}</p>
                    <div class="product-price">
                        USD ${p.priceUSD.toLocaleString()}
                    </div>
                    <a href="product-detail.html?id=${p.id}" class="btn w-100">${detailsText}</a>
                </div>
            </div>
        </div>
    `).join('');
}

