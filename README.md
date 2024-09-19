# Mini Ecommerce Front Mobile

This is a mobile frontend for a mini ecommerce application, built using modern web technologies.

[![Demo](https://img.shields.io/badge/Demo-Live-blue)](https://mini-ecommerce-front-mobile-vgjf.vercel.app/products)

## Table of Contents

- [Demo](#demo)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Docker Instructions](#docker-instructions)
- [Usage](#usage)
- [Screenshots](#screenshots)
- [Contributing](#contributing)
- [License](#license)

## Demo

Check out the live demo of the app here: [Live Demo](https://mini-ecommerce-front-mobile-vgjf.vercel.app/products)

## Features

- Responsive mobile-friendly UI
- Browse products
- Add products to the cart
- Edit product quantities in cart
- Implemented User Story 2(a)

## Technologies Used

- **Angular** - Platform for building web and mobile apps.
- **TypeScript** - Strongly typed JavaScript.
- **SCSS** - CSS preprocessor for better styling.

## Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

Make sure you have the following installed:

- **Node.js** (v20.x or later)
- **npm** (v10.x or later):

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/Theinfinix500/mini-ecommerce-front-mobile.git
   ```

2. Navigate to the project directory:

   ```bash
   cd mini-ecommerce-front-mobile
   ```

3. Install the dependencies:

   ```bash
   npm install
   ```

## Docker Instructions

You can build and run this project using Docker.

### Build the Docker image

1. Ensure you have Docker installed and running on your machine.
   
2. Run the following command in the root directory of your project to build the Docker image:

   ```bash
   docker build -t mini-ecommerce-front-mobile .
   ```

   This will create a Docker image tagged as `mini-ecommerce-front-mobile`.

### Run the Docker container

1. To run the app inside a Docker container, use the following command:

   ```bash
   docker run -p 8100:8100 mini-ecommerce-front-mobile
   ```

   This will start the application and make it accessible at `http://localhost:8100`.

### Docker Compose (Optional)

If you have a `docker-compose.yml` file, you can also use Docker Compose to manage the build and run process.

1. Start the services:

   ```bash
   docker-compose up --build
   ```

2. Stop the services:

   ```bash
   docker-compose down
   ```

### Usage

To run the app on your local machine, use the following command:

```bash
npm start
```

## Screenshots

### Product Page
![Product Page](./src/assets/screenshots/Screenshot%202024-09-19%20184511.png)

### Cart Page
![Cart Page](./src/assets/screenshots/Screenshot%202024-09-19%20184522.png)

## Contributing

Contributions are welcome! Please follow the standard [GitHub flow](https://guides.github.com/introduction/flow/index.html) to submit issues or pull requests.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.