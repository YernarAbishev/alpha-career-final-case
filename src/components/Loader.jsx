function Loader() {
    return (
      <div className="loader__sceleton d-flex">
        <div className="loader__left">
          <div className="blank__left"></div>
        </div>
        <div className="loader__right">
          <div className="blank__right"></div>
          <div className="blank__right"></div>
          <div className="blank__right"></div>
        </div>
      </div>
    );
  }
  
  export default Loader;