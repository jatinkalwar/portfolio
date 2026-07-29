import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Mail, ExternalLink, Sparkles, ShieldAlert, Gamepad2, Smartphone } from "lucide-react";
import eyesetucover from "@/assets/App/Eye Setu/1.png";
import ics1 from "@/assets/App/ics/1.png";
import bkd1 from "@/assets/App/BKD/1.png";
import pro1 from "@/assets/App/Pronod/1.png";

const AppleIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.09c.66-.8 1.11-1.92.99-3.04-.96.04-2.12.64-2.8 1.44-.61.71-1.14 1.86-1 2.97 1.08.08 2.16-.57 2.81-1.37z" />
  </svg>
);

const PlayStoreIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M3 20.5v-17c0-.55.35-.95.84-1.03.17-.03.36 0 .52.1l11.75 8.5-4.22 4.22L3.84 21.43c-.16.1-.35.13-.52.1-.49-.08-.84-.48-.84-1.03zm14.15-8.43L20 10.38c.67.38.67 1.86 0 2.24l-2.85 1.69-3.27-3.24 3.27-3.00zM4.77 2.86l9.36 9.36-2.86 2.86L4.77 2.86zm9.36 12.08l2.86 2.86-9.36 9.36 6.5-12.22z" />
  </svg>
);

const skills = [
  "Flutter", "FastAPI", "Python", "Java", "Kotlin", "React Native", "Flask",
  "Unity", "Git", "VS Code", "Android Studio", "PyCharm", "Dart", "C++", "C", "C#", "Bash", "REST APIs"
];

const coreSkills = [
  "Debugging", "Problem Solving", "API Design", "API Security",
  "Mobile App Development", "Backend Development", "State Management (Provider / Riverpod)",
  "Real-time Sockets", "End-to-End Encryption (X25519, AES)", "REST API Integration",
  "Payment Gateway Integration (Razorpay, HDFC)", "Firebase (FCM, Crashlytics, Analytics)",
  "Live Video Streaming (ZegoCloud / VLC)", "Local Storage (Hive)"
];

const education = [
  { title: "Master of Computer Applications (MCA)", place: "Dr. A.P.J. Abdul Kalam Technical University (AKTU)", period: "2026 – Present" },
  { title: "Bachelor of Computer Application (BCA)", place: "Kirari, Delhi", period: "2021 – 2024" },
  { title: "Passed 12th CBSE (CGPA: 8.0)", place: "GBSSS", period: "2019 – 2021" },
];

const projects = [
  {
    title: "EyeSetu (Healthcare Platform – User, Doctor & Optometrist Apps)",
    category: "Healthcare Platform",
    image: eyesetucover,
    appStore: "https://apps.apple.com/in/app/eyesetu/id6765830146",
    description: "Developed multiple Flutter-based healthcare applications for users, doctors, and optometrists, implementing video consultations using ZegoCloud, real-time booking via sockets, REST APIs with Dio/Retrofit, Firebase notifications, Razorpay payment gateway, Google Maps integration, and secure data handling with local storage."
  },
  {
    title: "Rise Against Cancer (ICS)",
    category: "Cancer Awareness & Support",
    image: ics1,
    appStore: "https://apps.apple.com/in/iphone/search?term=rise%20against%20cancer",
    description: "Developed a Flutter-based awareness application implementing Provider for state management, integrated Firebase (FCM, Crashlytics, Analytics), REST APIs, pagination, media streaming, authentication, localization, and background notifications for scalable and optimized performance."
  },
  {
    title: "OnBKD - Grocery Ordering App",
    category: "Quick Commerce",
    image: bkd1,
    playStore: "https://play.google.com/store/apps/details?id=com.bkdapp.bkd_app&hl=en_IN",
    description: "Developed a Flutter-based grocery ordering app using Provider, REST API integration, Hive for local storage, Firebase notifications, and integrated HDFC payment gateway for secure transactions and seamless checkout experience."
  },
  {
    title: "Pronod - iOS Dashcam Streaming App",
    category: "Smart Automotive",
    image: pro1,
    description: "Developed an iOS dashcam streaming application using Provider, implementing real-time video streaming with VLC/media_kit, network handling over Wi-Fi/4G, REST API integration, Google Maps tracking."
  },
  {
    title: "Security Vulnerability Research - Satvacart.com",
    category: "Security Research",
    icon: ShieldAlert,
    description: "Discovered a security flaw in the payment system of Satvacart.com, allowing transactions to be marked as successful without completing payment. The issue was found by manipulating the payment status API, which lacked proper validation checks. The vulnerability was responsibly disclosed, leading to a critical security update."
  },
  {
    title: "GenioMind – Mind Reader Guessing Game",
    category: "Android Game",
    icon: Gamepad2,
    description: "Developed an interactive Android guessing game where a virtual Genie predicts real or imaginary characters based on user responses, using smart question-based logic to simulate mind reading behavior."
  }
];

const Work = [
  {
    title: "Software Development Engineer",
    company: "INFUTIVE TECHNOLOGY PVT LTD",
    place: "Delhi, India",
    period: "02/2024 – Present",
    mode: "Full-time",
    projects: [
      "Rise Against Cancer (ICS) - Flutter awareness app with Provider, Firebase (FCM, Crashlytics, Analytics), media streaming & background notifications",
      "Quick Taxi Partner - Real-time taxi driver app using Riverpod, Google Maps, Geolocator & socket ride updates",
      "Colsoft - Cross-platform Flutter chat app with Riverpod, sockets & end-to-end encryption (X25519, AES)",
      "EyeSetu Healthcare - Multiple Flutter healthcare apps (User, Doctor, Optometrist) with ZegoCloud video consultations & Razorpay",
      "OnBKD - Grocery ordering app with Provider, Hive local storage, Firebase FCM & HDFC payment gateway",
      "Muzy & Mera Prachaar - Audio streaming app & Multilingual job platform with Razorpay premium subscriptions",
      "Pronod - iOS dashcam streaming app using Provider with VLC / media_kit video streaming over Wi-Fi/4G",
      "Yes Finance & CA Platform - Financial service & loan platforms with FastAPI backend for secure data processing"
    ]
  },
  {
    title: "Intern Software Development Engineer",
    company: "INFUTIVE TECHNOLOGY PVT LTD",
    place: "Delhi, India",
    period: "11/2023 – 01/2024",
    mode: "Internship",
    projects: [
      "Flashdeal (E-commerce) - Native Android (Java) recharge module, DigiLocker KYC fingerprint auth & wallet system",
      "Rollsking APK - Employee attendance app with live GPS tracking, image capture check-in/out & working hours calculation"
    ]
  }
];

const socialLinks = [
  { label: "LinkedIn", href: "https://linkedin.com/in/thejatinkalwar" },
  { label: "GitHub", href: "https://github.com/jatinkalwar" },
];

const stats = [
  { value: "2+", label: "Years Experience" },
  { value: "15+", label: "Apps & Projects" },
  { value: "100%", label: "Code Quality & Security" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: [0.25, 0.1, 0.25, 1] as const },
  }),
};

const Index = () => {
  return (
    <div className="min-h-screen pt-28 pb-20 px-6 sm:px-12 lg:px-20 relative overflow-hidden">
      {/* Glow effects */}
      <div className="absolute w-[600px] h-[600px] rounded-full bg-primary/8 blur-[150px] -top-60 -right-60 pointer-events-none" />
      <div className="absolute w-[400px] h-[400px] rounded-full bg-primary/5 blur-[120px] bottom-20 -left-40 pointer-events-none" />

      {/* Hero — full width two-column layout */}
      <motion.section
        className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start"
        initial="hidden"
        animate="visible"
        variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
      >
        {/* Left column */}
        <div>
          <motion.p variants={fadeUp} custom={0} className="text-primary text-sm font-medium tracking-widest uppercase mb-3">
            Software Development Engineer
          </motion.p>
          <motion.h1 variants={fadeUp} custom={1} className="text-5xl sm:text-7xl font-display font-bold text-foreground leading-[1.1]">
            Hey, I<span className="text-primary">'</span>m
            <br />
            Jatin Kalwar<span className="text-primary">.</span>
          </motion.h1>
          <motion.div variants={fadeUp} custom={2} className="mt-6 text-muted-foreground text-lg leading-relaxed space-y-4">
            <p>
              I am a dedicated and skilled software developer with a strong background in both front-end and back-end development. I have successfully delivered numerous projects from concept to launch, ensuring code quality, performance optimization, and user satisfaction.
            </p>
            <p>
              My ability to adapt to evolving technologies and my commitment to continuous learning make me a valuable asset to any development team. Specialized in Flutter, Android, FastAPI, Flask, REST APIs, real-time socket communication, and security research.
            </p>
          </motion.div>

          {/* CTA row */}
          <motion.div variants={fadeUp} custom={3} className="mt-8 flex flex-wrap gap-3">
            <Link
              to="/work"
              className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-primary text-primary-foreground font-medium text-sm hover:brightness-110 transition-all"
            >
              View My Work <ArrowRight size={16} />
            </Link>
            <a
              href="mailto:thejatinkalwar@gmail.com"
              className="inline-flex items-center gap-2 px-7 py-3 rounded-full border border-border text-foreground font-medium text-sm hover:border-primary hover:text-primary transition-all"
            >
              <Mail size={16} /> Get in Touch
            </a>
          </motion.div>

          {/* Social links */}
          <motion.div variants={fadeUp} custom={4} className="mt-6 flex flex-wrap gap-3">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                <ExternalLink size={13} /> {link.label}
              </a>
            ))}
          </motion.div>
        </div>

        {/* Right column — stats & highlight card */}
        <motion.div
          variants={fadeUp}
          custom={3}
          className="flex flex-col gap-6 lg:pt-8"
        >
          {/* Stats */}
          <div className="grid grid-cols-3 gap-4">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-xl border border-border bg-card p-5 text-center hover:border-primary/40 transition-colors"
              >
                <p className="text-3xl font-display font-bold text-primary">{stat.value}</p>
                <p className="mt-1 text-xs text-muted-foreground uppercase tracking-wider">{stat.label}</p>
              </div>
            ))}
          </div>

          {/* Open to opportunity card */}
          <div className="rounded-xl border border-border bg-card p-6 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-[60px] pointer-events-none" />
            <div className="flex items-center gap-2 mb-3">
              <Sparkles size={16} className="text-primary" />
              <span className="text-xs font-medium tracking-widest uppercase text-primary">Open to opportunities</span>
            </div>
            <p className="text-foreground font-display font-medium">Open to Software Development Engineer Roles</p>
            <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
              Open to full-time opportunities as a Software Development Engineer (SDE), Mobile App Developer, or Backend Engineer. Seeking roles where I can build scalable cross-platform applications, integrate robust APIs, implement real-time features, and deliver high-performance digital solutions.
            </p>
          </div>

          {/* Primary Tools */}
          <div className="rounded-xl border border-border bg-card p-6">
            <p className="text-xs font-medium tracking-widest uppercase text-muted-foreground mb-3">Primary Tools</p>
            <div className="flex flex-wrap gap-4 ">
              {["Flutter", "FastAPI", "VS Code", "Android Studio", "PyCharm", "Unity Game Engine", "Git", "Postman"].map((s) => (
                <span
                  key={s}
                  className="rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs text-primary"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </motion.section>

      {/* Featured Resume Projects & Security Research Section */}
      <motion.section
        className="mt-24"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-2xl font-display font-semibold text-foreground mb-6">
          Featured Projects & Security Research
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((proj) => {
            const Icon = proj.icon;
            return (
              <div
                key={proj.title}
                className="rounded-xl border border-border bg-card overflow-hidden hover:border-primary/40 transition-all group flex flex-col justify-between"
              >
                {proj.image ? (
                  <div className="h-96 w-full border-b border-border/40 relative overflow-hidden bg-card">
                    <img
                      src={proj.image}
                      alt={proj.title}
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 right-3 bg-background/90 backdrop-blur-md border border-border/80 px-3 py-1 rounded-full text-xs font-medium text-primary shadow-sm z-10">
                      {proj.category}
                    </div>
                  </div>
                ) : null}
                <div className="p-6 flex flex-col justify-between flex-1">
                  <div>
                    {!proj.image && (
                      <div className="flex items-center gap-3 mb-3">
                        <div className="p-2 rounded-lg bg-primary/10 text-primary">
                          {Icon && <Icon size={20} />}
                        </div>
                        <span className="text-xs font-medium tracking-wider uppercase text-primary">
                          {proj.category}
                        </span>
                      </div>
                    )}
                    <h3 className="font-display font-semibold text-foreground text-lg mb-2">
                      {proj.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {proj.description}
                    </p>
                  </div>

                  {(proj.appStore || proj.playStore) && (
                    <div className="mt-5 flex flex-wrap gap-2 pt-3 border-t border-border/40">
                      {proj.appStore && (
                        <a
                          href={proj.appStore}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-secondary hover:bg-secondary/80 text-foreground text-xs font-medium border border-border transition-colors group/btn"
                        >
                          <AppleIcon className="w-4 h-4 text-foreground group-hover/btn:text-primary transition-colors" />
                          <span>App Store</span>
                          <ExternalLink size={11} className="opacity-60" />
                        </a>
                      )}
                      {proj.playStore && (
                        <a
                          href={proj.playStore}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-secondary hover:bg-secondary/80 text-foreground text-xs font-medium border border-border transition-colors group/btn"
                        >
                          <PlayStoreIcon className="w-4 h-4 text-emerald-500 transition-colors" />
                          <span>Google Play</span>
                          <ExternalLink size={11} className="opacity-60" />
                        </a>
                      )}
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </motion.section>

      {/* Experience & Education */}
      <motion.section
        className="mt-24 grid grid-cols-1 lg:grid-cols-2 gap-12"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6 }}
      >
        <div>
          <h2 className="text-2xl font-display font-semibold text-foreground mb-4">
            Work Experience
          </h2>
          <div className="grid gap-4 mt-6">
            {Work.map((item) => (
              <div
                key={item.title}
                className="rounded-lg border border-border bg-card p-5 hover:border-primary/40 transition-colors"
              >
                <div className="flex justify-between items-center">
                  <h3 className="font-display font-medium text-foreground">
                    {item.title}
                  </h3>
                  <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-primary/10 text-primary">
                    {item.mode}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground mt-1">
                  {item.company}
                  <span className="mx-3">|</span>
                  {item.place}
                  <span className="mx-3">|</span>
                  {item.period}
                </p>
                {item.projects && (
                  <ul className="mt-3 space-y-1 text-xs text-muted-foreground/90 list-disc list-inside">
                    {item.projects.map((p, idx) => (
                      <li key={idx} className="leading-relaxed">{p}</li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Education on the right */}

        <div>
          <h2 className="text-2xl font-display font-semibold text-foreground mb-6">
            Education
          </h2>
          <div className="grid gap-4">
            {education.map((edu) => (
              <div
                key={edu.title}
                className="rounded-lg border border-border bg-card p-5 hover:border-primary/40 transition-colors"
              >
                <h3 className="font-display font-medium text-foreground">{edu.title}</h3>
                <p className="text-sm text-muted-foreground mt-1">
                  {edu.place}
                  <span className="mx-3">|</span>
                  {edu.period}
                </p>
              </div>
            ))}
          </div>
        </div>

      </motion.section>

      {/* Skills — two columns */}
      <motion.section
        className="mt-20 grid grid-cols-1 lg:grid-cols-2 gap-12"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6 }}
      >
        <div>
          <h2 className="text-2xl font-display font-semibold text-foreground mb-6">
            Frameworks & Tools
          </h2>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill) => (
              <span
                key={skill}
                className="rounded-full border border-border bg-secondary px-4 py-1.5 text-sm text-secondary-foreground hover:border-primary/50 hover:text-primary transition-colors cursor-default"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-display font-semibold text-foreground mb-6">
            Core Skills & Specializations
          </h2>
          <div className="flex flex-wrap gap-2">
            {coreSkills.map((skill) => (
              <span
                key={skill}
                className="rounded-full border border-primary/10 bg-primary/5 px-4 py-1.5 text-sm text-primary transition-colors cursor-default hover:bg-primary/10"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </motion.section>

    </div>
  );
};

export default Index;
