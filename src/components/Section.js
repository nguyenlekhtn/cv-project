import "./Section.scss";

function Section(props) {
  return (
    <section className="section">
      <h2 className="section_title">{props.title.toUpperCase()}</h2>
      {props.children}
    </section>
  );
}

export default Section;
