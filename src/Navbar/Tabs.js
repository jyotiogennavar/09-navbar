import React, { useState, useEffect, useCallback } from "react";
import { AnimatePresence, motion } from "framer-motion";
import styled, { css } from "styled-components";
import { TABS } from "./Content";

import { FiChevronDown } from "react-icons/fi";

export const Tabs = () => {
  const [selected, setSelected] = useState(null);
  const [dir, setDir] = useState(null);

  const handleSetSelected = (val) => {
    if (typeof selected === "number" && typeof val === "number") {
      setDir(selected > val ? "r" : "l");
    } else if (val === null) {
      setDir(null);
    }

    setSelected(val);
  };

  return (
    <Wrapper onMouseLeave={() => handleSetSelected(null)}>
      {TABS.map((t) => {
        return (
          <Tab
            key={t.id}
            selected={selected}
            handleSetSelected={handleSetSelected}
            tab={t.id}
          >
            {t.title}
          </Tab>
        );
      })}

      <AnimatePresence>
        {selected && <Content dir={dir} selected={selected} />}
      </AnimatePresence>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  position: relative;
  gap: 1rem;
  height: fit-content;
`;

const Tab = ({ children, tab, handleSetSelected, selected }) => {
  return (
    <NavBtn
      id={`shift-tab-${tab}`}
      onMouseEnter={() => handleSetSelected(tab)}
      onClick={() => handleSetSelected(tab)}
      selected={selected === tab}
    >
      <span>{children}</span>
      <StyledFiChevronDown selected={selected === tab}/>
    </NavBtn>
  );
};

const NavBtn = styled.button`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  border-radius: 9999px;
  padding: 0.375rem 0.75rem;
  font-size: 0.875rem;
  transition: background-color 0.3s ease, color 0.3s ease;
  background-color: ${({ selected }) => (selected ? '#4a5568' : 'transparent')}; 
  color: ${({ selected }) => (selected ? '#f7fafc' : '#a0aec0')}; 
  border: none;
`;

const StyledFiChevronDown = styled(FiChevronDown)`
  transition: transform 0.3s ease;
  ${({ selected }) =>
    selected &&
    css`
      transform: rotate(180deg);
    `}
`;

const Content = ({ selected, dir }) => {
  return (
    <ContentWrapper
      id="overlay-content"
      initial={{
        opacity: 0,
        y: 8,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      exit={{
        opacity: 0,
        y: 8,
      }}
    >
      <Bridge />
      <Nub selected={selected} />

      {TABS.map((t) => {
        return (
          <div style={{ overflow: "hidden" }} key={t.id}>
            {selected === t.id && (
              <motion.div
                initial={{
                  opacity: 0,
                  x: dir === "l" ? 100 : dir === "r" ? -100 : 0,
                }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.25, ease: "easeInOut" }}
              >
                <t.Component />
              </motion.div>
            )}
          </div>
        );
      })}
    </ContentWrapper>
  );
};

const ContentWrapper = styled(motion.div)`
  position: absolute;
  left: 0;
  top: calc(100% + 24px);
  width: 24rem; 
  border-radius: 0.75rem; 
  border: 1px solid #4a5568;
  background: linear-gradient(to bottom, #1a202c, #1a202c, #2d3748);
  padding: 1rem;
`;

const Bridge = styled.div`
  position: absolute;
  top: -24px;
  left: 0;
  right: 0;
  height: 24px;
`;

const Nub = ({ selected }) => {
  const [left, setLeft] = useState(0);

  const moveNub = useCallback(() => {
    if (selected) {
      const hoveredTab = document.getElementById(`shift-tab-${selected}`);
      const overlayContent = document.getElementById("overlay-content");

      if (!hoveredTab || !overlayContent) return;

      const tabRect = hoveredTab.getBoundingClientRect();
      const { left: contentLeft } = overlayContent.getBoundingClientRect();

      const tabCenter = tabRect.left + tabRect.width / 2 - contentLeft;

      setLeft(tabCenter);
    }
  }, [selected]);

  useEffect(() => {
    moveNub();
  }, [moveNub]);

  return (
    <Span
      style={{
        clipPath: "polygon(0 0, 100% 0, 50% 50%, 0% 100%)",
      }}
      animate={{ left }}
      transition={{ duration: 0.25, ease: "easeInOut" }}
    />
  );
};

const Span = styled(motion.span)`
  position: absolute;
  left: 50%;
  top: 0;
  transform: translateX(-50%) translateY(-50%) rotate(45deg);
  height: 1rem; 
  width: 1rem; 
  border-radius: 0.25rem; 
  border: 1px solid #4a5568;
  background-color: #2d3748; 
`;
