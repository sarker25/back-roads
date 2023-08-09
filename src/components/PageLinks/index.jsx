/* eslint-disable react/prop-types */
import { pageLinks } from "../../data";

const PageLinks = ({ parentClass, itemClass }) => {
  return (
    <>
      <ul className={parentClass} id={parentClass}>
        {pageLinks.map((page) => (
          <li key={page.id}>
            <a href={page.link} className={itemClass}>
              {page.title}
            </a>
          </li>
        ))}
      </ul>
    </>
  );
};

export default PageLinks;
