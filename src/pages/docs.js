const React = require("react");
const Redirect = require("@docusaurus/router");

const siteConfig = require(process.cwd() + "/siteConfig.js");

function docUrl(doc, language) {
  return (
    siteConfig.baseUrl +
    "docs/" +
    (language ? language + "/" : "") +
    doc +
    ".html"
  );
}

class Docs extends React.Component {
  render() {
    return (
      <Redirect
        to={docUrl("intro", this.props.language)}
        //config={siteConfig}
      />
    );
  }
}

module.exports = Docs;
