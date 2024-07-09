## Full Stack Admin Dashboard and Delivery App

## Project Overview
This project is a comprehensive full-stack application consisting of an Admin Dashboard and a Food Delivery App. It enables restaurant owners to manage their stores online and allows users to order food from nearby restaurants based on their location using the Food Delivery app.

## Features
## Admin Dashboard

Restaurant Registration: Restaurant owners can register their stores online.

Store Information Management: Store owners can add store details such as store name, store logo, store banner, available offers, restaurant type (Veg, Non-Veg, Both), and store address (using OpenCage API).

Image Optimization: Integrated with Sharp, Multer, and Cloudinary to optimize all uploaded images to less than 200KB.

Store Status Management: Store owners can set their store to live or offline. Offline stores will not be displayed in the delivery app.

Edit and Delete Store Information: Store owners can edit store details and product information and delete products that are no longer available.

## Food Delivery App
User Authentication: Users can log in to the app.

Location-Based Restaurant Display: Users can add their location (using OpenCage API), and the app displays restaurants near the user's location.

Restaurant Filtering: Users can filter restaurants based on type (Veg, Non-Veg), and delivery time.

Performance Optimization: Implemented lazy loading to improve website performance and debouncing in search functionality to reduce API calls.

Add to Cart and Concurrency Handling: Implemented a lock mechanism to handle concurrency when multiple users try to order a product with limited quantity. The product is locked for 10 minutes until the payment is completed.

Payment Integration: Integrated Razorpay for payment processing.

## Technologies Used
Frontend: React.js, Next.js, Material UI, Tailwind CSS, TypeScript
Backend: Node.js, Express, MongoDB
APIs: OpenCage API for address and location fetching
Image Management: Sharp, Multer, Cloudinary
Payment Gateway: Razorpay
Miscellaneous: Lazy loading, Debouncing