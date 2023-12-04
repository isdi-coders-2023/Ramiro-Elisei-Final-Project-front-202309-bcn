import LoadingStyle from "./LoadingStyled";

const Loading = (): React.ReactElement => {
  return (
    <LoadingStyle>
      <div className="loading">
        <span className="loader">Load&nbsp;ng</span>
      </div>
    </LoadingStyle>
  );
};

export default Loading;
