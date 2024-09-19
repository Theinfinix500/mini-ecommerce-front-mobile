# 🛍️ Mini E-commerce Product Gallery Frontend/Mobile Kata

**Version: 2.1.1**

> This Kata is designed to evaluate your ability to construct a high-quality, robust, well-documented, dynamic, and interactive e-commerce application that is usable across a wide range of devices. Through this project, you'll showcase not just your development skills but also your commitment to excellence in application quality through adherence to coding standards, and alignment with best practices for a polished, user-friendly experience.

## Context

You're working for a startup that wants to quickly launch an MVP of an e-commerce product gallery. Your task is to create a simple but functional frontend or mobile application that will serve as a foundation for future developments.

## Instructions

The exercise consists of a MVP with two user stories, where the second one has variations. Optional bonus features are provided to demonstrate additional capabilities. Creativity in problem-solving and attention to detail are encouraged.

### Constraints

- **Recommended time**: 2 to 3 hours (for the core MVP, excluding bonus features)
- **Technical Framework**: Choose one of the following:
  - Vue.js
  - React
  - Angular
  - React Native
- **Project Documentation**: Enhance the `README.md` with the following:
  - Setup instructions
  - A feature list
  - An architectural overview of your application
  - Clear indication of which User Story 2 variation you implemented

### Deliverables

Submit your code as a Pull Request to the designated repository or share a link to a repository (e.g., GitLab, GitHub).

### Evaluation Criteria

Applications will be evaluated based on the following points:

- **Functionality:** Does the application fulfill the basic user stories?
- **Code Quality:** Structure, readability, and adherence to the chosen framework's best practices
- **Responsiveness/Adaptability:** How well does the application adapt to different screen sizes (web) or devices (mobile)?
- **Effective use of framework:** Appropriate utilization of the chosen framework's features
- **Commit history:** Clarity and organization of your commits

## Challenge Details

### MVP

#### User Story 1

> As a customer, I want to view a list of products so that I can choose what to buy.

- Fetch and display a list of products from the Fake Store API (`https://fakestoreapi.com/products`).
- Each product should show at least the image, name, and price, with an "Add to Cart" button or functionality.

#### User Story 2 (Variations)

> As a customer, I want to interact with a shopping cart to manage my product selections.

Implement ONE of the following cart variations. If no specific variation has been assigned to you, you may choose ONE from the list below:

**a) Standard Cart:**

> As a customer, I want to add products to my shopping cart and view the cart so that I can manage my selections before checkout.

- Implement a shopping cart where users can add products, view selected items, adjust quantities, and remove items from the cart.

**b) Limited Quantity Cart:**

> As a customer, I want to add products to my shopping cart with a maximum quantity limit, so that I can comply with purchasing restrictions.

- Implement a shopping cart where users can add products up to a maximum quantity (e.g., 5 items total in the cart), view selected items, and remove items from the cart.

**c) Discount Cart:**

> As a customer, I want to add products to my shopping cart and see a simple discount applied, so that I can understand my potential savings.

- Implement a shopping cart where users can add products, view selected items, and see a fixed discount (e.g., 10% off) applied if the total exceeds a certain amount.

**d) Persistent Cart:**

> As a customer, I want my shopping cart to persist when I refresh the page, so that I don't lose my selections accidentally.

- Implement a shopping cart that saves its state in local storage, allowing the cart to persist when the page is refreshed.

**e) Minimum Order Cart:**

> As a customer, I want to know if my cart meets a minimum order value, so that I can adjust my selection to qualify for checkout.

- Implement a shopping cart that indicates whether a minimum order value (e.g., $50) has been reached, enabling or disabling a "Proceed to Checkout" button accordingly.

### Bonus Features (Optional, not included in the recommended time)

If you complete the core MVP and wish to showcase additional skills, you can attempt these bonus features:

1. **Advanced Product Details**: Enable users to tap/click on a product to see a more detailed view, fetched from the Fake Store API.
2. **Product Search**: Implement a simple search functionality to filter products by name.
3. **Basic Responsive Design**:
   - For web: Ensure the application is usable on both desktop and mobile screens.
   - For mobile: Ensure the app adapts to both portrait and landscape orientations.
4. **Simple Animation**: Add a subtle animation effect when adding items to the cart.

### Tips

- For web frameworks: Consider using basic UI component libraries compatible with your chosen framework to enhance the application's appearance and usability.
- For React Native: Utilize React Native's built-in components.
- Focus on implementing the core features of the assigned cart variation before considering any bonus features.
- Implement only the assigned variation of User Story 2. Do not mix features from different variations.
- Keep your implementation simple and avoid over-engineering. The goal is a functional MVP within the time constraint.
- Remember to clearly document which User Story 2 variation you implemented in your README.md file.

## Resources

- [Fake Store API](https://fakestoreapi.com/)
- Official documentation for your chosen framework

---

Good luck!
