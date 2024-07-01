import DOMPurify from "isomorphic-dompurify";
// requires jsdom to be installed as dependency even if its not used 🫥

const linkMarkdownParser = (data?: string, className?: string) => {
  if (!data) return "";

  let result = String(data);

  const links = result.match(/\[.*?\)/g);

  if (links != null && links.length > 0) {
    for (let link of links) {
      const txt = link.match(/\[(.*?)\]/);
      const url = link.match(/\((.*?)\)/);

      if (txt && url) {
        result = result.replace(
          link,
          `<a·class="${className}"·target="_blank"·rel="noopener·noreferrer"·href="${url[1]}">${txt[1]}</a>`
        );
      }
    }
  }

  return DOMPurify.sanitize(result, { ADD_ATTR: ["target"] });
};

export default linkMarkdownParser;
