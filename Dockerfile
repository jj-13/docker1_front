# Dockerfile
# Usamos una imagen de Node.js para construir la aplicación
FROM node:14

# Directorio de trabajo
WORKDIR /app

# Copiamos package.json y package-lock.json
COPY package*.json ./

# Instalamos las dependencias del proyecto
RUN npm install

# Copiamos el resto del código de la aplicación
COPY . .

# Exponemos el puerto 3000
EXPOSE 5173

# Comando para iniciar la aplicación
#CMD ["npm", "run", "dev"]
CMD ["npm", "run", "dev -- --host 0.0.0.0"]
