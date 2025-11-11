import { Container, Row, Col } from "react-bootstrap";
import BootstrapNavbarSampler from "./samples/BootstrapNavbarSampler.jsx";
import BootstrapOffcanvasSidebarSampler from "./samples/BootstrapOffcanvasSidebarSampler.jsx";
import BootstrapButtonCardSampler from "./samples/BootstrapButtonCardSampler.jsx";
import BootstrapFormCardSampler from "./samples/BootstrapFormCardSampler.jsx";
import BootstrapAlertsSampler from "./samples/BootstrapAlertsSampler.jsx";
import BootstrapModalSampler from "./samples/BootstrapModalSampler.jsx";
import BootstrapAccordionSampler from "./samples/BootstrapAccordionSampler.jsx";
import BootstrapBadgesSampler from "./samples/BootstrapBadgesSampler.jsx";
import BootstrapBreadcrumbsSampler from "./samples/BootstrapBreadcrumbsSampler.jsx";
import BootstrapSpinnerProgressBarSampler from "./samples/BootstrapSpinnerProgressBarSampler.jsx";
import BootstrapToastSampler from "./samples/BootstrapToastSampler.jsx";
import BootstrapPaginationSampler from "./samples/BootstrapPaginationSampler.jsx";
import BootstrapTabsSampler from "./samples/BootstrapTabsSampler.jsx";
import BootstrapDropdownSampler from "./samples/BootstrapDropdownSampler.jsx";
import BootstrapTooltipPopoverSampler from "./samples/BootstrapTooltipPopoverSampler.jsx";
import BootstrapListGroupSampler from "./samples/BootstrapListGroupSampler.jsx";
import BootstrapInputGroupsSampler from "./samples/BootstrapInputGroupsSampler.jsx";
import BootstrapButtonGroupsSampler from "./samples/BootstrapButtonGroupsSampler.jsx";
import BootstrapFooterSampler from "./samples/BootstrapFooterSampler.jsx";
import BootstrapUtilityClassesSampler from "./samples/BootstrapUtilityClassesSampler.jsx";

/**
 * BootstrapSampler
 * ----------------
 * A demo component to showcase several React Bootstrap components
 * to use throughout the Shepherd’s Pie project.
 */

export default function BootstrapSampler() {
  return (
    <Container className="py-5">
      {/* ✅ Bootstrap Containers give you nice responsive padding and alignment */}
      <h1 className="mb-4 text-center">Bootstrap Component Sampler</h1>

      {/* 🧭 Navbar and Offcanvas Sidebar Section */}
      <Row className="mt-5">
        <Col>
          {/* 🌐 Navbar Example */}
          <BootstrapNavbarSampler />

          {/* 🧱 Offcanvas Sidebar Example */}
          <BootstrapOffcanvasSidebarSampler />
        </Col>
      </Row>

      {/* ⚙️ Layout example using Row and Col */}
      <Row className="mb-4">
        <Col md={6}>
          <BootstrapButtonCardSampler />
        </Col>

        <Col md={6}>
          <BootstrapFormCardSampler />
        </Col>
      </Row>

      {/* 💬 Alerts can be used for system messages, tips, or feedback */}
      <Row>
        <BootstrapAlertsSampler />
      </Row>

      {/* 🧱 Modal and Accordion Samples */}
      <Row className="mt-5">
        {/* 🪟 Modal Example */}
        <BootstrapModalSampler />

        {/* 📚 Accordion Example */}
        <BootstrapAccordionSampler />
      </Row>

      {/* 🏷️ Badges and Breadcrumbs Section */}
      <Row className="mt-5">
        <Col md={6}>
          {/* 🏷️ Badges Example */}
          <BootstrapBadgesSampler />
        </Col>
        <Col md={6}>
          {/* 🧭 Breadcrumb Example */}
          <BootstrapBreadcrumbsSampler />
        </Col>
      </Row>

      {/* 🔄 Spinners, Progress Bars, and Toasts */}
      <Row className="mt-5">
        <Col md={6}>
          {/* 🔄 Spinners and Progress Bars */}
          <BootstrapSpinnerProgressBarSampler />
        </Col>
        <Col md={6}>
          {/* 🍞 Toast Notifications */}
          <BootstrapToastSampler />
        </Col>
      </Row>

      {/* 📄 Pagination and Tabs */}
      <Row className="mt-5">
        <Col md={6}>
          {/* 📄 Pagination Example */}
          <BootstrapPaginationSampler />
        </Col>
        <Col md={6}>
          {/* 📑 Tabs Example */}
          <BootstrapTabsSampler />
        </Col>
      </Row>

      {/* 📋 Dropdowns, Tooltips, and Popovers */}
      <Row className="mt-5">
        <Col md={6}>
          {/* 📋 Dropdown Menus */}
          <BootstrapDropdownSampler />
        </Col>
        <Col md={6}>
          {/* 💬 Tooltips and Popovers */}
          <BootstrapTooltipPopoverSampler />
        </Col>
      </Row>

      {/* 📝 ListGroup, Input Groups, and Button Groups */}
      <Row className="mt-5">
        <Col md={4}>
          {/* 📝 ListGroup Example */}
          <BootstrapListGroupSampler />
        </Col>
        <Col md={4}>
          {/* 🔤 Input Groups */}
          <BootstrapInputGroupsSampler />
        </Col>
        <Col md={4}>
          {/* 🔘 Button Groups */}
          <BootstrapButtonGroupsSampler />
        </Col>
      </Row>

      <Row className="mt-5">
        <Col>
          <BootstrapUtilityClassesSampler />
        </Col>
      </Row>

      {/* ⚓️ Footer Section */}
      <Row className="mt-5">
        <Col>
          <BootstrapFooterSampler />
        </Col>
      </Row>
    </Container>
  );
}
