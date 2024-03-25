const HeadLine = () => {
  return (
    <>
      {" "}
      <h1>Hello there</h1>
      <hr />
    </>
  );
};

// export const News = (props) => {
export const News = ({ title }) => {
  return (
    <>
      {/* <h4>{props.title}</h4> */}
      <h4>{title}</h4>
      <hr />
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id illum alias
        ea dolor laudantium fugit eum iure culpa sed iusto!
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut velit
        quaerat pariatur placeat eius aut optio provident! Eius laboriosam culpa
        modi quibusdam ut ipsa inventore?
      </p>
    </>
  );
};

export default HeadLine;
