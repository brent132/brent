import assert from "node:assert/strict";
import test from "node:test";
import { renderToStaticMarkup } from "react-dom/server";

import Home from "../app/page";

test("section one renders the approved content and assets", () => {
  const html = renderToStaticMarkup(<Home />);

  assert.match(html, /section1\.jpg/);
  assert.match(html, /logo%20blue%20transparent\.png/);
  assert.match(html, /FULL-STACK DEVELOPER &amp; WEB DESIGNER/);
  assert.match(html, /I build digital solutions/);
  assert.match(html, /fast, modern,/);
  assert.match(html, /user-focused\./);
  assert.match(html, /View My Work/);
  assert.match(html, /Contact Me/);
  assert.match(html, /Download Resume/);
  assert.doesNotMatch(html, /Brent Ortega/);
});
