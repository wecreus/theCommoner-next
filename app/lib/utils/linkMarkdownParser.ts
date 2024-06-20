import DOMPurify from "isomorphic-dompurify";
// requires jsdom to be installed as dependency even if its not used 🫥

const linkMarkdownParser = (data?: string, className?: string) => {
  if (!data) return "";

  let result = String(data);

  let links = result.match(/\[.*?\)/g);

  if (links != null && links.length > 0) {
    for (let link of links) {
      let txt = link.match(/\[(.*?)\]/)![1];
      let url = link.match(/\((.*?)\)/)![1];
      result = result.replace(
        link,
        `<a class="${className}" target="_blank" rel="noopener noreferrer" href="` +
          url +
          '">' +
          txt +
          "</a>"
      );
    }
  }

  return DOMPurify.sanitize(result, { ADD_ATTR: ["target"] });
};

export default linkMarkdownParser;