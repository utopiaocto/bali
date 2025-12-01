const Components = {
    renderHeader() {
        return `
            <header class="fixed w-full z-50 transition-all duration-300" id="main-header">
                <div class="absolute inset-0 bg-bali-dark/80 backdrop-blur-md border-b border-white/5"></div>
                <div class="relative max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
                    <!-- Logo -->
                    <div class="flex items-center gap-3">
                        <img src="./assets/logo.png" alt="Bali Harvest Logo" class="h-12 w-auto drop-shadow-lg">
                        <span class="font-display font-bold text-2xl text-white tracking-tight">Bali Harvest</span>
                    </div>

                    <!-- Desktop Nav -->
                    <nav class="hidden md:flex items-center gap-8">
                        <a href="#products" class="text-sm font-medium text-slate-300 hover:text-white transition-colors">Shop</a>
                        <a href="#stories" class="text-sm font-medium text-slate-300 hover:text-white transition-colors">Stories</a>
                        <a href="#shorts" class="text-sm font-medium text-slate-300 hover:text-white transition-colors">Live</a>
                        <a href="#locations" class="text-sm font-medium text-slate-300 hover:text-white transition-colors">Visit Us</a>
                    </nav>

                    <!-- Actions -->
                    <div class="flex items-center gap-4">
                        <button class="text-white hover:text-bali-gold transition-colors"><i class="fas fa-search"></i></button>
                        <button class="relative text-white hover:text-bali-gold transition-colors">
                            <i class="fas fa-shopping-bag"></i>
                            <span class="absolute -top-1 -right-1 w-4 h-4 bg-bali-gold text-bali-dark text-[10px] font-bold rounded-full flex items-center justify-center">2</span>
                        </button>
                        <button class="md:hidden text-white text-xl"><i class="fas fa-bars"></i></button>
                    </div>
                </div>
            </header>
        `;
    },

    renderHero() {
        const mediaContent = appData.hero.video ?
            `<video autoplay muted loop playsinline class="absolute inset-0 w-full h-full object-cover opacity-80">
                <source src="${appData.hero.video}" type="video/mp4">
            </video>` :
            `<img src="./assets/hero-v2.png" class="w-full h-full object-cover opacity-70 scale-110 animate-slow-zoom">`;

        return `
            <section class="relative h-screen w-full overflow-hidden flex items-center justify-center">
                <!-- Parallax Background -->
                <div class="absolute inset-0 bg-black">
                    ${mediaContent}
                    <div class="absolute inset-0 bg-gradient-to-t from-bali-dark via-transparent to-black/30"></div>
                </div>

                <!-- Content -->
                <div class="relative z-10 text-center px-6 max-w-5xl mx-auto mt-20">
                    <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/20 bg-white/5 backdrop-blur-sm mb-8 animate-fade-in-up">
                        <span class="w-2 h-2 rounded-full bg-bali-gold animate-pulse"></span>
                        <span class="text-xs font-bold text-white tracking-widest uppercase">New Harvest Arrived</span>
                    </div>
                    
                    <h1 class="font-display font-black text-6xl md:text-8xl text-white mb-6 leading-tight tracking-tight shadow-black drop-shadow-2xl animate-fade-in-up delay-100">
                        ${appData.hero.headline || appData.hero.title}
                    </h1>
                    
                    <p class="text-lg md:text-2xl text-slate-200 max-w-2xl mx-auto leading-relaxed mb-10 font-light animate-fade-in-up delay-200">
                        ${appData.hero.subheadline || appData.hero.subtitle}
                    </p>
                    
                    <div class="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up delay-300">
                        <a href="#products" class="px-10 py-4 rounded-full bg-bali-green hover:bg-emerald-800 text-white font-bold text-lg shadow-lg shadow-bali-green/30 transition-all transform hover:-translate-y-1">
                            ${appData.hero.cta}
                        </a>
                        <a href="#stories" class="px-10 py-4 rounded-full bg-white/10 hover:bg-white/20 text-white font-bold text-lg border border-white/20 backdrop-blur-sm transition-all">
                            Our Story
                        </a>
                    </div>
                </div>
                
                <!-- Scroll Indicator -->
                <div class="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce text-white/50">
                    <i class="fas fa-chevron-down text-2xl"></i>
                </div>
            </section>
        `;
    },

    renderProducts() {
        return `
            <section id="products" class="py-24 px-6 max-w-7xl mx-auto">
                <div class="flex items-end justify-between mb-12">
                    <div>
                        <h2 class="font-display font-bold text-4xl text-white mb-2">Curated Collection</h2>
                        <p class="text-slate-400">Hand-picked from the best harvests of the season.</p>
                    </div>
                    <a href="#" class="hidden md:flex items-center gap-2 text-bali-gold hover:text-white transition-colors text-sm font-bold uppercase tracking-wider">
                        View All <i class="fas fa-arrow-right"></i>
                    </a>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    ${appData.products.map(product => `
                        <div class="group relative bg-bali-card rounded-2xl overflow-hidden border border-white/5 hover:border-bali-gold/50 transition-all duration-300 hover:shadow-2xl hover:shadow-bali-gold/10">
                            <!-- Image -->
                            <div class="aspect-[4/5] overflow-hidden relative">
                                <img src="${product.image}" alt="${product.name}" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" onerror="this.src='https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=800&q=80'">
                                ${product.badge ? `<span class="absolute top-4 left-4 px-3 py-1 bg-bali-gold text-bali-dark text-xs font-bold uppercase tracking-wider rounded-sm">${product.badge}</span>` : ''}
                                <button class="absolute bottom-4 right-4 w-10 h-10 bg-white text-bali-dark rounded-full flex items-center justify-center shadow-lg translate-y-12 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 hover:bg-bali-green hover:text-white">
                                    <i class="fas fa-plus"></i>
                                </button>
                            </div>
                            
                            <!-- Info -->
                            <div class="p-5">
                                <div class="flex justify-between items-start mb-2">
                                    <div class="text-xs text-slate-500 uppercase tracking-wider font-bold">${product.category}</div>
                                    <div class="flex items-center gap-1 text-amber-400 text-xs">
                                        <i class="fas fa-star"></i> ${product.rating}
                                    </div>
                                </div>
                                <h3 class="font-display font-bold text-xl text-white mb-2 group-hover:text-bali-gold transition-colors">${product.name}</h3>
                                <div class="font-mono text-bali-green font-bold">${product.price}</div>
                            </div>
                        </div>
                    `).join('')}
                </div>
            </section>
        `;
    },

    renderShorts() {
        return `
            <section id="shorts" class="py-24 bg-slate-900/50 border-y border-white/5">
                <div class="max-w-7xl mx-auto px-6">
                    <div class="flex items-center gap-3 mb-10">
                        <i class="fab fa-tiktok text-3xl text-pink-500"></i>
                        <h2 class="font-display font-bold text-3xl text-white">Fresh from the Farm</h2>
                    </div>
                    
                    <!-- Horizontal Scroll Container -->
                    <div class="flex overflow-x-auto gap-6 pb-8 snap-x snap-mandatory scrollbar-hide">
                        ${appData.shorts.map(short => `
                            <div class="snap-center shrink-0 w-72 aspect-[9/16] relative rounded-2xl overflow-hidden border border-white/10 group cursor-pointer">
                                <video src="${short.thumbnail}" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" muted loop playsinline onmouseover="this.play()" onmouseout="this.pause()"></video>
                                <div class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/80 pointer-events-none"></div>
                                <div class="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                                    <div class="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white border border-white/30">
                                        <i class="fas fa-play"></i>
                                    </div>
                                </div>
                                <div class="absolute bottom-0 left-0 w-full p-4 pointer-events-none">
                                    <div class="flex items-center gap-2 text-xs text-white/80 mb-1">
                                        <i class="fas fa-eye"></i> ${short.views}
                                    </div>
                                    <h4 class="font-bold text-white leading-tight">${short.title}</h4>
                                </div>
                            </div>
                        `).join('')}
                    </div>
                </div>
            </section>
        `;
    },

    renderStories() {
        return `
            <section id="stories" class="py-24 px-6 max-w-7xl mx-auto">
                <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div class="relative">
                        <div class="absolute -top-10 -left-10 w-40 h-40 bg-bali-green/20 rounded-full blur-3xl"></div>
                        <img src="${appData.stories[0].image}" class="relative rounded-2xl shadow-2xl border border-white/10 rotate-2 hover:rotate-0 transition-transform duration-500">
                        <div class="absolute -bottom-6 -right-6 bg-bali-card p-6 rounded-xl border border-white/10 shadow-xl max-w-xs">
                            <div class="text-bali-gold text-4xl font-black mb-2">100%</div>
                            <div class="text-slate-300 text-sm">Of our profits go directly back to the Kintamani farming cooperative.</div>
                        </div>
                    </div>
                    <div>
                        <span class="text-bali-gold font-bold uppercase tracking-widest text-sm mb-4 block">Our Philosophy</span>
                        <h2 class="font-display font-black text-5xl text-white mb-6 leading-tight">Grown in Ash, <br>Harvested with Love.</h2>
                        <p class="text-slate-400 text-lg mb-6 leading-relaxed">
                            The volcanic soil of Mount Batur is rich in minerals that you can't find anywhere else on earth. This "Black Gold" gives our coffee its signature citrus notes and our spices their intense aroma.
                        </p>
                        <p class="text-slate-400 text-lg mb-8 leading-relaxed">
                            We don't just buy from farmers; we are the farmers. Bali Harvest is a collective of 500+ families working together to preserve traditional organic methods.
                        </p>
                        <a href="#" class="text-white font-bold border-b-2 border-bali-green pb-1 hover:text-bali-green transition-colors">Read Full Story</a>
                    </div>
                </div>
            </section>
        `;
    },

    renderProcess() {
        return `
            <section id="process" class="py-24 bg-bali-dark relative overflow-hidden">
                <div class="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
                <div class="max-w-7xl mx-auto px-6 relative z-10">
                    <div class="text-center mb-16">
                        <span class="text-bali-gold font-bold uppercase tracking-widest text-sm">Farm to Table</span>
                        <h2 class="font-display font-bold text-4xl text-white mt-2">The Journey</h2>
                    </div>
                    
                    <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
                        ${appData.process.map((step, index) => `
                            <div class="relative p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all group">
                                <div class="absolute -top-4 -left-4 w-12 h-12 bg-bali-green rounded-full flex items-center justify-center text-white font-bold shadow-lg z-20">
                                    ${step.step}
                                </div>
                                <div class="mb-6 text-bali-gold text-4xl group-hover:scale-110 transition-transform duration-300">
                                    <i class="${step.icon}"></i>
                                </div>
                                <h3 class="font-display font-bold text-xl text-white mb-3">${step.title}</h3>
                                <p class="text-slate-400 text-sm leading-relaxed">${step.desc}</p>
                                ${index < 3 ? `<div class="hidden md:block absolute top-1/2 -right-6 text-white/20 text-2xl"><i class="fas fa-chevron-right"></i></div>` : ''}
                            </div>
                        `).join('')}
                    </div>
                </div>
            </section>
        `;
    },

    renderImpact() {
        return `
            <section id="impact" class="py-20 bg-bali-green relative">
                <div class="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/wood-pattern.png')] opacity-10"></div>
                <div class="max-w-7xl mx-auto px-6 relative z-10">
                    <div class="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                        ${appData.impact.stats.map(stat => `
                            <div class="p-4">
                                <div class="font-display font-black text-5xl md:text-6xl text-white mb-2 counter" data-target="${stat.value.replace(/\D/g, '')}">${stat.value}</div>
                                <div class="text-bali-sand font-bold uppercase tracking-wider text-sm">${stat.label}</div>
                            </div>
                        `).join('')}
                    </div>
                </div>
            </section>
        `;
    },

    renderRecipes() {
        return `
            <section id="recipes" class="py-24 bg-slate-900">
                <div class="max-w-7xl mx-auto px-6">
                    <div class="flex items-end justify-between mb-12">
                        <div>
                            <h2 class="font-display font-bold text-4xl text-white mb-2">Chef's Kitchen</h2>
                            <p class="text-slate-400">Culinary inspiration using our ingredients.</p>
                        </div>
                        <a href="#" class="text-bali-gold hover:text-white transition-colors text-sm font-bold uppercase tracking-wider">View All Recipes <i class="fas fa-arrow-right"></i></a>
                    </div>

                    <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                        ${appData.recipes.map(recipe => `
                            <div class="group relative rounded-2xl overflow-hidden aspect-[4/3] cursor-pointer">
                                <img src="${recipe.image}" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110">
                                <div class="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
                                <div class="absolute bottom-0 left-0 w-full p-6">
                                    <div class="flex items-center gap-4 text-xs text-white/80 mb-2">
                                        <span><i class="fas fa-user-circle mr-1"></i> ${recipe.chef}</span>
                                        <span><i class="fas fa-clock mr-1"></i> ${recipe.time}</span>
                                    </div>
                                    <h3 class="font-display font-bold text-xl text-white group-hover:text-bali-gold transition-colors">${recipe.title}</h3>
                                </div>
                                <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-all duration-300 scale-50 group-hover:scale-100">
                                    <i class="fas fa-play text-xl ml-1"></i>
                                </div>
                            </div>
                        `).join('')}
                    </div>
                </div>
            </section>
        `;
    },

    renderTestimonials() {
        return `
            <section id="testimonials" class="py-24 bg-bali-card border-y border-white/5">
                <div class="max-w-5xl mx-auto px-6 text-center">
                    <i class="fas fa-quote-left text-4xl text-bali-gold/30 mb-8"></i>
                    <h2 class="font-display font-bold text-4xl text-white mb-16">Community Love</h2>
                    
                    <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                        ${appData.testimonials.map(t => `
                            <div class="bg-white/5 p-8 rounded-2xl border border-white/5 hover:border-bali-gold/30 transition-colors text-left">
                                <p class="text-slate-300 mb-6 leading-relaxed">"${t.text}"</p>
                                <div class="flex items-center gap-4">
                                    <img src="${t.avatar}" class="w-12 h-12 rounded-full border-2 border-bali-gold/50">
                                    <div>
                                        <div class="font-bold text-white text-sm">${t.name}</div>
                                        <div class="text-xs text-slate-500">${t.role}</div>
                                    </div>
                                </div>
                            </div>
                        `).join('')}
                    </div>
                </div>
            </section>
        `;
    },

    renderNewsletter() {
        return `
            <section class="relative py-32 flex items-center justify-center overflow-hidden">
                <div class="absolute inset-0 bg-fixed bg-cover bg-center" style="background-image: url('https://images.unsplash.com/photo-1500937386664-56d1dfef3854?q=80&w=2938&auto=format&fit=crop');"></div>
                <div class="absolute inset-0 bg-bali-green/90 mix-blend-multiply"></div>
                
                <div class="relative z-10 text-center px-6 max-w-2xl mx-auto">
                    <h2 class="font-display font-black text-5xl text-white mb-6">Join the Movement</h2>
                    <p class="text-bali-sand text-lg mb-10">Get exclusive offers, seasonal recipes, and farmer stories delivered to your inbox.</p>
                    
                    <form class="flex flex-col sm:flex-row gap-4">
                        <input type="email" placeholder="Enter your email address" class="flex-1 px-6 py-4 rounded-full bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:bg-white/20 backdrop-blur-sm">
                        <button type="button" class="px-8 py-4 rounded-full bg-bali-gold hover:bg-amber-600 text-bali-dark font-bold shadow-lg transition-colors">
                            Subscribe
                        </button>
                    </form>
                </div>
            </section>
        `;
    },

    renderBMC() {
        const bmcData = appData.bmc;

        return `
            <section id="bmc" class="py-20 bg-white">
                <div class="container mx-auto px-6">
                    <div class="text-center mb-16 scroll-reveal">
                        <h2 class="text-4xl font-display font-bold text-emerald-900 mb-4">Business Model</h2>
                        <p class="text-stone-600 max-w-2xl mx-auto">Our sustainable ecosystem visualized.</p>
                    </div>
                    
                    <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 font-sans text-sm">
                        <!-- Key Partners -->
                        <div class="p-6 bg-stone-50 rounded-xl border border-stone-100 hover:shadow-lg transition-all duration-300 scroll-reveal md:col-span-1 lg:row-span-2">
                            <div class="flex items-center gap-3 mb-4">
                                <i class="fas fa-handshake text-emerald-600 text-xl"></i>
                                <h3 class="font-bold text-stone-800">Key Partners</h3>
                            </div>
                            <ul class="space-y-2 text-stone-600">
                                ${bmcData.partners.map(item => `<li class="flex items-start gap-2"><i class="fas fa-check text-xs text-emerald-500 mt-1"></i>${item}</li>`).join('')}
                            </ul>
                        </div>

                        <!-- Key Activities -->
                        <div class="p-6 bg-stone-50 rounded-xl border border-stone-100 hover:shadow-lg transition-all duration-300 scroll-reveal delay-100">
                            <div class="flex items-center gap-3 mb-4">
                                <i class="fas fa-tasks text-emerald-600 text-xl"></i>
                                <h3 class="font-bold text-stone-800">Key Activities</h3>
                            </div>
                            <ul class="space-y-2 text-stone-600">
                                ${bmcData.activities.map(item => `<li class="flex items-start gap-2"><i class="fas fa-check text-xs text-emerald-500 mt-1"></i>${item}</li>`).join('')}
                            </ul>
                        </div>

                        <!-- Value Propositions -->
                        <div class="p-6 bg-emerald-900 text-white rounded-xl shadow-xl transform hover:-translate-y-1 transition-all duration-300 scroll-reveal delay-200 md:col-span-1 lg:row-span-2 flex flex-col justify-center">
                            <div class="flex items-center gap-3 mb-6">
                                <i class="fas fa-gift text-emerald-400 text-2xl"></i>
                                <h3 class="font-bold text-xl">Value Proposition</h3>
                            </div>
                            <ul class="space-y-4">
                                ${bmcData.valueProps.map(item => `<li class="flex items-start gap-3"><i class="fas fa-star text-emerald-400 mt-1"></i><span class="opacity-90">${item}</span></li>`).join('')}
                            </ul>
                        </div>

                        <!-- Customer Relationships -->
                        <div class="p-6 bg-stone-50 rounded-xl border border-stone-100 hover:shadow-lg transition-all duration-300 scroll-reveal delay-300">
                            <div class="flex items-center gap-3 mb-4">
                                <i class="fas fa-heart text-emerald-600 text-xl"></i>
                                <h3 class="font-bold text-stone-800">Relationships</h3>
                            </div>
                            <ul class="space-y-2 text-stone-600">
                                ${bmcData.relationships.map(item => `<li class="flex items-start gap-2"><i class="fas fa-check text-xs text-emerald-500 mt-1"></i>${item}</li>`).join('')}
                            </ul>
                        </div>

                        <!-- Customer Segments -->
                        <div class="p-6 bg-stone-50 rounded-xl border border-stone-100 hover:shadow-lg transition-all duration-300 scroll-reveal delay-400 md:col-span-1 lg:row-span-2">
                            <div class="flex items-center gap-3 mb-4">
                                <i class="fas fa-users text-emerald-600 text-xl"></i>
                                <h3 class="font-bold text-stone-800">Segments</h3>
                            </div>
                            <ul class="space-y-2 text-stone-600">
                                ${bmcData.segments.map(item => `<li class="flex items-start gap-2"><i class="fas fa-check text-xs text-emerald-500 mt-1"></i>${item}</li>`).join('')}
                            </ul>
                        </div>

                        <!-- Key Resources -->
                        <div class="p-6 bg-stone-50 rounded-xl border border-stone-100 hover:shadow-lg transition-all duration-300 scroll-reveal delay-100">
                            <div class="flex items-center gap-3 mb-4">
                                <i class="fas fa-layer-group text-emerald-600 text-xl"></i>
                                <h3 class="font-bold text-stone-800">Key Resources</h3>
                            </div>
                            <ul class="space-y-2 text-stone-600">
                                ${bmcData.resources.map(item => `<li class="flex items-start gap-2"><i class="fas fa-check text-xs text-emerald-500 mt-1"></i>${item}</li>`).join('')}
                            </ul>
                        </div>

                        <!-- Channels -->
                        <div class="p-6 bg-stone-50 rounded-xl border border-stone-100 hover:shadow-lg transition-all duration-300 scroll-reveal delay-300">
                            <div class="flex items-center gap-3 mb-4">
                                <i class="fas fa-truck text-emerald-600 text-xl"></i>
                                <h3 class="font-bold text-stone-800">Channels</h3>
                            </div>
                            <ul class="space-y-2 text-stone-600">
                                ${bmcData.channels.map(item => `<li class="flex items-start gap-2"><i class="fas fa-check text-xs text-emerald-500 mt-1"></i>${item}</li>`).join('')}
                            </ul>
                        </div>

                        <!-- Cost Structure -->
                        <div class="p-6 bg-stone-100 rounded-xl border border-stone-200 hover:shadow-lg transition-all duration-300 scroll-reveal delay-500 md:col-span-1 lg:col-span-2.5">
                            <div class="flex items-center gap-3 mb-4">
                                <i class="fas fa-file-invoice-dollar text-red-800 text-xl"></i>
                                <h3 class="font-bold text-stone-800">Cost Structure</h3>
                            </div>
                            <ul class="space-y-2 text-stone-600 grid grid-cols-2 gap-2">
                                ${bmcData.costs.map(item => `<li class="flex items-start gap-2"><i class="fas fa-minus text-xs text-red-500 mt-1"></i>${item}</li>`).join('')}
                            </ul>
                        </div>

                        <!-- Revenue Streams -->
                        <div class="p-6 bg-emerald-50 rounded-xl border border-emerald-100 hover:shadow-lg transition-all duration-300 scroll-reveal delay-500 md:col-span-1 lg:col-span-2.5">
                            <div class="flex items-center gap-3 mb-4">
                                <i class="fas fa-hand-holding-usd text-emerald-600 text-xl"></i>
                                <h3 class="font-bold text-stone-800">Revenue Streams</h3>
                            </div>
                            <ul class="space-y-2 text-stone-600 grid grid-cols-2 gap-2">
                                ${bmcData.revenue.map(item => `<li class="flex items-start gap-2"><i class="fas fa-plus text-xs text-emerald-500 mt-1"></i>${item}</li>`).join('')}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        `;
    },

    renderFooter() {
        return `
            <footer class="bg-bali-card border-t border-white/5 pt-20 pb-10">
                <div class="max-w-7xl mx-auto px-6">
                    <div class="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
                        <div class="col-span-1 md:col-span-2">
                            <h3 class="font-display font-bold text-2xl text-white mb-6">Bali Harvest</h3>
                            <p class="text-slate-400 max-w-sm mb-6">${appData.brand.description}</p>
                            <div class="flex gap-4">
                                <a href="#" class="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-bali-green transition-colors"><i class="fab fa-instagram"></i></a>
                                <a href="#" class="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-bali-green transition-colors"><i class="fab fa-tiktok"></i></a>
                                <a href="#" class="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-bali-green transition-colors"><i class="fab fa-youtube"></i></a>
                            </div>
                        </div>
                        <div>
                            <h4 class="font-bold text-white mb-6">Shop</h4>
                            <ul class="space-y-4 text-slate-400">
                                <li><a href="#" class="hover:text-bali-gold">All Products</a></li>
                                <li><a href="#" class="hover:text-bali-gold">Coffee</a></li>
                                <li><a href="#" class="hover:text-bali-gold">Spices</a></li>
                                <li><a href="#" class="hover:text-bali-gold">Gift Sets</a></li>
                            </ul>
                        </div>
                        <div>
                            <h4 class="font-bold text-white mb-6">Visit</h4>
                            <ul class="space-y-4 text-slate-400">
                                ${appData.locations.map(loc => `
                                    <li>
                                        <strong class="block text-white text-sm">${loc.name}</strong>
                                        <span class="text-xs">${loc.address}</span>
                                    </li>
                                `).join('')}
                            </ul>
                        </div>
                    </div>
                    <div class="border-t border-white/5 pt-8 text-center text-slate-600 text-sm">
                        &copy; 2025 Bali Harvest. All rights reserved.
                    </div>
                </div>
            </footer>
        `;
    }
};
