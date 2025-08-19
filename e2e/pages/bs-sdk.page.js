const { I, envUris } = inject();
const { log } = require("codeceptjs/lib/output");
const { logToFile } = require("../utils/logger");
const assert = require('assert');

module.exports = {
  async navigate() {
    await I.amOnPage(envUris.codeceptUrl);
    const accessibilityResultsSummary = await I.getAccessibilityResultsSummary();
    logToFile(`Accessibility results summary: ${JSON.stringify(accessibilityResultsSummary)}`);
    let criticalIssueCount = accessibilityResultsSummary["issueCountBySeverity"]["critical"];
    assert.ok(criticalIssueCount < 10, "Critical issue count breached the threshold!");
  },
};
