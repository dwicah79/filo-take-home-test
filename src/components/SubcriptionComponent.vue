<template>
  <div class="w-full md:p-40">
    <div
      class="bg-[url('/images/bg-form.png')] bg-no-repeat md:p-20 bg-center bg-cover md:rounded-2xl"
    >
      <h1 class="text-white text-3xl font-semibold text-center mb-8 leading-tight pt-5">
        Subscribe to get 50% discount price
      </h1>

      <form @submit.prevent="handleSubmit" class="space-y-5">
        <div>
          <input
            type="text"
            v-model="formData.fullName"
            placeholder="Full name"
            class="w-full px-5 py-4 bg-white bg-opacity-90 rounded-xl border-none outline-none text-gray-800 placeholder-gray-500 text-base focus:bg-white focus:ring-2 focus:ring-amber-600 focus:ring-opacity-30 transition-all duration-300"
            required
          />
        </div>
        <div>
          <input
            type="email"
            v-model="formData.email"
            placeholder="Email address"
            class="w-full px-5 py-4 bg-white bg-opacity-90 rounded-xl border-none outline-none text-gray-800 placeholder-gray-500 text-base focus:bg-white focus:ring-2 focus:ring-amber-600 focus:ring-opacity-30 transition-all duration-300"
            required
          />
        </div>
        <div>
          <textarea
            v-model="formData.message"
            placeholder="Message"
            rows="4"
            class="w-full px-5 py-4 bg-white bg-opacity-90 rounded-xl border-none outline-none text-gray-800 placeholder-gray-500 text-base resize-y min-h-24 focus:bg-white focus:ring-2 focus:ring-amber-600 focus:ring-opacity-30 transition-all duration-300"
          ></textarea>
        </div>
        <div class="pt-3 flex justify-center">
          <button type="submit" class="btn-secondary px-5">Order now</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SubscriptionComponent',
  data() {
    return {
      formData: {
        fullName: '',
        email: '',
        message: '',
      },
    }
  },
  methods: {
    handleSubmit() {
      console.log('Form submitted:', this.formData)
    },
  },
}
</script>
