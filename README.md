# geek_project

Es una aplicación web diseñada para gestionar productos fácilmente, permitiendo funciones como visualizar, agregar y eliminar elementos de manera dinámica.

## 🌟 Funcionalidades

	•	👀 Visualizar productos existentes.
	•	➕ Agregar nuevos productos proporcionando detalles como nombre, precio e imagen.
	•	🗑️ Eliminar productos desde la interfaz de usuario.
	•	Actualización dinámica del DOM sin necesidad de recargar la página.
	•	Conexión a un servidor simulado utilizando json-server para realizar operaciones CRUD.

## 💻 Tecnologías Empleadas

	•	🖋️ HTML5 y CSS3: Para la estructura y el diseño.
	•	💡 JavaScript (Módulos ES6): Implementación de la lógica y la interactividad.
	•	🌐 json-server: Servidor RESTful simulado.
	•	📡 Fetch API: Manejo de solicitudes HTTP.
	•	🎨 BEM (Block Element Modifier): Estandarización de nombres en CSS.

## 🚀 Proceso de Instalación

Requisitos

	•	Tener Node.js instalado.

Pasos
1. Clona el repositorio:

		git clone](https://github.com/TheoZL/geek_project.git)
2. Accede al directorio del proyecto:

   		cd geek_project
3. Instala las dependencias necesarias:

		npm install
4. Ejecuta el servidor JSON:

   		npm start
5. Abre index.html en tu navegador.

## 📂 Estructura del Proyecto

	•	📄 index.html: Estructura de la aplicación.
	•	✨ styles/reset.css: Reinicio de estilos.
	•	🎨 styles/style.css: Estilos personalizados.
	•	⚙️ js/controllers/main.js: Lógica de agregar y eliminar productos.
	•	📡 js/services/product-services.js: Solicitudes HTTP (GET, POST, DELETE).
	•	🗄️ db.json: Base de datos simulada para json-server.
	•	📦 package.json: Dependencias y scripts.

## 🛠️ API Simulada

json-server simula una API RESTful con las siguientes rutas:
	•	GET /products: Lista los productos.
	•	POST /products: Crea un nuevo producto.
	•	DELETE /products/:id: Elimina un producto.
 
 ## 🎮 Uso de la Aplicación

	1.	Visualizar Productos: Los productos se cargan automáticamente desde el servidor simulado al abrir la página.
	2.	Agregar Producto: Completa el formulario con nombre, precio y URL de la imagen, luego haz clic en “Enviar”.
	3.	Eliminar Producto: Haz clic en el ícono de la papelera para eliminar un producto.
 
 -------------------------------------------------------------------------------------------------------------------------------
 Desarrollada por Theo Zuñiga
