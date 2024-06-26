# App de tuits

## Configuración Inicial

### Creación de la estructura del proyecto

1. Crea una carpeta con el nombre del proyecto en tu sistema de archivos.
2. Abre Visual Studio Code y abre la carpeta del proyecto.
3. Dentro de la carpeta del proyecto, crea dos subcarpetas:
   - `public`: Para archivos estáticos como imágenes, CSS, etc.
   - `src`: Para el código fuente de tu aplicación.

### Conexión con GitHub

1. Crea un repositorio en GitHub para tu proyecto, sin incluir un README inicial.
2. Sigue las instrucciones proporcionadas por GitHub para vincular tu repositorio local con el repositorio remoto en GitHub. Esto normalmente implica los siguientes pasos:
   git init
   git add .
   git commit -m "Inicializa el proyecto"
   git branch -M main
   git remote add origin <URL_del_repositorio_remoto>
   git push -u origin main  

![Integración con GitHub](./img/Link%20project%20with%20GITHUB.png)


### Configuración de TypeScript en Visual Studio Code

Si al intentar ejecutar `tsc` desde PowerShell encuentras el error "No se puede cargar el archivo C:\Users\...\npm\tsc.ps1 porque la ejecución de scripts está deshabilitada en este sistema", sigue estos pasos para resolverlo:

1. **Abrir PowerShell como administrador**:
   - Haz clic derecho en el icono de PowerShell y selecciona "Ejecutar como administrador".

2. **Cambiar la política de ejecución**:
   Ejecuta el siguiente comando para permitir la ejecución de scripts locales (puedes revertirlo después si lo deseas):
   "Set-ExecutionPolicy RemoteSigned -Scope CurrentUser -Force"  

Luego vas a la terminal de tu proyecto y colocas nuevamente: "tsc --init" y ya estará listo. 

![Configuración de Typescript con Powershell como 'root'](./img/PowerShell%20as%20a%20root.png)  

![Inicialización con Typescript](./img/Typescript%20install.png)



### Descripción del código  

Este código TypeScript proporciona una estructura básica y funcional para gestionar y renderizar tweets en una página web. A través de la definición de tipos e interfaces, se asegura una correcta tipificación de los datos relacionados con los tweets. Las funciones principales permiten crear nuevos tweets y vistas de tweets, actualizar el contenido de los tweets, y renderizar estos elementos en el DOM de manera dinámica. La implementación de event listeners permite la interacción del usuario para añadir nuevos tweets y actualizar los existentes. En resumen, este código ejemplifica cómo utilizar TypeScript para crear una aplicación web interactiva que maneja elementos dinámicos de manera eficiente y estructurada.  
  
### Conclusión

Crear esta aplicación de tweets utilizando TypeScript ofrece varias ventajas significativas. TypeScript, al añadir tipado estático a JavaScript, mejora la robustez y mantenibilidad del código al detectar errores en tiempo de desarrollo. La estructura clara y las interfaces definidas aseguran una gestión coherente de los datos, facilitando la colaboración y ampliación del proyecto. 

Además, la implementación de funciones para crear, renderizar y actualizar tweets demuestra cómo TypeScript puede mejorar la interacción dinámica en aplicaciones web. Este enfoque no solo simplifica el desarrollo de componentes reutilizables, sino que también mejora la experiencia del usuario al permitir una gestión fluida de contenido en tiempo real.

En resumen, esta aplicación de tweets muestra cómo TypeScript puede potenciar el desarrollo web moderno, combinando la seguridad del tipado estático con la flexibilidad y dinamismo de JavaScript para crear aplicaciones interactivas y mantenibles.  

![App de Tweets](./img/App%201.jpeg)  

![App de Tweets 2](./img/App%202.jpeg)


