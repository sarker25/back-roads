import { blogs } from "../../data";
import Blog from "../Blog";
import Title from "../Title";
const Tour = () => {
  return (
    <section className="section" id="tours">
      <Title title="featured" subTitle="tours" />

      <div className="section-center featured-center">
        {blogs.map((blog) => (
          <Blog key={blog.id} {...blog} />
        ))}
      </div>
    </section>
  );
};

export default Tour;
