<script setup lang="ts"></script>

<template>
  <section class="relative">
    <div
      class="absolute left-1/2 transform -translate-x-1/2 bottom-0 pointer-events-none -z-1"
      aria-hidden="true"
    >
      <svg width="1360" height="578" viewBox="0 0 1360 578" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="illustration-01">
            <stop stop-color="#FFF" offset="0%"></stop>
            <stop stop-color="#EAEAEA" offset="77.402%"></stop>
            <stop stop-color="#DFDFDF" offset="100%"></stop>
          </linearGradient>
        </defs>
        <g fill="url(#illustration-01)" fill-rule="evenodd">
          <circle cx="1232" cy="128" r="128"></circle>
          <circle cx="155" cy="443" r="64"></circle>
        </g>
      </svg>
    </div>
    <div class="max-w-6xl mx-auto px-4 sm:px-6">
      <div class="pt-32 pb-12 md:pt-40 md:pb-20">
        <div class="text-center pb-12 md:pb-16">
          <h1
            class="text-5xl md:text-8xl font-extrabold leading-tighter tracking-tighter mb-4 aos-init aos-animate"
            data-aos="zoom-y-out"
          >
            Make your website
            <span
              class="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400"
              >{{ $t('module.hello') }}</span
            >
          </h1>
          <div class="max-w-3xl mx-auto">
            <p
              class="text-xl text-gray-600 mb-8 aos-init aos-animate"
              data-aos="zoom-y-out"
              data-aos-delay="150"
            >
              Our landing page template works on all devices, so you only have to set it up once,
              and get beautiful results forever.
            </p>
            <div
              class="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center aos-init aos-animate"
              data-aos="zoom-y-out"
              data-aos-delay="300"
            >
              <div>
                <a
                  class="px-5 py-3 rounded-lg text-white bg-blue-600 hover:bg-blue-700 w-full mb-4 sm:w-auto sm:mb-0"
                  href="#0"
                  >Start free trial</a
                >
              </div>
              <div>
                <a
                  class="px-5 py-3 rounded-lg text-white bg-gray-900 hover:bg-gray-800 w-full sm:w-auto sm:ml-4"
                  href="#0"
                  >Learn more</a
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
