import React, { useRef, useState, useEffect } from 'react';
import StyledHeader from './styled_header';
import { Link } from 'react-router-dom';
import LG from "./assets/logo.png";
import Drawer from './drawer';

const Header = () => {
  const headerRef = useRef(null);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [drawerContent, setDrawerContent] = useState("");

  const toggle = () => {
    const header = headerRef.current;
    if (header) {
      header.classList.toggle('active');
    }
  };

  const openDrawer = (content) => {
    setDrawerContent(content);
    setIsDrawerOpen(true);
  };

  useEffect(() => {
    const handleScroll = () => {
      const header = headerRef.current;
      if (header) {
        header.classList.toggle('sticky', window.scrollY > 0);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <StyledHeader ref={headerRef}>
        <Link to="/">
          <img src={LG} alt="logo" />
        </Link>
        <ul>
          <li><a onClick={() => openDrawer("Welcome to WHITE MATRIX Solutions, where innovation meets simplicity. Based in the vibrant tech hub of Kerala, India, we are a dynamic software development company dedicated to revolutionizing the way businesses interact with technology. Our ethos centres around making cutting-edge tech solutions both accessible and affordable, ensuring that businesses of all sizes can thrive in today's digital landscape. At the heart of our company is a passionate team of innovative and fresh minds. Each member brings a unique perspective and a commitment to excellence, driving us to push the boundaries of what's possible in software development. We believe in the power of collaboration and creativity, working tirelessly to turn complex challenges into straightforward, user-friendly solutions. Our tagline, 'Technology Simplified,' perfectly encapsulates our mission. We strive to demystify technology, making it as intuitive and accessible as a child's playbook. Join us on our journey to make technology work for you, not the other way around.")}>Who We Are</a></li>
          <li><a onClick={() => openDrawer("At WHITE MATRIX, we specialize in offering a diverse range of products and services designed to meet the unique needs of businesses. We excel in creating innovative software solutions tailored to your specific requirements, leveraging our unique work breakdown structure to enhance productivity and significantly reduce development time. Our advanced AI systems are at the forefront of technology, capable of generating exclusive content while respecting copyrights, providing a competitive edge in the digital landscape. Additionally, our talented team develops bespoke mobile applications that enhance customer engagement and streamline operations, delivering exceptional performance and user experience. We also offer state-of-the-art offshore call center solutions, designed to accommodate businesses of any size, ensuring seamless communication and support. Committed to providing cost-effective technological solutions without compromising on quality, our aim is to empower businesses with the tools they need to succeed in an increasingly digital world. At WHITE MATRIX, we don’t just develop software; we create solutions that transform businesses and elevate user experiences.")}>What We Do</a></li>
          <li><a onClick={() => openDrawer("Welcome to the WHITE MATRIX Insights section, your go-to resource for the latest trends, innovative practices, and thought leadership in technology and software development. We aim to empower our clients and the broader community with valuable knowledge and insights to stay ahead in the fast-evolving digital landscape. Industry Trends and Analysis Stay informed with our expert analysis of the latest trends in technology and software development. From AI advancements and machine learning to innovations in mobile app technology, we provide insights to help you leverage these trends, aligning with our 'Technology Simplified' philosophy. Case Studies Explore our case studies showcasing real-world challenges and solutions. See how our unique work breakdown structure enhances productivity and reduces development time, delivering tangible results for clients across various industries. Expert Opinions and Thought Leadership Gain perspectives from our industry experts and thought leaders. Our articles delve into critical issues, emerging technologies, and strategic approaches to business innovation, highlighting how user-friendly, people-oriented solutions can transform your business.")}>Insights</a></li>
          <li><Link to="/career">Careers</Link></li>
        </ul>
        <div className="toggle" onClick={toggle}></div>
      </StyledHeader>
      <Drawer isOpen={isDrawerOpen} onClose={() => setIsDrawerOpen(false)} content={drawerContent} />
    </>
  );
};

export default Header;
