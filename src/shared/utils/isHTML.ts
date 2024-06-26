
 const isHTML = (text: string): boolean => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(text, 'text/html');
    return Array.from(doc.body.childNodes).some(node => node.nodeType === 1);
  };
  export default isHTML;