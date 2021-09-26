const React = require("react");
const Redirect = require("@docusaurus/router");
import useBaseUrl from '@docusaurus/useBaseUrl';

function docUrl(doc, language) {
  return (
    useBaseUrl +
    "docs/" +
    (language ? language + "/" : "") +
    doc
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
