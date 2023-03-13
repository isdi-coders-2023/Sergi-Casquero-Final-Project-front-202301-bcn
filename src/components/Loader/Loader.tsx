import LoaderStyled from "./LoaderStyled";

const Loader = (): JSX.Element => {
  return (
    <LoaderStyled>
      <svg
        aria-label="loader"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        style={{
          margin: "auto",
          background: "none",
          display: "block",
          shapeRendering: "auto",
        }}
        width="200px"
        height="200px"
        viewBox="0 0 100 100"
        preserveAspectRatio="xMidYMid"
      >
        {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map(
          (angle, i) => (
            <g transform={`rotate(${angle} 50 50)`} key={angle}>
              <rect
                x="47"
                y="24"
                rx="2.4"
                ry="2.4"
                width="6"
                height="12"
                fill="#d0fd3e"
              >
                <animate
                  attributeName="opacity"
                  values="1;0"
                  keyTimes="0;1"
                  dur="1s"
                  begin={`${-0.9166666666666666 + i * 0.08333333333333333}s`}
                  repeatCount="indefinite"
                />
              </rect>
            </g>
          )
        )}
      </svg>
    </LoaderStyled>
  );
};

export default Loader;
