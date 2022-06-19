import Typical from 'react-typical';
export default function Home() {
  return (
    <div>
      <div className="home-container">
        <div className="home-parent">
          <div className="home-details">
            <div className="colz">
              <a href="https://www.facebook.com/">
                <i className="fa fa-facebook-square" aria-hidden="true"></i>
              </a>
              <a href="https://www.facebook.com/">
               <i className="fa fa-instagram" aria-hidden="true"></i>
              </a>
              <a href="https://www.facebook.com/">
              <i className="fa fa-twitter" aria-hidden="true"></i>
              </a>
            </div>
            <div className="home-details-name">
              <span className="primery-text">{""}
              Hello i am <span className="highlight-text">Emon Howlader</span>
              </span>
            </div>

            <div className="home-details-role">
              <span className="primery-text">{""}
              <h1>{""}
              <Typical
                loop={Infinity}
                steps={["Emon Howlader",
                          1000,
                          "Full Stack web development ",
                          1000,
                          "MERN Stack Dev",
                          1000,
                          "Cross Platform ",
                          1000,
                          "React/React native Dev",
                          1000,
                          
              ]}
              />
              </h1>
              </span>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}
