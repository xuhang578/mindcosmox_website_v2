import {
  ArrowRight,
  BriefcaseBusiness,
  Building2,
  Check,
  Compass,
  Flower2,
  Heart,
  HeartHandshake,
  Hotel,
  Leaf,
  Mail,
  Map,
  MapPinned,
  MoonStar,
  ShieldCheck,
  Sparkles,
  Sprout,
  Trees,
  UsersRound,
  Waves
} from "lucide-react";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 26 },
  show: { opacity: 1, y: 0, transition: { duration: 0.72, ease: [0.22, 1, 0.36, 1] } }
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } }
};

const keywords = [
  ["自然连接", "在真实自然中唤醒感官，重建人与大地的深层纽带。", Leaf],
  ["情绪恢复", "提供安全的空间，让堆积的压力如微风般自然消散。", Heart],
  ["温柔陪伴", "无需刻意努力，只需在此刻感受不加评判的接纳。", Compass]
];

const services = [
  {
    icon: Trees,
    title: "城市森林浴",
    text: "面向个人用户的自然疗愈体验，在城市公园、森林步道与自然空间中缓慢行走、感官打开、安静分享。"
  },
  {
    icon: BriefcaseBusiness,
    title: "企业疗愈活动",
    text: "面向企业员工关怀、团队建设和压力恢复，帮助组织建立更温和、更有连接感的身心健康活动。"
  },
  {
    icon: UsersRound,
    title: "亲子自然体验",
    text: "面向家庭、学校和营地，通过自然观察、感官任务和轻引导，支持亲子陪伴与情绪表达。"
  },
  {
    icon: Map,
    title: "文旅场地合作",
    text: "面向公园、景区、酒店和营地，提供疗愈路线设计、活动内容共创和自然体验产品开发。"
  }
];

const strengths = [
  ["专业方法", "基于森林浴、心理学支持与自然连接方法，形成稳定、温和、可复制的体验流程。"],
  ["低门槛体验", "不强调体能挑战，更关注放松、感受、连接和恢复，适合大多数城市人群参与。"],
  ["多场景落地", "可在城市公园、森林营地、企业园区、文旅景区和酒店空间灵活开展。"],
  ["持续优化", "重视每一次活动后的真实反馈，持续打磨流程、内容和服务体验。"]
];

const journey = [
  ["抵达自然空间", "从城市节奏中慢慢抽离。"],
  ["慢速行走", "放慢身体，重新感受脚步与呼吸。"],
  ["感官邀请", "通过视觉、听觉、触觉和嗅觉与自然连接。"],
  ["安静停留", "给自己一段不被打扰的恢复时间。"],
  ["围坐分享", "在安全、尊重的氛围中表达体验。"],
  ["温柔收束", "带着平静感回到日常生活。"]
];

const gallery = [
  ["林间慢行", "gallery-a"],
  ["围坐分享", "gallery-b"],
  ["香草与茶饮", "gallery-c"],
  ["亲子自然观察", "gallery-d"],
  ["企业减压体验", "gallery-e"],
  ["夜间星河冥想", "gallery-f"]
];

const scenes = ["企业员工关怀", "文旅空间共创", "公园与营地活动", "亲子与家庭体验"];

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

function Button({ children, variant = "dark" }) {
  return (
    <a href="#contact" className={`brand-button ${variant === "dark" ? "brand-button-dark" : "brand-button-light"}`}>
      {children}
      {variant === "dark" && <ArrowRight size={26} strokeWidth={1.8} />}
    </a>
  );
}

function Nav() {
  return (
    <nav className="nav">
      <div className="site-container nav-inner">
        <a href="#" className="brand">
          <span className="brand-mark">屿</span>
          <span>心屿星河</span>
        </a>
        <div className="nav-links">
          <a href="#about">关于</a>
          <a href="#services">服务</a>
          <a href="#experience">体验</a>
          <a href="#cooperation">合作</a>
          <a href="#contact">联系</a>
          <a href="#contact" className="nav-cta">
            预约体验
          </a>
        </div>
      </div>
    </nav>
  );
}

export default function App() {
  return (
    <main>
      <Nav />

      <header className="hero">
        <div className="hero-rings" aria-hidden="true" />
        <div className="hero-stars" aria-hidden="true">
          {Array.from({ length: 28 }).map((_, index) => (
            <i key={index} style={{ "--x": `${(index * 37) % 100}%`, "--y": `${(index * 53) % 100}%` }} />
          ))}
        </div>
        <motion.div className="hero-content" initial="hidden" animate="show" variants={stagger}>
          <motion.h1 variants={fadeUp}>心屿星河</motion.h1>
          <motion.p className="hero-en" variants={fadeUp}>
            NATURAL HEALING & RECOVERY
          </motion.p>
          <motion.p className="hero-copy" variants={fadeUp}>
            我们基于 ANFT 森林浴、心理学支持与自然连接方法，
            <br />
            为个人、家庭与组织提供温和、专业、可持续的疗愈体验。
          </motion.p>
          <motion.div className="hero-actions" variants={fadeUp}>
            <Button>预约体验</Button>
            <Button variant="light">商务合作</Button>
          </motion.div>
        </motion.div>
        <div className="scroll-cue" aria-hidden="true">
          <span>SCROLL</span>
          <i />
        </div>
      </header>

      <Section id="about" className="about-section">
        <div className="about-grid">
          <motion.div variants={fadeUp} className="about-copy">
            <h2>
              在城市之外，
              <br />
              找回身心的秩序
            </h2>
            <i />
            <p>
              心屿星河关注城市人群的压力恢复、情绪调节与自然连接。我们将 ANFT 森林浴方法、心理学支持和本土自然场景结合，设计适合企业、家庭与个人的自然疗愈服务。
            </p>
            <p>
              在这些特殊的场域中，我们邀请你暂时卸下身份，将注意力从头脑拉回感官，在大地的呼吸中重新找回内在的宁静。
            </p>
          </motion.div>
          <motion.div variants={stagger} className="keyword-list">
            {keywords.map(([title, text, Icon]) => (
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

      <Section id="services" className="services-section" title="我们提供的服务" eyebrow="SERVICES WE OFFER" align="center">
        <motion.div variants={stagger} className="service-grid">
          {services.map(({ icon: Icon, title, text }) => (
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
            <h2>
              为什么选择
              <br />
              心屿星河
            </h2>
            <p>我们不仅提供一种户外的形式，更是在自然与心灵之间架起一座桥梁。</p>
          </motion.div>
          <motion.div variants={stagger} className="why-list">
            {strengths.map(([title, text]) => (
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

      <Section id="experience" className="experience-section" title="一次森林浴如何发生" eyebrow="THE HEALING JOURNEY" align="center">
        <motion.div variants={stagger} className="journey-line">
          {journey.map(([title, text], index) => (
            <motion.article key={title} variants={fadeUp} className="journey-step">
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h3>{title}</h3>
              <p>{text}</p>
            </motion.article>
          ))}
        </motion.div>
      </Section>

      <Section className="gallery-section" title="活动中的片刻" subtitle="我们通过克制的视觉与温和的引导，在自然中创造留白。">
        <motion.div variants={stagger} className="gallery-grid">
          {gallery.map(([title, className]) => (
            <motion.article key={title} variants={fadeUp} className={`gallery-card ${className}`}>
              <span>{title}</span>
            </motion.article>
          ))}
        </motion.div>
      </Section>

      <Section id="cooperation" className="scene-section" title="适合这些场景" align="center">
        <motion.div variants={stagger} className="scene-list">
          {scenes.map((scene) => (
            <motion.article key={scene} variants={fadeUp}>
              {scene}
            </motion.article>
          ))}
        </motion.div>
      </Section>

      <Section id="contact" className="contact-section">
        <motion.div variants={fadeUp} className="contact-panel">
          <div>
            <h2>与心屿星河建立连接</h2>
            <p>
              无论你是想预约一次自然疗愈体验，还是希望为企业、营地、公园或文旅空间设计长期合作方案，都可以与我们联系。
            </p>
            <ul>
              <li>
                <Mail size={28} />
                <span>hello@xinyustarriver.com</span>
              </li>
              <li>
                <MapPinned size={28} />
                <span>深圳 / 北京 / 可根据项目落地</span>
              </li>
            </ul>
          </div>
          <aside>
            <div className="qr-placeholder">
              <Sparkles size={32} />
              <span>微信二维码占位</span>
            </div>
            <Button>预约体验</Button>
            <Button variant="light">获取合作方案</Button>
          </aside>
        </motion.div>
      </Section>

      <footer>© 2026 心屿星河 XIN YU STAR RIVER. ALL RIGHTS RESERVED.</footer>
    </main>
  );
}
