# Utiliser l'image officielle de Node.js 20 depuis Docker Hub
FROM node:20 as build

# Installer pnpm
RUN npm install -g pnpm

# Définir le répertoire de travail
WORKDIR /src

# Copier package.json et pnpm-lock.yaml
COPY package.json pnpm-lock.yaml ./

# Installer les dépendances
RUN pnpm install

# Copier le reste du code source de l'application depuis l'hôte vers le système de fichiers de l'image
COPY . .

# Construire l'application
RUN pnpm run build

# Exposer le port
EXPOSE 5173

# Démarrer l'application
CMD ["pnpm", "run", "dev", "--", "--host"]
