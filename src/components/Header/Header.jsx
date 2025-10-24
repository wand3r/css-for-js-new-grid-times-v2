import React from "react";
import styled from "styled-components";
import { Menu, Search, User } from "react-feather";

import { QUERIES } from "../../constants";

import MaxWidthWrapper from "../MaxWidthWrapper";
import Logo from "../Logo";
import Button from "../Button";

const Header = () => {
  return (
    <header>
      <SuperHeader>
        <Row>
          <ActionGroup>
            <button>
              <Search size={24} />
            </button>
            <button>
              <Menu size={24} />
            </button>
          </ActionGroup>
          <ActionGroup>
            <button>
              <User size={24} />
            </button>
          </ActionGroup>
        </Row>
      </SuperHeader>
      <MainHeader>
        <LaptopActionGroup>
          <button>
            <Search size={24} />
          </button>
          <button>
            <Menu size={24} />
          </button>
        </LaptopActionGroup>
        <Logo />
        <SubscribeActionGroup>
          <Button>Subscribe</Button>
          <SubscriberLink href="#">Already a subscriber?</SubscriberLink>
        </SubscribeActionGroup>
      </MainHeader>
    </header>
  );
};

const SuperHeader = styled.div`
  padding: 16px 0;
  background: var(--color-gray-900);
  color: white;

  @media ${QUERIES.laptopAndUp} {
    display: none;
  }
`;

const Row = styled(MaxWidthWrapper)`
  display: flex;
  justify-content: space-between;
`;

const ActionGroup = styled.div`
  display: flex;
  gap: 24px;

  /*
    FIX: Remove the inline spacing that comes with
    react-feather icons.
  */
  svg {
    display: block;
  }
`;

const LaptopActionGroup = styled(ActionGroup)`
  display: none;

  @media ${QUERIES.laptopAndUp} {
    display: flex;
  }
`;

const SubscribeActionGroup = styled.div`
  display: none;

  @media ${QUERIES.laptopAndUp} {
    position: relative;
    display: revert;
  }
`;

const SubscriberLink = styled.a`
  position: absolute;
  width: 100%;
  text-align: center;
  margin-top: 8px;
  font-family: var(--font-family-serif);
  font-style: italic;
  font-size: ${14 / 16}rem;
  text-align: center;
  text-decoration: underline;
`;

const MainHeader = styled(MaxWidthWrapper)`
  display: grid;
  margin-top: 32px;
  margin-bottom: 48px;

  @media ${QUERIES.tabletAndUp} {
    margin-top: 48px;
    margin-bottom: 72px;
  }

  @media ${QUERIES.laptopAndUp} {
    margin-top: 16px;
    margin-bottom: 72px;
    grid-template-columns: 1fr auto 1fr;
    align-items: center;
    & > :nth-child(3) {
      justify-self: end;
    }
  }
`;

export default Header;
