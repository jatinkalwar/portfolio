// --- App Eyesetu ---
import eyesetucover from "@/assets/App/Eye Setu/1.png"
import eyesetu1 from "@/assets/App/Eye Setu/2.png"
import eyesetu2 from "@/assets/App/Eye Setu/3.png"
import eyesetu3 from "@/assets/App/Eye Setu/4.png"
import eyesetu4 from "@/assets/App/Eye Setu/5.png"

// --- App OYN ---
import oyn1 from "@/assets/App/OYN/1.png"
import oyn2 from "@/assets/App/OYN/2.png"
import oyn3 from "@/assets/App/OYN/3.png"
import oyn4 from "@/assets/App/OYN/4.png"
import oyn5 from "@/assets/App/OYN/5.png"
import oyn6 from "@/assets/App/OYN/6.png"

// --- App OYN ---
import pulse1 from "@/assets/App/Pulse/1.png"
import pulse2 from "@/assets/App/Pulse/2.png"
import pulse3 from "@/assets/App/Pulse/3.png"
import pulse4 from "@/assets/App/Pulse/4.png"
import pulse5 from "@/assets/App/Pulse/5.png"
import pulse6 from "@/assets/App/Pulse/6.png"

// --- App 42Kicks ---
import kick1 from "@/assets/App/42Kicks/1.png"
import kick2 from "@/assets/App/42Kicks/2.png"
import kick3 from "@/assets/App/42Kicks/3.png"
import kick4 from "@/assets/App/42Kicks/4.png"
import kick5 from "@/assets/App/42Kicks/5.png"
import kick6 from "@/assets/App/42Kicks/6.png"

// --- App Sauda ---
import sauda1 from "@/assets/App/Sauda/1.png"
import sauda2 from "@/assets/App/Sauda/2.png"
import sauda3 from "@/assets/App/Sauda/3.png"
import sauda4 from "@/assets/App/Sauda/4.png"
import sauda5 from "@/assets/App/Sauda/5.png"
import sauda6 from "@/assets/App/Sauda/6.png"

// --- App Cub care ---
import cub1 from "@/assets/App/cub care/1.png"
import cub2 from "@/assets/App/cub care/2.png"
import cub3 from "@/assets/App/cub care/3.png"
import cub4 from "@/assets/App/cub care/4.png"
import cub5 from "@/assets/App/cub care/5.png"

// --- App pronod ---
import pro1 from "@/assets/App/Pronod/1.png"
import pro2 from "@/assets/App/Pronod/2.png"
import pro3 from "@/assets/App/Pronod/3.png"
import pro4 from "@/assets/App/Pronod/4.png"
import pro5 from "@/assets/App/Pronod/5.png"

// --- App homie ---
import homie1 from "@/assets/App/homie/1.png"
import homie2 from "@/assets/App/homie/2.png"
import homie3 from "@/assets/App/homie/3.png"
import homie4 from "@/assets/App/homie/4.png"
import homie5 from "@/assets/App/homie/5.png"
import homie6 from "@/assets/App/homie/6.png"

// --- App vsb ---
import vsb1 from "@/assets/App/VSB/1.png"
import vsb2 from "@/assets/App/VSB/2.png"
import vsb3 from "@/assets/App/VSB/3.png"
import vsb4 from "@/assets/App/VSB/4.png"
import vsb5 from "@/assets/App/VSB/5.png"

// --- App bkd ---
import bkd1 from "@/assets/App/BKD/1.png"
import bkd2 from "@/assets/App/BKD/2.png"
import bkd3 from "@/assets/App/BKD/3.png"
import bkd4 from "@/assets/App/BKD/4.png"
import bkd5 from "@/assets/App/BKD/5.png"
import bkd6 from "@/assets/App/BKD/6.png"

// --- App 4Way ---
import way1 from "@/assets/App/4way/1.png"
import way2 from "@/assets/App/4way/2.png"
import way3 from "@/assets/App/4way/3.png"
import way4 from "@/assets/App/4way/4.png"
import way5 from "@/assets/App/4way/5.png"
import way6 from "@/assets/App/4way/6.png"

// --- App sanesa ---
import san1 from "@/assets/App/sanesa/1.png"
import san2 from "@/assets/App/sanesa/2.png"
import san3 from "@/assets/App/sanesa/3.png"
import san4 from "@/assets/App/sanesa/4.png"
import san5 from "@/assets/App/sanesa/5.png"
import san6 from "@/assets/App/sanesa/6.png"

// --- App devalaya ---
import dev1 from "@/assets/App/Devalaya/1.png"
import dev2 from "@/assets/App/Devalaya/2.png"
import dev3 from "@/assets/App/Devalaya/3.png"
import dev4 from "@/assets/App/Devalaya/4.png"
import dev5 from "@/assets/App/Devalaya/5.png"
import dev6 from "@/assets/App/Devalaya/6.png"

// --- App ICS ---
import ics1 from "@/assets/App/ics/1.png"
import ics2 from "@/assets/App/ics/2.png"
import ics3 from "@/assets/App/ics/3.png"
import ics4 from "@/assets/App/ics/4.png"
import ics5 from "@/assets/App/ics/5.png"
import ics6 from "@/assets/App/ics/6.png"




export interface WorkItem {
  id: string;
  title: string;
  description: string;
  image: any;
  images?: any[];
  category: string;
  link?: string;
}

export const works: WorkItem[] = [
  {
    id: "1",
    title: "OYN - Own Your Nutritionist",
    description: "What the project is: Own Your Nutritionist is a unified wellness and food-tech platform connecting users with certified nutritionists, personalized diet plans, and instant consultation bookings alongside healthy meal ordering from home kitchens.\n\nMy Role & Implementation: Developed the cross-platform mobile application featuring nutritionist discovery, instant and scheduled chat/video consultations, subscription-based nutrition plans, and REST API backend integrations.",
    image: oyn1,
    images: [oyn2, oyn3, oyn4, oyn5, oyn6],
    category: "Mobile App",
  },  

  {
    id: "2",
    title: "Eye Setu",
    description: "What the project is: Eye Setu is a comprehensive eye care healthcare platform designed to streamline the entire patient journey—from appointment booking and OPD management to telemedicine consultations, diagnosis, and optical product purchases across patients, doctors, optometrists, and administrators.\n\nMy Role & Implementation: Developed multiple Flutter-based healthcare applications for users, doctors, and optometrists. Implemented video consultations using ZegoCloud, real-time booking via WebSockets, REST APIs with Dio/Retrofit, Firebase push notifications, Razorpay payment gateway integration, Google Maps location tracking, and secure data handling with local storage.",
    image: eyesetucover, 
    images: [eyesetu1, eyesetu2, eyesetu3, eyesetu4],
    category: "Mobile App",
  },

  {
    id: "3",
    title: "Pulse - Dietitian",
    description: "What the project is: Pulse is a nutrition consultation ecosystem designed to bridge clients and certified dietitians for booking appointments, tracking health metrics, and receiving customized meal plans.\n\nMy Role & Implementation: Developed client and dietitian mobile interfaces, implementing appointment scheduling workflows, RESTful API data sync, secure payment gateway integrations, and health progress tracking analytics.",
    image: pulse1,
    images: [pulse2, pulse3, pulse4, pulse5, pulse6],
    category: "Mobile App",
  },
  
  {
    id: "4",
    title: "42Kicks - Running App",
    description: "What the project is: 42Kicks is a comprehensive fitness and marathon companion app combining activity tracking, performance analytics, and community-driven running challenges.\n\nMy Role & Implementation: Engineered mobile tracking features with GPS location integration, challenge leaderboards, REST API data synchronization, and user activity dashboard analytics.",
    image: kick1,
    images: [kick2, kick3, kick4, kick5, kick6],
    category: "Mobile App",
  },

  {
    id: "5",
    title: "Sauda - IPO",
    description: "What the project is: Sauda is an auction and IPO discovery platform enabling users to browse categorized listings, apply advanced filters, and track bidding activity in real time.\n\nMy Role & Implementation: Implemented real-time bidding updates, item filtering logic, REST API integration, and clean responsive UI views for transparent auction monitoring.",
    image: sauda1,
    images: [sauda2, sauda3, sauda3, sauda4, sauda5, sauda6],
    category: "Mobile App",
  },

  {
    id: "6",
    title: "Cub Care",
    description: "What the project is: Cub Care is a daycare management platform connecting parents, teachers, and administrators to digitize childcare operations and real-time activity tracking.\n\nMy Role & Implementation: Developed mobile application modules for real-time parent-teacher messaging, daily activity updates, attendance management, and REST API integration.",
    image: cub1,
    images: [cub2, cub3, cub4, cub5],
    category: "Mobile App",
  },

  {
    id: "7",
    title: "Pronod",
    description: "What the project is: Pronod is a smart automotive dashcam companion application designed to enhance driving safety and provide complete control over in-car camera systems, allowing drivers to view live footage, manage recordings, and access real-time telemetry.\n\nMy Role & Implementation: Developed an iOS dashcam streaming application using Provider for state management. Implemented real-time live video streaming over Wi-Fi and 4G using VLC and media_kit, network handling, REST API integration, and Google Maps tracking for location monitoring.",
    image: pro1,
    images: [pro2, pro3, pro4, pro5],
    category: "Mobile App",
  },
  
  {
    id: "8",
    title: "Homiestays",
    description: "What the project is: Homiestay is a community-driven accommodation booking platform connecting travelers with local property hosts for unique stays.\n\nMy Role & Implementation: Developed property search and filtering views, booking reservation workflows, host management interfaces, and REST API backend integrations.",
    image: homie1,
    images: [homie2, homie3, homie4, homie5, homie6],
    category: "Mobile App",
  },

  {
    id: "9",
    title: "Galleria VSB",
    description: "What the project is: Galleria VSB is a curated digital gallery and auction showcase platform providing categorized listings and live event tracking.\n\nMy Role & Implementation: Built interactive listing views, filter systems, media gallery handling, and RESTful API data binding.",
    image: vsb1,
    images: [vsb2, vsb3, vsb4, vsb5],
    category: "Mobile App",
  },
  
  {
    id: "10",
    title: "BKD - Baniya Ki Dukaan",
    description: "What the project is: BKD (Baniya Ki Dukan) is a quick commerce grocery ordering platform inspired by traditional neighborhood store experiences, delivering daily essential groceries in minutes with real-time order status tracking and seamless payments.\n\nMy Role & Implementation: Developed the Flutter-based grocery ordering application utilizing Provider for state management. Built REST API integrations, Hive for local database storage (cart management), Firebase push notifications for live order updates, and integrated the HDFC payment gateway for secure transactions.",
    image: bkd1,
    images: [bkd2, bkd3, bkd4, bkd5, bkd6],
    category: "Mobile App",
  },

  {
    id: "11",
    title: "4 Way",
    description: "What the project is: 4Way is a social fitness networking app that connects people through shared athletic interests and map-based event discovery.\n\nMy Role & Implementation: Implemented interactive map-based event discovery, user profile networking, REST API integration, and location services.",
    image: way1,
    images: [way2, way3, way4, way5, way6],
    category: "Mobile App",
  },

  {
    id: "12",
    title: "Devalaya",
    description: "What the project is: Devalaya is a spiritual and astrology platform offering live consultations, chat and call features, puja bookings, and daily devotional content.\n\nMy Role & Implementation: Developed user consultation booking modules, real-time chat and call integration, devotional media content streaming, and payment processing.",
    image: dev1,
    images: [dev2, dev3, dev4, dev6, dev5],
    category: "Mobile App",
  },

  {
    id: "13",
    title: "Sanesa",
    description: "What the project is: Sanesa is a farm-to-home organic grocery ordering platform delivering chemical-free fresh produce directly to consumers.\n\nMy Role & Implementation: Developed product catalog browsing, cart management using local storage, order checkout workflows, and REST API integration.",
    image: san1,
    images: [san2, san3, san4, san5, san6],
    category: "Mobile App",
  },

  {
    id: "14",
    title: "Indian Cancer Society",
    description: "What the project is: Rise Against Cancer is an official awareness and patient support mobile platform developed for the Indian Cancer Society, providing reliable educational content, prevention resources, and emotional support tools for patients and caregivers.\n\nMy Role & Implementation: Developed the Flutter-based mobile awareness application implementing Provider for state management. Integrated Firebase suite (FCM push notifications, Crashlytics, Analytics), REST API integration with pagination, media streaming capabilities, user authentication, multi-language localization, and background notifications for scalable performance.",
    image: ics1,
    images: [ics2, ics3, ics4, ics5, ics6],
    category: "Mobile App",
  },

];
