# React + TypeScript + Vite

Esta es la implementación de la interfaz de usuario (UI) de un Sistema de Gestión de Pedidos, desarrollada con **React**, **TypeScript** y **Vite**.

La API que ofrece la lógica de negocio de esta aplicación se encuentra disponible en el siguiente repositorio:  
[Repositorio de la API](https://github.com/angCF/Sistema-de-Gestion-de-Pedidos.git)

---

En el repositorio de la API se encuentra incluida la carpeta `frontend`, lo que permite que con la orquestación de Docker se levante toda la aplicación de manera integral (backend y frontend).  

No obstante, si se desea ejecutar el frontend de forma independiente, basta con comentar la sección correspondiente a `frontend` en el archivo `docker-compose.yml` **del repositorio de la API** y levantar manualmente este proyecto en el puerto `5173`. De esta manera, se mantendrá la comunicación esperada con la API sin inconvenientes.

## Requisitos Previos
- [Node.js](https://nodejs.org/) (versión recomendada: LTS)
- npm (incluido con Node.js)
Verificar si están instalados con:
```
node -v
npm -v
```
## Instalación
1. Clonar el repositorio:
```
git clone https://github.com/angCF/Sistema-Gestion-Pedidos-React.git
cd frontend
```
2. Instalar dependencias
```
npm install
```
## Ejecución
```
npm run dev
```
Esto abrirá la aplicación en http://localhost:5173 (puede variar según tu configuración local).
## Build
```
npm run build
```
## Despliegue en Docker
La aplicación también se puede desplegar en Docker usando los siguientes comandos:
```console
docker build . -t "react-project"
```
```console
docker run -p 5173:5173 react-project
```
