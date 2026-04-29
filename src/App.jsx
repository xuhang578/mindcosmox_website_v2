import { useEffect, useState } from "react";
import {
  ArrowRight,
  BadgeCheck,
  BookOpen,
  BriefcaseBusiness,
  Check,
  Compass,
  Feather,
  Globe2,
  Heart,
  HeartHandshake,
  Leaf,
  Mail,
  Map,
  MapPinned,
  Phone,
  Sparkles,
  Sprout,
  Trees,
  UsersRound
} from "lucide-react";
import { motion } from "framer-motion";
import anftLogo from "./assets/anft-logo.png";
import brandLogo from "./assets/brand-logo-horizontal.png";
import heroAnftTraining from "./assets/hero-anft-training-bg.jpg";

const fadeUp = {
  hidden: { opacity: 0, y: 26 },
  show: { opacity: 1, y: 0, transition: { duration: 0.72, ease: [0.22, 1, 0.36, 1] } }
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } }
};

const copy = {
  zh: {
    languageLabel: "切换语言",
    nav: {
      about: "关于",
      services: "服务",
      experience: "体验",
      cooperation: "合作",
      contact: "联系",
      cta: "预约体验"
    },
    hero: {
      title: "心屿星河",
      label: "NATURAL HEALING & RECOVERY",
      copy: "我们基于 ANFT 森林浴、心理学支持与自然连接方法，为个人、家庭与组织提供温和、专业、可持续的疗愈体验。",
      primary: "预约体验",
      secondary: "商务合作"
    },
    anft: {
      title: "ANFT 与关系式森林疗愈",
      eyebrow: "METHOD",
      logoLabel: "WHAT IS ANFT",
      logoTitle: "ANFT",
      logoText: "ANFT 的关系式森林疗愈是国际权威的森林疗愈体系，也是心屿星河开展自然疗愈服务的方法来源之一。",
      cardOneLabel: "WHAT IS ANFT",
      cardOneTitle: "ANFT",
      cardTwoLabel: "RELATIONAL FOREST THERAPY",
      cardTwoTitle: "关系式森林疗愈"
    },
    anftIntroPoints: [
      ["关系式森林疗愈", "关系式森林疗愈是 ANFT 独创的一套标准化的森林疗愈体系，强调人与自然、人与自身、人与他人的连接。", Leaf],
      ["国际体系", "ANFT是美国自然与森林疗愈协会（Association of Nature and Forest Therapy Guides and Programs）的简称，是权威的国际自然与森林疗愈向导培训体系。", Globe2],
      ["温和进入自然", "强调以安全、缓慢、非评判的方式进入自然，让参与者先放慢，再重新感受周围环境。", Feather],
      ["感官与分享", "通过感官邀请、安静停留与围坐分享，帮助人与自然重新建立更细腻的连接。", Sparkles]
    ],
    relationalPoints: [
      ["不是户外运动", "它不以体能挑战、路线完成或景点打卡为目标，而是重视人在自然中的真实感受。", Trees],
      ["不是心理咨询", "向导不提供诊断或标准答案，而是创造安全、尊重、允许停顿的体验空间。", Heart],
      ["关系重新被看见", "在自然场域里，人与自然、人与自身、人与他人的关系，会以更柔和的方式被重新感知。", HeartHandshake],
      ["每个人有自己的节奏", "参与者可以按照自己的身体和情绪状态回应邀请，不需要表现得更好或更正确。", Compass],
      ["从自然中获得支持与疗愈", "ANFT的核心理念是：森林才是疗愈师，向导只是开门人。", Leaf]
    ],
    relation: {
      title: <>心屿星河<br />与 ANFT</>,
      paragraphs: [
        "心屿星河拥有中国独家 ANFT 中文培训体系与认证资格，依托 ANFT 的国际标准化方法和全球资源网络，将关系式森林疗愈带入中国本土自然空间与多元合作场景。",
        "我们在尊重原有体系的基础上，结合城市压力恢复、文旅空间、企业关怀与亲子家庭需求，提供专业、温和、可落地的自然疗愈体验。"
      ]
    },
    authorizationPoints: [
      ["独家授权", "拥有中国独家 ANFT 中文培训体系与认证资格。", BadgeCheck],
      ["标准化服务", "可提供国际标准化自然疗愈服务，并结合本土场景落地。", BookOpen],
      ["全球资源网络", "连接 ANFT 遍布全球 70+ 国家、3000+ 认证向导的资源网络。", Globe2],
      ["本土化体验", "将关系式森林疗愈方法与城市压力恢复、文旅空间和企业关怀需求结合。", Sprout]
    ],
    about: {
      title: <>在城市之外，<br />找回身心的秩序</>,
      paragraphs: [
        "心屿星河关注城市人群的压力恢复、情绪调节与自然连接。我们将 ANFT 森林浴方法、心理学支持和本土自然场景结合，设计适合企业、家庭与个人的自然疗愈服务。",
        "在这些特殊的场域中，我们邀请你暂时卸下身份，将注意力从头脑拉回感官，在大地的呼吸中重新找回内在的宁静。"
      ]
    },
    keywords: [
      ["自然连接", "在真实自然中唤醒感官，重建人与大地的深层纽带。", Leaf],
      ["情绪恢复", "提供安全的空间，让堆积的压力如微风般自然消散。", Heart],
      ["温柔陪伴", "无需刻意努力，只需在此刻感受不加评判的接纳。", Compass]
    ],
    servicesHead: {
      title: "我们提供的服务",
      eyebrow: "SERVICES WE OFFER"
    },
    services: [
      { icon: Trees, title: "城市森林浴", text: "面向个人用户的自然疗愈体验，在城市公园、森林步道与自然空间中缓慢行走、感官打开、安静分享。" },
      { icon: BriefcaseBusiness, title: "企业疗愈活动", text: "面向企业员工关怀、团队建设和压力恢复，帮助组织建立更温和、更有连接感的身心健康活动。" },
      { icon: UsersRound, title: "亲子自然体验", text: "面向家庭、学校和营地，通过自然观察、感官任务和轻引导，支持亲子陪伴与情绪表达。" },
      { icon: Map, title: "文旅场地合作", text: "面向公园、景区、酒店和营地，提供疗愈路线设计、活动内容共创和自然体验产品开发。" }
    ],
    why: {
      title: <>为什么选择<br />心屿星河</>,
      text: "我们不仅提供一种户外的形式，更是在自然与心灵之间架起一座桥梁。"
    },
    strengths: [
      ["专业方法", "基于森林浴、心理学支持与自然连接方法，形成稳定、温和、可复制的体验流程。"],
      ["低门槛体验", "不强调体能挑战，更关注放松、感受、连接和恢复，适合大多数城市人群参与。"],
      ["多场景落地", "可在城市公园、森林营地、企业园区、文旅景区和酒店空间灵活开展。"],
      ["持续优化", "重视每一次活动后的真实反馈，持续打磨流程、内容和服务体验。"]
    ],
    experienceHead: {
      title: "一次森林浴如何发生",
      eyebrow: "THE HEALING JOURNEY"
    },
    journey: [
      ["抵达自然空间", "从城市节奏中慢慢抽离。"],
      ["慢速行走", "放慢身体，重新感受脚步与呼吸。"],
      ["感官邀请", "通过视觉、听觉、触觉和嗅觉与自然连接。"],
      ["安静停留", "给自己一段不被打扰的恢复时间。"],
      ["围坐分享", "在安全、尊重的氛围中表达体验。"],
      ["温柔收束", "带着平静感回到日常生活。"]
    ],
    galleryHead: {
      title: "活动中的片刻",
      subtitle: "我们通过克制的视觉与温和的引导，在自然中创造留白。"
    },
    gallery: [
      ["林间慢行", "gallery-a"],
      ["围坐分享", "gallery-b"],
      ["香草与茶饮", "gallery-c"],
      ["亲子自然观察", "gallery-d"],
      ["企业减压体验", "gallery-e"],
      ["夜间星河冥想", "gallery-f"]
    ],
    sceneHead: {
      title: "适合这些场景"
    },
    scenes: ["企业员工关怀", "文旅空间共创", "公园与营地活动", "亲子与家庭体验"],
    contact: {
      title: "与心屿星河建立连接",
      text: "无论你是想预约一次自然疗愈体验，还是希望为企业、营地、公园或文旅空间设计长期合作方案，都可以与我们联系。",
      address: "深圳市南山区招商街道水湾B区A1栋",
      qrMini: "小程序二维码",
      qrService: "客服二维码",
      appointment: "预约体验",
      proposal: "获取合作方案"
    },
    footer: "© 2026 心屿星河 XIN YU STAR RIVER. ALL RIGHTS RESERVED."
  },
  en: {
    languageLabel: "Switch language",
    nav: {
      about: "About",
      services: "Services",
      experience: "Experience",
      cooperation: "Partners",
      contact: "Contact",
      cta: "Book"
    },
    hero: {
      title: "Mind Cosmos X",
      label: "NATURAL HEALING & RECOVERY",
      copy: "Grounded in ANFT forest bathing, psychological support, and nature-connection practices, we offer gentle, professional, and sustainable healing experiences for individuals, families, and organizations.",
      primary: "Book an Experience",
      secondary: "Partnerships"
    },
    anft: {
      title: "ANFT and Relational Forest Therapy",
      eyebrow: "METHOD",
      logoLabel: "WHAT IS ANFT",
      logoTitle: "ANFT",
      logoText: "ANFT Relational Forest Therapy is an internationally recognized forest therapy system, and one of the methodological foundations of Mind Cosmos X.",
      cardOneLabel: "WHAT IS ANFT",
      cardOneTitle: "ANFT",
      cardTwoLabel: "RELATIONAL FOREST THERAPY",
      cardTwoTitle: "Relational Forest Therapy"
    },
    anftIntroPoints: [
      ["Relational Forest Therapy", "Relational Forest Therapy is a standardized forest therapy system created by ANFT. It emphasizes connection between people and nature, self, and one another.", Leaf],
      ["International System", "ANFT stands for the Association of Nature and Forest Therapy Guides and Programs, an authoritative international training system for nature and forest therapy guides.", Globe2],
      ["A Gentle Entry", "The practice invites participants into nature in a safe, slow, and non-judgmental way, allowing them to first slow down and then sense their surroundings again.", Feather],
      ["Senses and Sharing", "Through sensory invitations, quiet pauses, and circle sharing, participants rebuild a more subtle relationship with the natural world.", Sparkles]
    ],
    relationalPoints: [
      ["Not Outdoor Sport", "It is not centered on physical challenge, finishing a route, or checking off scenery. It values each person's lived experience in nature.", Trees],
      ["Not Counseling", "Guides do not offer diagnosis or fixed answers. They create a safe, respectful space where pauses are allowed.", Heart],
      ["Relationships Reappear", "In a natural setting, relationships with nature, self, and others can be sensed again in a softer way.", HeartHandshake],
      ["Personal Rhythm", "Participants may respond to each invitation according to their own body and emotional state, without needing to perform.", Compass],
      ["Supported by Nature", "A core ANFT idea is that the forest is the therapist; the guide opens the door.", Leaf]
    ],
    relation: {
      title: <>Mind Cosmos X<br />and ANFT</>,
      paragraphs: [
        "Mind Cosmos X holds the exclusive ANFT Chinese-language training system and certification qualification in China. With ANFT's international standards and global network, we bring Relational Forest Therapy into local natural spaces and diverse partnership settings.",
        "While respecting the original system, we adapt the work to urban stress recovery, cultural and travel spaces, workplace care, and family needs, offering professional, gentle, and practical nature-based experiences."
      ]
    },
    authorizationPoints: [
      ["Exclusive Authorization", "Holder of the exclusive ANFT Chinese-language training system and certification qualification in China.", BadgeCheck],
      ["Standardized Service", "Able to provide internationally standardized nature therapy services adapted to local settings.", BookOpen],
      ["Global Network", "Connected to ANFT's global network across 70+ countries and 3,000+ certified guides.", Globe2],
      ["Local Experience", "Bringing Relational Forest Therapy into urban recovery, cultural travel, and workplace care contexts.", Sprout]
    ],
    about: {
      title: <>Beyond the City,<br />Return to Inner Order</>,
      paragraphs: [
        "Mind Cosmos X focuses on stress recovery, emotional regulation, and nature connection for urban communities. We combine ANFT forest bathing methods, psychological support, and local natural settings to design services for organizations, families, and individuals.",
        "In these special places, we invite you to briefly set aside your roles, return attention from the mind to the senses, and rediscover inner quiet in the breathing rhythm of the earth."
      ]
    },
    keywords: [
      ["Nature Connection", "Awaken the senses in real nature and rebuild a deeper bond with the living earth.", Leaf],
      ["Emotional Recovery", "Offer a safe space where accumulated stress can slowly loosen and settle.", Heart],
      ["Gentle Companionship", "No need to try harder. Simply meet the present moment with non-judgmental acceptance.", Compass]
    ],
    servicesHead: {
      title: "What We Offer",
      eyebrow: "SERVICES"
    },
    services: [
      { icon: Trees, title: "Urban Forest Bathing", text: "Nature-based healing experiences for individuals, held in city parks, forest trails, and quiet natural spaces through slow walking, sensory opening, and gentle sharing." },
      { icon: BriefcaseBusiness, title: "Workplace Wellbeing", text: "Programs for employee care, team connection, and stress recovery, helping organizations create warmer and more connected wellbeing experiences." },
      { icon: UsersRound, title: "Family Nature Experiences", text: "Designed for families, schools, and camps, with nature observation, sensory invitations, and light guidance to support companionship and emotional expression." },
      { icon: Map, title: "Cultural Travel Partnerships", text: "For parks, scenic areas, hotels, and camps, we provide route design, content co-creation, and development of nature-based experience products." }
    ],
    why: {
      title: <>Why Choose<br />Mind Cosmos X</>,
      text: "We offer more than an outdoor format. We build a bridge between nature and the inner life."
    },
    strengths: [
      ["Professional Method", "Built on forest bathing, psychological support, and nature-connection methods to form a stable, gentle, and repeatable experience flow."],
      ["Accessible Entry", "Less about physical challenge and more about rest, sensing, connection, and recovery, suitable for most urban participants."],
      ["Flexible Settings", "Programs can be delivered in city parks, forest camps, workplace campuses, cultural travel sites, and hotel spaces."],
      ["Continuous Refinement", "We value real feedback after each activity and keep improving the flow, content, and service experience."]
    ],
    experienceHead: {
      title: "How a Forest Bathing Session Unfolds",
      eyebrow: "THE HEALING JOURNEY"
    },
    journey: [
      ["Arrive in Nature", "Slowly step away from the pace of the city."],
      ["Walk Slowly", "Let the body slow down and feel each step and breath."],
      ["Sensory Invitations", "Connect with nature through sight, sound, touch, and scent."],
      ["Quiet Pause", "Give yourself a period of undisturbed restoration."],
      ["Circle Sharing", "Share experience in a safe and respectful atmosphere."],
      ["Gentle Closing", "Return to daily life with a sense of calm."]
    ],
    galleryHead: {
      title: "Moments in Practice",
      subtitle: "Through restrained visuals and gentle guidance, we create room for spaciousness in nature."
    },
    gallery: [
      ["Forest Walk", "gallery-a"],
      ["Circle Sharing", "gallery-b"],
      ["Herbs and Tea", "gallery-c"],
      ["Family Observation", "gallery-d"],
      ["Workplace Recovery", "gallery-e"],
      ["Starlit Meditation", "gallery-f"]
    ],
    sceneHead: {
      title: "Designed for These Settings"
    },
    scenes: ["Employee Care", "Cultural Travel Spaces", "Parks and Camps", "Families"],
    contact: {
      title: "Connect with Mind Cosmos X",
      text: "Whether you would like to book a nature-based healing experience or develop a long-term program for an organization, camp, park, or cultural travel space, we would be glad to talk.",
      address: "A1, Shuiwan Area B, Zhaoshang Street, Nanshan District, Shenzhen",
      qrMini: "Mini Program QR",
      qrService: "Service QR",
      appointment: "Book",
      proposal: "Partnership Proposal"
    },
    footer: "© 2026 MIND COSMOS X. ALL RIGHTS RESERVED."
  }
};

function Section({ id, className = "", eyebrow, title, subtitle, children, align = "left" }) {
  return (
    <section id={id} className={`section-pad ${className}`}>
      <motion.div
        className="site-container"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.16 }}
        variants={stagger}
      >
        {(title || eyebrow) && (
          <motion.div variants={fadeUp} className={`section-head ${align === "center" ? "section-head-center" : ""}`}>
            <h2>{title}</h2>
            {eyebrow && <p>{eyebrow}</p>}
            {subtitle && <span>{subtitle}</span>}
          </motion.div>
        )}
        {children}
      </motion.div>
    </section>
  );
}

function Button({ children, variant = "dark", showArrow = true }) {
  return (
    <a href="#contact" className={`brand-button ${variant === "dark" ? "brand-button-dark" : "brand-button-light"}`}>
      {children}
      {variant === "dark" && showArrow && <ArrowRight size={26} strokeWidth={1.8} />}
    </a>
  );
}

function Nav({ labels, locale, onLocaleChange, languageLabel }) {
  return (
    <nav className="nav">
      <div className="site-container nav-inner">
        <a href="#" className="brand">
          <img src={brandLogo} alt="心屿星河 Mind Cosmos X" />
        </a>
        <div className="nav-links">
          <a href="#about">{labels.about}</a>
          <a href="#services">{labels.services}</a>
          <a href="#experience">{labels.experience}</a>
          <a href="#cooperation">{labels.cooperation}</a>
          <a href="#contact">{labels.contact}</a>
        </div>
        <div className="nav-actions">
          <button
            className="language-switch"
            type="button"
            aria-label={languageLabel}
            onClick={() => onLocaleChange(locale === "zh" ? "en" : "zh")}
          >
            <span className={locale === "zh" ? "active" : ""}>中</span>
            <i />
            <span className={locale === "en" ? "active" : ""}>EN</span>
          </button>
          <a href="#contact" className="nav-cta">
            {labels.cta}
          </a>
        </div>
      </div>
    </nav>
  );
}

export default function App() {
  const [locale, setLocale] = useState("zh");
  const t = copy[locale];

  useEffect(() => {
    document.documentElement.lang = locale === "zh" ? "zh-CN" : "en";
  }, [locale]);

  return (
    <main className={`locale-${locale}`}>
      <Nav labels={t.nav} locale={locale} onLocaleChange={setLocale} languageLabel={t.languageLabel} />

      <header className="hero">
        <img className="hero-bg-image" src={heroAnftTraining} alt="" aria-hidden="true" />
        <div className="hero-rings" aria-hidden="true" />
        <div className="hero-stars" aria-hidden="true">
          {Array.from({ length: 28 }).map((_, index) => (
            <i key={index} style={{ "--x": `${(index * 37) % 100}%`, "--y": `${(index * 53) % 100}%` }} />
          ))}
        </div>
        <motion.div className="hero-content" initial="hidden" animate="show" variants={stagger}>
          <motion.h1 variants={fadeUp}>{t.hero.title}</motion.h1>
          <motion.p className="hero-en" variants={fadeUp}>
            {t.hero.label}
          </motion.p>
          <motion.p className="hero-copy" variants={fadeUp}>
            {t.hero.copy}
          </motion.p>
          <motion.div className="hero-actions" variants={fadeUp}>
            <Button>{t.hero.primary}</Button>
            <Button variant="light">{t.hero.secondary}</Button>
          </motion.div>
        </motion.div>
        <div className="scroll-cue" aria-hidden="true">
          <span>SCROLL</span>
          <i />
        </div>
      </header>

      <Section id="anft" className="anft-section" title={t.anft.title} eyebrow={t.anft.eyebrow} align="center">
        <div className="anft-landscape-panel">
          <motion.article variants={fadeUp} className="anft-logo-card">
            <img src={anftLogo} alt="ANFT Certified Guide logo" />
            <div className="anft-logo-copy">
              <span>{t.anft.logoLabel}</span>
              <h3>{t.anft.logoTitle}</h3>
              <p>{t.anft.logoText}</p>
            </div>
          </motion.article>

          <motion.div variants={stagger} className="anft-method-columns">
            <motion.article variants={fadeUp} className="anft-info-card">
              <div className="anft-card-head">
                <span>{t.anft.cardOneLabel}</span>
                <h3>{t.anft.cardOneTitle}</h3>
              </div>
              <div className="anft-point-list">
                {t.anftIntroPoints.map(([title, text, Icon]) => (
                  <div key={title} className="anft-point">
                    <Icon size={24} strokeWidth={1.6} />
                    <div>
                      <h4>{title}</h4>
                      <p>{text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.article>

            <motion.article variants={fadeUp} className="anft-info-card">
              <div className="anft-card-head">
                <span>{t.anft.cardTwoLabel}</span>
                <h3>{t.anft.cardTwoTitle}</h3>
              </div>
              <div className="anft-point-list">
                {t.relationalPoints.map(([title, text, Icon]) => (
                  <div key={title} className="anft-point">
                    <Icon size={24} strokeWidth={1.6} />
                    <div>
                      <h4>{title}</h4>
                      <p>{text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.article>
          </motion.div>
        </div>
      </Section>

      <Section className="anft-relation-section">
        <div className="anft-relation-grid">
          <motion.div variants={fadeUp} className="anft-relation-copy">
            <h2>{t.relation.title}</h2>
            <i />
            {t.relation.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </motion.div>

          <motion.div variants={stagger} className="anft-relation-list">
            {t.authorizationPoints.map(([title, text, Icon]) => (
              <motion.article key={title} variants={fadeUp} className="anft-relation-item">
                <span>
                  <Icon size={30} strokeWidth={1.6} />
                </span>
                <div>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </Section>

      <Section id="about" className="about-section">
        <div className="about-grid">
          <motion.div variants={fadeUp} className="about-copy">
            <h2>{t.about.title}</h2>
            <i />
            {t.about.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </motion.div>
          <motion.div variants={stagger} className="keyword-list">
            {t.keywords.map(([title, text, Icon]) => (
              <motion.article key={title} variants={fadeUp} className="keyword-item">
                <span>
                  <Icon size={30} strokeWidth={1.6} />
                </span>
                <div>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </Section>

      <Section id="services" className="services-section" title={t.servicesHead.title} eyebrow={t.servicesHead.eyebrow} align="center">
        <motion.div variants={stagger} className="service-grid">
          {t.services.map(({ icon: Icon, title, text }) => (
            <motion.article key={title} variants={fadeUp} className="service-card">
              <Icon size={34} strokeWidth={1.45} />
              <h3>{title}</h3>
              <p>{text}</p>
            </motion.article>
          ))}
        </motion.div>
      </Section>

      <Section className="why-section">
        <div className="why-grid">
          <motion.div variants={fadeUp} className="why-intro">
            <h2>{t.why.title}</h2>
            <p>{t.why.text}</p>
          </motion.div>
          <motion.div variants={stagger} className="why-list">
            {t.strengths.map(([title, text]) => (
              <motion.article key={title} variants={fadeUp} className="why-item">
                <span>
                  <Check size={22} />
                </span>
                <div>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </Section>

      <Section id="experience" className="experience-section" title={t.experienceHead.title} eyebrow={t.experienceHead.eyebrow} align="center">
        <motion.div variants={stagger} className="journey-line">
          {t.journey.map(([title, text], index) => (
            <motion.article key={title} variants={fadeUp} className="journey-step">
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h3>{title}</h3>
              <p>{text}</p>
            </motion.article>
          ))}
        </motion.div>
      </Section>

      <Section className="gallery-section" title={t.galleryHead.title} subtitle={t.galleryHead.subtitle}>
        <motion.div variants={stagger} className="gallery-grid">
          {t.gallery.map(([title, className]) => (
            <motion.article key={title} variants={fadeUp} className={`gallery-card ${className}`}>
              <span>{title}</span>
            </motion.article>
          ))}
        </motion.div>
      </Section>

      <Section id="cooperation" className="scene-section" title={t.sceneHead.title} align="center">
        <motion.div variants={stagger} className="scene-list">
          {t.scenes.map((scene) => (
            <motion.article key={scene} variants={fadeUp}>
              {scene}
            </motion.article>
          ))}
        </motion.div>
      </Section>

      <Section id="contact" className="contact-section">
        <motion.div variants={fadeUp} className="contact-panel">
          <div>
            <h2>{t.contact.title}</h2>
            <p>{t.contact.text}</p>
            <ul>
              <li>
                <Mail size={28} />
                <span>contact@mindcosmosx.com</span>
              </li>
              <li>
                <MapPinned size={28} />
                <span>{t.contact.address}</span>
              </li>
              <li>
                <Phone size={28} />
                <span>18311312508</span>
              </li>
            </ul>
          </div>
          <aside>
            <div className="qr-action-list">
              <div className="qr-action">
                <div className="qr-placeholder">
                  <Sparkles size={32} />
                  <span>{t.contact.qrMini}</span>
                </div>
                <Button showArrow={false}>{t.contact.appointment}</Button>
              </div>
              <div className="qr-action">
                <div className="qr-placeholder">
                  <HeartHandshake size={32} />
                  <span>{t.contact.qrService}</span>
                </div>
                <Button showArrow={false}>{t.contact.proposal}</Button>
              </div>
            </div>
          </aside>
        </motion.div>
      </Section>

      <footer>{t.footer}</footer>
    </main>
  );
}
