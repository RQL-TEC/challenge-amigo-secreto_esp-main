# challenge-amigo-secreto_esp-main
# 🎲 Proyecto: Sorteo de Amigo Secreto

Una aplicación web interactiva y elegante para realizar sorteos del "Amigo Secreto" de manera rápida, sencilla y divertida.

## 📋 Tabla de Contenidos

1.  [Descripción](#-descripción)
2.  [Funcionalidades Clave](#-funcionalidades-clave)
3.  [Demostración Visual](#-demostración-visual)
4.  [Tecnologías Implementadas](#-tecnologías-implementadas)
5.  [Cómo Ejecutar el Proyecto](#-cómo-ejecutar-el-proyecto)
6.  [Autor](#-autor)

---

## 📝 Descripción

**Amigo Secreto** es una solución digital al clásico juego de regalos. Creada como parte de un desafío de programación, esta aplicación permite a los usuarios agregar una lista de participantes y realizar un sorteo aleatorio para determinar quién será el "amigo secreto" de forma imparcial. El proyecto se enfoca en la lógica de programación y la manipulación del DOM utilizando JavaScript puro (Vanilla JS), demostrando habilidades fundamentales en el desarrollo front-end.

---

## ✨ Funcionalidades Clave

*   **Añadir Participantes de forma dinámica:** Los usuarios pueden escribir un nombre en el campo de texto y agregarlo a la lista de participantes con un solo clic.
*   **Visualización en tiempo real:** La lista de amigos se actualiza instantáneamente en la pantalla cada vez que se agrega un nuevo nombre.
*   **Validación de entradas robusta:**
    *   ✔️ **Nombres Vacíos:** El sistema alerta al usuario si intenta agregar un campo vacío.
    *   ✔️ **Nombres Duplicados:** Se impide agregar un nombre que ya existe en la lista para garantizar la integridad del sorteo.
*   **Sorteo aleatorio e imparcial:** Al presionar el botón "Sortear amigo", un algoritmo basado en `Math.random()` selecciona un nombre de la lista de manera completamente aleatoria.
*   **Condición de Sorteo:** Es necesario tener un mínimo de 2 participantes en la lista para poder activar la función de sorteo.
*   **Interfaz de Revelación:** Tras el sorteo, la lista de todos los participantes se oculta para enfocar la atención en el resultado final, creando un momento de sorpresa.

---

## 📸 Demostración Visual

### Paso 1: Agregar nombres a la lista

Los usuarios ingresan los nombres de sus amigos, los cuales aparecen listados y separados por comas.

![Paso 1: Agregando nombres a la lista]

### Paso 2: Realizar el sorteo y ver el resultado

Al hacer clic en "Sortear amigo", la lista de participantes desaparece y se revela el nombre del ganador.

![Paso 2: Resultado del sorteo]

---

## 💻 Tecnologías Implementadas

Este proyecto fue construido desde cero con las tecnologías fundamentales de la web, sin depender de frameworks o librerías externas.

*   **HTML5:** Para la estructura semántica del contenido.
*   **CSS3:** Para el diseño, la paleta de colores, las fuentes y la maquetación (Flexbox).
*   **JavaScript (Vanilla JS):** Para toda la lógica interactiva, incluyendo:
    *   Manejo de eventos (clics).
    *   Manipulación del DOM (crear, leer, actualizar y eliminar elementos).
    *   Gestión de datos en arrays.
    *   Generación de números aleatorios.

---

## 🚀 Cómo Ejecutar el Proyecto Localmente

No se necesita ninguna dependencia ni proceso de instalación.

1.  **Clona el repositorio en tu máquina local:**
    ```bash
    git clone https://github.com/RQL-TEC/challenge-amigo-secreto_esp-main.git
    ```
2.  **Navega a la carpeta del proyecto:**
    ```bash
    cd challenge-amigo-secreto_esp-main
    ```
3.  **Abre el archivo `index.html` en tu navegador web favorito** (como Chrome, Firefox, etc.).

---

## ✍️ Autor

Proyecto desarrollado por **Luis Enrique Ramos Quispe**.

*   **GitHub:** @RQL-TEC(https://github.com/RQL-TEC)
