<template>
  <div>
    <section class="relative h-[60vh] min-h-[500px] flex items-center overflow-hidden bg-[#033958] text-white">
      <div class="absolute inset-0 z-0">
        <img 
          src="@/assets/images/fresh2.jpg" 
          class="w-full h-full object-cover opacity-40 animate-ken-burns" 
        />
        <div class="absolute inset-0 bg-gradient-to-b from-[#033958]/80 to-[#033958]"></div>
        <div class="absolute top-0 right-0 w-[700px] h-[700px] bg-amber-400/10 rounded-full translate-x-1/2 -translate-y-1/2 blur-[120px]"></div>
        <div class="absolute bottom-0 left-0 w-96 h-96 bg-white/5 rounded-full -translate-x-1/2 translate-y-1/2 blur-[80px]"></div>
        <div class="absolute inset-0 opacity-5"
          style="background-image: radial-gradient(circle, #fff 1px, transparent 1px); background-size: 40px 40px;">
        </div>
      </div>
      <div class="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 w-full pt-20">
        <div class="max-w-4xl">
          <div class="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white/90 px-5 py-2 rounded-full text-sm font-bold mb-8 backdrop-blur-sm">
            <Icon name="lucide:crown" class="w-4 h-4 text-amber-400" />
            Est. in Nigeria — NAFDAC Certified
          </div>
          <h1 class="text-5xl md:text-7xl font-black tracking-tight leading-[1.05] mb-6">
            Delectable Snack
            <br />
            <span class="text-amber-400">Innovations</span>
          </h1>
          <p class="text-2xl font-medium text-white/70 max-w-2xl leading-relaxed">
            Unleashing Quality and Taste
          </p>
        </div>
      </div>
    </section>

    <!-- Brand Story -->
    <section class="py-24 bg-white">
      <div class="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <!-- Content -->
          <div>
            <span class="inline-block text-xs font-black text-[#033958] uppercase tracking-[0.2em] mb-6 border-b-2 border-amber-400 pb-1">Our Story</span>
            <h2 class="text-4xl font-black text-gray-900 tracking-tight mb-6 leading-tight">
              Born from a passion<br class="hidden sm:block" /> for Nigerian flavour.
            </h2>
            <div class="space-y-5 text-gray-600 leading-relaxed text-lg font-medium">
              <p>
                Founded by a passionate entrepreneur, Wisekings Ventures reflects a commitment to elevating snacking
                experiences across Nigeria and beyond.
              </p>
              <p>
                With years of experience in the snack industry, Wisekings Ventures Limited combines tradition and
                innovation to create snacks that satisfy diverse palates. Our commitment to quality, backed by
                <strong class="text-gray-900 font-black">NAFDAC certification</strong>, ensures that every product
                meets the highest standards of excellence.
              </p>
            </div>

            <!-- NAFDAC Badge -->
            <div class="mt-10 inline-flex items-center gap-4 bg-emerald-50 border border-emerald-100 rounded-2xl px-6 py-4">
              <div class="w-12 h-12 rounded-xl bg-emerald-100 flex items-center justify-center shrink-0">
                <Icon name="lucide:badge-check" class="w-7 h-7 text-emerald-600" />
              </div>
              <div>
                <p class="text-sm font-black text-gray-900">NAFDAC Certified</p>
                <p class="text-xs text-gray-500 font-medium">Every product meets Nigeria's highest food safety standards.</p>
              </div>
            </div>
          </div>

          <!-- Visual Card -->
          <div class="relative">
            <div class="aspect-[4/5] bg-gradient-to-br from-[#033958] to-[#0a5a8a] rounded-[3rem] overflow-hidden relative shadow-2xl shadow-[#033958]/30">
              <div class="absolute inset-0 opacity-10"
                style="background-image: radial-gradient(circle, #fff 1px, transparent 1px); background-size: 30px 30px;">
              </div>
              <div class="absolute bottom-0 left-0 right-0 p-12 text-white">
                <Icon name="lucide:quote" class="w-16 h-16 text-amber-400 mb-4 opacity-80" />
                <p class="text-2xl font-black leading-snug text-white/90">
                  "Every snack we craft is a commitment to quality that Nigeria deserves."
                </p>
                <p class="text-white/50 text-sm font-bold mt-4 uppercase tracking-widest">— Wisekings Ventures</p>
              </div>
              <!-- Decorative orb -->
              <div class="absolute top-8 right-8 w-40 h-40 bg-amber-400/20 rounded-full blur-[60px]"></div>
            </div>

            <!-- Floating stats -->
            <div class="absolute -right-6 top-12 bg-white rounded-2xl shadow-xl border border-gray-100 p-5 flex items-center gap-4">
              <div class="w-12 h-12 rounded-xl bg-amber-50 flex items-center justify-center">
                <Icon name="lucide:award" class="w-6 h-6 text-amber-500" />
              </div>
              <div>
                <p class="text-xl font-black text-gray-900">100%</p>
                <p class="text-xs text-gray-500 font-bold uppercase tracking-wider">Quality Assured</p>
              </div>
            </div>

            <div class="absolute -left-6 bottom-16 bg-white rounded-2xl shadow-xl border border-gray-100 p-5 flex items-center gap-4">
              <div class="w-12 h-12 rounded-xl bg-[#033958]/10 flex items-center justify-center">
                <Icon name="lucide:package-check" class="w-6 h-6 text-[#033958]" />
              </div>
              <div>
                <p class="text-xl font-black text-gray-900">9+</p>
                <p class="text-xs text-gray-500 font-bold uppercase tracking-wider">Product Lines</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Values Row -->
    <section class="py-20 bg-gray-50">
      <div class="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
        <div class="text-center mb-14">
          <h2 class="text-3xl font-black text-gray-900 tracking-tight">What Drives Us</h2>
          <p class="text-gray-500 mt-3 font-medium max-w-lg mx-auto">Three pillars that define every snack we make.</p>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div v-for="v in values" :key="v.title"
            class="bg-white rounded-[2rem] p-10 border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 text-center group">
            <div class="w-16 h-16 rounded-2xl mx-auto mb-6 flex items-center justify-center transition-all duration-300"
              :class="v.bg + ' group-hover:scale-110'">
              <Icon :name="v.icon" class="w-8 h-8" :class="v.color" />
            </div>
            <h3 class="text-xl font-black text-gray-900 mb-3">{{ v.title }}</h3>
            <p class="text-gray-500 leading-relaxed font-medium">{{ v.desc }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Founder Section -->
    <section class="py-24 bg-white">
      <div class="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <!-- Founder Card -->
          <div class="relative">
            <div class="bg-gradient-to-br from-gray-900 to-[#033958] rounded-[3rem] p-12 text-white relative overflow-hidden shadow-2xl">
              <div class="absolute top-0 right-0 w-64 h-64 bg-amber-400/10 rounded-full translate-x-1/3 -translate-y-1/3 blur-[80px]"></div>
              <div class="relative z-10">
                <div class="w-20 h-20 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center mb-8">
                  <Icon name="lucide:user-circle" class="w-10 h-10 text-amber-400" />
                </div>
                <h3 class="text-3xl font-black mb-2">Mr. Eustace Ugboh</h3>
                <p class="text-amber-400 font-bold text-sm uppercase tracking-widest mb-8">Founder, Wisekings Ventures Limited</p>
                <div class="space-y-4 text-white/70 font-medium leading-relaxed">
                  <div class="flex items-start gap-3">
                    <Icon name="lucide:graduation-cap" class="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                    <p>Academic background in <strong class="text-white">Food Science</strong> with years of hands-on industry experience.</p>
                  </div>
                  <div class="flex items-start gap-3">
                    <Icon name="lucide:lightbulb" class="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                    <p>Deep passion for food excellence and a vision to transform snacking in Nigeria.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Founder Story -->
          <div>
            <span class="inline-block text-xs font-black text-[#033958] uppercase tracking-[0.2em] mb-6 border-b-2 border-amber-400 pb-1">Meet Our Visionary Founder</span>
            <h2 class="text-4xl font-black text-gray-900 tracking-tight mb-6 leading-tight">
              A food scientist<br class="hidden sm:block" /> with a dream.
            </h2>
            <div class="space-y-5 text-gray-600 leading-relaxed text-lg font-medium">
              <p>
                Mr. Eustace Ugboh, the founder of Wisekings Ventures Limited, has a deep passion for food excellence
                and quality. With an academic background in food science and years of industry experience, he understands
                the nuances of creating superior snacks.
              </p>
              <p>
                Eustace started Wisekings Ventures with a vision to provide nutritious and delicious snacking options
                for all. Motivated by the lack of quality snack choices in the Nigerian market, he embarked on a journey
                to craft a product line that combines <strong class="text-gray-900 font-black">taste with health</strong>.
              </p>
            </div>

            <div class="mt-10 flex items-center gap-6">
              <div class="text-center">
                <p class="text-3xl font-black text-[#033958]">9+</p>
                <p class="text-xs text-gray-500 font-bold uppercase tracking-wider mt-1">Products</p>
              </div>
              <div class="w-px h-12 bg-gray-100"></div>
              <div class="text-center">
                <p class="text-3xl font-black text-[#033958]">100%</p>
                <p class="text-xs text-gray-500 font-bold uppercase tracking-wider mt-1">NAFDAC</p>
              </div>
              <div class="w-px h-12 bg-gray-100"></div>
              <div class="text-center">
                <p class="text-3xl font-black text-[#033958]">NG</p>
                <p class="text-xs text-gray-500 font-bold uppercase tracking-wider mt-1">Made in Nigeria</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Banner -->
    <section class="py-24 bg-gray-900 text-white relative overflow-hidden">
      <div class="absolute inset-0 z-0">
        <div class="absolute top-0 left-1/4 w-96 h-96 bg-amber-400/10 rounded-full blur-[120px]"></div>
        <div class="absolute bottom-0 right-1/4 w-96 h-96 bg-[#033958]/50 rounded-full blur-[100px]"></div>
      </div>
      <div class="relative z-10 max-w-3xl mx-auto px-6 text-center">
        <div class="mb-8 inline-flex items-center gap-2 bg-white/10 border border-white/10 text-white/80 px-5 py-2 rounded-full text-sm font-bold backdrop-blur-sm">
          <Icon name="lucide:sparkles" class="w-4 h-4 text-amber-400" />
          Wisekings
        </div>
        <h2 class="text-4xl md:text-5xl font-black tracking-tight mb-4 leading-tight">
          Join the Snack Revolution
        </h2>
        <p class="text-white/60 text-xl font-medium mb-10 max-w-xl mx-auto">
          Experience the joy of premium snacking. Browse our collection and treat yourself today!
        </p>
        <NuxtLink to="/products"
          class="inline-flex items-center gap-3 bg-amber-400 text-gray-900 hover:bg-amber-300 px-10 py-5 rounded-2xl font-black text-lg shadow-2xl shadow-amber-400/20 transition-all hover:-translate-y-1 active:translate-y-0 group">
          Shop Now
          <Icon name="lucide:arrow-right" class="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </NuxtLink>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
definePageMeta({ layout: 'default' })

useSeoMeta({
  title: 'About Us – Wisekings Ventures',
  description: 'Learn about Wisekings Ventures Limited — our story, our founder Mr. Eustace Ugboh, and our commitment to delivering NAFDAC-certified premium snacks across Nigeria.',
  ogTitle: 'About Us – Wisekings Ventures',
  ogDescription: 'Premium NAFDAC-certified snacks crafted with passion. Discover our story.',
})

const values = [
  {
    icon: 'lucide:badge-check',
    title: 'Certified Quality',
    desc: 'Every Wisekings product is NAFDAC-certified, guaranteeing the highest Nigerian food safety and quality standards.',
    bg: 'bg-emerald-50',
    color: 'text-emerald-600',
  },
  {
    icon: 'lucide:flask-conical',
    title: 'Science Meets Taste',
    desc: 'Our food science expertise ensures the perfect balance between nutrition, freshness, and irresistible flavour.',
    bg: 'bg-blue-50',
    color: 'text-blue-600',
  },
  {
    icon: 'lucide:globe-2',
    title: 'Nigerian Heritage',
    desc: 'From ripe plantain chips to crunchy potato crisps, every snack celebrates and elevates authentic Nigerian taste.',
    bg: 'bg-amber-50',
    color: 'text-amber-600',
  },
]
</script>

<style>
@keyframes ken-burns {
  0% { transform: scale(1) translate(0); }
  50% { transform: scale(1.1) translate(-1%, -1%); }
  100% { transform: scale(1.2) translate(-2%, -2%); }
}
.animate-ken-burns {
  animation: ken-burns 30s ease-in-out infinite alternate;
}
</style>
