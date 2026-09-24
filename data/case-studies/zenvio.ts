import type { CaseStudy } from "@/types";

export const zenvioCaseStudy: CaseStudy = {
    slug: "zenvio",
    title: "Zenvio",
    tagline: "Multi-Vendor E-Commerce Marketplace",
    description:
        "Zenvio connects buyers with sellers on a single marketplace, built to make discovering products and running a shop feel effortless for everyone involved.",
    techStack: [
        "React",
        "Redux Toolkit",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Socket.io",
        "Stripe",
        "Cloudinary",
        "JWT",
        "Vercel",
    ],
    liveUrl: "",
    githubUrl: "",
    overview:
        "Zenvio is a multi-vendor e-commerce platform designed around three roles working together on one marketplace. Buyers browse and purchase products, sellers manage their own shop and orders, and admins oversee the whole platform. The goal was a marketplace where payments are secure, sellers can operate independently, and buyers, sellers, and admins can all communicate directly without leaving the platform.",
    highlights: [
        {
            title: "A marketplace built around three roles",
            description:
                "Buyers browse products, save favorites, and track orders. Sellers manage their own shop, products, and order status from a dedicated dashboard. Admins oversee users, sellers, products, and platform-wide activity. Each role gets its own interface rather than one generic view stretched to fit everyone.",
            image: "/images/case-studies/zenvio/buyer-experience.webp",
        },
        {
            title: "Real-time messaging between everyone on the platform",
            description:
                "Buyers, sellers, and admins can message each other directly, buyer to seller, buyer to admin, and seller to admin, all in real time through Socket.io. A live online status indicator shows who's currently active, so conversations feel immediate rather than like sending messages into a queue.",
            image: "/images/case-studies/zenvio/messaging.webp",
        },
        {
            title: "A seller dashboard built for running a real shop",
            description:
                "Sellers get a dashboard overview, full product and order management, discount codes tied to specific products, refund handling, and shop profile controls, all in one place, so running a shop on Zenvio doesn't require jumping between disconnected tools.",
            image: "/images/case-studies/zenvio/seller-dashboard.webp",
        },
    ],
    features: [
        {
            title: "Multi-role user system",
            description:
                "Separate buyer, seller, and admin roles, each with interfaces and permissions matched to what they actually need to do.",
        },
        {
            title: "Product management and shopping",
            description:
                "Grid-based product listings with breadcrumb navigation, a persistent cart, and category-based search and filtering.",
        },
        {
            title: "Secure payment processing",
            description:
                "Stripe checkout sessions with webhook handling, alongside cash on delivery as a fallback option.",
        },
        {
            title: "Real-time messaging",
            description:
                "One-to-one chat between every pair of roles on the platform, with live online status.",
        },
        {
            title: "Seller dashboard",
            description:
                "Product and order management, discount coupons, refund handling, and shop profile updates in one place.",
        },
        {
            title: "Image handling",
            description:
                "Cloudinary-backed uploads for products and chat images, with old images cleaned up automatically on update.",
        },
    ],
    stats: [
        { label: "User roles", value: "3" },
        { label: "API route groups", value: "8" },
        { label: "Database collections", value: "8" },
        { label: "Real-time channel", value: "1" },
    ],
    diagrams: [
        {
            title: "System Architecture",
            kind: "architecture",
            caption:
                "Buyers, sellers, and admins all go through the same React frontend, which talks to an Express API. The backend splits into focused modules for auth, products, orders, messaging, and payments, each reaching MongoDB, Stripe, or Cloudinary as needed.",
            mermaid: `graph TD
  subgraph Clients
    U[Buyer / Customer]
    S[Seller]
    A[Admin]
  end

  FE["Frontend (React + Redux)"]
  BE["Backend API (Express.js)"]

  subgraph BackendModules [Backend Modules]
    Auth["Authentication & Authorization"]
    Products["Product & Catalog"]
    Shops["Shop & Seller Management"]
    Orders["Order Processing & Tracking"]
    Events["Flash Events"]
    Messaging["Conversations & Messages (Socket.io)"]
    Payments["Payment Integration (Stripe)"]
    Uploads["Image Uploads (Cloudinary + Multer)"]
    Emails["Transactional Emails"]
  end

  DB["MongoDB + Mongoose"]
  StripeExternal["Stripe"]
  CloudinaryExternal["Cloudinary"]
  EmailService["SMTP / Nodemailer"]
  Vercel["Vercel Hosting"]

  U --> FE
  S --> FE
  A --> FE
  FE --> BE
  FE -. "WebSocket" .-> Messaging

  BE --> Auth & Products & Shops & Orders & Events & Messaging & Payments & Uploads & Emails
  Products --> DB
  Shops --> DB
  Orders --> DB
  Events --> DB
  Auth --> DB
  Messaging --> DB
  Uploads --> DB
  Payments --> StripeExternal
  Uploads --> CloudinaryExternal
  Emails --> EmailService
  BE --> Vercel
  FE --> Vercel`,
        },
        {
            title: "Application Flow",
            kind: "flow",
            caption:
                "How a request moves from the frontend through CORS and JWT authentication into the Express route modules, and out to MongoDB, Cloudinary, or Stripe.",
            mermaid: `flowchart TB
    subgraph FrontendLayer["Frontend Layer"]
        subgraph UserInterface["User Interface"]
            CustomerUI["Buyer Interface<br/>Product Discovery, Cart, Checkout, Messaging"]
            SellerUI["Seller Dashboard<br/>Product & Order Management, Messaging"]
            AdminUI["Admin Panel<br/>User, Seller, Order, Product Management"]
        end
        subgraph StateManagement["State Management"]
            ReduxStore["Redux Store<br/>User, Seller, Product, Order, Cart State"]
        end
    end

    subgraph CommunicationLayer["Communication Layer"]
        CORS["CORS Middleware<br/>Credentials: true"]
        Auth["JWT Cookie Authentication"]
        SocketIO["Socket.io WebSocket"]
    end

    subgraph BackendLayer["Backend Layer"]
        ExpressServer["Express.js Server<br/>API Gateway"]
        subgraph RouteModules["Route Modules"]
            UserRoutes["/api/user/"]
            SellerRoutes["/api/seller/"]
            ProductRoutes["/api/product/"]
            OrderRoutes["/api/order/"]
            ConversationRoutes["/api/conversation/"]
            MessageRoutes["/api/message/"]
        end
    end

    subgraph DataLayer["Data Layer"]
        MongoDB["MongoDB"]
        Cloudinary["Cloudinary"]
        Stripe["Stripe API"]
    end

    CustomerUI --> CORS
    SellerUI --> CORS
    AdminUI --> CORS
    CORS --> Auth
    Auth --> ExpressServer
    SocketIO -.-> MessageRoutes

    ExpressServer --> UserRoutes & SellerRoutes & ProductRoutes & OrderRoutes & ConversationRoutes & MessageRoutes

    UserRoutes --> MongoDB
    SellerRoutes --> MongoDB
    ProductRoutes --> MongoDB
    OrderRoutes --> MongoDB
    OrderRoutes --> Stripe
    MessageRoutes --> MongoDB
    MessageRoutes --> Cloudinary`,
        },
        {
            title: "Database Design",
            kind: "erd",
            caption:
                "Eight collections cover users, sellers, products, events, coupons, orders, and messaging, connected through referenced IDs rather than deep nesting.",
            mermaid: `erDiagram
    users {
        string _id PK
        string name
        string email
        string role
        array addresses
    }
    sellers {
        string _id PK
        string name
        string email
        string address
        string description
    }
    products {
        string _id PK
        string name
        string category
        number originalPrice
        number discountPrice
        number stock
        string shopId FK
    }
    events {
        string _id PK
        string name
        datetime start_Date
        datetime finish_Date
        string shopId FK
    }
    coupons {
        string _id PK
        string name
        number discountPercentage
        string shopId FK
        string selectedProduct FK
    }
    orders {
        string _id PK
        array cart
        string userId FK
        number totalPrice
        string status
        object paymentInfo
    }
    conversations {
        string _id PK
        array members
        string lastMessage
    }
    messages {
        string _id PK
        string conversationId FK
        string sender
        string text
    }

    users ||--o{ orders : "has"
    sellers ||--o{ products : "sells"
    sellers ||--o{ events : "organizes"
    sellers ||--o{ coupons : "offers"
    products ||--o{ coupons : "has"
    conversations ||--o{ messages : "contains"`,
        },
        {
            title: "User Flow",
            kind: "sequence",
            caption:
                "Registration goes through email activation before the account is created, then login checks the hashed password before issuing a token.",
            mermaid: `sequenceDiagram
    participant User
    participant Frontend
    participant UserController
    participant Database
    participant EmailService

    User->>Frontend: Register Account
    Frontend->>UserController: POST /user/register
    UserController->>EmailService: Send activation email
    UserController-->>Frontend: Registration success

    User->>Frontend: Click activation link
    Frontend->>UserController: POST /user/activation
    UserController->>Database: User.create()
    UserController-->>Frontend: User created + Auth token

    User->>Frontend: Login
    Frontend->>UserController: POST /user/login
    UserController->>Database: User.findOne({email})
    UserController->>UserController: bcrypt.compare()
    UserController-->>Frontend: Login success + Token`,
        },
        {
            title: "Seller Flow",
            kind: "sequence",
            caption:
                "The same activation pattern as buyers, but building a Shop record instead of a User, with its own login check.",
            mermaid: `sequenceDiagram
    participant Seller
    participant Frontend
    participant sellerController
    participant Database
    participant EmailService

    Seller->>Frontend: Register Shop
    Frontend->>sellerController: POST /seller/seller-register
    sellerController->>EmailService: Send activation email

    Seller->>Frontend: Click activation link
    Frontend->>sellerController: POST /seller/activation
    sellerController->>Database: Shop.create()

    Seller->>Frontend: Login to shop
    Frontend->>sellerController: POST /seller/seller-login
    sellerController->>Database: seller.findOne(email)
    sellerController->>sellerController: bcrypt.compare()
    sellerController->>Frontend: Set cookie (login success)`,
        },
        {
            title: "Admin Flow",
            kind: "sequence",
            caption:
                "Admin login checks against environment variables directly rather than a database record, then admin actions query and modify user and seller data.",
            mermaid: `sequenceDiagram
    participant Admin
    participant Frontend
    participant adminController
    participant Database

    Admin->>Frontend: Login as Admin
    Frontend->>adminController: POST /admin/admin-login
    adminController->>Frontend: Admin login success

    Admin->>Frontend: View all users
    Frontend->>adminController: GET /admin/admin-users
    adminController->>Database: UserModel.find()
    adminController->>Frontend: Users list

    Admin->>Frontend: Delete seller
    Frontend->>adminController: DELETE /admin/delete-seller-by-id/:id
    adminController->>Database: SellerModel.findByIdAndDelete()
    adminController->>Frontend: Seller deleted`,
        },
    ],
    challenges: [
        {
            challenge: "Image uploading needed a reliable storage strategy.",
            solution:
                "Started with local folder storage during development, then moved to Cloudinary for production, integrated through Multer's storage manager.",
        },
        {
            challenge: "Redux state was resetting unexpectedly on page reloads.",
            solution:
                "Moved the relevant dispatch calls into a useEffect in the app's root component, so state loads consistently on every mount instead of only on the page it was first triggered from.",
        },
        {
            challenge: "Data sent from the frontend didn't always match the database model shape.",
            solution:
                "Went back through each API query and aligned the request payloads with the exact Mongoose schema fields, rather than letting mismatches fail silently.",
        },
    ],
    bestPractices: [
        {
            category: "Authentication & security",
            points: [
                "HTTP-only JWT cookies to prevent XSS attacks",
                "Password hashing with bcrypt before storage",
                "Role-based private routes to prevent unnecessary redirects",
            ],
        },
        {
            category: "Component architecture",
            points: [
                "Reusable components for a maintainable folder structure",
                "Redux reducers and actions for consistent state across the app",
                "Protected routes for all three roles",
            ],
        },
        {
            category: "Error handling & UX",
            points: [
                "React Hot Toast for user-friendly error messages",
                "Duplicate prevention in cart and wishlist for a smoother experience",
            ],
        },
    ],
};