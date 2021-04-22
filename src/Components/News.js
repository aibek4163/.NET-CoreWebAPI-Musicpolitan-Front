import { Row, Parallax } from "react-materialize";

export function News(props) {
  return (
    <div className="main_wrapper">
      <h3>News</h3>
      <div className="news_wrapper">
        <Row>
          <div class="col m3 s12">
            <div class="card">
              <a href="#">
                <div
                  style={{
                    backgroundImage: `url("https://i0.wp.com/storage.googleapis.com/kp-wordpress-media/2021/03/7f80bc6a-b4d204dc-0fd5-4903-a6c7-49610ba4cdcc-e1616793760792.jpeg?w=680")`,
                    backgroundRepeat: "no-repeat",
                    height: "55vh",
                    backgroundSize: "cover",
                  }}
                >
                  <div class="card-content card-hover card-bottom white-text text-darken-4">
                    <span className="card-title">Title</span>
                    <p>
                      I am a very simple card. I am good at containing small
                      bits of information. I am convenient because I require
                      little markup to use effectively.
                    </p>
                  </div>
                </div>
              </a>
            </div>
          </div>
          <div class="col m3 s12">
            <div class="card">
              <a href="#">
                <div
                  style={{
                    backgroundImage: `url("https://i0.wp.com/storage.googleapis.com/kp-wordpress-media/2021/03/7f80bc6a-b4d204dc-0fd5-4903-a6c7-49610ba4cdcc-e1616793760792.jpeg?w=680")`,
                    backgroundRepeat: "no-repeat",
                    height: "55vh",
                    backgroundSize: "cover",
                  }}
                >
                  <div class="card-content card-hover card-bottom white-text text-darken-4">
                    <span className="card-title">Title</span>
                    <p>
                      I am a very simple card. I am good at containing small
                      bits of information. I am convenient because I require
                      little markup to use effectively.
                    </p>
                  </div>
                </div>
              </a>
            </div>
          </div>
          <div class="col m3 s12">
            <div class="card">
              <a href="#">
                <div
                  style={{
                    backgroundImage: `url("https://i0.wp.com/storage.googleapis.com/kp-wordpress-media/2021/03/7f80bc6a-b4d204dc-0fd5-4903-a6c7-49610ba4cdcc-e1616793760792.jpeg?w=680")`,
                    backgroundRepeat: "no-repeat",
                    height: "55vh",
                    backgroundSize: "cover",
                  }}
                >
                  <div class="card-content card-hover card-bottom card-hover white-text text-darken-4">
                    <span className="card-title">Title</span>
                    <p>
                      I am a very simple card. I am good at containing small
                      bits of information. I am convenient because I require
                      little markup to use effectively.
                    </p>
                  </div>
                </div>
              </a>
            </div>
          </div>
          <div class="col m3 s12">
            <div class="card">
              <a href="#">
                <div
                  style={{
                    backgroundImage: `url("https://i0.wp.com/storage.googleapis.com/kp-wordpress-media/2021/03/7f80bc6a-b4d204dc-0fd5-4903-a6c7-49610ba4cdcc-e1616793760792.jpeg?w=680")`,
                    backgroundRepeat: "no-repeat",
                    height: "55vh",
                    backgroundSize: "cover",
                  }}
                >
                  <div class="card-content card-hover card-bottom white-text text-darken-4">
                    <span className="card-title">Title</span>
                    <p>
                      I am a very simple card. I am good at containing small
                      bits of information. I am convenient because I require
                      little markup to use effectively.
                    </p>
                  </div>
                </div>
              </a>
            </div>
          </div>
          <div class="col m3 s12">
            <div class="card">
              <a href="#">
                <div
                  style={{
                    backgroundImage: `url("https://i0.wp.com/storage.googleapis.com/kp-wordpress-media/2021/03/7f80bc6a-b4d204dc-0fd5-4903-a6c7-49610ba4cdcc-e1616793760792.jpeg?w=680")`,
                    backgroundRepeat: "no-repeat",
                    height: "55vh",
                    backgroundSize: "cover",
                  }}
                >
                  <div class="card-content card-hover card-bottom white-text text-darken-4">
                    <span className="card-title">Title</span>
                    <p>
                      I am a very simple card. I am good at containing small
                      bits of information. I am convenient because I require
                      little markup to use effectively.
                    </p>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </Row>
        <div className="center-align">
          <a
            class="waves-effect waves-light btn center"
            style={{ marginBottom: "15px" }}
          >
            Load
          </a>
        </div>
      </div>
    </div>
  );
}
