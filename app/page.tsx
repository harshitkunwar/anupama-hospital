import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Anupama Hospital Private Limited | Khazanchi Road, Patna",
  description:
    "Anupama Hospital Private Limited, Opp. Ram Mohan Roy Seminary School, Khazanchi Road, Patna.",
  keywords: [
    "Anupama Hospital Patna",
    "Anupama Hospital Khazanchi Road",
    "Hospital in Khazanchi Road Patna",
    "Anupama Hospital Private Limited",
    "Hospital Patna",
  ],
};

const phones = [
  { number: "9304838186", label: "Primary Contact" },
  { number: "9608080505", label: "Hospital Contact" },
  { number: "7004129323", label: "Hospital Contact" },
];

const services = [
  {
    icon: "⚕",
    title: "General Healthcare",
    text: "Hospital care and medical consultation. Please call the hospital to confirm current availability.",
  },
  {
    icon: "🩺",
    title: "Medical Consultation",
    text: "Contact the hospital directly for doctor availability and consultation timings.",
  },
  {
    icon: "🔬",
    title: "Surgical Services",
    text: "Surgical and laparoscopic services may be available. Confirm current availability before visiting.",
  },
  {
    icon: "🏥",
    title: "Hospital Care",
    text: "Healthcare facility located on Khazanchi Road in the heart of Patna.",
  },
];

export default function Home() {
  return (
    <main>
      {/* TOP BAR */}
      <div className="topBar">
        <div className="container topBarInner">
          <span>🏥 Anupama Hospital Private Limited</span>

          <span className="topLocation">
            📍 Khazanchi Road, Patna - 4
          </span>

          <a href="tel:+919304838186">
            ☎ Primary: 9304838186
          </a>
        </div>
      </div>

      {/* NAVBAR */}
      <header className="header">
        <div className="container nav">
          <a href="#home" className="brand">
            <span className="brandIcon">+</span>

            <span className="brandText">
              <strong>ANUPAMA</strong>
              <small>HOSPITAL PRIVATE LIMITED</small>
            </span>
          </a>

          <nav className="desktopNav">
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#services">Services</a>
            <a href="#contact">Contact</a>
          </nav>

          <a href="tel:+919304838186" className="navCall">
            ☎ Call Now
          </a>
        </div>
      </header>

      {/* HERO */}
      <section id="home" className="hero">
        <div className="heroImage" />
        <div className="heroOverlay" />

        <div className="container heroContent">
          <div className="heroText">
            <div className="liveBadge">
              <span className="liveDot" />
              PATNA • HEALTHCARE
            </div>

            <h1>
              Care That Puts
              <br />
              <span>Patients First.</span>
            </h1>

            <p className="heroDescription">
              Anupama Hospital Private Limited, located at Khazanchi Road,
              Patna. Find hospital information, contact numbers and directions
              easily.
            </p>

            <div className="heroButtons">
              <a href="#contact" className="primaryBtn">
                Contact Hospital <span>→</span>
              </a>

              <a href="tel:+919304838186" className="outlineBtn">
                ☎ Call Primary Number
              </a>
            </div>

            <div className="heroTrust">
              <div>
                <span>✓</span>
                <p>
                  Easy
                  <br />
                  Contact
                </p>
              </div>

              <div>
                <span>✓</span>
                <p>
                  Patient
                  <br />
                  Information
                </p>
              </div>

              <div>
                <span>✓</span>
                <p>
                  Khazanchi Road
                  <br />
                  Patna
                </p>
              </div>
            </div>
          </div>

          <div className="heroFloatingCard">
            <div className="pulseRing">
              <div className="medicalCross">+</div>
            </div>

            <h3>Need Assistance?</h3>

            <p>Speak directly with the hospital.</p>

            <a href="tel:+919304838186">
              <span>☎</span>
              9304838186
            </a>

            <small>Primary Contact</small>
          </div>
        </div>

        <div className="scrollIndicator">
          <span />
          Scroll to explore
        </div>
      </section>

      {/* HOSPITAL IMAGE BANNER */}
      <section className="hospitalBanner">
        <div className="bannerImage" />
        <div className="bannerOverlay" />

        <div className="container bannerContent">
          <div className="bannerBadge">
            <span className="bannerPulse" />
            ANUPAMA HOSPITAL • PATNA
          </div>

          <h2>
            Healthcare You Can
            <span> Reach Easily.</span>
          </h2>

          <p>
            Opposite Ram Mohan Roy Seminary School, Khazanchi Road, Patna.
          </p>

          <div className="bannerActions">
            <a
              href="tel:+919304838186"
              className="bannerCall"
            >
              ☎ Call 9304838186
            </a>

            <a
              href="https://www.google.com/maps/search/?api=1&query=Anupama+Hospital+Khazanchi+Road+Patna"
              target="_blank"
              rel="noreferrer"
              className="bannerMap"
            >
              📍 Get Directions
            </a>
          </div>
        </div>

        <div className="floatingMedicalIcon iconOne">⚕</div>
        <div className="floatingMedicalIcon iconTwo">+</div>
        <div className="floatingMedicalIcon iconThree">♥</div>
      </section>

      {/* QUICK ACTIONS */}
      <section className="quickActions">
        <div className="container quickGrid">
          <a href="tel:+919304838186" className="quickCard">
            <span className="quickIcon">☎</span>

            <span>
              <small>PRIMARY CONTACT</small>
              <strong>9304838186</strong>
            </span>

            <b>→</b>
          </a>

          <a
            href="https://www.google.com/maps/search/?api=1&query=Anupama+Hospital+Khazanchi+Road+Patna"
            target="_blank"
            rel="noreferrer"
            className="quickCard"
          >
            <span className="quickIcon">📍</span>

            <span>
              <small>LOCATION</small>
              <strong>Get Directions</strong>
            </span>

            <b>→</b>
          </a>

          <a href="tel:+919304838186" className="quickCard">
            <span className="quickIcon">📞</span>

            <span>
              <small>CALL HOSPITAL</small>
              <strong>9304838186</strong>
            </span>

            <b>→</b>
          </a>

          <a href="#contact" className="quickCard">
            <span className="quickIcon">💬</span>

            <span>
              <small>CONTACT</small>
              <strong>All Numbers</strong>
            </span>

            <b>→</b>
          </a>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="section about">
        <div className="container aboutGrid">
          <div className="aboutVisual">
            <div className="imageFrame">
              <img
                src="/images/hospital-building.jpg"
                alt="Anupama Hospital building"
              />
            </div>

            <div className="experienceCard">
              <strong>Since</strong>
              <b>1996</b>
              <span>Company records</span>
            </div>
          </div>

          <div className="aboutContent">
            <div className="eyebrow">
              ABOUT ANUPAMA HOSPITAL
            </div>

            <h2>
              Healthcare access,
              <br />
              <span>made simpler.</span>
            </h2>

            <p>
              Anupama Hospital Private Limited is associated with Khazanchi
              Road, Patna. This website makes it easier for patients and
              families to find hospital information, contact numbers and
              location details.
            </p>

            <div className="aboutPoints">
              <div>
                <span>✓</span>
                <p>Easy-to-find hospital contact numbers</p>
              </div>

              <div>
                <span>✓</span>
                <p>Simple hospital information</p>
              </div>

              <div>
                <span>✓</span>
                <p>Google Maps directions</p>
              </div>
            </div>

            <a href="#contact" className="textButton">
              View Contact Information →
            </a>
          </div>
        </div>
      </section>

      {/* IMAGE GALLERY */}
      <section className="gallerySection">
        <div className="container">
          <div className="sectionHeading centerHeading">
            <div className="eyebrow">
              HOSPITAL FACILITIES
            </div>

            <h2>
              Inside the
              <br />
              <span>hospital.</span>
            </h2>

            <p>
              Hospital environment and facility images.
            </p>
          </div>

          <div className="galleryGrid">
            <div className="galleryCard galleryLarge">
              <img
                src="/images/hospital-interior.jpg"
                alt="Hospital interior"
              />
              <div className="galleryCaption">
                <strong>Hospital Interior</strong>
                <span>Patient care environment</span>
              </div>
            </div>

            <div className="galleryCard">
              <img
                src="/images/hospital-ward.jpg"
                alt="Hospital ward"
              />
              <div className="galleryCaption">
                <strong>Hospital Ward</strong>
                <span>Patient care area</span>
              </div>
            </div>

            <div className="galleryCard">
              <img
                src="/images/hospital-ot.jpg"
                alt="Hospital operation theatre"
              />
              <div className="galleryCaption">
                <strong>Operation Theatre</strong>
                <span>Medical facility</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="section services">
        <div className="container">
          <div className="sectionHeading">
            <div className="eyebrow">
              HEALTHCARE SERVICES
            </div>

            <h2>
              Care designed around
              <br />
              <span>your needs.</span>
            </h2>

            <p>
              Current service availability should be confirmed directly with
              the hospital.
            </p>
          </div>

          <div className="serviceGrid">
            {services.map((service, index) => (
              <article
                className="serviceCard"
                key={service.title}
              >
                <div className="serviceNumber">
                  0{index + 1}
                </div>

                <div className="serviceIcon">
                  {service.icon}
                </div>

                <h3>{service.title}</h3>

                <p>{service.text}</p>

                <a href="#contact">
                  Enquire →
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE */}
      <section className="whySection">
        <div className="container whyGrid">
          <div>
            <div className="eyebrow light">
              WHY USE OUR PLATFORM
            </div>

            <h2>
              Everything important,
              <br />
              <span>in one place.</span>
            </h2>

            <p>
              Quickly call the hospital, open directions and find the
              important contact information without searching through multiple
              pages.
            </p>
          </div>

          <div className="featureList">
            <div className="feature">
              <span>01</span>

              <div>
                <h3>One-tap calling</h3>
                <p>
                  Call the primary hospital number directly from mobile.
                </p>
              </div>
            </div>

            <div className="feature">
              <span>02</span>

              <div>
                <h3>Easy directions</h3>
                <p>
                  Open the hospital location directly in Google Maps.
                </p>
              </div>
            </div>

            <div className="feature">
              <span>03</span>

              <div>
                <h3>Hospital information</h3>
                <p>
                  Find important hospital information in one place.
                </p>
              </div>
            </div>

            <div className="feature">
              <span>04</span>

              <div>
                <h3>Mobile-first design</h3>
                <p>
                  Designed for phones, tablets and desktops.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section faqSection">
        <div className="container faqGrid">
          <div>
            <div className="eyebrow">
              QUICK ANSWERS
            </div>

            <h2 className="faqTitle">
              Frequently asked
              <br />
              <span>questions.</span>
            </h2>
          </div>

          <div className="faqList">
            <details>
              <summary>
                Where is Anupama Hospital located?
              </summary>

              <p>
                Opposite Ram Mohan Roy Seminary School,
                Khazanchi Road, Patna-4, Bihar.
              </p>
            </details>

            <details>
              <summary>
                What is the primary contact number?
              </summary>

              <p>
                The primary contact number displayed on this website is
                9304838186.
              </p>
            </details>

            <details>
              <summary>
                How can I get directions?
              </summary>

              <p>
                Use the Google Maps button to open directions to the hospital.
              </p>
            </details>

            <details>
              <summary>
                How can I contact the hospital?
              </summary>

              <p>
                You can call the primary number 9304838186 or use the other
                contact numbers listed below.
              </p>
            </details>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="contactSection">
        <div className="container">
          <div className="sectionHeading contactHeading">
            <div className="eyebrow light">
              CONTACT ANUPAMA HOSPITAL
            </div>

            <h2>
              We're easy
              <br />
              <span>to reach.</span>
            </h2>
          </div>

          <div className="contactMainGrid">
            <div className="addressCard">
              <span className="bigContactIcon">
                📍
              </span>

              <small>HOSPITAL ADDRESS</small>

              <h3>
                Anupama Hospital Private Limited
              </h3>

              <p>
                Opp. Ram Mohan Roy Seminary School,
                <br />
                Khazanchi Road,
                <br />
                Patna - 4, Bihar
              </p>

              <a
                href="https://www.google.com/maps/search/?api=1&query=Anupama+Hospital+Khazanchi+Road+Patna"
                target="_blank"
                rel="noreferrer"
                className="mapButton"
              >
                Open Google Maps →
              </a>
            </div>

            <div className="numbersCard">
              <small>CONTACT NUMBERS</small>

              <h3>
                Call the hospital
              </h3>

              {phones.map((phone, index) => (
                <a
                  href={`tel:+91${phone.number}`}
                  className={`phoneRow ${
                    index === 0 ? "primaryPhone" : ""
                  }`}
                  key={phone.number}
                >
                  <span>☎</span>

                  <div>
                    <small>{phone.label}</small>
                    <strong>{phone.number}</strong>
                  </div>

                  <b>→</b>
                </a>
              ))}

              <div className="bottomNumber">
                <small>
                  ADDITIONAL CONTACT
                </small>

                <a href="tel:+919431012095">
                  9431012095
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <div className="container footerGrid">
          <div>
            <a href="#home" className="footerBrand">
              <span className="brandIcon">+</span>

              <span>
                <strong>ANUPAMA</strong>
                <small>
                  HOSPITAL PRIVATE LIMITED
                </small>
              </span>
            </a>

            <p>
              Opp. Ram Mohan Roy Seminary School,
              <br />
              Khazanchi Road, Patna - 4, Bihar.
            </p>
          </div>

          <div className="footerColumn">
            <h4>Quick Links</h4>

            <a href="#about">About</a>
            <a href="#services">Services</a>
            <a href="#contact">Contact</a>
          </div>

          <div className="footerColumn">
            <h4>Primary Contact</h4>

            <a href="tel:+919304838186">
              9304838186
            </a>

            <a href="tel:+919608080505">
              9608080505
            </a>

            <a href="tel:+917004129323">
              7004129323
            </a>

            <a href="tel:+919431012095">
              9431012095
            </a>
          </div>
        </div>

        <div className="footerBottom">
          <div className="container">
            <span>
              © 2026 Anupama Hospital Private Limited
            </span>

            <span>
              Khazanchi Road • Patna
            </span>
          </div>
        </div>
      </footer>

      {/* MOBILE ACTIONS */}
      <div className="mobileActions">
        <a href="tel:+919304838186">
          <span>☎</span>
          Call
        </a>

        <a href="#contact">
          <span>📞</span>
          Contact
        </a>

        <a
          href="https://www.google.com/maps/search/?api=1&query=Anupama+Hospital+Khazanchi+Road+Patna"
          target="_blank"
          rel="noreferrer"
        >
          <span>📍</span>
          Map
        </a>
      </div>
    </main>
  );
}