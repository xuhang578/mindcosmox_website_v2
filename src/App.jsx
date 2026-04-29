import {
  ArrowRight,
  BadgeCheck,
  BookOpen,
  BriefcaseBusiness,
  Building2,
  Check,
  Compass,
  Feather,
  Globe2,
  Flower2,
  Heart,
  HeartHandshake,
  Hotel,
  Leaf,
  Mail,
  Map,
  MapPinned,
  MoonStar,
  Phone,
  ShieldCheck,
  Sparkles,
  Sprout,
  Trees,
  UsersRound,
  Waves
} from "lucide-react";
import { motion } from "framer-motion";
import anftLogo from "./assets/anft-logo.jpg";
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

const anftBadges = [
  ["独家授权", BadgeCheck],
  ["全球网络", Globe2],
  ["专业疗愈品牌", Sprout]
];

const anftIntroPoints = [
  ["关系式森林疗愈", "关系式森林疗愈是 ANFT 独创的一套标准化的森林疗愈体系，强调人与自然、人与自身、人与他人的连接。", Leaf],
  ["国际体系", "ANFT 是 Association of Nature and Forest Therapy Guides and Programs 的简称，是权威的国际自然与森林疗愈向导培训体系。", Globe2],
  ["温和进入自然", "强调以安全、缓慢、非评判的方式进入自然，让参与者先放慢，再重新感受周围环境。", Feather],
  ["感官与分享", "通过感官邀请、安静停留与围坐分享，帮助人与自然重新建立更细腻的连接。", Sparkles]
];

const relationalPoints = [
  ["不是户外运动", "它不以体能挑战、路线完成或景点打卡为目标，而是重视人在自然中的真实感受。", Trees],
  ["不是心理咨询", "向导不提供诊断或标准答案，而是创造安全、尊重、允许停顿的体验空间。", Heart],
  ["关系重新被看见", "在自然场域里，人与自然、人与自身、人与他人的关系，会以更柔和的方式被重新感知。", HeartHandshake],
  ["每个人有自己的节奏", "参与者可以按照自己的身体和情绪状态回应邀请，不需要表现得更好或更正确。", Compass]
];

const authorizationPoints = [
  ["独家授权", "拥有中国独家 ANFT 中文培训体系与认证资格。", BadgeCheck],
  ["标准化服务", "可提供国际标准化自然疗愈服务，并结合本土场景落地。", BookOpen],
  ["全球资源网络", "连接 ANFT 遍布全球 70+ 国家、3000+ 认证向导的资源网络。", Globe2],
  ["本土化体验", "将关系式森林疗愈方法与城市压力恢复、文旅空间和企业关怀需求结合。", Sprout]
];

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

function Nav() {
  return (
    <nav className="nav">
      <div className="site-container nav-inner">
        <a href="#" className="brand">
          <img src={brandLogo} alt="心屿星河 Mind Cosmos X" />
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
        <img className="hero-bg-image" src={heroAnftTraining} alt="" aria-hidden="true" />
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

      <Section id="anft" className="anft-section" title="ANFT 与关系式森林疗愈" eyebrow="METHOD" align="center">
        <div className="anft-landscape-panel">
          <motion.article variants={fadeUp} className="anft-logo-card">
            <img src={anftLogo} alt="ANFT Certified Guide logo" />
            <div className="anft-logo-copy">
              <span>WHAT IS ANFT</span>
              <h3>ANFT</h3>
              <p>ANFT 的关系式森林疗愈是国际权威的森林疗愈体系，也是心屿星河开展自然疗愈服务的方法来源之一。</p>
            </div>
          </motion.article>

          <motion.div variants={stagger} className="anft-method-columns">
            <motion.article variants={fadeUp} className="anft-info-card">
              <div className="anft-card-head">
                <span>WHAT IS ANFT</span>
                <h3>ANFT</h3>
              </div>
              <div className="anft-point-list">
                {anftIntroPoints.map(([title, text, Icon]) => (
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
                <span>RELATIONAL FOREST THERAPY</span>
                <h3>关系式森林疗愈</h3>
              </div>
              <div className="anft-point-list">
                {relationalPoints.map(([title, text, Icon]) => (
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
            <h2>
              心屿星河
              <br />
              与 ANFT
            </h2>
            <i />
            <p>
              心屿星河拥有中国独家 ANFT 中文培训体系与认证资格，依托 ANFT 的国际标准化方法和全球资源网络，将关系式森林疗愈带入中国本土自然空间与多元合作场景。
            </p>
            <p>
              我们在尊重原有体系的基础上，结合城市压力恢复、文旅空间、企业关怀与亲子家庭需求，提供专业、温和、可落地的自然疗愈体验。
            </p>
          </motion.div>

          <motion.div variants={stagger} className="anft-relation-list">
            {authorizationPoints.map(([title, text, Icon]) => (
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
                <span>contact@mindcosmosx.com</span>
              </li>
              <li>
                <MapPinned size={28} />
                <span>深圳市南山区招商街道水湾B区A1栋</span>
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
                  <span>小程序二维码</span>
                </div>
                <Button showArrow={false}>预约体验</Button>
              </div>
              <div className="qr-action">
                <div className="qr-placeholder">
                  <HeartHandshake size={32} />
                  <span>客服二维码</span>
                </div>
                <Button showArrow={false}>获取合作方案</Button>
              </div>
            </div>
          </aside>
        </motion.div>
      </Section>

      <footer>© 2026 心屿星河 XIN YU STAR RIVER. ALL RIGHTS RESERVED.</footer>
    </main>
  );
}
