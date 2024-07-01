import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base:'/react-food-delivery-simulator/',
  plugins: [react()],
  server:{
    port:2000,
    host:true,
    
  }
})
