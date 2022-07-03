const PageTitle = (props) => {
  return (
    <>
      {props.title ? (
        <h2 className="text-2xl text-white font-bold my-5">
          ~ {props.title} ~
        </h2>
      ) : (
        <h2>~ Title ~</h2>
      )}
    </>
  );
};

export default PageTitle;
