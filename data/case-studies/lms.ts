import type { CaseStudy } from "@/types";

export const lmsCaseStudy: CaseStudy = {
    slug: "lms",
    title: "Skillory",
    tagline: "Learning Management System",
    description:
        "Skillory is a full-stack learning marketplace where students discover, purchase, and watch expert-led courses, and admins run the entire catalog, user base, and site content from one dashboard.",
    techStack: [
        "Next.js",
        "TypeScript",
        "Redux Toolkit",
        "RTK Query",
        "Tailwind CSS",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Redis",
        "Stripe",
        "Socket.io",
        "VdoCipher",
        "Cloudinary",
        "NextAuth.js",
    ],
    liveUrl: "",
    githubUrl: "",
    overview:
        "Skillory is built around two roles working from very different surfaces of the same platform. Students discover courses, pay for them through an embedded Stripe flow, watch DRM-protected video content, and ask questions or leave reviews directly on each lecture. Admins manage the full course catalog through a multi-step builder, control site content like the homepage banner and FAQ, manage user roles, and get real-time visibility into new orders, questions, and reviews as they come in, all backed by Redis-cached sessions and a Socket.io notification layer.",
    highlights: [
        {
            title: "A course player built around real access control",
            description:
                "The public course page shows full details, pricing, and a curriculum preview to anyone, but the actual video player is gated behind purchase status, checked on both the frontend and the backend. Video itself streams through VdoCipher's OTP-based secure playback rather than a plain video URL, so access can't be bypassed by simply finding a link.",
            image: "/images/case-studies/lms/course-player.webp",
        },
        {
            title: "A multi-step course builder for admins",
            description:
                "Creating a course walks an admin through Course Information, Benefits and Prerequisites, Course Content, and a final Preview, each step holding its own piece of shared state. Lectures get grouped into collapsible sections while authoring, then flattened into the database's schema on submit, and re-grouped by section again when the course is edited or displayed publicly.",
            image: "/images/case-studies/lms/course-builder.webp",
        },
        {
            title: "Real-time admin dashboard with live analytics",
            description:
                "New orders, questions, and reviews broadcast to the admin dashboard instantly through Socket.io, with a notification sound and unread badge. Analytics charts for courses, users, and orders are computed from rolling 28-day buckets and rendered with Recharts, alongside MUI DataGrid tables for browsing every course, user, and invoice.",
            image: "/images/case-studies/lms/admin-dashboard.webp",
        },
    ],
    features: [
        {
            title: "Multi-role platform",
            description:
                "Students browse, purchase, and watch courses. Admins get full CRUD over courses, users, and site content from a dedicated dashboard.",
        },
        {
            title: "Email and social authentication",
            description:
                "Email and password registration with activation codes, plus Google and GitHub sign-in through NextAuth, bridged into the app's own JWT session.",
        },
        {
            title: "Secure embedded payments",
            description:
                "An embedded Stripe Payment Element with server-computed pricing, backed by a webhook as an independent fulfillment safety net.",
        },
        {
            title: "Per-lecture Q&A and reviews",
            description:
                "Students ask questions on individual lectures and leave course reviews, with admins able to reply publicly to either.",
        },
        {
            title: "Real-time notifications",
            description:
                "Socket.io broadcasts new orders, questions, and reviews live to the admin dashboard, backed by persisted notification history.",
        },
        {
            title: "Full dark and light theming",
            description:
                "Class-based dark mode applied consistently across custom components and third-party libraries like MUI and Stripe Elements alike.",
        },
    ],
    stats: [
        { label: "User roles", value: "2" },
        { label: "API route groups", value: "6" },
        { label: "Database collections", value: "7" },
        { label: "Real-time channel", value: "1" },
    ],
    diagrams: [
        {
            title: "System Architecture",
            kind: "architecture",
            caption:
                "The Next.js frontend talks to an Express backend across seven modules, each reaching MongoDB, Redis, Stripe, Cloudinary, or VdoCipher as needed. The frontend deploys to Vercel, the backend to Render as a persistent service.",
            mermaid: `graph TD
  subgraph Clients
    S[Student]
    A[Admin]
  end

  FE["Frontend (Next.js + Redux Toolkit / RTK Query)"]
  BE["Backend API (Express.js)"]

  subgraph BackendModules [Backend Modules]
    Auth["Authentication & Authorization"]
    Courses["Course Management & Curriculum"]
    QnA["Q&A and Reviews"]
    Orders["Order & Payment Processing"]
    Layout["Site Layout Content (Hero, FAQ, Categories)"]
    Notifications["Real-Time Notifications (Socket.io)"]
    Analytics["Admin Analytics"]
  end

  DB["MongoDB + Mongoose"]
  RedisExternal["Redis (Session & Cache)"]
  StripeExternal["Stripe"]
  CloudinaryExternal["Cloudinary"]
  VdoCipherExternal["VdoCipher"]
  NextAuthExternal["NextAuth (Google / GitHub)"]
  Vercel["Vercel Hosting (Frontend)"]
  Render["Render Hosting (Backend)"]

  S --> FE
  A --> FE
  FE --> BE
  FE --> NextAuthExternal
  FE -. "WebSocket" .-> Notifications

  BE --> Auth & Courses & QnA & Orders & Layout & Notifications & Analytics
  Auth --> DB
  Auth --> RedisExternal
  Courses --> DB
  Courses --> CloudinaryExternal
  Courses --> VdoCipherExternal
  QnA --> DB
  Orders --> DB
  Orders --> StripeExternal
  Orders --> RedisExternal
  Layout --> DB
  Layout --> CloudinaryExternal
  Analytics --> DB
  BE --> Render
  FE --> Vercel`,
        },
        {
            title: "Application Flow",
            kind: "flow",
            caption:
                "Requests from the student and admin interfaces pass through JWT cookie authentication before reaching one of six route modules, which read and write MongoDB, Redis, Cloudinary, VdoCipher, and Stripe as needed.",
            mermaid: `flowchart TB
    subgraph FrontendLayer["Frontend Layer"]
        subgraph UserInterface["User Interface"]
            StudentUI["Student Interface<br/>Course Discovery, Purchase, Player, Q&A, Reviews"]
            AdminUI["Admin Dashboard<br/>Course Management, Roles, Layout, Analytics"]
        end
        subgraph StateManagement["State Management"]
            ReduxStore["Redux Store (RTK Query)<br/>Auth, Course, Order, Layout, Notification State"]
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
            UserRoutes["/api/v1/user/"]
            CourseRoutes["/api/v1/course/"]
            OrderRoutes["/api/v1/order/"]
            LayoutRoutes["/api/v1/layout/"]
            NotificationRoutes["/api/v1/notification/"]
            AnalyticsRoutes["/api/v1/analytics/"]
        end
    end

    subgraph DataLayer["Data Layer"]
        MongoDB["MongoDB"]
        Redis["Redis"]
        Cloudinary["Cloudinary"]
        VdoCipher["VdoCipher"]
        Stripe["Stripe API"]
    end

    StudentUI --> CORS
    AdminUI --> CORS
    CORS --> Auth
    Auth --> ExpressServer
    SocketIO -.-> NotificationRoutes

    ExpressServer --> UserRoutes & CourseRoutes & OrderRoutes & LayoutRoutes & NotificationRoutes & AnalyticsRoutes

    UserRoutes --> MongoDB
    UserRoutes --> Redis
    CourseRoutes --> MongoDB
    CourseRoutes --> Cloudinary
    CourseRoutes --> VdoCipher
    OrderRoutes --> MongoDB
    OrderRoutes --> Redis
    OrderRoutes --> Stripe
    LayoutRoutes --> MongoDB
    LayoutRoutes --> Cloudinary`,
        },
        {
            title: "Database Design",
            kind: "erd",
            caption:
                "Seven collections cover users, courses, per-lecture content, Q&A, reviews, orders, and notifications, plus a layouts collection for editable site content like the homepage banner and FAQ.",
            mermaid: `erDiagram
    users {
        string _id PK
        string name
        string email
        string role
        array courses
    }
    courses {
        string _id PK
        string name
        string categories
        number price
        number ratings
        number purchased
    }
    courseData {
        string _id PK
        string courseId FK
        string title
        string videoURL
        string videoSection
    }
    questions {
        string _id PK
        string contentId FK
        object user
        string question
        array questionReplies
    }
    reviews {
        string _id PK
        string courseId FK
        object user
        number rating
        array commentReplies
    }
    orders {
        string _id PK
        string courseID FK
        string userID FK
        object payment_info
    }
    notifications {
        string _id PK
        string userID FK
        string title
        string status
    }
    layouts {
        string _id PK
        string type
        object banner
        array faq
        array categories
    }

    users ||--o{ orders : "places"
    users ||--o{ courses : "enrolled in"
    courses ||--o{ orders : "ordered as"
    courses ||--o{ courseData : "contains"
    courses ||--o{ reviews : "has"
    courseData ||--o{ questions : "has"
    users ||--o{ notifications : "receives"`,
        },
        {
            title: "Student Flow",
            kind: "sequence",
            caption:
                "Registration requires an activation code sent by email before the account exists, then login checks the hashed password before a purchase or Q&A action can happen.",
            mermaid: `sequenceDiagram
    participant Student
    participant Frontend
    participant UserController
    participant Database
    participant EmailService

    Student->>Frontend: Register Account
    Frontend->>UserController: POST /user/registration
    UserController->>EmailService: Send activation email

    Student->>Frontend: Enter activation code
    Frontend->>UserController: POST /user/activate-user
    UserController->>Database: User.create()
    UserController-->>Frontend: User created

    Student->>Frontend: Login
    Frontend->>UserController: POST /user/login-user
    UserController->>Database: User.findOne({email})
    UserController->>UserController: bcrypt.compare()
    UserController-->>Frontend: Login success + Cookies

    Student->>Frontend: Purchase course (Stripe Payment Element)
    Student->>Frontend: Watch course & ask questions
    Student->>Frontend: Leave a review`,
        },
        {
            title: "Admin Flow",
            kind: "sequence",
            caption:
                "Once authenticated as admin, the same session drives course creation, user role changes, review replies, and analytics, each hitting a different controller.",
            mermaid: `sequenceDiagram
    participant Admin
    participant Frontend
    participant CourseController
    participant UserController
    participant Database

    Admin->>Frontend: Login as Admin
    Frontend->>UserController: POST /user/login-user
    UserController-->>Frontend: Login success (role: admin)

    Admin->>Frontend: Fill multi-step course builder
    Frontend->>CourseController: POST /course/create-course
    CourseController->>Database: CourseModel.create()

    Admin->>Frontend: Update a user's role
    Frontend->>UserController: PUT /user/update-user-role
    UserController->>Database: UserModel.findOneAndUpdate()

    Admin->>Frontend: Reply to a course review
    Frontend->>CourseController: POST /course/add-reply
    CourseController->>Database: course.reviews.commentReplies.push()

    Admin->>Frontend: View dashboard analytics
    Frontend->>CourseController: GET /analytics/courses
    CourseController-->>Frontend: Chart data`,
        },
        {
            title: "Payment & Notification Flow",
            kind: "sequence",
            caption:
                "A Stripe Payment Intent is created server-side from the course's actual price, confirmed on the client, then fulfilled and broadcast to the admin dashboard in real time.",
            mermaid: `sequenceDiagram
    participant Student
    participant Frontend
    participant OrderController
    participant Stripe
    participant Database
    participant SocketServer
    participant Admin

    Student->>Frontend: Click "Buy now"
    Frontend->>OrderController: POST /order/payment/create-intent
    OrderController->>Database: Fetch course price
    OrderController->>Stripe: paymentIntents.create()
    Stripe-->>OrderController: clientSecret
    OrderController-->>Frontend: clientSecret

    Student->>Frontend: Submit Payment Element
    Frontend->>Stripe: stripe.confirmPayment()
    Stripe-->>Frontend: paymentIntent.status = "succeeded"

    Frontend->>OrderController: POST /order/create-order
    OrderController->>Stripe: paymentIntents.retrieve()
    OrderController->>Database: Add course to user, increment purchased
    OrderController->>Database: Refresh Redis session cache
    OrderController-->>Frontend: Order confirmed

    Frontend->>SocketServer: socket.emit("notification")
    SocketServer-->>Admin: Live notification + sound`,
        },
    ],
    challenges: [
        {
            challenge:
                "Server and client rendering disagreed on first paint for theme icons and session-dependent UI, causing hydration mismatches.",
            solution:
                "Added a mounted state flag set inside a useEffect, rendering a neutral placeholder until after hydration completes so server and client output always agree on first paint.",
        },
        {
            challenge:
                "Tailwind v4's dark: variant defaulted to the OS-level color scheme instead of the app's own theme toggle.",
            solution:
                "Rebound the dark: variant to a class-based check matching how next-themes actually toggles the theme, rather than relying on the media-query default.",
        },
        {
            challenge:
                "Field name casing mismatches between frontend and backend, like videoUrl versus videoURL, caused silent data loss with no visible error.",
            solution:
                "Traced each mismatch by comparing the actual API response shape against what the frontend read, then aligned field names exactly on both sides.",
        },
        {
            challenge: "Stripe webhook signature verification was failing silently.",
            solution:
                "Registered the webhook route with Express's raw body parser before the app's global JSON middleware, since signature verification needs the untouched raw request body.",
        },
        {
            challenge:
                "Course reviews and replies weren't appearing on the public course page after being added, despite saving correctly to the database.",
            solution:
                "Found a 7-day Redis cache on the course document that was never refreshed after review or reply writes, and added a cache-set call immediately after each successful save.",
        },
        {
            challenge:
                "MUI DataGrid's internal styling stopped responding to standard style overrides for dark mode after a version update moved theming into internal CSS variables.",
            solution:
                "Layered important overrides across every relevant DataGrid sub-selector, headers, cells, rows, pagination, and icons, to guarantee the override regardless of the installed version's internals.",
        },
        {
            challenge:
                "Next.js 15 made route params an async value instead of a plain object, breaking existing param access.",
            solution:
                "Unwrapped params with React's use() hook in Client Components, and with a plain await in Server Components.",
        },
    ],
    bestPractices: [
        {
            category: "Authentication & security",
            points: [
                "Access and refresh tokens stored as HTTP-only cookies, never exposed to client-side JavaScript",
                "Payment amounts always recalculated server-side from the course document, never trusted from client input",
                "Every admin-only route protected by both authentication and role-authorization middleware",
            ],
        },
        {
            category: "Component architecture",
            points: [
                "Multi-step course form lifts all state to one parent component to avoid prop drilling",
                "A single generic confirmation dialog and modal wrapper reused across delete, login, and checkout flows",
                "One consistent color token system applied identically across custom components and third-party libraries",
            ],
        },
        {
            category: "Error handling & UX",
            points: [
                "Toast-based feedback for every mutation across the app",
                "Loading, empty, and populated states distinguished everywhere data is fetched",
                "UI updates like marking a notification read only commit once the request has genuinely succeeded",
            ],
        },
    ],
};