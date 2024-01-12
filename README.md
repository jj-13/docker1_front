# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

Puedes crear un script de inicio que espere a que la base de datos esté lista antes de ejecutar manage.py. Aquí te dejo un ejemplo de cómo se vería:

#!/bin/bash

# Espera hasta que Postgres esté listo
while ! nc -z $POSTGRES_HOST 5432; do   
  echo "Postgres no está listo. Esperando..."
  sleep 1
done

echo "Postgres está listo. Ejecutando comandos..."

python manage.py makemigrations
python manage.py migrate
python manage.py runserver 0.0.0.0:8000

Este script utiliza el comando nc (Netcat) para verificar si puede conectarse al host de Postgres en el puerto 5432. Si no puede conectarse, espera un segundo y luego lo intenta de nuevo. Una vez que puede conectarse, ejecuta los comandos de Django.

Luego, puedes llamar a este script en tu archivo docker-compose.yaml en la sección de comandos:

command: ["/bin/bash", "-c", "/path/to/your/script/startup.sh"]

Recuerda hacer el script ejecutable con el comando chmod +x startup.sh

+ ./jenkins_deploy_prod_docker.sh
Host key verification failed.