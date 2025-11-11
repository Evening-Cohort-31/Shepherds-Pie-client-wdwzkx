import React from "react";

export default function BootstrapUtilityClassesSampler() {
  return (
    <div className="card shadow-sm mb-4">
      <div className="card-body">
        <h5 className="card-title">📏 Bootstrap Utility Classes Reference</h5>
        <p className="card-text">
          Bootstrap provides handy utility classes for spacing, display, flex,
          colors, and more. Here are some commonly used ones in Shepherd's Pies:
        </p>

        {/* Spacing Utilities */}
        <h6 className="mt-4 mb-3">
          <span className="badge bg-primary">Spacing</span> Margin & Padding
        </h6>
        <div className="table-responsive">
          <table className="table table-striped table-bordered table-hover table-sm mb-4">
            <thead>
              <tr>
                <th>Class</th>
                <th>Description</th>
                <th>Example Values</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <code>m-*</code>
                </td>
                <td>Margin on all sides</td>
                <td>
                  <code>m-0</code> to <code>m-5</code>
                </td>
              </tr>
              <tr>
                <td>
                  <code>mt-*</code>
                </td>
                <td>Margin top</td>
                <td>
                  <code>mt-3</code> = top margin size 3
                </td>
              </tr>
              <tr>
                <td>
                  <code>mb-*</code>
                </td>
                <td>Margin bottom</td>
                <td>
                  <code>mb-4</code> = bottom margin size 4
                </td>
              </tr>
              <tr>
                <td>
                  <code>ms-*</code>
                </td>
                <td>Margin start (left in LTR)</td>
                <td>
                  <code>ms-2</code> = left margin size 2
                </td>
              </tr>
              <tr>
                <td>
                  <code>me-*</code>
                </td>
                <td>Margin end (right in LTR)</td>
                <td>
                  <code>me-auto</code> = auto right margin
                </td>
              </tr>
              <tr>
                <td>
                  <code>mx-*</code>
                </td>
                <td>Margin left and right</td>
                <td>
                  <code>mx-3</code> = horizontal margin
                </td>
              </tr>
              <tr>
                <td>
                  <code>my-*</code>
                </td>
                <td>Margin top and bottom</td>
                <td>
                  <code>my-2</code> = vertical margin
                </td>
              </tr>
              <tr>
                <td>
                  <code>p-*</code>
                </td>
                <td>Padding on all sides</td>
                <td>
                  <code>p-3</code> = padding size 3
                </td>
              </tr>
              <tr>
                <td>
                  <code>py-*</code>
                </td>
                <td>Padding top and bottom</td>
                <td>
                  <code>py-5</code> = vertical padding size 5
                </td>
              </tr>
              <tr>
                <td>
                  <code>px-*</code>
                </td>
                <td>Padding left and right</td>
                <td>
                  <code>px-4</code> = horizontal padding
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="text-muted small">
          💡 Spacing scale: <code>0</code> = 0, <code>1</code> = 0.25rem,{" "}
          <code>2</code> = 0.5rem, <code>3</code> = 1rem, <code>4</code> =
          1.5rem, <code>5</code> = 3rem
        </p>

        {/* Flexbox Utilities */}
        <h6 className="mt-4 mb-3">
          <span className="badge bg-success">Layout</span> Flexbox & Display
        </h6>
        <div className="table-responsive">
          <table className="table table-striped table-bordered table-hover table-sm mb-4">
            <thead>
              <tr>
                <th>Class</th>
                <th>Description</th>
                <th>Use Case</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <code>d-flex</code>
                </td>
                <td>Display as flexbox</td>
                <td>Enable flex layout on container</td>
              </tr>
              <tr>
                <td>
                  <code>d-none</code>
                </td>
                <td>Hide element</td>
                <td>Conditionally hide components</td>
              </tr>
              <tr>
                <td>
                  <code>d-inline-block</code>
                </td>
                <td>Display as inline-block</td>
                <td>Badges, small components inline</td>
              </tr>
              <tr>
                <td>
                  <code>flex-column</code>
                </td>
                <td>Flex direction column</td>
                <td>Stack items vertically</td>
              </tr>
              <tr>
                <td>
                  <code>flex-wrap</code>
                </td>
                <td>Allow flex items to wrap</td>
                <td>Buttons that wrap on small screens</td>
              </tr>
              <tr>
                <td>
                  <code>justify-content-center</code>
                </td>
                <td>Center flex items horizontally</td>
                <td>Center buttons or content</td>
              </tr>
              <tr>
                <td>
                  <code>align-items-center</code>
                </td>
                <td>Center flex items vertically</td>
                <td>Vertically align spinner with text</td>
              </tr>
              <tr>
                <td>
                  <code>gap-2</code>
                </td>
                <td>Add gap between flex items</td>
                <td>Space between buttons (size 2)</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Text & Color Utilities */}
        <h6 className="mt-4 mb-3">
          <span className="badge bg-info">Styling</span> Text & Colors
        </h6>
        <div className="table-responsive">
          <table className="table table-striped table-bordered table-hover table-sm mb-4">
            <thead>
              <tr>
                <th>Class</th>
                <th>Description</th>
                <th>Result</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <code>text-center</code>
                </td>
                <td>Center align text</td>
                <td>Centered headings</td>
              </tr>
              <tr>
                <td>
                  <code>text-end</code>
                </td>
                <td>Right align text</td>
                <td>Align prices to the right</td>
              </tr>
              <tr>
                <td>
                  <code>text-muted</code>
                </td>
                <td>Muted gray text</td>
                <td className="text-muted">Subtle secondary text</td>
              </tr>
              <tr>
                <td>
                  <code>text-primary</code>
                </td>
                <td>Primary theme color text</td>
                <td className="text-primary">Blue text (default)</td>
              </tr>
              <tr>
                <td>
                  <code>text-danger</code>
                </td>
                <td>Danger/error color text</td>
                <td className="text-danger">Red text for errors</td>
              </tr>
              <tr>
                <td>
                  <code>text-success</code>
                </td>
                <td>Success color text</td>
                <td className="text-success">Green text for success</td>
              </tr>
              <tr>
                <td>
                  <code>text-white</code>
                </td>
                <td>White text</td>
                <td className="bg-dark text-white px-2">
                  White on dark background
                </td>
              </tr>
              <tr>
                <td>
                  <code>bg-light</code>
                </td>
                <td>Light background color</td>
                <td className="bg-light px-2">Light gray background</td>
              </tr>
              <tr>
                <td>
                  <code>bg-dark</code>
                </td>
                <td>Dark background color</td>
                <td className="bg-dark text-white px-2">Dark background</td>
              </tr>
              <tr>
                <td>
                  <code>small</code>
                </td>
                <td>Smaller text size</td>
                <td>
                  <small>Small text for hints</small>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Border & Shadow Utilities */}
        <h6 className="mt-4 mb-3">
          <span className="badge bg-warning text-dark">Visual</span> Borders &
          Shadows
        </h6>
        <div className="table-responsive">
          <table className="table table-striped table-bordered table-hover table-sm mb-4">
            <thead>
              <tr>
                <th>Class</th>
                <th>Description</th>
                <th>Visual Effect</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <code>border</code>
                </td>
                <td>Add border on all sides</td>
                <td>Creates a 1px border</td>
              </tr>
              <tr>
                <td>
                  <code>border-top</code>
                </td>
                <td>Add border on top only</td>
                <td>Used in footers</td>
              </tr>
              <tr>
                <td>
                  <code>border-0</code>
                </td>
                <td>Remove borders</td>
                <td>Remove default borders</td>
              </tr>
              <tr>
                <td>
                  <code>rounded</code>
                </td>
                <td>Add border radius</td>
                <td>Slightly rounded corners</td>
              </tr>
              <tr>
                <td>
                  <code>rounded-circle</code>
                </td>
                <td>Make element circular</td>
                <td>For avatars or icon buttons</td>
              </tr>
              <tr>
                <td>
                  <code>shadow-sm</code>
                </td>
                <td>Small box shadow</td>
                <td>Subtle depth effect</td>
              </tr>
              <tr>
                <td>
                  <code>shadow</code>
                </td>
                <td>Regular box shadow</td>
                <td>More prominent depth</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Responsive Utilities */}
        <h6 className="mt-4 mb-3">
          <span className="badge bg-danger">Responsive</span> Breakpoint Classes
        </h6>
        <div className="table-responsive">
          <table className="table table-striped table-bordered table-hover table-sm mb-4">
            <thead>
              <tr>
                <th>Breakpoint</th>
                <th>Screen Width</th>
                <th>Example Usage</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <code>-sm</code>
                </td>
                <td>≥576px (small)</td>
                <td>
                  <code>d-sm-block</code> = show on small+
                </td>
              </tr>
              <tr>
                <td>
                  <code>-md</code>
                </td>
                <td>≥768px (medium)</td>
                <td>
                  <code>col-md-6</code> = 6 cols on medium+
                </td>
              </tr>
              <tr>
                <td>
                  <code>-lg</code>
                </td>
                <td>≥992px (large)</td>
                <td>
                  <code>d-lg-flex</code> = flex on large+
                </td>
              </tr>
              <tr>
                <td>
                  <code>-xl</code>
                </td>
                <td>≥1200px (extra large)</td>
                <td>
                  <code>col-xl-4</code> = 4 cols on XL+
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="text-muted small mb-0">
          💡 <strong>Pro Tip:</strong> Combine utilities for powerful layouts!
          Example:{" "}
          <code>d-flex justify-content-between align-items-center mb-3</code>{" "}
          creates a flex container with space-between alignment, vertically
          centered items, and bottom margin.
        </p>
      </div>
    </div>
  );
}
