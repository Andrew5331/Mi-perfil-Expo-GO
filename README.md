# Mi Perfil 

App creada con [Expo](https://expo.dev) que muestra una tarjeta de perfil con avatar, nombre, rol y una lista de habilidades. Proyecto de práctica del flujo de trabajo básico de Expo: crear el proyecto, correrlo en un dispositivo real con Expo Go y editar la UI con Fast Refresh.

## Vista previa

La tarjeta de perfil incluye:
- **Avatar** (`Image`)
- **Nombre y rol** (`Text`)
- **Lista de habilidades** (`Text` con viñetas)

---

## 1. Clonar el repositorio

Abre una terminal (CMD, PowerShell o la terminal integrada de VS Code) en la carpeta donde quieras guardar el proyecto y ejecuta:

```bash
git clone https://github.com/Andrew5331/Mi-perfil-Expo-GO.git
```

Esto va a crear una carpeta llamada `Mi-perfil-Expo-GO` con todo el proyecto adentro.

---

## 2. Abrir el proyecto en Visual Studio Code

Entra a la carpeta recién clonada y ábrela en VS Code:

```bash
cd Mi-perfil-Expo-GO
code .
```

> Si el comando `code .` no funciona, abre VS Code manualmente y usa **Archivo → Abrir carpeta...** para seleccionar `Mi-perfil-Expo-GO`.

---

## 3. Instalar las dependencias

Dentro de VS Code, abre una terminal integrada (`Ctrl + ñ` o **Terminal → Nueva Terminal**) y corre:

```bash
npm install
```

Esto descarga todas las librerías que el proyecto necesita (definidas en `package.json`), incluyendo Expo y React Native. Puede tardar uno o dos minutos.

---

## 4. Requisitos previos en tu teléfono

Antes de continuar, asegúrate de tener:

- **App Expo Go** instalada en tu teléfono:
  - Android → [Google Play Store](https://play.google.com/store/apps/details?id=host.exp.exponent)
  - iOS → [App Store](https://apps.apple.com/app/expo-go/id982107779)
- Tu **teléfono y tu computadora conectados a la misma red Wi-Fi**. Esto es indispensable: si están en redes distintas (por ejemplo, el celular con datos móviles), Expo Go no va a poder encontrar el servidor.

---

## 5. Iniciar el servidor de desarrollo

En la terminal de VS Code, corre:

```bash
npx expo start
```

Esto va a:
1. Compilar el proyecto.
2. Abrir una pestaña en tu navegador (Metro Bundler) o mostrarte directamente en la terminal un **código QR**.

---

## 🔗 6. Conectar tu teléfono con Expo Go

### Android
1. Abre la app **Expo Go**.
2. Toca **"Scan QR code"**.
3. Apunta la cámara al código QR que aparece en la terminal o en el navegador.

### iOS
1. Abre la app de **Cámara** nativa del iPhone (no necesitas abrir Expo Go primero).
2. Apunta al código QR.
3. Aparecerá una notificación arriba que dice algo como "Abrir en Expo Go" — tócala.

En ambos casos, la app va a compilar y abrirse automáticamente en tu teléfono en unos segundos. Si es la primera vez, puede tardar un poco más mientras descarga el bundle de JavaScript.

---

## 7. Editar y ver los cambios en vivo (Fast Refresh)

Con el servidor corriendo y la app abierta en tu teléfono:

1. Abre `App.js` en VS Code.
2. Cambia, por ejemplo, el texto del nombre o algún color en los estilos.
3. Guarda el archivo (`Ctrl + S`).
4. Tu teléfono va a actualizar la pantalla automáticamente, sin perder el estado de la app ni tener que reescanear el QR. A esto se le llama **Fast Refresh**.
<img width="702" height="1600" alt="5b24fb55-3037-40d5-8729-2d4d70ec98c2" src="https://github.com/user-attachments/assets/6fcf6752-7812-4bb2-9c14-e85bb46b1cd6" />

---

## Problemas comunes

| Problema | Solución |
|---|---|
| El QR no conecta | Verifica que el teléfono y la PC estén en la misma red Wi-Fi. |
| Error de red/firewall | Corre `npx expo start --tunnel` en vez de `npx expo start` (usa un túnel en vez de la red local, más lento pero más confiable). |
| La app no actualiza sola | Agita el teléfono para abrir el menú de desarrollo y toca **Reload**. |
| `npm install` falla | Verifica que tengas Node.js 20 o superior con `node -v`. |

---

## Estructura del proyecto

```
mi-perfil/
├── assets/            # Imágenes (ícono, splash, avatar)
├── App.js             # Componente principal: tarjeta de perfil
├── app.json           # Configuración de Expo
├── package.json       # Dependencias y scripts
├── .gitignore         # Archivos ignorados por Git
└── README.md          # Este archivo
```

## Tecnologías

- [Expo](https://expo.dev)
- React Native
- JavaScript
