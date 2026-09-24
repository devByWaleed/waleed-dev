import type { CaseStudy } from "@/types";

export const greencartCaseStudy: CaseStudy = {
    slug: "greencart",
    title: "Greencart",
    tagline: "MERN Grocery Store with Stripe Payments",
    description:
        "A full stack grocery store where buyers browse products, check out with Stripe or cash on delivery, and sellers manage the product catalog, with webhook-verified payment status.",
    techStack: [
        "React",
        "Axios",
        "React Router",
        "React Hot Toast",
        "Tailwind CSS",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Mongoose",
        "Stripe",
        "Cloudinary",
        "JWT",
        "Vercel",
    ],
    liveUrl: "https://grocery-eta-six.vercel.app/",
    githubUrl: "https://github.com/devByWaleed/greencart",
    overview:
        "Greencart is a two-role marketplace, buyers browse products, manage a cart, and check out through either Stripe or cash on delivery, while sellers add products and upload images through Cloudinary. Payment status isn't just set optimistically on the client, a Stripe webhook independently confirms checkout completion and updates the order, so a dropped connection after payment doesn't leave an order stuck in the wrong state.",
    highlights: [
        {
            title: "Cart to checkout, with two payment paths",
            description:
                "Buyers add and remove items from their cart, then check out with either cash on delivery or a secure Stripe checkout session. Both paths lead to a real order record, and past orders are viewable from the buyer's own order history.",
            image: "/images/case-studies/greencart/checkout.webp",
        },
        {
            title: "Webhook-verified payment status",
            description:
                "Rather than trusting the frontend's redirect back from Stripe alone, a webhook listens for checkout.session.completed and updates the order's payment status from the server side, so payment confirmation doesn't depend on the buyer's browser staying open.",
            image: "/images/case-studies/greencart/order-confirmation.webp",
        },
        {
            title: "Seller side product management",
            description:
                "Sellers add new products and upload product images directly to Cloudinary, keeping the storefront's catalog independent from any single admin having to manage every listing.",
            image: "/images/case-studies/greencart/seller-add-product.webp",
        },
    ],
    features: [
        {
            title: "JWT authentication with password reset",
            description: "Standard email and password login, plus a password reset flow.",
        },
        {
            title: "Cart and checkout",
            description:
                "Add and remove products from a cart, then check out with cash on delivery or Stripe.",
        },
        {
            title: "Star ratings and reviews",
            description: "Buyers can leave a star rating and a written message on products.",
        },
        {
            title: "Order history",
            description: "Past orders are viewable from the buyer's own account.",
        },
        {
            title: "Seller product uploads",
            description: "Sellers add products with images uploaded through Cloudinary.",
        },
        {
            title: "Stripe webhook verification",
            description:
                "checkout.session.completed is handled server side to confirm payment independent of the client redirect.",
        },
    ],
    stats: [
        { label: "User roles", value: "2" },
        { label: "Payment methods", value: "2" },
        { label: "Webhook events handled", value: "1" },
    ],
    diagrams: [
        {
            title: "System Architecture",
            kind: "architecture",
            caption:
                "Buyers and sellers share one Express API, split into auth, product, order, review, and payment modules, with MongoDB Atlas, Cloudinary, and Stripe handling data, images, and payments respectively.",
            mermaid: `graph TD
  subgraph Clients
    U[Buyer]
    S[Seller]
  end

  FE["Frontend (React + Axios)"]
  BE["Backend API (Express.js)"]

  subgraph BackendModules [Backend Modules]
    Auth["Authentication (JWT)"]
    Products["Product Management"]
    Orders["Order & Checkout"]
    Reviews["Reviews & Ratings"]
    Payments["Stripe Payments & Webhook"]
  end

  DB["MongoDB Atlas + Mongoose"]
  Cloudinary["Cloudinary"]
  Stripe["Stripe API"]

  U --> FE
  S --> FE
  FE --> BE
  BE --> Auth & Products & Orders & Reviews & Payments
  Auth --> DB
  Products --> DB
  Products --> Cloudinary
  Orders --> DB
  Orders --> Payments
  Payments --> Stripe
  Reviews --> DB`,
        },
        {
            title: "Database Design",
            kind: "erd",
            caption:
                "Five collections cover users, products, addresses, orders, and reviews. Field names are inferred from the feature list, refine them once you confirm the real schema.",
            mermaid: `erDiagram
    users {
        string _id PK
        string name
        string email
        string password
        object cartItems
    }
    products {
        string _id PK
        string name
        array description
        number price
        number offerPrice
        array image
        string category
        boolean inStock
        number averageRating
        number reviewCount
        datetime createdAt
        datetime updatedAt
    }
    reviews {
        string _id PK
        string userID FK
        string productID FK
        number stars
        string comment
        datetime createdAt
        datetime updatedAt
    }
    addresses {
        string _id PK
        string userID FK
        string firstName
        string lastName
        string email
        string street
        string city
        string state
        number zipcode
        string country
        string phone
    }
    orders {
        string _id PK
        string userID FK
        array items
        number amount
        string address FK
        string status
        string paymentType
        boolean isPaid
        datetime createdAt
        datetime updatedAt
    }

    users ||--o{ orders : "places"
    users ||--o{ addresses : "has"
    users ||--o{ reviews : "writes"
    products ||--o{ reviews : "receives"
    orders }o--|| addresses : "ships to"
    orders }o--o{ products : "contains"`,
        },
        {
            title: "Buyer Flow",
            kind: "sequence",
            caption:
                "Login issues a JWT cookie, then placing an order, whether cash on delivery or Stripe, creates the same underlying order record.",
            mermaid: `sequenceDiagram
    participant User
    participant Frontend
    participant AuthController
    participant OrderController
    participant Database

    User->>Frontend: Register / Login
    Frontend->>AuthController: POST /api/auth/login
    AuthController->>Database: User.findOne({email})
    AuthController-->>Frontend: JWT set as cookie

    User->>Frontend: Add items to cart
    User->>Frontend: Place order (COD or Stripe)
    Frontend->>OrderController: POST /api/order/place
    OrderController->>Database: Order.create()
    OrderController-->>Frontend: Order placed

    User->>Frontend: View order history
    Frontend->>OrderController: GET /api/order/user
    OrderController->>Database: Order.find({userId})
    OrderController-->>Frontend: Orders list`,
        },
        {
            title: "Seller Flow",
            kind: "sequence",
            caption: "Adding a product uploads its image to Cloudinary before the product record is created.",
            mermaid: `sequenceDiagram
    participant Seller
    participant Frontend
    participant ProductController
    participant Cloudinary
    participant Database

    Seller->>Frontend: Login as seller
    Seller->>Frontend: Add new product
    Frontend->>Cloudinary: Upload product image
    Cloudinary-->>Frontend: Image URL
    Frontend->>ProductController: POST /api/product/add
    ProductController->>Database: Product.create()
    ProductController-->>Frontend: Product added`,
        },
        {
            title: "Payment Webhook Flow",
            kind: "sequence",
            caption:
                "Stripe confirms payment on its own, independent of whether the buyer's browser makes it back to the app.",
            mermaid: `sequenceDiagram
    participant User
    participant Frontend
    participant Stripe
    participant WebhookHandler
    participant Database

    User->>Frontend: Checkout with Stripe
    Frontend->>Stripe: Create checkout session
    Stripe-->>Frontend: Redirect to Stripe Checkout
    User->>Stripe: Completes payment

    Stripe->>WebhookHandler: POST /stripe/webhook (checkout.session.completed)
    WebhookHandler->>Database: Update order isPaid = true
    WebhookHandler-->>Stripe: 200 OK`,
        },
    ],
    challenges: [],
    bestPractices: [
        {
            category: "Authentication & security",
            points: [
                "Password hashing before storage",
                "JWT authentication for protected routes",
                "Secure Stripe webhook signature verification",
                "CORS configuration and environment variable protection",
                "Security headers applied across the API",
            ],
        },
        {
            category: "Payments",
            points: [
                "Stripe Checkout in test mode for the primary online payment path",
                "Cash on delivery as a fallback payment method",
                "Order payment status updated server side through a verified webhook, not client redirect alone",
            ],
        },
        {
            category: "Seller tools",
            points: [
                "Sellers add products directly without needing admin approval",
                "Product images uploaded to Cloudinary rather than stored on the server",
            ],
        },
    ],
};