import React from "react";
import { FiArrowRight, FiBarChart2, FiHome, FiPieChart } from "react-icons/fi";
import styled from "styled-components";

const Products = () => {
  return (
    <>
      <StyledProducts>
        <div>
          <h3>Startup</h3>
          <a href="#bookkeeping">Bookkeeping</a>
          <a href="#invoice">Invoicing</a>
        </div>
        <div>
          <h3>Scaleup</h3>
          <a href="#coaching">Live Coaching</a>
          <a href="#review">Reviews</a>
          <a href="#tax">Tax/VAT</a>
        </div>
        <div>
          <h3>Enterprise</h3>
          <a href="#white">White glove</a>
          <a href="#compliance">SOX Compliance</a>
          <a href="#staffing">Staffing</a>
          <a href="#more">More</a>
        </div>
      </StyledProducts>
      <NavContentBtn>
        <span>View more</span>
        <FiArrowRight />
      </NavContentBtn>
    </>
  );
};

const Pricing = () => {
  return (
    <StyledPricing>
      <div>
        <a href="#startup">
          <FiHome className="icon" />
          <span className="text">Startup</span>
        </a>
      </div>
      <div>
        <a href="#scale">
          <FiBarChart2 className="icon" />
          <span className="text">Scaleup</span>
        </a>
      </div>
      <div>
        <a href="#enterprise">
          <FiPieChart className="icon" />
          <span className="text">Enterprise</span>
        </a>
      </div>
    </StyledPricing>
  );
};

const Blog = () => {
  return (
    <>
      <StyledBlog>
        <a href="#blog1">
          <img
            alt="Blog about old computer"
            src="https://plus.unsplash.com/premium_photo-1687119905837-0900281ea2c6?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          />
          <h4>Lorem ipsum dolor</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet illo
            quidem eos.
          </p>
        </a>
        <a href="#blog2">
          <img
            alt="motherboard"
            src="https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          />
          <h4>Lorem ipsum dolor</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet illo
            quidem eos.
          </p>
        </a>
      </StyledBlog>

      <NavContentBtn>
        <span>View more</span>
        <FiArrowRight />
      </NavContentBtn>
    </>
  );
};

const StyledProducts = styled.div`
  display: flex;
  gap: 1rem;
  color: white;

  & > div {
    flex: 1;
    margin-right: 1rem;
  }

  h3 {
    margin-bottom: 0.5rem;
    font-size: 0.875rem;
    font-weight: 500;
  }

  a {
    display: block;
    margin-bottom: 0.25rem;
    font-size: 0.875rem;
    color: #a0aec0;
    text-decoration: none;

    &:last-child {
      margin-bottom: 0;
    }
  }
`;

const NavContentBtn = styled.button`
  margin-left: auto;
  margin-top: 1rem;
  display: flex;
  align-items: center;
  gap: 0.25rem;
  font-size: 0.875rem;
  color: #667eea;
  cursor: pointer;
  background-color: transparent; 
  border: none; 
  padding: 0; 
`;

const StyledPricing = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;

  div {
    border-right: 1px solid #4a5568;

    &:last-child {
      border-right: none;
    }
  }

  a {
    display: flex;
    width: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 0.5rem 0; 
    color: #a0aec0; 
    transition: color 0.3s ease;
    text-decoration: none;

    &:hover {
      color: #cbd5e0;
    }

    .icon {
      margin-bottom: 0.5rem; 
      font-size: 1.25rem;
      color: #667eea; 
    }

    .text {
      font-size: 0.75rem; 
    }
  }
`;

const StyledBlog = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0.5rem; 


  a {
    display: block;
    text-decoration: none;
      color: white;

    img {
      margin-bottom: 0.5rem;
      height: 3.5rem; 
      width: 100%;
      border-radius: 0.375rem;
      object-fit: cover;
    }
    h4 {
      margin-bottom: 0.25rem; 
      font-size: 0.875rem; 
      font-weight: 500; 
    }
    p {
      font-size: 0.75rem; 
      color: #a0aec0; 
    }
  }
`;

export const TABS = [
  {
    title: "Products",
    Component: Products,
  },
  {
    title: "Pricing",
    Component: Pricing,
  },
  {
    title: "Blog",
    Component: Blog,
  },
].map((n, idx) => ({ ...n, id: idx + 1 }));
