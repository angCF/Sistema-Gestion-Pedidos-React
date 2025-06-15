FROM node:22-alpine

WORKDIR /front-app

COPY package.json .
RUN npm install

COPY . .

EXPOSE 5173

CMD [ "npm", "run", "dev"]


# # Etapa 1: build de la app
# FROM node:22-alpine AS builder

# WORKDIR /app

# COPY package*.json ./
# RUN npm install

# COPY . .

# RUN npm run build

# # Etapa 2: servir con Nginx
# FROM nginx:stable-alpine

# # Copia el build generado al directorio público de Nginx
# COPY --from=builder /app/dist /usr/share/nginx/html

# # Copia configuración personalizada de Nginx (opcional)
# # COPY nginx.conf /etc/nginx/conf.d/default.conf

# EXPOSE 80

# CMD ["nginx", "-g", "daemon off;"]
